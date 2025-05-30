---
title: Fungal Forge
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - fungus
  - unholy
  - pf2eHazard

  - remaster
source: Pathfinder #212: A Voice in the Blight
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.0h5S5DqqGGvnsZfX" 
level: 19
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Fungal Forge"
level: "Hazard 19"


trait_01: [[environmental]]
trait_02: [[fungus]]
trait_03: [[unholy]]
modifier: 0
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 40
armorclass:
  - name: AC
    desc: "40; __Fort__ +35, __Ref__ +29, "
hp: 130
health:
  - name: ""
  - name: "HP"
    desc: "130; __Hardness__ 32; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 10" 
    desc: "A fifteen-foot diameter spherical fungus with a five-foot-diameter circular aperture facing into the room; inside the fungus lie partially decayed humanoid remains."
abilities_top:
  - name: ""
abilities_mid:
  - name: ""

attacks:
  - name: ""

  - name: "Defile and Pollute"
    desc: "`pf2:r` (primal, unholy, void) **Trigger** A sapient living creature enters or is placed inside the fungal forge, a fungal forge takes damage, or an attempt to disable a forge critically fails\n* * *\n\n**Effect** The fungal forge floods its interior with sickly green demonic energy that looks like a mix of fluid and fog. A creature within the fungal forge takes 5d8 variable damage and 5d8 void damage as their soul withers and their flesh decays, while a creature within 20 feet of the forge is exposed to vented unholy energy and only takes the void damage as their flesh rots—in either case, an affected creature must attempt a DC 41 Fortitude check save. The type of non-void damage a fungal forge inflicts on those within varies. The green forge (**D6a**) deals cold damage, the yellow one (**D6b**) poison damage, the orange one (**D6c**) acid damage, the black one (**D6d**) electricity damage, and the purple one (**D6e**) mental damage. Demons and fungi are immune to this effect entirely.\n\n**Green:** 5d8 cold + 5d8 void\n\n**Yellow:** 5d8 poison + 5d8 void\n\n**Orange:** 5d8 acid + 5d8 void\n\n**Black:** 5d8 electricity + 5d8 void\n\n**Purple:** 5d8 mental + 5d8 void\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage. If the creature is inside the fungal forge, they also become [[Conditions/Enfeebled|Enfeebled 1]] and [[Conditions/Stupefied|Stupefied 1]] with an unlimited duration.\n\n**Critical Failure** The creature takes double damage. If the creature is inside the fungal forge, they also become [[Conditions/Enfeebled|Enfeebled 2]] and [[Conditions/Stupefied|Stupefied 2]] with an unlimited duration."


  - name: "Reset"
    desc: "A fungal forge resets immediately at the start of every round, and immediately triggers again if there are still sapient creatures within it."
```

```encounter-table
name: Fungal Forge
creatures:
  - 1: Fungal Forge
```

