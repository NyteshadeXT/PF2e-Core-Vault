---
title: "Black Belt"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.YnUDViAV0M2FMG3M" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/12
  - remaster
statblock: inline
name: "Black Belt"
level: 12
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Black Belt"
level: "Creature 12"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 25
perception:
  - name: "Perception"
    desc: "+25; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +25, Athletics: +25, Stealth: +20, Martial Arts Lore: +22"
abilityMods: [5, 4, 3, 1, 3, 0]
speed: 40 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +23, __Ref__ +23, __Will__ +20"
hp: 220
health:
  - name: ""
  - name: HP
    desc: "220"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Handwraps of Mighty Blows|Handwraps of Mighty Blows]], [[Equipment/Bo Staff|+1 Striking Bo Staff]], [[Equipment/Bands of Force|Bands of Force]]"
abilities_mid:
  - name: ""
  - name: "Blocking Counterattack"
    desc: "`pf2:r`  **Trigger** A creature within the black belt's reach targets them with a melee attack\n* * *\n\n**Effect** The black belt blocks, gaining a +2 circumstance bonus to their AC against the triggering attack. If the attack misses, the black belt retaliates with a Strike. This Strike doesn't count toward the black belt's multiple attack penalty, and the multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Bo Staff"
    desc: "+25 (magical, parry, reach, trip)\n__Damage__  2d8 + 9 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+25 (agile, magical, nonlethal, unarmed)\n__Damage__  2d8 + 9 bludgeoning"

  - name: "Occult Focus Spells"
    desc: "2 Focus Points, DC 32, attack +23; __6th __  _[[Spells/Inner Upheaval|Inner Upheaval]]_, _[[Spells/Qi Rush|Qi Rush]]_"

  - name: "[[Actor.zRUKUK93YxtbadPT.Item.PjqwihmMf7cPnPtH|Flurry of Blows]]"
    desc: "`pf2:1`  **Frequency** once per round\n* * *\n\n**Effect** The black belt makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses.\n\nThe black belt can substitute any number of the attacks with bo staff Strikes or attempts to Grapple, Reposition, Shove, or Trip."

  - name: "[[Actor.zRUKUK93YxtbadPT.Item.nrV7U6vtd1tSnRpu|Powerful Fists]]"
    desc: "  The black belt's fist Strikes don't take penalties when making lethal attacks, and fist Strikes are treated as cold iron and silver."

  - name: "Rapid Barrage"
    desc: "`pf2:2` (incapacitation) The black belt pummels their fists in a fast onslaught. They make three fist Strikes against one target. If more than one Strike hits, combine damage for the purpose of resistances and weaknesses. Regardless of whether any Strikes hit, the target must succeed at a DC 32 Fortitude check save or be [[Conditions/Clumsy|Clumsy 1]] until the end of their next turn and [[Conditions/Stunned|Stunned 1]] ([[Conditions/Clumsy|Clumsy 2]] and [[Conditions/Stunned|Stunned 2]] on a critical failure)."
 
```

```encounter-table
name: Black Belt
creatures:
  - 1: Black Belt
```



Martial artists strive to master the art of hand-to-hand fighting.
