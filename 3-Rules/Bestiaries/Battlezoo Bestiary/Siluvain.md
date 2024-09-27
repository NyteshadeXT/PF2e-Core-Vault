---
title: "Siluvain"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.uJHnRyJNDMVeTN0d" 
tags:
  - pf2e/creature/type/devil
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/lawful
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/4
statblock: inline
name: "Siluvain"
level: 4
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/siluvain.webp| ]]
source: "Battlezoo Bestiary"
name: "Siluvain"
level: "Creature 4"

alignment: ""
size: "Medium"
trait_01: [[devil]]
trait_02: [[evil]]
trait_03: [[fiend]]
trait_04: [[lawful]]
trait_05: [[unholy]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Greater Darkvision"
languages: "Common, Diabolic, Empyrean; telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Athletics: +9, Deception: +15, Diplomacy: +13, Religion: +10, Society: +9, Stealth: +12"
abilityMods: [3, 4, 2, 1, 2, 5]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +8, __Ref__ +14, __Will__ +10; +1 status to all saves vs. magic"
hp: 40
health:
  - name: ""
  - name: HP
    desc: "40; __Immunities__  fire; __Weaknesses__ holy 5; __Resistances__ physical 5 (except silver), poison 5"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Claw +12 (agile, finesse, unholy)\n__Damage__  2d6 + 5 slashing"

  - name: "Divine Innate Spells"
    desc: "DC 21, attack +13; __5th __  _[[Spells/Translocate|Dimension Door]]_; __4th __  _[[Spells/Translocate|Dimension Door (At Will)]]_; __2nd __  _[[Spells/Charm|Charm]]_, _[[Spells/Charm|Charm]]_, _[[Spells/Charm|Charm]]_, _[[Spells/Invisibility|Invisibility (At Will; Self Only)]]_, _[[Spells/Phantom Pain|Phantom Pain (At Will)]]_"

  - name: "Rituals"
    desc: "_[[Spells/Diabolic Pact|Infernal Pact]]_"

  - name: "Assume Identity"
    desc: "`pf2:1` (concentrate,divine,polymorph) **Requirements** The memento devil is holding a cherished possession that was buried with a Small or Medium humanoid corpse (such as a wedding ring, locket, or weapon);\n\n**Effect** The memento devil takes on the appearance of the cherished item's former owner. While in this form, the devil gains the memories of the item's former owner, including languages, proficiencies, and class features, if any. This doesn't change the devil's Speed or its attack and damage bonuses with its Strikes but might change the damage type its Strikes deal (typically to bludgeoning). If the required item is destroyed or the devil loses it, the devil automatically reverts to its natural form."

  - name: "Shatter Hope"
    desc: "`pf2:2` (divine,emotion,mental) **Requirements** The memento devil is currently disguised by its Assume Identity ability;\n\n**Effect** The memento devil smashes the memento it is carrying, filling the hearts of all around it with painful anguish. This permanently destroys the memento and ends the devil's Assume Identity effect. Enemies in a 15-foot emanation take 4d8 mental damage (DC 21 basic Will save).\n\nIf any of the affected creatures were charmed by the devil or knew the destroyed memento's owner in life, those creatures' saves are one degree worse than the actual result of the saving throw."
 
```

```encounter-table
name: Siluvain
creatures:
  - 1: Siluvain
```



Memento devils sow discord on the Material Plane by assuming the identities of the dead. So long as it possesses a cherished item (such as a ring, knife, or other memento) buried with the corpse, a memento devil can transform itself into a perfect copy of any deceased mortal. While in this form, the memento devil can access the deceased's memories and use this knowledge to torment the living.

A memento devil's first mission on the Material Plane is to locate a dead person to impersonate. After transforming, the devil hides or otherwise disposes of the deceased's remains, then explains to the deceased's loved ones its "miraculous" return to the ranks of the living. Once it has overcome these obstacles, the memento devil connivingly sets the deceased's loved ones against each other or spurs them into acts of depravity.

In its true form, a memento devil appears as a lithe humanoid with matte black skin and smooth, genderless features. Before they find a corpse to impersonate, memento devils avoid contact with the living, preferring to slink into the shadows rather than risk discovery. Once it has adopted a disguise, a memento devil becomes furious if unmasked, hurling itself at the creature who revealed it.

## Memento Hunters

Different memento devils seem to seek out different kinds of mementos from the dead. Some prefer to torment widows or widowers and so search for heart-shaped lockets or other love charms, while other memento devils prefer the identities of warriors who bore medals of honor or signet rings.

## Monster Part Subsystem

**Siluvain (Memento Devil) Creature 4**

**Monster Parts** 12/27/50 gp

**Eligible Refinements** weapons (slashing), armor (light, medium), shield, perception item, skill items (Acrobatics, Athletics, Deception, Diplomacy, Religion, Society, Stealth)

**Eligible Imbued Properties** bane, charisma, dexterity, energy resistant (fire, positive), evil, lawful, mental, sensory (greater darkvision), spells (Divine: charm, dimension door, invisibility, phantom pain), sturdy, wild
