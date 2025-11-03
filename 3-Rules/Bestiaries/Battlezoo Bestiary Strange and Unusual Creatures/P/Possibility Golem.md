---
title: "Possibility Golem"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-su-pf2e.pf2e-battlezoo-su-actors.Actor.IrJX3uRXdpMeTiSA" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/golem
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/14
statblock: inline
name: "Possibility Golem"
level: 14
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-su-pf2e/art/Portraits/possibility-golem.webp| ]]
source: "Battlezoo Bestiary: Strange and Unusual"
name: "Possibility Golem"
level: "Creature 14"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[construct]]
trait_02: [[golem]]
trait_03: [[mindless]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; Darkvision"
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +27, Athletics: +30, Stealth: +27"
abilityMods: [8, 4, 6, -4, 0, -5]
speed: 30 feet
sourcebook: "_Battlezoo Bestiary: Strange and Unusual_"
ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__ +28, __Ref__ +22, __Will__ +25"
hp: 255
health:
  - name: ""
  - name: HP
    desc: "255; __Immunities__  magic,  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  spirit,  unconscious,  vitality,  void,  mental; __Weaknesses__ area damage 10, splash damage 10; __Resistances__ physical 10 (except adamantine)"
abilities_top:
  - name: ""

  - name: "Cloud of Possibility"
    desc: " (arcane,teleportation) A possibility golem simultaneously exists and does not exist in every space within a 60 foot by 60 foot square area. Because of this, other creatures can move through its space freely, though the space is difficult terrain for other creatures. As it continually exists and doesn't exist in each space, the possibility golem is always [[undefined]]. Even _[[Spells/See the Unseen|See Invisibility]]_ won't reveal it, although _[[Spells/Planar Seal|Dimensional Lock]]_ or similar magic reduces the possibility golem to the usual space of a Large creature, 10 feet by 10 feet. A possibility golem's reach extends from and within its Cloud of Possibility."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Attack of Opportunity|Attack of Opportunity]]"
    desc: "`pf2:r`  "

  - name: "Collapse Wave"
    desc: " (arcane,teleportation) When a possibility golem is reduced to 0 Hit Points, it duplicates into multiple copies of itself in multiple positions for one final attack. The golem makes a phase fist Strike against each target to which it previously dealt damage within the last minute. These attacks are unaffected by its multiple attack penalty. Afterward, it is destroyed."

  - name: "[[Creature Family Ability Glossary/(Golem) Golem Antimagic|Golem Antimagic]]"
    desc: "  harmed by force and sonic (8d10, 2d10 from areas or persistent damage); healed by fire and electricity (area 2d10 healing); slowed by cold\n* * *\n\nA golem is immune to spells and magical abilities other than its own, but each type of golem is affected by a few types of magic in special ways. These exceptions are listed in shortened form in the golem's stat block, with the full rules appearing here. If an entry lists multiple types (such as \"cold and water\"), either type of spell can affect the golem.\n\n*   **Harmed By** Any magic of this type that targets the golem causes it to take the listed amount of damage (this damage has no type) instead of the usual effect. If the golem starts its turn in an area of magic of this type or is affected by a persistent effect of the appropriate type, it takes the damage listed in the parenthetical.\n*   **Healed By** Any magic of this type that targets the golem makes the golem lose the slowed condition and gain HP equal to half the damage the spell would have dealt. If the golem starts its turn in an area of this type of magic, it gains the HP listed in the parenthetical.\n*   **Slowed By** Any magic of this type that targets the golem causes it to be [[Conditions/Slowed|Slowed 1]] for 2d6 rounds instead of the usual effect. If the golem starts its turn in an area of this type of magic, it's slowed 1 for that round.\n*   **Vulnerable To** Each golem is vulnerable to one or more specific spells, with the effects described in its stat block."

  - name: "Vulnerable to Observation"
    desc: "  A successful [[undefined]] action against the golem's Stealth DC collapses the golem's waveform temporarily, locking it into one position. This removes the effect of Cloud of Possibility until the end of the Seeking creature's next turn, locking the golem into a single space like a normal Large creature. The Seeking creature can choose where the golem appears within the overlap of their Seek action and the golem's Cloud of Possibility."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Fist"
    desc: "+28 (magical, reach 10 feet)\n__Damage__  3d10 + 17 bludgeoning"

  - name: "**Melee** `pf2:1` Phase Fist"
    desc: "+28 (agile, magical, reach 15 feet)\n__Damage__  3d8 + 17 bludgeoning plus untether-from-reality"

  - name: "Impossible Flank"
    desc: "`pf2:2`  The golem makes two fist Strikes against a creature within the Golem's Cloud of Possibility, attacking once from the front and then immediately following up with an attack from behind. Whether or not the first attack hits, the second attack deals 2d6 additional force damage. Apply the multiple attack penalty to the Strikes normally."

  - name: "Omnipunch"
    desc: "`pf2:3`  The possibility golem makes a fist Strike against each target within its Cloud of Possibility. These attacks count toward the golem's multiple attack penalty, but its multiple attack penalty doesn't increase until after all the attacks. The golem cannot use this ability again for 1d4 rounds."

  - name: "Untether from Reality"
    desc: "  Upon Striking a creature with its phase fist, the golem can attempt to sever its opponent's connection to reality. The target must attempt a DC 31 Will check save. Afterward, the creature is temporarily immune for 1 minute.\n* * *\n\n**Critical Success** The target is unaffected.\n\n**Success** The target flickers in and out of existence. It is [[undefined]].\n\n**Failure** The target vanishes from its current position and reappears 10 feet away in a random direction determined by the GM; the movement doesn't trigger reactions. The target is [[undefined]].\n\n**Critical Failure** As failure, but the target is sickened 2 and [[undefined]] for 1 minute."
 
```

```encounter-table
name: Possibility Golem
creatures:
  - 1: Possibility Golem
```



When golem-making goes cataclysmically wrong, causing the destruction of the intended form, the animating spirit sometimes does not simply dissipate. In these rare cases, the spirit maintains a memory of form and a level of existence as a cloud of possible golems. Broken by this unstable half-life, it is possible that golems will mindlessly seek out the destruction of all living things.

## What Dreams May Come

No golem creator ever wants to experience the type of accident that creates the possibility of a golem, but they all want the opportunity to study one that comes into existence. The cloud of possible golems includes all possible golems, including ones that have not yet been imagined. Studying the golems that manifest and reverse engineering what they see could give inventors an immense advantage, provided they can survive the encounter.

## Suggested Monster Parts

**Monster Parts** 560/1,250/2,300 gp

**Eligible Refinements** weapons (bludgeoning), armor (heavy), shield, perception item, skill items (Acrobatics, Athletics, Stealth)

**Eligible Imbued Properties** bane, constitution, elongating, energy resistant (negative, positive), force, mirrored, strength, sturdy, wild
