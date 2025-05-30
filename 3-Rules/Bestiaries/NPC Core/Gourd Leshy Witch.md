---
title: "Gourd Leshy Witch"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.dgKQirSInfVaPMYq" 
tags:
  - pf2e/creature/type/leshy
  - pf2e/creature/type/plant
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Gourd Leshy Witch"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gourd Leshy Witch"
level: "Creature 6"

alignment: ""
size: "Small"
trait_01: [[leshy]]
trait_02: [[plant]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Low-Light Vision"
languages: "Common, Fey; speak with plants (gourds only)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Intimidation: +13, Nature: +14, Occultism: +16, Survival: +12"
abilityMods: [2, 2, 1, 4, 2, 1]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__ +11, __Ref__ +14, __Will__ +14"
hp: 80
health:
  - name: ""
  - name: HP
    desc: "80"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Staff|+1 Broom (Functions as a Staff)]], [[Equipment/Dagger|Dagger]]"
abilities_mid:
  - name: ""
  - name: "Verdant Burst"
    desc: " (healing,primal,vitality) When the gourd leshy witch dies, a burst of primal energy explodes from their body, restoring 4d8 healing vitality Hit Points to each plant creature in a 30-foot emanation. This area immediately fills with gourds, becoming difficult terrain. If the terrain is not a viable environment for these plants, they wither after 24 hours."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Broom"
    desc: "+13 (magical, two-hand d8)\n__Damage__  1d4 + 6 bludgeoning 1d6 void"

  - name: "**Melee** `pf2:1` Dagger"
    desc: "+12 (agile, finesse, versatile s)\n__Damage__  1d4 + 6 piercing 1d6 void"

  - name: "**Ranged** `pf2:1` Dagger"
    desc: "+12 (agile, finesse, thrown 10 ft., versatile s)\n__Damage__  1d4 + 6 piercing 1d6 void"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+12 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning 1d6 void"

  - name: "Occult Prepared Spells"
    desc: "DC 24, attack +16; __3rd __  _[[Spells/Slow|Slow]]_, _[[Spells/Vampiric Feast|Vampiric Feast]]_; __2nd __  _[[Spells/Paranoia|Paranoia]]_; __1st __  _[[Spells/Fear|Fear]]_, _[[Spells/Force Barrage|Force Barrage]]_, _[[Spells/Grim Tendrils|Grim Tendrils]]_, _[[Spells/Ill Omen|Ill Omen]]_\n__Cantrips__  __(3rd)__ _[[Spells/Daze|Daze]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Figment|Figment]]_, _[[Spells/Shield|Shield]]_, _[[Spells/Void Warp|Void Warp]]_"

  - name: "Primal Innate Spells"
    desc: "DC 24, attack +0\n__Constant__  __(3rd)__ _[[Spells/Speak with Plants|Speak with Plants (Gourds Only)]]_"

  - name: "Witch Hex Spells"
    desc: "0 Focus Point, DC 24, attack +0\n__Cantrips__  __(3rd)__ _[[Spells/Wilding Word|Wilding Word]]_"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) The gourd leshy witch transforms into a Small gourd. This ability otherwise uses the effects of [[Spells/One with Plants|One with Plants]].\n* * *\n\nThe monster changes its shape indefinitely. It can use this action again to return to its natural shape or adopt a new shape. Unless otherwise noted, a monster cannot use Change Shape to appear as a specific individual. Using Change Shape counts as creating a disguise for the [[Actions/Impersonate|Impersonate]] use of Deception. The monster's transformation automatically defeats Perception DCs to determine whether the creature is a member of the ancestry or creature type into which it transformed, and it gains a +4 status bonus to its Deception DC to prevent others from seeing through its disguise. Change Shape abilities specify what shapes the monster can adopt. The monster doesn't gain any special abilities of the new shape, only its physical form. For example, in each shape, it replaces its normal Speeds and Strikes, and might potentially change its senses or size. Any changes are listed in its stat block."

  - name: "Short Flight"
    desc: "`pf2:1` (concentrate,occult) `pf2:1` to `pf2:2`\n\n**Frequency** once per round\n\n**Requirements** The gourd leshy witch is wielding a broom\n* * *\n\n**Effect** The gourd leshy hops on their broom, which briefly takes flight. The witch Flies 20 feet (or 40 feet if they spend 2 actions), though they must end this movement on solid ground or fall at the end of their turn."

  - name: "Sweeping Spell"
    desc: "`pf2:1` (manipulate,occult,spellshape) **Requirements** The gourd leshy witch is wielding their broom\n* * *\n\n**Effect** If the next action the gourd leshy witch uses is to cast a non-cantrip spell that deals damage to a single target, the witch's broom flies out and attempts to [[Actions/shove options=sweeping-spell|shove options=sweeping-spell]] that creature with an Athletics modifier of +16. On a critical success, the target is also knocked [[Conditions/Prone|Prone]]. The broom immediately returns to the gourd leshy witch's hand."
 
```

```encounter-table
name: Gourd Leshy Witch
creatures:
  - 1: Gourd Leshy Witch
```



Some spooky leshies learn the ways of occult spellcasting from strange spirits of nature that lurk just out of sight or under cover of darkness. These witches treat their brooms as their familiars, imbuing the wood and straw with a sliver of sentience.

* * *

Nature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.
