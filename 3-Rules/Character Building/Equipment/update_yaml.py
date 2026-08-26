import re
from pathlib import Path
from io import StringIO
from ruamel.yaml import YAML

# Path to your target Obsidian folder
TARGET_DIR = Path(r"F:\Obsidian\PF2e-Core-Vault\3-Rules\Character Building\Equipment")

# Case-insensitive map to standard output casing
TARGET_VALUES = {
    "common": "Common",
    "uncommon": "Uncommon",
    "rare": "Rare",
    "unique": "Unique",
}

TRAIT_KEYS = {f"trait0{i}" for i in range(1, 9)}

yaml = YAML()
yaml.preserve_quotes = True
yaml.indent(mapping=2, sequence=4, offset=2)

FILE_EXTENSIONS = ("*.txt", "*.md", "*.yaml")

def process_file(file_path: Path):
    # Skip common project non-YAML files
    if file_path.name.upper() in ("LICENSE.MD", "README.MD"):
        return

    try:
        content = file_path.read_text(encoding="utf-8")
        if not content.strip():
            return

        # Safely extract YAML frontmatter bounded by triple-dashes (---)
        frontmatter_match = re.match(r"^---\s*\n(.*?)\n---\s*\n?", content, re.DOTALL)

        if frontmatter_match:
            yaml_str = frontmatter_match.group(1)
            rest_of_file = content[frontmatter_match.end():]
            is_frontmatter = True
        else:
            yaml_str = content
            rest_of_file = ""
            is_frontmatter = False

        data = yaml.load(yaml_str)
        if not isinstance(data, dict):
            return

        modified = False
        new_rarity = None

        for key in TRAIT_KEYS:
            if key in data and isinstance(data[key], str):
                val_str = data[key].strip()
                val_lower = val_str.lower()

                if val_lower in TARGET_VALUES:
                    formatted_val = TARGET_VALUES[val_lower]
                    data[key] = ""  # Clear trait field
                    modified = True

                    # Track rarity update for anything non-Common
                    if val_lower != "common":
                        new_rarity = formatted_val

        # Update rarity field if a match was found
        if new_rarity and "rarity" in data:
            data["rarity"] = new_rarity

        if modified:
            # Dump modified YAML into a string
            stream = StringIO()
            yaml.dump(data, stream)
            new_yaml_str = stream.getvalue()

            if is_frontmatter:
                new_content = f"---\n{new_yaml_str}---\n{rest_of_file}"
            else:
                new_content = new_yaml_str

            file_path.write_text(new_content, encoding="utf-8")
            print(f"Updated: {file_path.relative_to(TARGET_DIR)}")

    except Exception as e:
        print(f"Error processing {file_path.name}: {e}")

# Recursively scan subdirectories
for ext in FILE_EXTENSIONS:
    for file_path in TARGET_DIR.rglob(ext):
        process_file(file_path)