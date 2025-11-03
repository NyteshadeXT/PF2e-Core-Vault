---
title: "Senidaemon"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.mh1WvkpiPRYjHvu8" 
tags:
  - pf2e/creature/type/demon
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/incorporeal
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/8
statblock: inline
name: "Senidaemon"
level: 8
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/senidaemon.webp| ]]
source: "Battlezoo Bestiary"
name: "Senidaemon"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[demon]]
trait_02: [[evil]]
trait_03: [[fiend]]
trait_04: [[incorporeal]]
trait_05: [[unholy]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision, Lifesense 30 Feet"
languages: "Daemonic; can&#x27;t speak any language, telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Stealth: +20"
abilityMods: [-5, 6, 3, 2, 4, 4]
speed:  fly 40 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__ +13, __Ref__ +20, __Will__ +16"
hp: 130
health:
  - name: ""
  - name: HP
    desc: "130; __Immunities__  death effects,  disease,  poison,  precision; __Weaknesses__ holy 10; __Resistances__ all damage 10 (except force or ghost touch; double resistance vs. non-magical)"
abilities_top:
  - name: ""

  - name: "Silent Casting"
    desc: "  The senidaemon can substitute somatic components for verbal components of any spell it casts."

abilities_mid:
  - name: ""
  - name: "Aura of Unmaking"
    desc: " (aura,divine) 30 feet [[Bestiary Ability Glossary/Aura|Aura]]\n\nThe senidaemon radiates entropic energy, threatening the physical and spiritual integrity of living things around it.\n\nThe senidaemon can manifest this ability in one of two ways: unraveling or heat shimmer. Any creature that enters or begins its turn in the aura is affected.\n\nIf the senidaemon is emitting an unraveling aura, creatures take 2d6+6 void damage (DC 24 basic Fortitude save); if it is emitting a heat shimmer, each creature must attempt a DC 24 Fortitude save.\n* * *\n\n**Success** The creature is unaffected.\n\n**Failure** The creature is [[Conditions/Dazzled|Dazzled]].\n\n**Critical Failure** The creature is dazzled and [[undefined]].\n\nThe senidaemon can change its aura from unraveling to heat shimmer and vice versa, or cease or activate its aura, by spending a single action, which has the concentrate trait."

  - name: "Malignant Entropy"
    desc: "`pf2:r` (divine) **Trigger** The senidaemon takes acid, cold, physical, or positive damage;\n* * *\n\n**Effect** The senidaemon glows faintly as it converts the damage it just took into raw power. Until the end of its next turn, the senidaemon's Strikes deal additional damage equal to the number of dice rolled in the triggering attack.\n\n[[Effects/Effect_ Malignant Entropy (1 Dice)|Effect: Malignant Entropy (1 Dice)]]\n\n[[Effects/Effect_ Malignant Entropy (2 Dice)|Effect: Malignant Entropy (2 Dice)]]\n\n[[Effects/Effect_ Malignant Entropy (3 Dice)|Effect: Malignant Entropy (3 Dice)]]\n\n[[Effects/Effect_ Malignant Entropy (4 Dice)|Effect: Malignant Entropy (4 Dice)]]"

  - name: "Soul Erosion"
    desc: " (curse,divine) The senidaemon's presence intensifies spiritual destruction. Any living creature brought to 0 HP within the senidaemon's aura of unmaking must attempt a DC 24 Will save.\n* * *\n\n**Success** The creature is unaffected.\n\n**Failure** The next time the creature dies, the caster of a spell to return it to life must succeed at a DC 25 Religion check. On a success, the curse is lifted and the creature is returned to life as normal for the spell. On a failure, the spell is wasted and the creature remains dead.\n\n**Critical Failure** As failure, and the creature becomes [[Conditions/Doomed|Doomed 1]]."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Molten Hand"
    desc: "+18 (finesse, magical, unholy)\n__Damage__  2d6 + 4 bludgeoning 2d6 spirit"

  - name: "Divine Innate Spells"
    desc: "DC 24, attack +16; __4th __  _[[Spells/Translocate|Dimension Door (At Will)]]_, _[[Spells/Silence|Silence]]_; __1st __  _[[Spells/Detect Alignment|Detect Alignment (At Will) (Good Only)]]_\n__Constant__  __(2nd)__ _[[Spells/Silence|Silence (Self)]]_"
 
```

```encounter-table
name: Senidaemon
creatures:
  - 1: Senidaemon
```



These daemons embody death at the merciless hands of the laws of nature—the inexorable march of entropy itself. Senidaemons are horrifying to look upon, their insubstantial bodies as devoid of light and color as the deepest spaces between stars.

Senidaemons lack strong emotion or wit or even most trappings of individuality. Rather, their lives are as hollow as their forms, their alien minds unconcerned with hope, meaning, or even survival. Senidaemons exist to destroy, and if one believes a course of action leading to its death would lead toward a faster extinction of the universe than would its survival, it will go unfalteringly to its demise.

## Senidaemon tactics

Senidaemons are masters of stealth, bodiless, and shrouded in perpetual silence. They care nothing for spectacle or creativity, and their methods of destruction are brutally direct: They bide their time in hiding, and when the opportunity presents itself, they absorb energy and transform it into its most disorderly form—heat—upon which they use their blazing hands to wreak further injury and devastation.

## Monster Part Subsystem

**Senidaemon (Entropy Daemon) Creature 8**

**Monster Parts** 64/140/250 gp

**Eligible Refinements** perception item, skill items (Stealth)

**Eligible Imbued Properties** bane, charisma, dexterity, energy resistant (acid, cold, electricity, fire, negative, positive, sonic), evil, fire, fortification, mental, negative, sensory (darkvision), spells (Divine: detect alignment, dimension door, silence), wild, winged, wisdom
