---
destination: Springrun
hexDistance: 8
regionModifier: 2
currentPressure: 3
currentReadiness: 4
weatherModifier: 0
todayVP: 0
travelDay: 4
currentVP: 16
hexVP: 4
vpTarget: 32
currentDay: 3
dailyVP: 8
---

# Expedition Progress
| Expedition Progress |  |
|---|---|
| **Destination:** | `VIEW[string({destination})]` |
| **Readiness:** | `VIEW[string({currentReadiness} >= 4 ? "Ready" : {currentReadiness} == 3 ? "Steady" : {currentReadiness} == 2 ? "Worn" : {currentReadiness} == 1 ? "Strained" : "Compromised")]`|
| **Pressure:** | `VIEW[string({currentPressure} <= 2 ? "Calm" : {currentPressure} <= 5 ? "Tense" : {currentPressure} <= 8 ? "Perilous" : {currentPressure} <= 11 ? "Dire" : "Critical")]` |
| **Status:** | `VIEW[string({currentVP} == 0 ? "Preparing Expedition" : {currentVP} >= {vpTarget} ? "Arrived at Destination" : ({currentVP} / {vpTarget}) < 0.25 ? "Departed" : ({currentVP} / {vpTarget}) < 0.50 ? "Making Good Progress" : ({currentVP} / {vpTarget}) < 0.75 ? "Over Halfway There" : "Destination in Sight")]` |
| **Route:** | `VIEW[string({currentVP} == 0 ? "🏠 ●──○──○──○──○──○──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.125 ? "🏠 ○──●──○──○──○──○──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.25 ? "🏠 ○──○──●──○──○──○──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.375 ? "🏠 ○──○──○──●──○──○──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.50 ? "🏠 ○──○──○──○──●──○──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.625 ? "🏠 ○──○──○──○──○──●──○──○ 💎" : ({currentVP} / {vpTarget}) < 0.75 ? "🏠 ○──○──○──○──○──○──●──○ 💎" : ({currentVP} / {vpTarget}) < 1 ? "🏠 ○──○──○──○──○──○──○──● 💎" : "🏠 ○──○──○──○──○──○──○──✓ 💎")]` |


# Expedition Challenge
`BUTTON[expedition-critical-success]` `BUTTON[expedition-success]` `BUTTON[expedition-failure]` `BUTTON[expedition-critical-failure]`
>
>> [!column | 2 no-t no-i] 
>>> | Expedition Challenge            |                                                                                                                                                                                                                                                                                                                       |
>>> | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
>>> | **Destination:**                | `INPUT[text:destination]` |
>>> | **Hex Distance:**               | `INPUT[number:hexDistance]` |
>>> | **Region Modifier:**            | `INPUT[inlineSelect(option(0, Road), option(0, Plains), option(2, Forest), option(3, Hills), option(3, Swamp), option(5, Mountains)):regionModifier]` | 
>>> | **Weather Modifier:** | `INPUT[inlineSelect(option(0, Normal), option(1, Rain), option(2, Storm)):weatherModifier]` |
>>> | **VP per Hex:** | `VIEW[round(2 + {regionModifier} + {weatherModifier})][math:hexVP]` |
>>> | **Daily VP:** | `VIEW[{hexVP} * 2][math:dailyVP]` |
>>> | **VP Target:** | `VIEW[{hexVP} * {hexDistance}][math:vpTarget]` |
>>> | **Today's VP:** | `VIEW[{currentVP} - (floor({currentVP} / {dailyVP}) * {dailyVP})][math:todayVP]` |
>>> | **Current Day:** | `VIEW[floor({currentVP} / {dailyVP}) + 1][math:currentDay]` |
>>> | **Current VP:**                 | `INPUT[number:currentVP]` |
>>> | **Current Pressure:**             | `INPUT[number:currentPressure]` |
>>> | **Pressure State:** | `VIEW[string({currentPressure} <= 2 ? "Calm" : {currentPressure} <= 5 ? "Tense" : {currentPressure} <= 8 ? "Perilous" : {currentPressure} <= 11 ? "Dire" : "Critical")]` |
>>> | **Encounter Chance:** | `VIEW[string({currentPressure} <= 2 ? "0%" : {currentPressure} <= 5 ? "20%" : {currentPressure} <= 8 ? "40%" : {currentPressure} <= 11 ? "60%" : "100%")]` |
>>> | **Encounter Severity:** | `VIEW[string({currentPressure} <= 2 ? "None" : {currentPressure} <= 3 ? "Low" : {currentPressure} <= 5 ? "Moderate" : {currentPressure} <= 9 ? "Severe" : {currentPressure} <= 11 ? "Severe with Complication" : "Signature Encounter")]` |
>>> | **Current Readiness:**          | `INPUT[number:currentReadiness]` |
>>> | **Readiness State:**            | `VIEW[string({currentReadiness} >= 4 ? "Ready" : {currentReadiness} == 3 ? "Steady" : {currentReadiness} == 2 ? "Worn" : {currentReadiness} == 1 ? "Strained" : "Compromised")]`                                                                                                                                      |
>>> | **Readiness Effect:**           | `VIEW[string({currentReadiness} >= 4 ? "Advantage when danger begins." : {currentReadiness} == 3 ? "No modifier." : {currentReadiness} == 2 ? "Minor complication when danger begins." : {currentReadiness} == 1 ? "Disadvantage when danger begins." : "Fatigued, hostile advantage, or increase event severity.")]` |
>>
>>> # Expedition Check Results
>>> |Check Result|Progress|Pressure|Readiness|
>>> |---|:-:|:-:|:-:|
>>> |**Critical Success**|+3 VP|-1|—|
>>> |**Success**|+2 VP|—|—|
>>> |**Failure**|+1 VP|+1|—|
>>> |**Critical Failure**|—|+2|-1|
>>
> 

>
>> [!column | 2 no-t no-i] 
>>> # Readiness Adjustments
>>> | Situation                                              | Readiness Change |
>>> | ------------------------------------------------------ |:----------------:|
>>> | Critical Success on camp/recovery action               |        +2        |
>>> | Success on camp/recovery action                        |        +1        |
>>> | Failure on significant expedition check                |        -1        |
>>> | Critical Failure on significant expedition check       |        -2        |
>>> | Forced march, severe weather, major hazard, lost route |        -1        |
>>> | Severe encounter or major complication                 |        -1        |
>>> | Comfortable/full camp in safe location                 |        +1        |
>>> | Rest day in secure location                            |    Reset to 4    |
>>> Note: A _significant expedition check_ is any check made to resolve hazards, navigation challenges, or encounters triggered by Pressure.
>>
>>> # Pressure Adjustments
>>> At the end of each successful expedition day, reduce Pressure by 1 (minimum 0), unless an encounter or major complication occurred that day.  Additional adjustments are below.
>>> 
>>> | Event                                |  Pressure  |
>>> | ------------------------------------ |:----------:|
>>> | Critical Success on Expedition Check |     -1     |
>>> | Success on Expedition Check          |     0      |
>>> | Failure on Expedition Check          |     +1     |
>>> | Critical Failure on Expedition Check |     +2     |
>>> | Forced march                         |     +2     |
>>> | Loud Combat                         |     +1     |
>>> | Severe weather                       |     +1     |
>>> | Poor camp setup             |     +1     |
>>> | Hidden camp                          |     -1     |
>>> | Deliberate stealth travel            |     -1     |
>>> | Spend time scouting                  |     -1     |
>>> | Take a full rest day                 | Reset to 0 |
>>> | Pressure Event resolves              | Reset one level of pressure state |
>>
> 

