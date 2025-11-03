---
title: "Ardeodaemon"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.EB9yNYpnT2Q3aPYo" 
tags:
  - pf2e/creature/type/daemon
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/4
statblock: inline
name: "Ardeodaemon"
level: 4
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/ardeodaemon.webp| ]]
source: "Battlezoo Bestiary"
name: "Ardeodaemon"
level: "Creature 4"

alignment: ""
size: "Small"
trait_01: [[daemon]]
trait_02: [[evil]]
trait_03: [[fiend]]
trait_04: [[unholy]]
modifier: 14
perception:
  - name: "Perception"
    desc: "+14; Darkvision"
languages: "Common, Daemonic; telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +13, Athletics: +11, Religion: +7, Stealth: +13, Survival: +12"
abilityMods: [3, 5, 4, 1, 4, 3]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +14, __Ref__ +13, __Will__ +12"
hp: 60
health:
  - name: ""
  - name: HP
    desc: "60; __Immunities__  death effects; __Weaknesses__ holy 7; __Resistances__ fire 7"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Claw"
    desc: "+13 (agile, finesse, magical, unholy)\n__Damage__  2d4 + 4 slashing plus ash-fever 1d6 spirit plus ash-fever"

  - name: "Divine Innate Spells"
    desc: "DC 18, attack +10; __3rd __  _[[Spells/Locate|Locate]]_; __2nd __  _[[Spells/Knock|Knock]]_; __1st __  _[[Spells/Detect Alignment|Detect Alignment (At Will) (Good Only)]]_, _[[Spells/Lock|Lock]]_, _[[Spells/Lock|Lock]]_\n__Cantrips__  __(2nd)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Compendium.pf2e.spells-srd.Item.O9w7r4BKgPogYDDe|Produce Flame]]_"

  - name: "Ash Fever"
    desc: " (curse,divine) Ashy residue from the ardeodaemon's claws infect creatures and objects, making them more susceptible to burning.\n\nA creature damaged by the ardeodaemon's claw Strike must succeed at a DC 20 Fortitude save. Objects that take damage from ardeodaemon's claws automatically fails its save and suffers the effects of a failure for the full duration.\n* * *\n\n**Success** The creature is unaffected.\n\n**Failure** The creature gains fire weakness 4. This lasts for 1 minute or until a creature makes a successful DC 20 Medicine check to clean the wound, whichever comes first.\n\n**Critical Failure** As failure, but fire weakness 8."

  - name: "Burning Resin"
    desc: "`pf2:2` (divine,fire) The ardeodaemon vomits out a glob of burning resin, covering a single 5-foot square within 30 feet. The glob creates a fire in the square that spreads to any adjacent squares containing flammable material. If it runs out of fuel, the fire burns out in 3 rounds.\n\nAny creature that starts its turn or attempts to move through the fire must attempt a DC 20 Reflex save or take 4d6 fire damage and 2 persistent fire damage.\n\nThe ardeodaemon can't use Burning Resin again for 1d4 rounds."

  - name: "Flame Jump"
    desc: "`pf2:2` (divine,fire,teleportation) To an ardeodaemon, all fires are connected;\n\n**Requirements** The ardeodaemon is adjacent to a Small or larger fire;\n\n**Effect** The ardeodaemon leaps into the flames and emerges unscathed in an unoccupied space next to that fire or any other Small or larger fire within 100 feet."
 
```

```encounter-table
name: Ardeodaemon
creatures:
  - 1: Ardeodaemon
```



All daemons seek to make the world less than it is, but none are more keenly focused than ardeodaemons. Believed to be formed from the corrupted souls of those who died in horrific fires, these so-called ash eaters seek opportunities and places where their flames can cause tragic and irreplaceable damage. Fields ready for the harvest, crowded tenement buildings, and busy libraries are favored targets for an ardeodaemon's arson. If left to their own devices, ardeodaemons scout out their targets for days before acting, finding the best ways to maximize the consequences of a single spark or a concentrated blaze. When not pursuing arson for arson's sake, ardeodaemons seek out stronger creatures with fire abilities whom they can serve, though always with the hopes of steering their masters toward their own destructive goals.

Ardeodaemons avoid confrontation if possible, preferring to set fires with their burning resin, stoke the flames long enough that doom is assured, then watch the conflagration from afar. However, an ardeodaemon always finds the will to fiercely attack anyone attempting to douse or suffocate their fires.

## Fiery Cousins

It is telling that the ardeodaemon is a relatively common and lowly daemon, whereas its infernal kin, the puragaus, is one of the most powerful devils in Hell. This speaks to the fundamental differences in their origins: A single blaze can claim the lives of many evil mortals who then become ardeodaemons. Conversely, a single arsonist destined to become a puragaus can claim a thousand lives with just one well-placed flame.

## Monster Part Subsystem

**Ardeodaemon (Fire Daemon) Creature 4**

**Monster Parts** 12/27/50 gp

**Eligible Refinements** weapons (slashing), armor (light, medium), perception item, skill items (Acrobatics, Athletics, Religion, Stealth, Survival)

**Eligible Imbued Properties** bane, constitution, dexterity, energy resistant (fire, positive), evil, fire, mental, sensory (darkvision), spells (Divine: detect alignment, detect magic, knock, locate, lock, produce flame), wild, wisdom
