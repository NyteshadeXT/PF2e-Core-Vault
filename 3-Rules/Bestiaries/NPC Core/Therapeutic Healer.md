---
title: "Therapeutic Healer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.fh7fcZjLGqih2m9J" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Therapeutic Healer"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Therapeutic Healer"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; "
languages: "Common; two additional humanoid languages"
skills:
  - name: "Skills"
    desc: "Diplomacy: +17, Medicine: +17, Occultism: +16, Performance: +15, Society: +14"
abilityMods: [2, 1, 0, 3, 3, 4]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +15, __Ref__ +12, __Will__ +18"
hp: 110
health:
  - name: ""
  - name: HP
    desc: "110; __Resistances__ mental 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff|Staff]], [[Equipment/Chain Shirt|Chain Shirt]], [[Equipment/Healer's Toolkit (Expanded)|Healer's Toolkit (Expanded)]]"
  - name: "[[Actor.HjaMnN9ugE03tr7a.Item.9xXxlNwXM90sw8zk|Doctor's Hand]]"
    desc: "  When the therapeutic healer rolls a critical failure on a check to [[Actions/Treat Disease|Treat Disease]], [[Actions/Treat Poison|Treat Poison]], or [[Actions/Treat Wounds|Treat Wounds]], they get a failure instead."

  - name: "Emotionally Invested"
    desc: " (emotion,healing,mental) When the therapeutic healer casts a spell with the healing trait on a creature other than themself, the healer regains HP equal to the spell's rank."

  - name: "[[Actor.CvINEgHThcndEvmp.Item.yVFE50J1aWvv0Yhz|Therapeutic Care]]"
    desc: "  When [[Actions/Treat Wounds|Treating Wounds]], the therapeutic healer can treat up to four targets. If they succeed at a DC 20 check to Treat Wounds, they can also reduce the value of one [[Conditions/Clumsy|Clumsy]], [[Conditions/Enfeebled|Enfeebled]], or [[Conditions/Stupefied|Stupefied]] condition affecting a single patient by 1. They can reduce a [[Conditions/Drained|Drained]] or [[Conditions/Doomed|Doomed]] condition instead if they succeed at a DC 30 check. This can't reduce permanent doomed conditions."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Staff"
    desc: "+13 (two-hand d8)\n__Damage__  1d8 + 6 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+13 (agile, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "Occult Spontaneous Spells"
    desc: "DC 25, attack +17; __4th __ (3 slots) _[[Spells/Cleanse Affliction|Cleanse Affliction]]_, _[[Spells/Clear Mind|Clear Mind]]_, _[[Spells/Soothe|Soothe]]_; __3rd __ (3 slots) _[[Spells/Clear Mind|Clear Mind]]_, _[[Spells/Soothe|Soothe]]_, _[[Spells/Veil of Privacy|Veil of Privacy]]_; __2nd __ (3 slots) _[[Spells/Soothe|Soothe]]_, _[[Spells/Status|Status]]_, _[[Spells/Translate|Translate]]_; __1st __ (3 slots) _[[Spells/Protection|Protection]]_, _[[Spells/Sanctuary|Sanctuary]]_, _[[Spells/Soothe|Soothe]]_\n__Cantrips__  __(4th)__ _[[Spells/Guidance|Guidance]]_, _[[Spells/Message|Message]]_, _[[Spells/Prestidigitation|Prestidigitation]]_, _[[Spells/Shield|Shield]]_, _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_"

  - name: "Bard Composition Spells"
    desc: "2 Focus Points, DC 25, attack +17; __4th __  _[[Spells/Hymn of Healing|Hymn of Healing]]_"
 
```

```encounter-table
name: Therapeutic Healer
creatures:
  - 1: Therapeutic Healer
```



Some healers feel great empathy for their charges and take great pains to help shoulder their allies' burdens both in and out of combat.

* * *

The world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.
