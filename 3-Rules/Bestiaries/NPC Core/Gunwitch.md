---
title: "Gunwitch"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.ow76NqtsZUhZMf9f" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2eMonster
  - pf2e/creature/level/7
  - remaster
statblock: inline
name: "Gunwitch"
level: 7
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Gunwitch"
level: "Creature 7"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[human]]
trait_02: [[humanoid]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: ""
skills:
  - name: "Skills"
    desc: "Acrobatics: +17, Crafting: +15, Intimidation: +15, Occultism: +17, Patron Lore: +15"
abilityMods: [0, 4, 1, 4, 2, 2]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__ +12, __Ref__ +15, __Will__ +15"
hp: 90
health:
  - name: ""
  - name: HP
    desc: "90"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Musket Staff of Force|Musket Staff of Force]], [[Equipment/Reinforced Stock|Reinforced Stock]], 20x [[Equipment/Rounds (Flintlock Musket)|Rounds (Flintlock Musket)]]"
  - name: "Firearm Familiar"
    desc: "  The gunwitch's firearm acts as their familiar but remains a mindless item with no actions. The master abilities it grants are included in the stat block."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Nimble Dodge|Acrobatic Dodge]]"
    desc: "`pf2:r`  **Trigger** An attacker the gunwitch can observe targets them with an attack\n* * *\n\n**Effect** The gunwitch gains a +2 circumstance bonus to AC against the triggering attack, and after the attack the gunwitch Leaps."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Musket Staff"
    desc: "+15 (finesse, magical, two-hand d6)\n__Damage__  1d6 force 1d4 + 6 bludgeoning"

  - name: "**Melee** `pf2:1` Fist"
    desc: "+15 (agile, finesse, nonlethal, unarmed)\n__Damage__  1d4 + 6 bludgeoning"

  - name: "**Ranged** `pf2:1` Musket Staff"
    desc: "+18 (concussive, fatal d10, magical, range increment 70 feet, reload 1)\n__Damage__  1d6 + 6 piercing 1d6 force"

  - name: "Occult Prepared Spells"
    desc: "DC 25, attack +17; __4th __  _[[Spells/Confusion|Confusion]]_, _[[Spells/Flicker|Flicker]]_; __3rd __  _[[Spells/Haste|Haste]]_, _[[Spells/Paralyze|Paralyze]]_, _[[Spells/Slow|Slow]]_; __2nd __  _[[Spells/Invisibility|Invisibility]]_, _[[Spells/Telekinetic Maneuver|Telekinetic Maneuver]]_; __1st __  _[[Spells/Enfeeble|Enfeeble]]_, _[[Spells/Phantom Pain|Phantom Pain]]_, _[[Spells/Sure Strike|Sure Strike]]_\n__Cantrips__  __(4th)__ _[[Spells/Daze|Daze]]_, _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Light|Light]]_, _[[Spells/Read Aura|Read Aura]]_, _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_"

  - name: "Occult Focus Spells"
    desc: "1 Focus Point, DC 25, attack +17; __4th __  _[[Spells/Needle of Vengeance|Needle of Vengeance]]_\n__Cantrips__  __(4th)__ _[[Spells/Nudge Fate|Nudge Fate]]_"

  - name: "Betwitched Shot"
    desc: "`pf2:2`  **Requirements** The gunwitch is wielding their firearm familiar and has a hex bullet loaded in it (see Hex Bullet)\n* * *\n\n**Effect** The gunwitch Casts a Spell that takes 1 or 2 actions to cast into their bullet, then Strikes with their firearm familiar, shooting the magic bullet. This counts as two attacks for the gunwitch's multiple attack penalty. On a hit, the target is also affected by the spell, though the target gets any normal defenses allowed by the spell.\n\nIf the spell is targeted, it targets the creature that was hit and no one else. If the spell is an area, the target must be in the area. A burst is centered on a corner of the target's square if the target is Medium or smaller or the corner of a square closest to the creature's center if it's Large or larger. A cone or line emits from a square of the gunwitch's choice adjacent to the target."

  - name: "Bullet Storm"
    desc: "`pf2:2` (concentrate,occult) **Requirements** The gunwitch is wielding their firearm familiar and has a hex bullet loaded into it (see Hex Bullet)\n* * *\n\n**Effect** The gunwitch unleashes a flurry of projectiles. Each creature in a 60-foot emanation takes 8d6 piercing damage with a DC 25 Reflex check save."

  - name: "Hex Bullet"
    desc: "`pf2:1` (concentrate,occult) **Frequency** once per round\n* * *\n\n**Effect** The gunwitch conjures a magical hex bullet in their firearm. It can be used as a normal bullet or for the Bewitched Shot and Bullet Storm abilities. The bullet vanishes if not fired by the end of the turn."

  - name: "Recall Firearm"
    desc: "`pf2:3` (concentrate,occult,teleportation) **Frequency** once per day\n\n**Requirements** The gunwitch's firearm familiar is within 1 mile\n* * *\n\n**Effect** The gunwitch summons their firearm into their hand or hands."
 
```

```encounter-table
name: Gunwitch
creatures:
  - 1: Gunwitch
```



As wielders of both occult power and firearms, gunwitches pride themselves in using both unconventional weapons and obscure magic. To change their patron ([[Class Features/Spinner of Threads|Spinner of Threads]]), swap out [[Spells/Nudge Fate|Nudge Fate]] and [[Spells/Sure Strike|Sure Strike]].

* * *

These lone wolves have an aura of mystery, bravado, and swagger.
