---
title: "Toy Spy"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.i6TrGVPWBmO0OJfs" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/3
statblock: inline
name: "Toy Spy"
level: 3
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/toy_spy.webp| ]]
source: "Battlezoo Bestiary"
name: "Toy Spy"
level: "Creature 3"

alignment: ""
size: "tiny"
trait_01: [[construct]]
trait_02: [[mindless]]
modifier: 9
perception:
  - name: "Perception"
    desc: "+9; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +9, Stealth: +11"
abilityMods: [-3, 4, 3, -5, 0, -5]
speed: 25 feet,  climb 15 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__ +8, __Ref__ +11, __Will__ +7"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40; __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  mental,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  spirit,  vitality,  void; __Weaknesses__ bludgeoning 5"
abilities_top:
  - name: ""

  - name: "Inconspicuous"
    desc: "  Toys and curiosities are fairly common items among the nobility, and the toy spy uses this fact to its advantage. It can move 5 feet farther when it takes the Sneak action, up to its Speed. In addition, as long as it continues to use Sneak actions and succeed at its Stealth check, a toy spy doesn't become observed if it doesn't have cover or greater cover and isn't [[Conditions/Concealed|Concealed]] at the end of the Sneak action, as long as it has cover or greater cover or is concealed at the end of its turn."

  - name: "Keep Track"
    desc: "  Upon its creation, a toy spy is connected to a mundane rock called a tracking stone. While holding the stone and speaking to the toy spy directly, the wielder can instruct the toy spy to perform a simple action with a trigger. When a specified trigger occurs, the tracking stone vibrates. The stone's holder can spend an action at any time to know a toy spy's relative location up to 500 feet away. In addition, the stone's holder can spend an action to order the toy spy to attack whatever triggered the stone to vibrate. Up to three actions can be specified as triggers for this ability. This ability does not interfere with the toy spy's Mimic Toy action."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Fist +9 (finesse, nonlethal)\n__Damage__  1d4 - 3 bludgeoning"

  - name: "Ranged"
    desc: "`pf2:1` Needle +11 (range increment 20 feet)\n__Damage__  1d4 piercing plus needle-poison"

  - name: "Arcane Innate Spells"
    desc: "DC 15, attack +7; __2nd __ (1 slots) _[[Spells/Revealing Light|Glitterdust]]_; __1st __ (1 slots) _[[Spells/Dizzying Colors|Color Spray]]_, _[[Spells/Sleep|Sleep]]_\n__Cantrips__  __(2nd)__ _[[Spells/Daze|Daze]]_, _[[Spells/Ghost Sound|Ghost Sound]]_"

  - name: "Needle Poison"
    desc: "  A toy spy's needle Strike inflicts whatever injury poison is loaded into the spy's cartridge-typically something nonlethal like [[Equipment/Lethargy Poison|Lethargy Poison]]. A toy spy's creator can Interact with a toy spy in order to load it with a dose of poison."

  - name: "Mimic Toy"
    desc: "`pf2:1` (concentrate) Until the next time it acts, the toy spy appears to be a toy. It has an automatic result of 23 on Deception checks and DCs to pass as a toy."
 
```

```encounter-table
name: Toy Spy
creatures:
  - 1: Toy Spy
```



The toy spy is an unassuming yet versatile constructed minion useful in matters of espionage and security. It is a popular contraption among protective noble parents, paranoid shopkeeps, and wily wizards with questionable senses of humor. Most toy spies are crafted in the shape of a cute stuffed animal or a common knicknack unlikely to draw undo attention. In this unassuming guise, the toy spy does exactly what its name suggests, performing surveillance or reconnaissance on its creator's behalf.

Parents and guardians sometimes gift their wards toy spies in order to determine when a child breaks a house rule or otherwise makes itself a menace. Other times, a toy spy might serve as a discreet and inexpensive way to protect one's home. Tinkers, inventors, and crafters learned long ago that toy spies make for much more affordable (and much less destructive) watchdogs than larger golems or animated objects.

Toy spies are not designed for combat, though they do possess a few offensive capabilities, which they typically resort to only if attacked or if some other pre-specified condition is met. In addition, each toy spy is keyed to a special stone that allows its owner to identify its location and also order the spy to cast a simple spell such as _[[Spells/Sleep|Sleep]]_. Once it has disabled or distracted a threat, a toy spy typically escapes as quickly as possible to safety.

## Proxy's Proxies

Aristocrats and nobles steeped in politics and rivalries prize toy spies for their ability to gather intel. However, divination experts are more than capable of tracing a captured toy spy back to its tracking stone. To throw off an investigator's search, toy spy owners sometimes give the spy's tracking stone to another minion, such as a golem or animated object with orders on how and when to use the stone.

## Monster Part Subsystem

**Toy Spy Creature 3**

**Monster Parts** 7/18/30 gp

**Eligible Refinements** weapons (bludgeoning, piercing), armor (light), perception item, skill items (Acrobatics, Stealth)

**Eligible Imbued Properties** bane, constitution, dexterity, energy resistant (negative, positive), mental, sensory (darkvision), spells (Arcane: color spray, daze, ghost sound, glitterdust, sleep), wild
