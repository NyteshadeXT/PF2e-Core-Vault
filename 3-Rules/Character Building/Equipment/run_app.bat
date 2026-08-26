@echo off
setlocal

REM ============================
REM YAML Update Utility
REM ============================

cd /d "%~dp0"

if not exist ".python-version" (
  echo [!] Missing .python-version. Restore it beside update_yaml.py before starting.
  goto :startup_failed
)
set /p "REQUIRED_PYTHON="<.python-version
if "%REQUIRED_PYTHON%"=="" (
  echo [!] .python-version is empty.
  goto :startup_failed
)

set "VENV_PYTHON=.venv\Scripts\python.exe"
set "REBUILD_VENV=0"
if not exist "%VENV_PYTHON%" set "REBUILD_VENV=1"
if exist "%VENV_PYTHON%" (
  "%VENV_PYTHON%" -c "import sys; expected=tuple(map(int, '%REQUIRED_PYTHON%'.split('.'))); raise SystemExit(0 if sys.version_info[:2] == expected else 1)" >nul 2>&1
  if errorlevel 1 (
    echo [*] Existing virtual environment uses the wrong Python version.
    set "REBUILD_VENV=1"
  )
)

if "%REBUILD_VENV%"=="1" (
  py -%REQUIRED_PYTHON% -c "import sys; print(sys.version)" >nul 2>&1
  if errorlevel 1 (
    echo [!] Python %REQUIRED_PYTHON% is not installed or is not registered with the Windows py launcher.
    echo [!] Install 64-bit Python %REQUIRED_PYTHON% from https://www.python.org/downloads/
    echo [!] During installation, enable the Python launcher, then run this file again.
    goto :startup_failed
  )
  echo [*] Creating or repairing virtual environment...
  py -%REQUIRED_PYTHON% -m venv --clear .venv
  if errorlevel 1 (
    echo [!] Python could not create the virtual environment.
    echo [!] Install Python %REQUIRED_PYTHON% with the Windows py launcher, then try again.
    goto :startup_failed
  )
)

echo [*] Activating venv...
call ".venv\Scripts\activate"
if errorlevel 1 (
  echo [!] The virtual environment could not be activated.
  goto :startup_failed
)

echo [*] Python info:
python -c "import sys,platform;print(sys.version);print(platform.platform())"
python -c "import sys; expected=tuple(map(int, '%REQUIRED_PYTHON%'.split('.'))); raise SystemExit(0 if sys.version_info[:2] == expected else 'Python %REQUIRED_PYTHON% is required by .python-version')"
if errorlevel 1 goto :startup_failed

echo [*] Upgrading pip...
python -m pip install --upgrade pip
if errorlevel 1 goto :startup_failed

echo [*] Ensuring ruamel.yaml is installed...
python -m pip install ruamel.yaml
if errorlevel 1 (
  echo [!] Dependency installation failed. Check the network output above.
  goto :startup_failed
)

if not exist "update_yaml.py" (
  echo [!] Missing "update_yaml.py" script in current directory.
  goto :startup_failed
)

echo [*] Running update_yaml.py...
python "update_yaml.py"
if errorlevel 1 goto :startup_failed

echo.
echo [*] Script finished successfully.
pause
goto :eof

:startup_failed
echo.
echo [!] The script execution failed. Review the message above.
echo [!] This window will remain open so the error can be read.
pause
exit /b 1