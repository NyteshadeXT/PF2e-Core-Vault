---
title: "Omelia"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.claws-of-the-tyrant-bestiary.Actor.M2Co6b3pKO3TOWQj" 
tags:
  - pf2e/creature/type/ghoul
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/5
  - remaster
statblock: inline
name: "Omelia"
level: 5
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Claws of the Tyrant"
name: "Omelia"
level: "Creature 5"
rare_03: [[Unique]]
alignment: ""
size: "Medium"
trait_01: [[ghoul]]
trait_02: [[undead]]
trait_03: [[unholy]]
modifier: 12
perception:
  - name: "Perception"
    desc: "+12; Darkvision"
languages: "Common, Necril"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +11, Intimidation: +9, Stealth: +13, Survival: +13, Gravelands Lore: +9"
abilityMods: [3, 4, 3, 2, 4, 2]
speed: 30 feet,  burrow 5 feet
sourcebook: "_Pathfinder Claws of the Tyrant_"
ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__ +11, __Ref__ +13, __Will__ +11"
hp: 75
health:
  - name: ""
  - name: HP
    desc: "75, void healing; __Immunities__  bleed,  death effects,  disease,  paralyzed,  poison,  unconscious"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Composite Longbow|+1 Composite Longbow]], [[Equipment/Leather Armor|Leather Armor]]"
abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Stench|Stench]]"
    desc: " (aura,olfactory) 10 feet, DC 22 Fortitude check\n* * *\n\nA creature entering the aura or starting its turn in the area must succeed at a Fortitude save or become [[Conditions/Sickened|Sickened 1]] (plus [[Conditions/Slowed|Slowed 1]] as long as it's sickened on a critical failure). A creature that succeeds at its save or recovers from being sickened is temporarily immune to all stench auras for 1 minute."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+14 (finesse, unarmed)\n__Damage__  1d8 + 4 piercing"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+14 (finesse, unarmed)\n__Damage__  1d6 + 4 slashing plus grab"

  - name: "**Ranged** `pf2:1` Composite Longbow"
    desc: "+15 (deadly d10, magical, propulsive, range increment 100 feet, reload 0, volley 30 ft.)\n__Damage__  1d8 + 4 piercing"

  - name: "[[Creature Family Ability Glossary/(Ghoul) Consume Flesh|Consume Flesh]]"
    desc: "`pf2:1` (manipulate) **Requirements** The ghoul is adjacent to the corpse of a creature that died within the last hour.\n* * *\n\n**Effect** The ghoul devours a chunk of the corpse and regains 1d6 healing Hit Points.\n\nIt can regain Hit Points from any given corpse only once."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Ghoul Whispers|Ghoul Whispers]]"
    desc: "`pf2:1` (auditory,linguistic,occult) **Requirements** A [[Conditions/Grabbed|Grabbed]], [[Conditions/Paralyzed|Paralyzed]], [[Conditions/Restrained|Restrained]], or [[Conditions/Unconscious|Unconscious]] creature is within the ghoul's reach\n* * *\n\n**Effect** The ghoul whispers dark thoughts and vile cravings into the creature's ears. The creature must save against the forbidden cravings curse.\n\n**Forbidden Cravings** (curse) A creature can still eat and drink while sickened by this curse\n\n**Saving Throw** DC 22 Will check, using the high spell DC for the ghoul's level\n\n**Stage 1** carrier with no ill effects (1 day)\n\n**Stage 2** 2d6 void damage and the target is [[Conditions/Sickened|Sickened 1]] until it consumes raw meat (1 day)\n\n**Stage 3** as stage 2\n\n**Stage 4** as stage 2 unless the target has consumed raw meat in the past 24 hours, then it takes 4d6 void damage and is [[Conditions/Sickened|Sickened 2]] until it consumes raw meat;\n\n**Stage 5** if the creature has eaten raw meat in the past 24 hours, it dies and rises as a ghoul, if not, it returns to stage 4"

  - name: "[[Creature Family Ability Glossary/(Ghoul) Grave Knowledge|Grave Knowledge]]"
    desc: " (occult) +13 skill modifier\n* * *\n\n**Frequency** once per hour\n* * *\n\n**Effect** The ghoul calls upon knowledge it retains from one creature it has consumed in the past 7 days. The ghoul attempts a skill check using a skill in which the consumed creature was trained (if it's unclear whether the creature was trained, the GM decides). The ghoul is treated as trained and uses a +13 modifier. This takes the same amount of actions or time as usual for the check.\n\nThe ghoul can instead automatically learn something specific known by a creature it consumed in the last 7 days, like the location of a [[Conditions/Hidden|Hidden]] treasure or the name of a loved one. The ghoul can do this only once for a given creature, no matter how much of its flesh the ghoul consumed."

  - name: "Hunt Prey"
    desc: "`pf2:1` (concentrate) Omelia designates a single creature she can see and hear, or one she's Tracking, as her prey. She gains a +2 circumstance bonus to Perception checks to [[Actions/Seek|Seek]] the prey and to Survival checks to [[Actions/Track|Track]] the prey. The first time Omelia hits her designated prey in a round, she deals an additional 1d8 precision damage. These effects last until she uses Hunt Prey again."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Swift Leap|Swift Leap]]"
    desc: "`pf2:1` (move) The ghoul jumps up to half its Speed. This movement doesn't trigger reactions."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Omelia
creatures:
  - 1: Omelia
```


Variant female ghoul hunter


