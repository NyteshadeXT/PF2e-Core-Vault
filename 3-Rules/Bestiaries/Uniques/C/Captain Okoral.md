---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Captain Okoral"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/10
statblock: inline
name: "Captain Okoral"
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: "Captain Okoral"
level: "Creature 10"
token: Captain Okoral.png
size: "Medium"
trait_01: "humanoid"
trait_02: "human"
modifier: 22
perception:
  - name: "Perception"
    desc: "+22;"
languages: "Common, Draconic, Infernal"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +22; __Athletics__ +18; __Deception__ +21; __Intimidation__ +19; __Stealth__ +24; __Thievery__ +23; __Assassin Lore__ +20"
abilityMods: [2, 6, 1, 2, -1, 2]
speed: 25 feet
ac: 29
armorclass:
  - name: AC
    desc: "39; Fort +17, Ref +23, Will +16"
hp: 145
health:
  - name: HP
    desc: "145;"

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+1)|+1]] [[Wounding]] [[Shortsword]] , [[Crossbow]], [[Bolts]] X10, [[armor-potency-2|Armor Potency (+2)]] [[Chain Shirt]], coin pouch (13 gp)"

abilities_mid:
  - name: "Sneak Attack"
    desc: "Captain Okoral deals `dice: 3d6` precision damage to off-guard creatures."
  - name: "Poison Master"
    desc: "Okoral does not risk poisoning himself when applying poisons and gains a +2 circumstance bonus to poison DCs he applies."
  - name: "Uncanny Dodge"
    desc: "Okoral is not off-guard to creatures that are hidden from him."

abilities_bot:  
  - name: "Death Strike"
    desc: "`pf2:2` If Okoral studies a creature for 1 round and then hits it with a Strike while it is off-guard, the target must attempt a DC 29 Fortitude save.\n__Critical Success__ Unaffected.\n__Success__ The target takes `dice: 6d6` additional precision damage.\n__Failure__ The target takes `dice: 12d6` additional precision damage and is [[slowed|slowed 1]] for 1 round.\n__Critical Failure__ The target takes `dice: 12d6` additional precision damage and is [[paralyzed]] for 1 round."
  - name: "Twin Assault"
    desc: "`pf2:2` Okoral makes two short sword Strikes against a creature that is off-guard. The second Strike takes a –2 penalty instead of the normal multiple attack penalty."
  - name: "Skirmish Strike"
    desc: "`pf2:2` Okoral Strides up to half his Speed and makes a Strike."
  - name: "Assassin’s Veil"
    desc: "⬻ Okoral casts [[3-Rules/Character Building/Spells/I/Invisibility|Invisibility]] on himself once per day (arcane, DC 27)."

attacks:
  - name: "Melee-Wounding Shortsword"
    desc: "`pf2:1` +1 Wounding Shortsword +23 (agile, finesse, versatile S); __Damage__ 2d6+8 piercing plus 1d6 persistent bleed"

  - name: "Melee-Shortsword"
    desc: "`pf2:1` +1 Shortsword +23 (agile, finesse, versatile S); __Damage__ 2d6+8 piercing"

  - name: "Ranged-Crossbow"
    desc: "`pf2:1` Crossbow +21 (range increment 120 feet, reload 1); __Damage__ 2d8 piercing"

```

