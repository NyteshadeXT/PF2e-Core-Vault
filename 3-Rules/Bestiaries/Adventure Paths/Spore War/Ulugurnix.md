---
title: "Ulugurnix"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.mp4ovsYcXGRncFCR" 
tags:
  - pf2e/creature/type/amphibious
  - pf2e/creature/type/dragon
  - pf2e/creature/type/ghoul
  - pf2e/creature/type/primal
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Ulugurnix"
level: 11
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Ulugurnix"
level: "Creature 11"
rare_03: [[Unique]]
alignment: ""
size: "Large"
trait_01: [[amphibious]]
trait_02: [[dragon]]
trait_03: [[ghoul]]
trait_04: [[primal]]
trait_05: [[undead]]
trait_06: [[unholy]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; Darkvision, Scent (Imprecise) 60 Feet"
languages: "Common, Draconic, Necril"
skills:
  - name: "Skills"
    desc: "Acrobatics: +16, Arcana: +19, Athletics: +22, Deception: +21, Diplomacy: +19, Intimidation: +21, Nature: +19, Occultism: +19, Society: +17, Stealth: +18, Forest Lore: +19"
abilityMods: [7, 1, 3, 2, 5, 4]
speed: 30 feet,  burrow 5 feet,  fly 120 feet,  swim 30 feet
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 30
armorclass:
  - name: AC
    desc: "30 void healing; __Fort__ +20, __Ref__ +18, __Will__ +22"
hp: 190
health:
  - name: ""
  - name: HP
    desc: "190; __Immunities__  paralyzed,  poison,  sleep,  death effects,  bleed,  disease,  unconscious"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 90 feet DC 27 Will check\n* * *\n\nA creature that first enters the area must attempt a Will save.\n\nRegardless of the result of the saving throw, the creature is temporarily immune to this monster's Frightful Presence for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected by the presence.\n\n**Success** The creature is [[Conditions/Frightened|Frightened 1]].\n\n**Failure** The creature is [[Conditions/Frightened|Frightened 2]].\n\n**Critical Failure** The creature is [[Conditions/Frightened|Frightened 4]]."

  - name: "[[Bestiary Ability Glossary/Stench|Stench]]"
    desc: " (aura,olfactory) 10 feet, DC 27 Fortitude check\n* * *\n\nA creature entering the aura or starting its turn in the area must succeed at a Fortitude save or become [[Conditions/Sickened|Sickened 1]] (plus [[Conditions/Slowed|Slowed 1]] as long as it's sickened on a critical failure). A creature that succeeds at its save or recovers from being sickened is temporarily immune to all stench auras for 1 minute."

  - name: "Twisting Tail"
    desc: "`pf2:r`  **Trigger** A creature within reach of the dragon's tail uses a move action or leaves a square during a move action it's using\n* * *\n\n**Effect** The dragon makes a tail Strike at the creature with a –2 penalty. If the Strike hits, the dragon disrupts the creature's action."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+24 (magical, poison, reach 10 feet, unarmed)\n__Damage__  2d12 + 10 piercing 2d4 poison"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+24 (agile, magical, unarmed)\n__Damage__  2d10 + 10 slashing plus grab"

  - name: "**Melee** `pf2:1` Tail"
    desc: "+22 (magical, reach 15 feet)\n__Damage__  2d8 + 10 bludgeoning"

  - name: "**Melee** `pf2:1` Horn"
    desc: "+22 (magical, reach 10 feet, unarmed)\n__Damage__  1d12 + 10 piercing"

  - name: "Primal Innate Spells"
    desc: "DC 30, attack +22; __2nd __  _[[Spells/Entangling Flora|Entangling Flora (x2)]]_; __1st __  _[[Spells/Charm|Charm]]_"

  - name: "[[Creature Family Ability Glossary/(Ghoul) Consume Flesh|Consume Flesh]]"
    desc: "`pf2:1` (manipulate) **Requirements** The ghoul is adjacent to the corpse of a creature that died within the last hour.\n* * *\n\n**Effect** The ghoul devours a chunk of the corpse and regains 6d6 healing Hit Points.\n\nIt can regain Hit Points from any given corpse only once."

  - name: "Draconic Frenzy"
    desc: "`pf2:2`  The dragon makes two claw Strikes and one horn Strike in any order."

  - name: "Draconic Momentum"
    desc: "  The dragon recharges their Poison Breath whenever they score a critical hit with a Strike."

  - name: "Forest Passage"
    desc: "  The horned dragon ignores any difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don't impede their progress."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Ghoul Whispers|Ghoul Whispers]]"
    desc: "`pf2:1` (auditory,linguistic,occult) **Requirements** A [[Conditions/Grabbed|Grabbed]], [[Conditions/Paralyzed|Paralyzed]], [[Conditions/Restrained|Restrained]], or [[Conditions/Unconscious|Unconscious]] creature is within the ghoul's reach\n* * *\n\n**Effect** The ghoul whispers dark thoughts and vile cravings into the creature's ears. The creature must save against the forbidden cravings curse.\n\n**Forbidden Cravings** (curse) A creature can still eat and drink while sickened by this curse\n\n**Saving Throw** DC 30 Will check, using the high spell DC for the ghoul's level\n\n**Stage 1** carrier with no ill effects (1 day)\n\n**Stage 2** 2d6 void damage and the target is [[Conditions/Sickened|Sickened 1]] until it consumes raw meat (1 day)\n\n**Stage 3** as stage 2\n\n**Stage 4** as stage 2 unless the target has consumed raw meat in the past 24 hours, then it takes 4d6 void damage and is [[Conditions/Sickened|Sickened 2]] until it consumes raw meat;\n\n**Stage 5** if the creature has eaten raw meat in the past 24 hours, it dies and rises as a ghoul, if not, it returns to stage 4"

  - name: "[[Creature Family Ability Glossary/(Ghoul) Grave Knowledge|Grave Knowledge]]"
    desc: " (occult) **Frequency** once per hour\n* * *\n\n**Effect** The ghoul calls upon knowledge it retains from one creature it has consumed in the past 7 days. The ghoul attempts a skill check using a skill in which the consumed creature was trained (if it's unclear whether the creature was trained, the GM decides). The ghoul is treated as trained and uses a +23 modifier. This takes the same amount of actions or time as usual for the check.\n\nThe ghoul can instead automatically learn something specific known by a creature it consumed in the last 7 days, like the location of a [[Conditions/Hidden|Hidden]] treasure or the name of a loved one. The ghoul can do this only once for a given creature, no matter how much of its flesh the ghoul consumed."

  - name: "Impaling Charge"
    desc: "`pf2:2`  **Requirements** The dragon doesn't have a creature impaled on their horn\n* * *\n\n**Effect** The dragon attempts to gore a foe. They Stride, then attempt a horn Strike. On a hit, the target becomes impaled on the dragon's horn. The creature is [[Conditions/Grabbed|Grabbed]] while on the horn (and can attempt to [[Actions/Escape|Escape]] as normal). The dragon doesn't need to use additional actions to keep the impaled creature grabbed. If the dragon moves, they bring the grabbed creature along with them."

  - name: "Poison Breath"
    desc: "`pf2:2` (poison,primal) Ulugurnix breathes a toxic cloud that deals 12d6 poison damage in a 40-foot cone (DC 30 Fortitude check save). He can't use Poison Breath again for 1d4 rounds."
 
```

```encounter-table
name: Ulugurnix
creatures:
  - 1: Ulugurnix
```


Variant male horned dragon ghoul

The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.

* * *

Dragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.
