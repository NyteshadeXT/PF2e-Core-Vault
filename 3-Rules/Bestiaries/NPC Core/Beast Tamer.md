---
title: "Beast Tamer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.eF87AWFclYpu1cgD" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Beast Tamer"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Beast Tamer"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; "
languages: "Common, Wildsong"
skills:
  - name: "Skills"
    desc: "Athletics: +8, Diplomacy: +8, Intimidation: +8, Nature: +12, Performance: +8, Survival: +10, Circus Lore: +6"
abilityMods: [2, 1, 2, 0, 4, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +10, __Ref__ +7, __Will__ +12"
hp: 55
health:
  - name: ""
  - name: HP
    desc: "55"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Whip|Whip]], [[Equipment/Leather Armor|Leather Armor]], [[Equipment/Rope|Rope]], [[Equipment/Primal Symbol|Animal Claw Necklace (Primal Symbol)]]"
  - name: "Wild Empathy"
    desc: "  The beast tamer can use Diplomacy to [[Actions/Make an Impression|Make an Impression]] on animals and to make very simple [[Actions/Request|Requests]] of them."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Whip"
    desc: "+12 (disarm, nonlethal, reach, trip)\n__Damage__  1d4 + 6 slashing"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "Primal Prepared Spells"
    desc: "DC 22, attack +13; __2nd __  _[[Spells/Animal Form|Animal Form]]_, _[[Spells/Animal Messenger|Animal Messenger]]_, _[[Spells/Speak with Animals|Speak with Animals]]_; __1st __  _[[Spells/Grease|Grease]]_, _[[Spells/Jump|Jump]]_, _[[Spells/Runic Body|Runic Body]]_\n__Cantrips__  __(2nd)__ _[[Spells/Guidance|Guidance]]_, _[[Spells/Ignition|Ignition]]_, _[[Spells/Light|Light]]_, _[[Spells/Stabilize|Stabilize]]_, _[[Spells/Tangle Vine|Tangle Vine]]_"

  - name: "Druid Order Spells"
    desc: "1 Focus Point, DC 22, attack +13; __2nd __  _[[Spells/Heal Animal|Heal Animal]]_"

  - name: "Animal Trick"
    desc: "  The beast tamer gains the support benefit appropriate to its trained animal companion. Unlike for an animal companion, this doesn't require the animal to use any of its actions. The benefit for a [[Monster Core/Tiger|Tiger]] is as follows: Until the start of the beast tamer's next turn, their Strikes that deal damage to a creature within the tiger's reach make the target [[Conditions/Off-Guard|Off-Guard]] until the end of the beast tamer's next turn."
 
```

```encounter-table
name: Beast Tamer
creatures:
  - 1: Beast Tamer
```



Beast tamers bring the wild to civilization, rearing and training creatures to follow their commands and perform flashy tricks that entertain audiences. The beast tamer typically fights alongside a trained animal ally of its level or lower, most likely a tiger (Monster Core 51).

* * *

Performances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.
