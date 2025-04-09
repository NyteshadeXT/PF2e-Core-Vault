---
title: Spotting & Sneaking Calculator
aliases: 
category: Tool
type: Calculator
spotter: "[[6. Mechanics/CLI/bestiary/humanoid/kobold.md|kobold]]"
sneaker: "[[3. The Party/Mournn Evenstar/Mournn Evenstar.md|Mournn Evenstar]]"
terrain: 1
weather: 2
size: 0.5
sizeFactor: 50
darkvision: false
spyglass: false
invisibility: false
spotterPerc: 12
sneakerPerc: 12
light: 2
wind: 0
rain: 0
penalties: 2
penaltyFactor: 6
func: 1
metric: 1
---

#  Spotting & Sneaking Calculator

> [!infobox | left wfull]
> # `INPUT[suggester(optionQuery(#monster OR #PC OR #NPC)):spotter]` Spotting `INPUT[suggester(optionQuery(#monster OR #PC OR #NPC)):sneaker]`
> # Spotter Perception: `INPUT[number(class(nb-mb-35)):spotterPerc]` Sneaker Perception: `INPUT[number(class(nb-mb-35)):sneakerPerc]`
> || 
> |-|-|
> Terrain |  `INPUT[inlineSelect(option(1, Open Flat Terrain), option(2, Open Tough Terrain), option(3, Rough Terrain), option(4, Very Rough Terrain)):terrain]`
> Wind | `INPUT[inlineSelect(option(0, Calm-Fresh Breeze), option(1.5, Strong Breeze-Gale), option(3, Strong Gale-Violent Storm)):wind]`
> Light|  `INPUT[inlineSelect(option(0, Bright), option(2, Dim Light/Lighty Obscured), option(4, Darkness/Heavily Obscured)):light]` 
> Precipitation | `INPUT[inlineSelect(option(0, Clear-Light), option(1.5, Moderate-Substantial), option(3, Heavy-Very Heavy)):rain]`
> Object size | `INPUT[inlineSelect(option(0.125, Fine), option(0.25, Tiny), option(0.5, Small), option(1, Medium), option(2, Large), option(4, Huge), option(8, Gargantuan), option(16, Colossal) ):size]`
> # Options
> ||
> -|-|-|-
> Spyglass? | `INPUT[toggle():spyglass]` | Invisible? | `INPUT[toggle():invisibility]`
> Darkvision? |  `INPUT[toggle():darkvision]`|  Metric? | `INPUT[toggle(offValue(1), onValue(0.3048)):metric]`
> # Spot Distance: `VIEW[round({sizeFactor}*{penaltyFactor}*{func}*{metric})]` `VIEW[{metric} < 1 ? "m" : "ft"]`
> `VIEW[100*{size}*({spyglass} ? 5/{terrain} : 1)][math(hidden):sizeFactor]` `VIEW[max(1, {light}+{wind}+{rain})][math(hidden):weather]` `VIEW[{weather}+6*{invisibility}-{darkvision}*{light}/2][math(hidden):penalties]` `VIEW[{spotterPerc}/({penalties}*{terrain})][math(hidden):penaltyFactor]` `VIEW[{sneakerPerc}-{spotterPerc} > 0 ? max(1.002876172*2*(1/(1+exp(0.2181959805*({sneakerPerc}-{spotterPerc})))-1/(1+exp(30*0.2181959805))), 0) : 1][math(hidden):func]`
^SpottingCalculator