---
title: "Yamaraj"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-monster-core.Actor.00uNOPsU5VognIcB" 
tags:
  - pf2e/creature/type/monitor
  - pf2e/creature/type/psychopomp
  - pf2eMonster
  - pf2e/creature/level/20
  - remaster
statblock: inline
name: "Yamaraj"
level: 20
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/monitor/psychopomp/yamaraj.webp| ]]
source: "Pathfinder Monster Core"
name: "Yamaraj"
level: "Creature 20"
rare_03: [[Uncommon]]
alignment: ""
size: "huge"
trait_01: [[monitor]]
trait_02: [[psychopomp]]
modifier: 37
perception:
  - name: "Perception"
    desc: "+37; Darkvision, Lifesense 240 Feet, Truesight"
languages: "Chthonian, Diabolic, Empyrean, Requian; Telepathy 120 feet, Truespeech"
skills:
  - name: "Skills"
    desc: "Acrobatics: +33, Athletics: +38, Deception: +34, Diplomacy: +34, Intimidation: +36, Occultism: +38, Religion: +38, Society: +38, Boneyard Lore: +40, Legal Lore: +40"
abilityMods: [10, 7, 7, 10, 7, 6]
speed: 35 feet,  fly 50 feet,  swim 30 feet
sourcebook: "_Pathfinder Monster Core_"
ac: 45
armorclass:
  - name: AC
    desc: "45; __Fort__ +33, __Ref__ +31, __Will__ +35; +1 status to all saves vs. magic"
hp: 375
health:
  - name: ""
  - name: HP
    desc: "375, fast healing 20, lightning drinker; __Immunities__  death effects,  disease,  electricity; __Resistances__ void 20, poison 20"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 60 feet DC 39 Will check\n\n* * *\n"

  - name: "Lightning Drinker"
    desc: "  Whenever a yamaraj would take electricity damage if not for its immunity, its fast healing increases to 40 on its next turn.\n\nDuring that turn, if it uses Beetle Breath, the beetles deal 2d12 additional electricity damage."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +38 (magical, reach 15 feet)\n__Damage__  4d8 + 18 piercing plus improved-grab,spirit-touch,yamaraj-venom"

  - name: "Melee"
    desc: "`pf2:1` Claw +38 (agile, magical, reach 15 feet)\n__Damage__  4d4 + 18 slashing plus spirit-touch"

  - name: "Melee"
    desc: "`pf2:1` Tail +38 (magical, reach 20 feet)\n__Damage__  4d10 + 18 bludgeoning plus spirit-touch"

  - name: "Divine Innate Spells"
    desc: "DC 44, attack +36; __10th __ (1 slots) _[[Spells/Manifestation|Manifestation]]_, _[[Spells/Revival|Revival]]_; __9th __ (4 slots) _[[Spells/Harm|Harm]]_, _[[Spells/Heal|Heal]]_, _[[Spells/Seize Soul|Seize Soul]]_, _[[Spells/Spirit Blast|Spirit Blast]]_, _[[Spells/Wails of the Damned|Wails of the Damned]]_; __8th __ (8 slots) _[[Spells/Chain Lightning|Chain Lightning (x3)]]_, _[[Spells/Dispel Magic|Dispel Magic (x3)]]_, _[[Spells/Wall of Force|Wall of Force]]_; __5th __ (2 slots) _[[Spells/Mind Probe|Mind Probe (At will)]]_, _[[Spells/Translocate|Translocate (At will)]]_\n__Constant__  __(10th)__ _[[Spells/Truesight|Truesight]]_"

  - name: "Rituals"
    desc: "_[[Spells/Call Spirit|Call Spirit]]_, _[[Spells/Resurrect|Resurrect]]_"

  - name: "Beetle Breath"
    desc: "`pf2:2` (divine) The yamaraj breathes a blast of beetles in a @Template[cone|distance:50] that deals 14d8 slashing damage and 4d8 persistent slashing damage to creatures in the area with a DC 42 Reflex check save.\n\nIt can't use Beetle Breath again for 1d4 rounds.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes half damage and is [[Conditions/Sickened|Sickened 1]].\n\n**Failure** The creature takes full damage and is [[Conditions/Sickened|Sickened 2]].\n\n**Critical Failure** The creature takes double damage and is [[Conditions/Sickened|Sickened 3]]."

  - name: "Final Judgment"
    desc: "  A yamaraj's [[Spells/Manifestation|Manifestation]] spells are used only to pronounce judgment, typically either to restore a dead or destroyed creature to life, bind a creature to the Boneyard, or banish a creature from the Boneyard."

  - name: "Shepherd's Touch"
    desc: " (incorporeal) A yamaraj's Strikes affect incorporeal creatures with the effects of a _[[Equipment/Ghost Touch|Ghost Touch]]_ property rune and deal 3d6 void damage to living creatures and 3d6 vitality damage to undead."

  - name: "Yamaraj Venom"
    desc: " (poison) While a creature is clumsy from this poison, it is [[Conditions/Doomed|Doomed]] with the same value;\n\n**Saving Throw** DC 42 Fortitude check\n* * *\n\n**Maximum Duration** 10 rounds\n\n**Stage 1** 3d8 poison damage and [[Conditions/Clumsy|Clumsy 1]] (1 round)\n\n**Stage 2** 5d8 poison damage and [[Conditions/Clumsy|Clumsy 2]] (1 round)\n\n**Stage 3** 7d8 poison damage and [[Conditions/Clumsy|Clumsy 3]] (1 round)"
 
```

```encounter-table
name: Yamaraj
creatures:
  - 1: Yamaraj
```



The greatest judges among the psychopomps are yamarajes, whose wisdom is legendary and whose edicts are unappealable except to ushers or Pharasma herself. A yamaraj resembles an immense dragon with dark, feathery scales and an emotionless, dispassionate gaze behind a feathered mask. When not serving as the senior magistrates, lords, and generals of the Boneyard, yamarajes pursue highly individualistic hobbies, such as gardening or literature.

* * *

Psychopomps are guardians and shepherds of the dead in the Boneyard, the vast plane of graves where mortal souls are judged and sent on to their eternal rewards or damnations. Psychopomps ensure that the dead come to terms with their transition from mortality and are properly sorted into the appropriate afterlife. They also protect souls from being preyed upon by supernatural predators. Nearly all psychopomps wear masks, especially when they're likely to be interacting with mortals, although the types of masks they wear are as varied as the psychopomps themselves. The courts of the Boneyard preside in Requian, a somber yet melodic language spoken slowly with various tonal shifts.

Many psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.
