---
title: "Beast Eidolon"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.xMDUgVCByn9VA0zC" 
tags:
  - pf2e/creature/type/beast
  - pf2e/creature/type/eidolon
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Beast Eidolon"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Beast Eidolon"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: [[beast]]
trait_02: [[eidolon]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; Darkvision, Low-Light Vision, Scent (Imprecise) 30 Feet"
languages: "Fey"
skills:
  - name: "Skills"
    desc: "Acrobatics: +16, Athletics: +21, Intimidation: +22, Nature: +15"
abilityMods: [5, 2, 4, -1, 3, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +19, __Ref__ +18, __Will__ +19"
hp: 180
health:
  - name: ""
  - name: HP
    desc: "180; __Resistances__ cold 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Horn"
    desc: "+22 (unarmed)\n__Damage__  2d8 + 11 piercing plus grab 1d6 bleed plus grab"

  - name: "**Melee** `pf2:1` Hoof"
    desc: "+22 (agile, unarmed)\n__Damage__  2d6 + 11 bludgeoning"

  - name: "Furious Charge"
    desc: "`pf2:2`  The eidolon Strides twice and then makes a Strike. As long as it moved at least 20 feet, it gains a +2 circumstance bonus to the attack roll."

  - name: "Primal Roar"
    desc: "`pf2:2` (auditory) The eidolon attempts to [[Actions/Demoralize|Demoralize]] each enemy within 30 feet; these Demoralize attempts don't take any penalty for not sharing a language."

  - name: "[[Bestiary Ability Glossary/Rend|Rend]]"
    desc: "`pf2:1`  Claw\n* * *\n\nA Rend entry lists a Strike the monster has.\n\n**Requirements** The monster hit the same enemy with two consecutive Strikes of the listed type in the same round.\n* * *\n\n**Effect** The monster automatically deals that Strike's damage again to the enemy."

  - name: "Scent of Blood"
    desc: "`pf2:1`  **Requirements** A creature within the eidolon's scent range is taking bleed damage\n* * *\n\n**Effect** The eidolon flies into a frenzy, gaining 10 temporary HP for 1 minute and a +4 status bonus to damage rolls with its unarmed attacks, but becomes [[Conditions/Off-Guard|Off-Guard]]. It can't voluntarily end the frenzy or start another frenzy while in the frenzy. The frenzy lasts for 1 minute, after which the eidolon is [[Conditions/Fatigued|Fatigued]] for 1 minute."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Beast Eidolon
creatures:
  - 1: Beast Eidolon
```



This creature is intended to be used as the eidolon accompanying a Sarkorian god caller, but it can be used or adapted into any aggressive beast eidolon for a summoner.
