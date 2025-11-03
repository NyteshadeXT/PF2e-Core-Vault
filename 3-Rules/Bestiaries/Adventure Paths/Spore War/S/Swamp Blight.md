---
title: "Swamp Blight"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.Gu4ItQtKIgtQ7ZRB" 
tags:
  - pf2e/creature/type/blight
  - pf2e/creature/type/ooze
  - pf2eMonster
  - pf2e/creature/level/17
  - remaster
statblock: inline
name: "Swamp Blight"
level: 17
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #211: The Secret of Deathstalk Tower"
name: "Swamp Blight"
level: "Creature 17"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[blight]]
trait_02: [[ooze]]
modifier: 29
perception:
  - name: "Perception"
    desc: "+29; Darkvision"
languages: "Aklo, Common, Fey; Telepathy (within cursed domain)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +32, Athletics: +33, Deception: +30, Intimidation: +30, Nature: +29, Stealth: +32, Survival: +27, Swamp Lore: +29"
abilityMods: [8, 7, 8, 4, 4, 5]
speed: 25 feet,  swim 30 feet
sourcebook: "_Pathfinder #211: The Secret of Deathstalk Tower_"
ac: 38
armorclass:
  - name: AC
    desc: "38; __Fort__ +33, __Ref__ +26, __Will__ +29"
hp: 300
health:
  - name: ""
  - name: HP
    desc: "300, fast healing 30, rejuvenation; __Immunities__  acid,  bleed,  critical hits,  precision"
