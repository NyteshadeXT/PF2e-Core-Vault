---
destination: Springrun
hexDistance: 8
regionModifier: 2
terrainModifier: 0
currentVP: 16
currentResonance: 2
checkResult: 0
currentPressure: 3
currentReadiness: 4
---

# Expedition Challenge

| Expedition Challenge            |                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Destination:**                | `INPUT[text:destination]`                                                                                                                                                                                                                                                                                             |
| **Hex Distance:**               | `INPUT[number:hexDistance]`                                                                                                                                                                                                                                                                                           |
| **Region Modifier:**            | `INPUT[inlineSelect(option(0, Prismatic Canopy), option(2, Forest), option(4, Dungeon-Touched)):regionModifier]`                                                                                                                                                                                                  | 
| **Terrain / Weather Modifier:** | `INPUT[inlineSelect(option(0, Normal), option(1, Difficult), option(2, Severe), option(3, Extreme)):terrainModifier]`                                                                                                                                                                                                 |
| **VP Target:**                  | `VIEW[round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + ({regionModifier} * {hexDistance}) + {terrainModifier})]`                                                                                                                                                                                                             |
| **Current VP:**                 | `INPUT[number:currentVP]`                                                                                                                                                                                                                                                                                             |
| **Current Pressure:**             | `INPUT[number:currentPressure]`                                                                                                                                                                                                                                                                                         |
| **Pressure State:**               | `VIEW[string({currentPressure} == 0 ? "Calm" : {currentPressure} == 1 ? "Tense" : {currentPressure} == 2 ? "Perilous" : {currentPressure} == 3 ? "Dire" : "Imminent Danger")]`                                                                                                                                                |
| **Encounter Chance:**           | `VIEW[string({currentPressure} == 0 ? "None" : {currentPressure} == 1 ? "20%" : {currentPressure} == 2 ? "40%" : {currentPressure} == 3 ? "60%" : "Certain")]`                                                                                                                                                                |
| **Encounter Severity:**         | `VIEW[string({currentPressure} == 0 ? "None" : {currentPressure} == 1 ? "Low" : {currentPressure} == 2 ? "Moderate" : {currentPressure} == 3 ? "Severe" : "Severe + Complication")]`                                                                                                                                          |
| **Current Readiness:**          | `INPUT[number:currentReadiness]`                                                                                                                                                                                                                                                                                      |
| **Readiness State:**            | `VIEW[string({currentReadiness} >= 4 ? "Ready" : {currentReadiness} == 3 ? "Steady" : {currentReadiness} == 2 ? "Worn" : {currentReadiness} == 1 ? "Strained" : "Compromised")]`                                                                                                                                      |
| **Readiness Effect:**           | `VIEW[string({currentReadiness} >= 4 ? "Advantage when danger begins." : {currentReadiness} == 3 ? "No modifier." : {currentReadiness} == 2 ? "Minor complication when danger begins." : {currentReadiness} == 1 ? "Disadvantage when danger begins." : "Fatigued, hostile advantage, or increase event severity.")]` |

# Expedition Check Results

|Check Result|Progress|Pressure|Readiness|
|---|:-:|:-:|:-:|
|**Critical Success**|+3 VP|-1|—|
|**Success**|+2 VP|—|—|
|**Failure**|+1 VP|+1|—|
|**Critical Failure**|—|+2|-1|

# Expedition Progress

| Expedition Progress |  |
|---|---|
| **Destination:** | `VIEW[string({destination})]` |
| **Readiness:** | `VIEW[string({currentReadiness} >= 4 ? "Ready" : {currentReadiness} == 3 ? "Steady" : {currentReadiness} == 2 ? "Worn" : {currentReadiness} == 1 ? "Strained" : "Compromised")]`|
| **Pressure:** | `VIEW[string({currentPressure} == 0 ? "Calm" : {currentPressure} == 1 ? "Tense" : {currentPressure} == 2 ? "Perilous" : {currentPressure} == 3 ? "Dire" : "Imminent Danger")]`|
| **Status:** | `VIEW[string({currentVP} == 0 ? "Preparing Expedition" : {currentVP} >= round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier}) ? "Arrived at Destination" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.25 ? "Departed" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.50 ? "Making Good Progress" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.75 ? "Over Halfway There" : "Destination in Sight")]` |
| **Route:** | `VIEW[string({currentVP} == 0 ? "🏠 ●──○──○──○──○──○──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.125 ? "🏠 ○──●──○──○──○──○──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.25 ? "🏠 ○──○──●──○──○──○──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.375 ? "🏠 ○──○──○──●──○──○──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.50 ? "🏠 ○──○──○──○──●──○──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.625 ? "🏠 ○──○──○──○──○──●──○──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 0.75 ? "🏠 ○──○──○──○──○──○──●──○ 💎" : ({currentVP} / round((({hexDistance} * 2) < 6 ? 6 : ({hexDistance} * 2)) + {regionModifier} + {terrainModifier})) < 1 ? "🏠 ○──○──○──○──○──○──○──● 💎" : "🏠 ○──○──○──○──○──○──○──✓ 💎")]` |

# Readiness Adjustments

| Situation                                              | Readiness Change |
| ------------------------------------------------------ |:----------------:|
| Critical Success on camp/recovery action               |        +2        |
| Success on camp/recovery action                        |        +1        |
| Failure on significant expedition check                |        -1        |
| Critical Failure on significant expedition check       |        -2        |
| Forced march, severe weather, major hazard, lost route |        -1        |
| Severe encounter or major complication                 |        -1        |
| Comfortable/full camp in safe location                 |        +1        |
| Rest day in secure location                            |    Reset to 4    |

# Pressure Adjustments
At the end of each successful expedition day, reduce Pressure by 1 (minimum 0), unless an encounter or major complication occurred that day.  Additional adjustments are below.

| Event                                |  Pressure  |
| ------------------------------------ |:----------:|
| Critical Success on Expedition Check |     -1     |
| Success on Expedition Check          |     0      |
| Failure on Expedition Check          |     +1     |
| Critical Failure on Expedition Check |     +2     |
| Forced march                         |     +1     |
| Difficult terrain                    |     +1     |
| Severe weather                       |     +1     |
| Loud camp / visible camp             |     +1     |
| Hidden camp                          |     -1     |
| Deliberate stealth travel            |     -1     |
| Spend time scouting                  |     -1     |
| Take a full rest day                 | Reset to 0 |
| Pressure Event resolves              | Reset to 1 |

