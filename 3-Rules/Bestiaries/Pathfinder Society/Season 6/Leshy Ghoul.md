---
title: "Leshy Ghoul"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-6-bestiary.Actor.ixPuh9vPLklQNjLw" 
tags:
  - pf2e/creature/type/fungus
  - pf2e/creature/type/ghoul
  - pf2e/creature/type/leshy
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/3
  - remaster
statblock: inline
name: "Leshy Ghoul"
level: 3
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #6-06: Rotten Apples"
name: "Leshy Ghoul"
level: "Creature 3"
rare_03: [[Uncommon]]
alignment: ""
size: "Small"
trait_01: [[fungus]]
trait_02: [[ghoul]]
trait_03: [[leshy]]
trait_04: [[undead]]
trait_05: [[unholy]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Darkvision"
languages: "Common, Fey, Necril; speak with plants (fungi only)"
skills:
  - name: "Skills"
    desc: "Athletics: +7, Nature: +7, Stealth: +9, Survival: +10"
abilityMods: [2, 4, 2, -1, 2, 0]
speed: 25 feet,  burrow 5 feet
sourcebook: "_Pathfinder Society Scenario #6-06: Rotten Apples_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +9, __Ref__ +11, __Will__ +7"
hp: 30
health:
  - name: ""
  - name: HP
    desc: "30, void healing; __Immunities__  death effects,  disease,  paralyzed,  poison,  unconscious,  bleed"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Actor.ixPuh9vPLklQNjLw.Item.Q56uznjD6F3ZIrgi|Rotten Burst]]"
    desc: " (healing,void) When a leshy ghoul dies, a burst of twisted primal void energy explodes from its body, restoring 2d8 Hit Points to each undead fungi or plant creature in a 30-foot emanation and killing all natural plants, though merely causing discomfort to creatures with the plant trait. This area is filled with rotten vegetation, becoming difficult terrain."

  - name: "[[Bestiary Ability Glossary/Stench|Stench]]"
    desc: " (aura,olfactory) 10 feet, DC 17 Fortitude check\n* * *\n\nA creature entering the aura or starting its turn in the area must succeed at a Fortitude save or become [[Conditions/Sickened|Sickened 1]] (plus [[Conditions/Slowed|Slowed 1]] as long as it's sickened on a critical failure). A creature that succeeds at its save or recovers from being sickened is temporarily immune to all stench auras for 1 minute."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+11 (finesse, unarmed)\n__Damage__  1d8 + 3 piercing"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+11 (agile, finesse, unarmed)\n__Damage__  1d6 + 3 slashing plus grab"

  - name: "**Ranged** `pf2:1` Spore Pod"
    desc: "+11 (range increment 30 feet)\n__Damage__  1d6 + 3 bludgeoning plus spores"

  - name: "Primal Innate Spells"
    desc: "DC 17, attack +9; __3rd __  _[[Spells/Speak with Plants|Speak with Plants (Constant, Fungi Only)]]_"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) The leshy ghoul transforms into a Small giant mushroom or patch of fungi. This ability otherwise uses the effects of [[Spells/One with Plants|One with Plants]].\n* * *\n\nThe monster changes its shape indefinitely. It can use this action again to return to its natural shape or adopt a new shape. Unless otherwise noted, a monster cannot use Change Shape to appear as a specific individual. Using Change Shape counts as creating a disguise for the [[Actions/Impersonate|Impersonate]] use of Deception. The monster's transformation automatically defeats Perception DCs to determine whether the creature is a member of the ancestry or creature type into which it transformed, and it gains a +4 status bonus to its Deception DC to prevent others from seeing through its disguise. Change Shape abilities specify what shapes the monster can adopt. The monster doesn't gain any special abilities of the new shape, only its physical form. For example, in each shape, it replaces its normal Speeds and Strikes, and might potentially change its senses or size. Any changes are listed in its stat block."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Consume Flesh|Consume Flesh]]"
    desc: "`pf2:1` (manipulate) **Requirements** The ghoul is adjacent to the corpse of a creature that died within the last hour\n* * *\n\n**Effect** The ghoul devours a chunk of the corpse and regains 3d6 healing Hit Points."

  - name: "Forbidden Cravings"
    desc: " (curse) A creature can still eat and drink while sickened by this curse\n\n**Saving Throw** DC 20 Will check\n\n**Stage 1** carrier with no ill effects (1 day)\n\n**Stage 2** 2d6 void damage and the target is [[Conditions/Sickened|Sickened 1]] until it consumes raw meat (1 day)\n\n**Stage 3** as stage 2\n\n**Stage 4** as stage 2 unless the target has consumed raw meat in the past 24 hours, then it takes 4d6 void damage and is [[Conditions/Sickened|Sickened 2]] until it consumes raw meat\n\n**Stage 5** if the creature has eaten raw meat in the past 24 hours, it dies and rises as a ghoul, if not, it returns to stage 4"

  - name: "[[Creature Family Ability Glossary/(Ghoul) Ghoul Whispers|Ghoul Whispers]]"
    desc: "`pf2:1` (auditory,linguistic,occult) **Requirements** A [[Conditions/Grabbed|Grabbed]], [[Conditions/Paralyzed|Paralyzed]],[[Conditions/Restrained|Restrained]], or [[Conditions/Unconscious|Unconscious]] creature is within the ghoul's reach\n* * *\n\n**Effect** The ghoul whispers dark thoughts and vile cravings into the creature's ears. The creature must save against the forbidden cravings curse."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Grave Knowledge|Grave Knowledge]]"
    desc: " (occult) **Frequency** once per hour\n* * *\n\n**Effect** The ghoul calls upon knowledge it retains from one creature it has consumed in the past 7 days. The ghoul attempts a skill check using a skill in which the consumed creature was trained (if it's unclear whether the creature was trained, the GM decides). The ghoul is treated as trained and uses the high skill modifier for the ghoul's level. This takes the same amount of actions or time as usual for the check.\n\nThe ghoul can instead automatically learn something specific known by a creature it consumed in the last 7 days, like the location of a [[Conditions/Hidden|Hidden]] treasure or the name of a loved one. The ghoul can do this only once for a given creature, no matter how much of its flesh the ghoul consumed."

  - name: "Spore Cloud"
    desc: "`pf2:2`  A leshy ghoul can unleash a cloud of spores that irritates the eyes and throats of non-fungus creatures in a 15-foot emanation. Each creature must succeed at a DC 17 Fortitude check save or take 1 persistent poison damage. A creature has its vision reduced as long as the persistent damage continues and can see only within 20 feet."

  - name: "Spores"
    desc: "  A creature that takes damage from a fungus leshy's spore pod Strike must attempt a saving throw with the same DC and effect as its Spore Cloud ability."

  - name: "[[Creature Family Ability Glossary/(Ghoul) Swift Leap|Swift Leap]]"
    desc: "`pf2:1` (move) The ghoul jumps up to half its Speed. This movement doesn't trigger reactions."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Leshy Ghoul
creatures:
  - 1: Leshy Ghoul
```



Few creatures are more ubiquitous to sinister locations such as lonely graveyards and ruined crypts than the flesh-eating undead known as ghouls.
