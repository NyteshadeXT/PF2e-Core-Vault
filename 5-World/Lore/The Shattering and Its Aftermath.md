---
tags:
  - "#Era"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Calendar Link** |  `INPUT[textArea:calendarlink]` |

> [!infobox]
> #### Era Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}]` |
> **Website** | `VIEW[\[Calendar Link\]({calendarlink})][text(renderMarkdown)]` |

# `=this.file.name`

> [!column|3 no-title]
>> [!metadata|characters] People
>> ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Character")
SORT file.name ASC
>
>> [!metadata|location] Locations
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE econtains(tags,"#Location")
SORT file.name ASC
>
>> [!metadata|misc] Misc
>>  ```dataview
LIST
FROM outgoing([[]])
WHERE !econtains(tags,"#Year") AND !econtains(tags,"#Location") AND !econtains(tags,"#Character")
SORT file.name ASC

## Overview
In the waning years of the Age of Mortals, the Lords of Chaos, ancient beings of immense and malevolent power, sought to increase their influence over Aetheria. They thrived on discord and strife, their very essence feeding on the chaos they sowed. Among them, [[Kataklysmos]], a being of catastrophic power, hatched a plan to assert dominance over both Aetheria and the celestial realms.  As so started The War of Law and Chaos

### The  Axis War
The Axis War is one of the most significant events in Aetheria Fracta’s ancient history. At its height, the chaotic forces, led by a mysterious Primordial Lord of Chaos (possibly linked to [[Kataklysmos]]), sought to tear apart the structure of reality itself.

[[The Aetherial Wardens,]] acting as the champions of order, led the charge against these destructive forces. During the final battle, now called the Battle of Aetherion, the Aetherial Wardens confronted the chaotic forces on the desolate plains of the Aetherial Abyss, a boundary between realms where the currents of law and chaos are at their strongest. With the Rod of Seven Parts, they successfully imprisoned the Primordial Chaos Lord and brought a fragile peace to Aetheria Fracta. Though victorious, the Wardens themselves were shattered in the aftermath, their numbers decimated and their influence fading from mortal memory. Many withdrew to remote parts of the world, while others disappeared entirely, leaving their once-great legacy largely forgotten.

[[Kataklysmos]], however, would not be thwarted. He discovered a way to manipulate and redirect a massive meteor pulsing with chaotic energy to strike Aetheria.  He aimed to create a world overflowing with the raw uncontrolled energy. His intention was to absorb this energy, using it to gain unmatched power and to subjugate the celestial beings.

The warning signs were subtle at first: fluctuations in magical energy, unexplained natural phenomena, and increased seismic activity. Scholars and mages across Aetheria began to notice these anomalies, but the true scale of the impending disaster was beyond their comprehension.

As the meteor hurtled towards Aetheria, the skies grew dark, and the air crackled with unstable magic. Before impacting Aetheria, the meteor crashed through one of Aetheria's moons, sending debris raining down to the planet and creating a ring of rocky debris in orbit. When the meteor finally struck Aetheria, it was with a force that defied imagination. The impact shattered mountains, evaporated seas, and unleashed a wave of magical energy that surged through the ley lines. This cataclysmic event became known as The Shattering.

The Shattering was devastating. Entire civilizations were obliterated, and the landscape of Aetheria was radically transformed. The ley lines, now overloaded with energy, ruptured in a chain reaction of magical explosions. This energy backlash affected both the physical and the magical fabric of the world.

Continents were torn apart, new landmasses emerged, and others sank into the ocean. The geography of Aetheria was forever changed, with vast wastelands, new mountain ranges, and enchanted forests appearing almost overnight. The magical energies released by The Shattering created zones of wild magic where the laws of nature were distorted. These areas became hazardous, with unpredictable magical effects that could transform or destroy anything that entered. The surviving populations were scattered and disoriented. Kingdoms and cities were reduced to rubble, and many fled to safer regions. The struggle to survive in this new, chaotic world began immediately, with communities forming around remaining sources of stability and power.

# The Barrier of the Gods

In the wake of The Shattering, the gods realized that their continued direct interaction with mortals could exacerbate the instability of the fractured world. To prevent further chaos and to protect Aetheria, the deities erected a powerful barrier between themselves and the mortal realm. This barrier, known as the Veil, not only kept the gods from directly intervening in mortal affairs but also served to hold the fractured lands of Aetheria together, preventing them from spinning out into the universe.

However, in their haste and focus on containing the immediate crisis, the gods made a critical oversight. They forgot to account for the Primordials, the ancient elemental beings who had shaped the world in its earliest days. As a result, the Primordials were not blocked by the Veil and remained free to roam Aetheria, their immense powers lay dormant to be discovered and unleashed upon the world.



## Years

> [!metadata|year]- Years
> ```dataview
> TABLE without id file.link AS "Year", join(aliases, ", ") AS Aliases
> FROM "5-World"
> WHERE econtains(era, this.file.link) AND econtains(tags, "#Year")
> SORT file.name ASC

## Notes