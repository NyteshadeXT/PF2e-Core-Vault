---
title: "Pit Fiend"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary.Actor.QT2gA8WMaT2cuXr7" 
tags:
  - pf2e/creature/type/devil
  - pf2e/creature/type/evil
  - pf2e/creature/type/fiend
  - pf2e/creature/type/lawful
  - pf2e/creature/type/unholy
  - pf2e/creature/level/20
statblock: inline
name: "Pit Fiend"
level: 20
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Bestiary"
name: "Pit Fiend"
level: "Creature 20"

alignment: ""
size: "Large"
trait_01: "devil"
trait_02: "evil"
trait_03: "fiend"
trait_04: "lawful"
trait_05: "unholy"
modifier: 37
perception:
  - name: "Perception"
    desc: "+37; Greater Darkvision, Truesight"
languages: "Common, Diabolic, Draconic, Empyrean"
skills:
  - name: "Skills"
    desc: "Acrobatics: +34, Arcana: +32, Athletics: +33, Deception: +39, Diplomacy: +34, Intimidation: +39, Religion: +37, Society: +36, Stealth: +34"
abilityMods: [9, 8, 9, 8, 9, 8]
speed: 35 feet,  fly 50 feet
sourcebook: "_Pathfinder Bestiary_"
ac: 46
armorclass:
  - name: AC
    desc: "46; __Fort__ +37, __Ref__ +32, __Will__ +35; +1 status to all saves vs. magic"
hp: 335
health:
  - name: ""
  - name: HP
    desc: "335, regeneration 30 (deactivated by holy); __Immunities__  fire; __Weaknesses__ holy 15; __Resistances__ physical 15 (except silver), poison 15"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Attack of Opportunity|Attack of Opportunity (Special)]]"
    desc: "`pf2:r`  The pit fiend can make an Attack of Opportunity when a creature within reach uses a concentrate action, in addition to the usual trigger. The devil can disrupt triggering concentrate actions, and they disrupt actions on any hit, not only a critical hit.\n"

  - name: "Commander's Aura"
    desc: " (aura,divine) 100 feet. Commanded or allied evil creatures in the aura of lower level than the pit fiend gain a +1 circumstance bonus to attack rolls, damage rolls, AC, saves, and skill checks.\n[[Bestiary Effects/Effect_ Commander's Aura|Effect: Commander's Aura]]"

  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,divine,emotion,fear,mental) 20 feet. DC 42 Will check\n"

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Jaws +40 (magical, poison, reach 10 feet, unholy)\n__Damage__  4d10 + 17 piercing plus pit-fiend-venom 2d6 spirit plus pit-fiend-venom"

  - name: "Melee"
    desc: "`pf2:1` Claw +38 (agile, magical, reach 10 feet, unholy)\n__Damage__  4d6 + 17 slashing 2d6 spirit"

  - name: "Melee"
    desc: "`pf2:1` Tail +36 (magical, reach 10 feet, unholy)\n__Damage__  4d10 + 17 bludgeoning plus improved-grab 2d6 spirit plus improved-grab"

  - name: "Melee"
    desc: "`pf2:1` Wing +36 (magical, reach 15 feet, unholy)\n__Damage__  4d6 + 17 slashing 2d6 spirit"

  - name: "Divine Innate Spells"
    desc: "DC 42, attack +34; __10th __  _[[Spells/Falling Stars|Meteor Swarm]]_, _[[Spells/Miracle|Miracle (Once per Year)]]_, _[[Spells/Power Word Stun|Power Word Stun]]_; __9th __  _[[Spells/Seize Soul|Bind Soul (At Will)]]_; __8th __  _[[Spells/Dispel Magic|Dispel Magic (At Will)]]_, _[[Spells/Divine Decree|Divine Decree (At Will)]]_, _[[Spells/Fireball|Fireball (At Will)]]_, _[[Spells/Scrying|Scrying]]_, _[[Spells/Wall of Fire|Wall of Fire (At Will)]]_; __5th __  _[[Spells/Translocate|Dimension Door]]_; __4th __  _[[Spells/Translocate|Dimension Door (At Will)]]_\n__Constant__  __(8th)__ _[[Spells/Truesight|True Seeing]]_"

  - name: "Rituals"
    desc: "_[[Spells/Infernal Pact|Infernal Pact]]_"

  - name: "[[Bestiary Ability Glossary/Constrict|Constrict]]"
    desc: "`pf2:1` (unholy) 2d10+17 bludgeoning plus 2d6 spirit, DC 43 Fortitude check\n"

  - name: "Devil Shaping"
    desc: " (divine,downtime) The pit fiend reshapes a large number of [[Bestiary 1/Lemure|Lemures]] within a 600-foot radius into more powerful devils to swell Hell's legions. The pit fiend must have available the number of lemures listed on the table below.\n| Devil Level | Number of Lemures |\n| --- | --- |\n| 4 or below | 4 |\n| 5-6 | 8 |\n| 7-8 | 16 |\n| 9-10 | 32 |\n| 11-12 | 64 |\n| 13-14 | 128 |\n| 15-16 | 256 |\n| 17-18 | 512 |\n| 19-20 | 1.024 |\nThe pit fiend can shape 100 lemures per day, to a maximum of 1,100 lemures in 11 days. Devils created in this way are in thrall to the pit fiend and follow its orders, with the exception of created pit fiends or other devils of similar power, which are always independent. As a result, few pit fiends choose to create peers. At the end of the Devil Shaping activity, the pit fiend attempts an incredibly hard Religion check check of the desired devil's level, with results as follows.\n**Critical Success** The pit fiend shapes two devils from the massed lemures instead of one.\n**Success** The pit fiend shapes a devil of the desired type and level.\n**Failure** The devil shaped from the lemures is 2 levels lower than the intended devil.\n**Critical Failure** The pit fiend fails to shape any devils and draws the ire of an archdevil for its waste of resources."

  - name: "Fast Swoop"
    desc: "`pf2:1`  The pit fiend Flies and makes a wing Strike at any point during its movement."

  - name: "Masterful Quickened Casting"
    desc: " (concentrate) **Frequency** once per round.\n**Effect** If the pit fiend's next action is to cast an 8th-rank or lower innate spell, reduce the number of actions to cast it by 1 (minimum 1 action)."

  - name: "Pit Fiend Venom"
    desc: " (poison) **Saving Throw** DC 43 Fortitude check\n**Maximum Duration** 10 rounds\n**Stage 1** 6d6 poison damage and [[Conditions/Drained 1|Drained 1]] (1 round)\n**Stage 2** 7d6 poison damage and [[Conditions/Drained 1|Drained 2]] (1 round)\n**Stage 3** 8d6 poison damage and [[Conditions/Drained 1|Drained 3]] (1 round)"
 
