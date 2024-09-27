---
title: "Knotsman"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.4u4efSLNtmCuUmz5" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/mindless
  - pf2eMonster
  - pf2e/creature/level/7
statblock: inline
name: "Knotsman"
level: 7
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/knotsman.webp| ]]
source: "Battlezoo Bestiary"
name: "Knotsman"
level: "Creature 7"

alignment: ""
size: "Medium"
trait_01: [[construct]]
trait_02: [[mindless]]
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; Darkvision"
languages: "Common; (can&#x27;t speak any language)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +17, Athletics: +16, Stealth: +17"
abilityMods: [5, 6, 5, -5, 2, -5]
speed: 25 feet,  climb 15 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 24
armorclass:
  - name: AC
    desc: "24 (26 while uncoiled); __Fort__ +14, __Ref__ +19, __Will__ +13"
hp: 115
health:
  - name: ""
  - name: HP
    desc: "115, regeneration 10 (deactivated by fire); __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  mental,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  spirit,  vitality,  void; __Weaknesses__ fire 5, slashing 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Lasso +18 (agile, reach 15 feet)\n__Damage__  2d6 + 7 bludgeoning plus ensnare"

  - name: "Ensnare"
    desc: "  If the knotsman hits a creature with its lasso, the creature is also [[Conditions/Grabbed|Grabbed]]. While grabbed, the creature isn't [[Conditions/Immobilized|Immobilized]], but it can't move any farther from the knotsman unless the knotsman willfully lengthens its lead. The lasso's Escape DC is 25. A creature can also end the grab by severing the lasso by hitting AC 26 and dealing at least 10 slashing. Damage dealt to the lasso deals an equal amount of damage to the knotsman."

  - name: "Rein In"
    desc: "`pf2:1`  **Requirements** The knotsman has a creature [[Conditions/Grabbed|Grabbed]] with its lasso;\n\n**Effect** The knotsman pulls the grabbed creature toward itself. The knotsman attempts an Athletics check against the creature's Fortitude DC. On a success, the knotsman pulls the creature 5 feet closer to it, or 10 feet closer on a critical success. The distance the creature can move from the knotsman (see Ensnare) decreases accordingly."

  - name: "Uncoil"
    desc: "`pf2:1` (concentrate) The knotsman uncoils into a 100-foot- long, mundane-looking rope. While uncoiled, the knotsman's weakness to slashing damage increases to 15, its AC increases to 26, its Speed increases to 35 feet (25 feet while climbing), and it can slither through spaces as narrow as 1 inch in diameter.\n\nThe knotsman can spend an action (which has the concentrate trait) to return to its humanoid form."

  - name: "[[Bestiary Ability Glossary/Constrict|Constrict]]"
    desc: "`pf2:1`  2d6 + 5 bludgeoning damage, DC 25 basic fortitude save\n\n* * *\n"
 
```

```encounter-table
name: Knotsman
creatures:
  - 1: Knotsman
```



Knotsmen are brainless, humanoid-shaped minions made of a single length of magically animated rope. Wizards sometimes populate their towers with knotsmen, seeing them as relatively cheaper to construct and maintain than complicated golems. Witches, thieves' guilds, and even traveling circuses have been known to employ knotsmen as well.

Though they may seem cost effective in the short term, knotsmen's bizarre intellect (if it can be called "intellect") makes these creatures unreliable—or, at least, somewhat unpredictable—minions. Knotsmen understand the language of their creator and can execute simple or complex orders with ease, but they have a tendency to take liberties with vaguely stated commands, lingering in villages and countryside alike as suits their whims. Combined with their ability to slither along floors and through cracked doorways unnoticed, knotsmen's precociousness often ends up more of a liability than a boon.

Knotsmen are terrifyingly sturdy and rarely fall apart even after years of use; the magic that animates a knotsman also enables it to tie and re-tie even the most frayed fibers of its body. When its creator dies, a knotsman invariably strikes out on its own, wandering further and further from its home until it finds a new master. Despite their whimsy, knotsmen want, more than anything, to be of use. Would- be masters best beware, though—a knotsman commanded to perform tasks at odds with its innate personality might just as quickly lash out in a merciless rage.

## The Rope Remembers

Though they lack true intelligence, knotsmen boast curious personalities. A knotsman's disposition generally reflects the type of rope used to create it; for example, a knotsman made of ship's rigging might serve its captain faithfully, while one woven from a hangman's noose could be as treacherous as the criminal that once swung from it.

## Monster Part Subsystem

**Knotsman Creature 7**

**Monster Parts** 45/100/180 gp

**Eligible Refinements** weapons (bludgeoning), armor (light), perception item, skill items (Acrobatics, Athletics, Stealth)

**Eligible Imbued Properties** bane, constitution, dexterity, energy resistant (negative, positive), sensory (darkvision), strength, wild
