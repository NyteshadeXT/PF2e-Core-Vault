---
title: Fungal Engine
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - magical
  - trap
  - unholy
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #212: A Voice in the Blight
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.KOATLw8dbPRo7DWb" 
level: 19
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Fungal Engine"
level: "Hazard 19"

trait_06: "Complex"
trait_01: [[magical]]
trait_02: [[trap]]
trait_03: [[unholy]]
modifier: 37
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 43
armorclass:
  - name: AC
    desc: "43; __Fort__ +35, __Ref__ +29, "
hp: 130
health:
  - name: ""
  - name: "HP"
    desc: "130; __Hardness__ 32; __Immunities__  object immunities,  critical hits,  precision"
perception:
  - name: ""
  - name: "Stealth DC 37" 
    desc: "(legendary) to notice the fungi is potentially hazardous and that the two mushrooms in the middle are load bearing and that destroying those with damage can disable the hazard; noticing the engine itself has a DC of 0"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A thick mass of pulsing fungi and mold infested with ghostly shapes cakes the walls of the room."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 41 Nature check seven times to seek out and remove seven specific nodes of fungi that govern the intake and dispersal of energy, or DC 47 Religion check three times to exorcise the souls out of the engine and force it to shut down"
attacks:
  - name: ""

  - name: "Psychic Shriek"
    desc: "`pf2:r` **Trigger** any damage is inflicted on the engine, or any attempt to disable it critically fails\n* * *\n\n**Effect** The entire mass of fungi shudders, then emits a piercing psychic scream as the trapped souls within cry out. All non-fungi creatures in area **E3** take 10d6 spirit damage (DC 41 Will check save), and four vansidieth demons waiting for this precise alarm use translocate to teleport into the room to attack the intruders. The hazard then rolls initiative."

  - name: "Routine"
    desc: "(1 action) The fungal engine expels clouds of toxic spores on its turn, causing all non-fungi and non-demon creatures in the room to take 10d6 poison damage (DC 41 Fortitude check save); any creature that takes damage is exposed to grayshroud.\n* * *\n\n**Grayshroud**\n\n**Saving Throw** DC 40 Fortitude check\n\n**Stage 1** [[Conditions/Fatigued|Fatigued]] (1 day)\n\n**Stage 2** [[Conditions/Drained|Drained 1]] and fatigued (1 day)\n\n**Stage 3** [[Conditions/Drained|Drained 2]] and fatigued (1 day)\n\n**Stage 4** [[Conditions/Drained|Drained 3]], fatigued, and can't speak (1 day)\n\n**Stage 5** death"
  - name: "Reset"
    desc: "The fungal engine deactivates and resets after 1 minute, but any demons called in remain in the area for an hour to ensure the intruders don't return."
```

```encounter-table
name: Fungal Engine
creatures:
  - 1: Fungal Engine
```