```

```encounter-table
name: Pit Fiend
creatures:
  - 1: Pit Fiend
```


### Description
When an army of devils invades to bathe a region in bloodshed and hellfire, it is likely that one of Hell's most powerful and diabolical generals, the pit fiend, masterminded the incursion. Cunning, powerful, and ruthless, pit fiends often serve the archdevils directly. They rule infernal duchies, subjugate mortal worlds, and usurp infernal rivals using unparalleled despotism and calculated ferocity. To realize their tyrannical machinations, pit fiends claim mortal souls that they corrupt into lemure servants, which can then be shaped and transformed through infernal manipulation into the terrifying devils that form Hell's formidable legions. They often select the most wicked and vicious lemures for their armies, drawing upon these lesser devils' depravity during powerful magical ceremonies to create hideous and terrifying abominations that can cow and eviscerate the pit fiend's enemies.

Pit fiends themselves are crafted deep within the nightmarish bowels of Nessus, the ninth layer of Hell, to serve the whims of archdevils and infernal dukes. Those pit fiends that don't leave Nessus to command infernal legions in the upper layers of Hell often form the courts of Hell's elite, gathering cabals and sects that shape Hell's political landscape through subterfuge and manipulation. But many pit fiends see themselves as living embodiments of hellfire, the all-encompassing wrath of Hell, and thus prefer to dwell in realms consumed by fire. In Avernus, Dis, Malebolge, Nessus, and Phlegethon, pit fiends build vast citadels of brimstone wreathed in flame to lord over.

Pit fiends tower over other devils, standing at least 16 feet tall, weighing over 1,000 pounds, and brandishing wingspans in excess of 20 feet. Infernal Dukes Elite members of Hell's political infrastructure and leadership hierarchy, the dukes of Hell are chosen from among the most tyrannical, oppressive, and conniving devils. While not all infernal dukes are pit fiends, a pit fiend's natural disposition toward conquest and oppression often make it an ideal candidate for this position. To create an infernal duke, adjust the pit fiend to be between 21st and 25th level. Because of their physical prowess, manipulative nature, and powerful spellcasting abilities, infernal dukes make excellent villains for long-running campaigns.

* * *

Masters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks. Every devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly lemures and imps perform subservient labor to more powerful and specialized devils, such as contract devils and erinyes, while the greatest pit fiends command entire infernal armies.