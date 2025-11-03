---
title: "Morlock Thrall"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.vUpWo3El3a3xfzdF" 
tags:
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Morlock Thrall"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #214: The Broken Palace"
name: "Morlock Thrall"
level: "Creature 4"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[humanoid]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Darkvision"
languages: "Azlanti, Sakvroth"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +11, Crafting: +12, Deception: +15, Intimidation: +11, Religion: +14"
abilityMods: [5, 2, 5, 0, 2, 3]
speed: 30 feet,  climb 20 feet
sourcebook: "_Pathfinder #214: The Broken Palace_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +13, __Ref__ +8, __Will__ +10; +2 status to all saves vs. disease and poison"
hp: 70
health:
  - name: ""
  - name: HP
    desc: "70, fast healing 5; __Weaknesses__ mental 10"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Falchion|+1 Falchion]], [[Equipment/Hide Armor|Hide Armor]]"
  - name: "[[Bestiary Ability Glossary/Light Blindness|Light Blindness]]"
    desc: "  When first exposed to bright light, the monster is [[Conditions/Blinded|Blinded]] until the end of its next turn. After this exposure, light doesn't blind the monster again until after it spends 1 hour in darkness. However, as long as the monster is in an area of bright light, it's [[Conditions/Dazzled|Dazzled]]."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Fast Healing|Fast Healing 5]]"
    desc: "  A monster with this ability regains the given number of Hit Points each round at the beginning of its turn."

  - name: "[[Creature Family Ability Glossary/(Vampire, Nosferatu Thrall) Mindbound|Mindbound]]"
    desc: "  If any creature other than Vikandian targets the morlock thrall with an effect that would give the morlock the [[Conditions/Controlled|Controlled]] condition, Vikandian rolls a counteract check against the effect, with a +16 counteract check modifier."

  - name: "[[Creature Family Ability Glossary/(Vampire, Nosferatu Thrall) Mortal Shield|Mortal Shield]]"
    desc: "`pf2:r`  **Trigger** The morlock thrall will do anything to protect their master. If the morlock thrall is adjacent to Vikandian when Vikandian would take damage from a Strike or spell attack\n* * *\n\n**Effect** The morlock throws himself in front of his master, taking half the damage of the attack (before applying any weaknesses or resistances). Vikandian takes the remaining damage, applying any weaknesses or resistances as normal."

  - name: "[[Creature Family Ability Glossary/(Vampire, Nosferatu Thrall) Rally|Rally]]"
    desc: "`pf2:r`  **Trigger** The thrall ends their turn more than 30 feet away from Vikandian\n* * *\n\n**Effect** The thrall Strides up to their Speed toward Vikandian."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Falchion"
    desc: "+14 (forceful, magical, sweep)\n__Damage__  1d10 + 7 slashing"

  - name: "[[Bestiary 2/Morlock/Instinctual Tinker|Instinctual Tinker]]"
    desc: "`pf2:2`  The morlock tinkers with an adjacent construct or mechanical hazard. They attempt a Crafting check check against the construct's or hazard's Fortitude DC. The morlock can't succeed if the target's level is more than double the morlock's.\n* * *\n\n**Critical Success** The target gains 4d6 healing Hit Points and a +1 circumstance bonus to attack rolls for 1 minute.\n\n**Success** The target gains 2d6 healing Hit Points.\n\n**Critical Failure** The morlock injures itself, taking 2d6 damage (typically bludgeoning, piercing, or slashing, but potentially a different type at the GM's discretion).\n\n[[Bestiary Effects/Effect_ Instinctual Tinker (Critical Success)|Effect: Instinctual Tinker (Critical Success)]]"

  - name: "Revel in the Gore"
    desc: "`pf2:1` (manipulate,mental,visual) **Requirements** The morlock thrall's previous action was a critical hit with a melee Strike\n* * *\n\n**Effect** The morlock shrieks in excitement and springs forward to slurp at the gore. Any creatures within 20 feet who can see the disgusting display must attempt a DC 21 Fortitude check save or become [[Conditions/Sickened|Sickened 1]] (or [[Conditions/Sickened|Sickened 2]] on a critical failure). Vampires and other morlocks in the area are emboldened instead and gain a +1 circumstance bonus to Will saves until the end of their next turn."

  - name: "[[Bestiary 2/Morlock/Swarming Stance|Swarming Stance]]"
    desc: "  A morlock can share the same space as another morlock, but no more than two morlocks can occupy the same space. When morlocks share the same space, they gain a +1 circumstance bonus to attack rolls."

  - name: "Swing Back"
    desc: "`pf2:1`  **Frequency** once per round\n\n**Requirements** The nosferatu thrall's last action was a greatclub Strike that missed\n* * *\n\n**Effect** The nosferatu thrall makes another greatclub Strike against the same target, using the previous Strike's multiple attack penalty."

  - name: "Swipe"
    desc: "`pf2:2`  The morlock thrall makes a melee Strike and compares the attack roll result to the AC of up to two foes, each of whom must be within the morlock's melee reach and adjacent to each other. The sweep bonus of the morlock's falchion applies to these attacks. Roll damage once and apply it to each creature hit. A Swipe counts as two attacks toward the morlock's multiple attack penalty."
 
```

```encounter-table
name: Morlock Thrall
creatures:
  - 1: Morlock Thrall
```


Male variant morlock nosferatu thrall

Nosferatu thralls are mortals bound to a nosferatu's will. While thralls aren't undead, they stay alive through unnatural means: feeding on the blood of their masters.

* * *

Among the most ancient of vampires are the nosferatus, twisted remnants of mortals who died in great plagues of old. Perhaps because of their age, nosferatus can no longer create more of their kind. Yet they still lurk among the living, manipulating the hearts and minds of their prey to either serve them beyond the limits of natural life or to become sustenance for the nosferatu like so many others before.