abilities_top:
  - name: ""

  - name: "Mosquito Aura"
    desc: " (aura,primal) 30 feet. Mosquitoes surround the blight. The mosquitoes ignore creatures the blight designates as allies as well as any who are at full HP. All other creatures who enter the aura or begin their turn within it take 2d6 persistent bleed damage with a DC 35 Fortitude check save.\n* * *\n\n**Critical Success** The creature takes no damage.\n\n**Success** The creature takes half damage.\n\n**Failure** The creature takes full damage and is [[Conditions/Sickened|Sickened 1]].\n\n**Critical Failure** The creature takes double damage and is [[Conditions/Sickened|Sickened 2]]."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Fast Healing|Fast Healing 30]]"
    desc: "  A monster with this ability regains the given number of Hit Points each round at the beginning of its turn."

  - name: "Putrefied Expulsion"
    desc: "`pf2:r`  **Trigger** A creature within 20 feet of the swamp blight deals damage to the blight\n* * *\n\n**Effect** The swamp blight violently expels putrefied organic matter at their attacker, making a decaying flesh Strike against them."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Stinger"
    desc: "+33 (magical)\n__Damage__  2d6 acid 3d8 + 12 piercing"

  - name: "**Ranged** `pf2:1` Decaying Flesh"
    desc: "+32 (magical, range increment 60 feet)\n__Damage__  3d8 + 12 bludgeoning plus splatter-viscera"

  - name: "Primal Innate Spells"
    desc: "DC 38, attack +30; __9th __  _[[Spells/Mirage|Mirage]]_; __8th __  _[[Spells/Dominate|Dominate]]_; __7th __  _[[Spells/Vomit Swarm|Vomit Swarm (x3)]]_; __6th __  _[[Spells/Dominate|Dominate (At Will)]]_; __5th __  _[[Spells/Command|Command (At Will, Plants Only)]]_, _[[Spells/Nature's Pathway|Nature's Pathway (At Will, Within Cursed Domain Only)]]_"

  - name: "Rituals"
    desc: "_Blight_"

  - name: "[[Creature Family Ability Glossary/(Blight) Blight Domination|Blight Domination]]"
    desc: "  All blights can cast [[Spells/Dominate|Dominate]] as an innate primal spell but can target only animals, beasts, fungi, oozes, plants, or undead that are located inside their cursed domain. If a creature dominated by this spell leaves the cursed domain, the effects of _dominate_ immediately end, but as long as the dominated creature remains in the cursed domain, the duration is unlimited. When a blight targets a mindless fungi, ooze, or plant, its _dominate_ spell loses the mental trait."

  - name: "Call of the Mire"
    desc: "`pf2:1` (incapacitation,mental,primal) **Frequency** once per round\n* * *\n\n**Effect** An aura of glittering lights surrounds the swamp blight, compelling a target the swamp blight can see that's within 60 feet to move toward it. This is not forced movement and can compel creatures to move through dangerous terrain. The target must attempt a DC 38 Will check save.\n* * *\n\n**Critical Success** The creature is temporarily immune to Call of the Mire for 1 hour.\n\n**Success** The target immediately Strides or otherwise uses their fastest Speed to approach the swamp blight. This movement does not cost the target their actions. On the target's next turn, they cannot willingly move farther away from the blight, but they can otherwise act normally.\n\n**Failure** As success, except that the target spends all of their actions on their next turn also approaching the blight if they are not already adjacent, and they cannot take any other actions for 1 round. Additionally, the target cannot willingly move farther away from the blight for 1 minute.\n\n**Critical Failure** As failure, except that the creature's only actions are to approach the blight for 1 minute."

  - name: "[[Creature Family Ability Glossary/(Blight) Cursed Domain|Cursed Domain]]"
    desc: " (curse,primal,void) Humanoid creatures that die in a swamp blight's cursed domain are infused with void energy. After 24 hours, they rise as undead creatures of their level of lower. Creatures whose bodies were intact typically become zombies or mummies, while those whose bodies were severely damaged typically rise as shadows or bhutas. These undead are not automatically under the swamp blight's direct control, but they can potentially be dominated by the swamp blight.\n* * *\n\nOnce per year, when in a terrain that is compatible with its type (such as a swamp for a swamp blight), the blight can infuse the land around it with its corrupted essence by performing a rite that takes one day. The region in a 5-mile radius becomes its cursed domain; this effect does not extend into incompatible terrain and does not move with the blight. The point at which the blight cursed the domain becomes its epicenter.\n\nWithin their cursed domain, a blight ignores all non-magical difficult terrain and always gains the benefits of the [[Actions/Cover Tracks|Cover Tracks]] action. Blights also have an imprecise sense for the locations of all creatures within their domain and can communicate with all sapient creatures they detect within their domain using telepathy. Each blight's cursed domain has additional properties specific to the blight's type. A blight outside of a cursed domain becomes [[Conditions/Slowed|Slowed 1]] until it returns to its own or another blight's cursed domain.\n\nRemoving this curse requires a character with the [[Feats/Break Curse|Break Curse]] feat (or a similar ability); this activity must be performed at the cursed domain's epicenter. If the blight that cursed the domain is dead, checks to counteract a cursed domain gain a +4 circumstance bonus."

  - name: "[[Creature Family Ability Glossary/(Blight) Oversee Domain|Oversee Domain]]"
    desc: "`pf2:1` (concentrate,primal) The blight projects its senses to any point in its cursed domain, gaining a precise sense of its surroundings with a 500-foot radius until the end of its next turn. A blight can cast [[Spells/Dominate|Dominate]] through this sensory link. A blight can Sustain this ability, but cannot use it to extend its senses beyond the edges of its domain."

  - name: "[[Creature Family Ability Glossary/(Blight) Rejuvenation|Rejuvenation]]"
    desc: " (primal) If a blight is slain within its cursed domain, its body melts into the surrounding environment and a new blight of the same type spontaneously forms in 1d10 days at the cursed domain's epicenter unless the curse is removed before then. The new blight retains all the memories of the previous blight."

  - name: "Splatter Viscera"
    desc: "  Targets hit by a decaying flesh Strike must succeed at a DC 40 Fortitude check save or be [[Conditions/Sickened|Sickened 1]] ([[Conditions/Sickened|Sickened 2]] on a critical failure). This condition is cumulative with itself and with the sickened condition from the mosquito aura, up to a maximum value of [[Conditions/Sickened|Sickened 4]]. If the Strike critically hits, the target also takes 2d6 persistent acid damage."
 
```

```encounter-table
name: Swamp Blight
creatures:
  - 1: Swamp Blight
```



A swamp blight appears as a quivering blob of rancid brown and green mud from which dozens of hateful red eyes peer.

* * *

Blights are corruptions of nature's wrath.

## Swampy Undead

While a swamp blight can dominate undead in its cursed domain, it prefers to use this power to gather and control undead that would prosper in a swampy environment. When building an encounter with a swamp blight, consider adjusting existing undead to match more thematically with the swampland environment, and avoid using undead that wouldn't make sense in such a region. Adjusting an undead creature's innate spells to be primal spells associated with swampy regions is a great way to achieve this customization.
