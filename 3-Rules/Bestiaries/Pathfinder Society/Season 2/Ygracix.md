---
title: "Ygracix"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pfs-season-2-bestiary.Actor.xRwAQ93HjGe59RvO" 
tags:
  - pf2e/creature/type/devil
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/lawful
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/1
statblock: inline
name: "Ygracix"
level: 1
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #2-11: The Pathfinder Trials"
name: "Ygracix"
level: "Creature 1"

alignment: ""
size: "tiny"
trait_01: [[devil]]
trait_02: [[evil]]
trait_03: [[fiend]]
trait_04: [[lawful]]
trait_05: [[unholy]]
modifier: 7
perception:
  - name: "Perception"
    desc: "+7; Greater Darkvision"
languages: "Common, Diabolic; telepathy (touch)"
skills:
  - name: "Skills"
    desc: "Acrobatics: +7, Arcana: +6, Deception: +7, Religion: +5"
abilityMods: [-1, 4, 0, 1, 2, 2]
speed: 20 feet,  fly 30 feet
sourcebook: "_Pathfinder Society Scenario #2-11: The Pathfinder Trials_"
ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__ +5, __Ref__ +9, __Will__ +7"
hp: 63
health:
  - name: ""
  - name: HP
    desc: "63; __Immunities__  fire; __Weaknesses__ holy 3; __Resistances__ physical 3 (except silver), poison 5"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Greater Darkvision|Greater Darkvision]]"
    desc: "  A creature with greater darkvision can see perfectly well in areas of darkness and dim light, though such vision is in black and white only. A creature with greater darkvision can see through even forms of magical darkness."

  - name: "[[Bestiary Ability Glossary/Telepathy|Telepathy (Touch)]]"
    desc: " (aura,magical) A monster with telepathy can communicate mentally with any creatures within the listed radius, as long as they share a language. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Stinger"
    desc: "+9 (agile, finesse, magical, unholy)\n__Damage__  1d4 - 1 piercing plus imp-venom 1d4 spirit plus imp-venom"

  - name: "Divine Innate Spells"
    desc: "DC 17, attack +9; __4th __  _[[Spells/Read Omens|Read Omens]]_; __2nd __  _[[Spells/Invisibility|Invisibility (At Will) (Self Only)]]_; __1st __  _[[Spells/Charm|Charm]]_, _[[Spells/Detect Alignment|Detect Alignment (At Will) (Good Only)]]_\n__Cantrips__  __(1st)__ _[[Spells/Detect Magic|Detect Magic]]_"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,divine,polymorph) *   **Boar**\n    *   **Size** Medium\n    *   [[Bestiary Ability Glossary/Scent|Scent (Imprecise) 30 feet]]\n    *   **Speed** 40 feet\n    *   **Melee** tusk +9/+4/-1 (finesse), **Damage** 1d10-1 piercing damage\n*   **Giant Spider**\n    *   **Size** Medium\n    *   **Speed** 25 feet, climb 25 feet\n    *   **Melee** fangs +9/+4/-1 (finesse, poison), **Damage** 1d6-1 piercing damage plus 1d4 poison damage\n*   **Rat**\n    *   [[Bestiary Ability Glossary/Scent|Scent]]\n    *   **Speed** 20 feet\n    *   **Melee** jaws +9/+5/+1 (agile, finesse), **Damage** 1 piercing damage\n*   **Raven**\n    *   [[Bestiary Ability Glossary/Scent|Scent]]\n    *   **Speed** 10 feet, fly 40 feet\n    *   **Melee** beak +9/+4/-1 (finesse), **Damage** 1 piercing damage\n* * *\n\nThe monster changes its shape indefinitely. It can use this action again to return to its natural shape or adopt a new shape. Unless otherwise noted, a monster cannot use Change Shape to appear as a specific individual. Using Change Shape counts as creating a disguise for the [[Actions/Impersonate|Impersonate]] use of Deception. The monster's transformation automatically defeats Perception DCs to determine whether the creature is a member of the ancestry or creature type into which it transformed, and it gains a +4 status bonus to its Deception DC to prevent others from seeing through its disguise. Change Shape abilities specify what shapes the monster can adopt. The monster doesn't gain any special abilities of the new shape, only its physical form. For example, in each shape, it replaces its normal Speeds and Strikes, and might potentially change its senses or size. Any changes are listed in its stat block."

  - name: "Diabolic Healing"
    desc: "`pf2:1` (concentrate,divine,healing) **Frequency** once per round.\n* * *\n\n**Effect** The imp regains 1d6 healing Hit Points."

  - name: "Imp Venom"
    desc: " (poison) **Saving Throw** DC 16 Fortitude check\n* * *\n\n**Maximum Duration** 6 rounds\n\n**Stage 1** 1d6 poison damage and [[Conditions/Clumsy|Clumsy 1]] (1 round)\n\n**Stage 2** 1d6 poison damage, clumsy 1, and [[Conditions/Slowed|Slowed 1]] (1 round)"

  - name: "Infernal Temptation"
    desc: "`pf2:1` (concentrate,divine,fortune) **Frequency** once per day.\n* * *\n\n**Effect** The imp offers a non-fiend within 15 feet a bargain, granting a boon of good luck if the creature accepts. The boon lasts for 1 hour once accepted.\n\nIf the creature dies while the boon is in place, its soul travels to Hell, where it is bound for eternity and unable to be raised or resurrected except by [[Spells/Wish|Wish]] or similar magic.\n\nOnce during the hour, the creature can roll an attack roll or saving throw twice and use the higher result."
 
```

```encounter-table
name: Ygracix
creatures:
  - 1: Ygracix
```


Female imp

Imps are infiltrators and corruptors who, despite their diminutive stature, are more than capable of subtly influencing a weak-willed individual into performing increasingly evil acts over time. An imp will often agree to serve a mortal and act docile and loyal in a long-term plot to eventually damn its master's soul to Hell. Imps are born directly from Hell itself, rather than from mortal souls, and thus they serve outside the usual diabolic hierarchy, granting them leeway to pursue their specialties. Despite standing a mere 2-feet tall, imps can be vicious combatants, flying out of reach and turning invisible to escape should the odds turn against them.

* * *

Masters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks. Every devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly lemures and imps perform subservient labor to more powerful and specialized devils, such as contract devils and erinyes, while the greatest pit fiends command entire infernal armies.
