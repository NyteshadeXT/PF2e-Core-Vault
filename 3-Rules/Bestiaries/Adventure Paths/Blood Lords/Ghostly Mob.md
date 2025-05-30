---
title: "Ghostly Mob"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.blood-lords-bestiary.Actor.4yAbOWwebJGWRmt2" 
tags:
  - pf2e/creature/type/chaotic
  - pf2e/creature/type/evil
  - pf2e/creature/type/ghost
  - pf2e/creature/type/incorporeal
  - pf2e/creature/type/troop
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/8
statblock: inline
name: "Ghostly Mob"
level: 8
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-ap182-graveclaw/assets/art/PZO90182_GhostlyMob.webp| ]]
source: "Pathfinder #182: Graveclaw"
name: "Ghostly Mob"
level: "Creature 8"
rare_03: [[Uncommon]]
alignment: ""
size: "grg"
trait_01: [[chaotic]]
trait_02: [[evil]]
trait_03: [[ghost]]
trait_04: [[incorporeal]]
trait_05: [[troop]]
trait_06: [[undead]]
trait_07: [[unholy]]
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; Darkvision"
languages: "Common, Necril"
skills:
  - name: "Skills"
    desc: "Acrobatics: +16, Stealth: +16, Local Lore: +14"
abilityMods: [-5, 4, 3, 0, 4, 4]
speed:  fly 25 feet
sourcebook: "_Pathfinder #182: Graveclaw_"
ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__ +15, __Ref__ +14, __Will__ +18"
hp: 105
health:
  - name: ""
  - name: HP
    desc: "105, 16 squares, void healing, rejuvenation; __Immunities__  death effects,  disease,  paralyzed,  poison,  precision,  sleep; __Weaknesses__ area damage 15, splash damage 10; __Resistances__ all damage 10 (except force, ghost touch, or vitality; double resistance vs. non-magical)"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

  - name: "[[Creature Family Ability Glossary/(Ghost) Site Bound|Site Bound]]"
    desc: "  A ghostly mob can stray only a moderate distance from where its members were killed or the place it haunts. A typical limit is 240 feet."

abilities_mid:
  - name: ""
  - name: "[[Creature Family Ability Glossary/(Ghost) Rejuvenation|Rejuvenation]]"
    desc: " (divine) When a ghostly mob is destroyed, it re-forms after 2d4 days, fully healed. A ghostly mob can be permanently destroyed only if someone determines the reason for its existence and sets right whatever prevents the troop from resting."

  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 70 (3 segments), 35 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "Clutching Hands"
    desc: "`pf2:1` (divine) `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The troop attacks enemies within 5 feet (DC 25 Reflex check), with damage depending on the number of actions.\n\n`pf2:1` 1d6+3 void damage\n\n`pf2:2` 3d6+6 void damage\n\n`pf2:3` 4d6+9 void damage"

  - name: "Frightful Chorus"
    desc: "`pf2:2` (auditory,divine,emotion,fear,mental) The ghostly mob howls in anguish, forcing each living creature in a 30-foot emanation to attempt a DC 25 Will check save or become [[Conditions/Frightened|Frightened 2]] ([[Conditions/Frightened|Frightened 3]] on a critical failure). Regardless of the save result, the creature is then temporarily immune to the troop's Frightful Chorus for 1 minute."

  - name: "Troop Movement"
    desc: "  Whenever the ghostly mob Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), and then moves. This works just like a Gargantuan creature moving; for instance, if any of the ghostly mob's squares enter difficult terrain, the extra movement cost applies to the whole group."
 
```

```encounter-table
name: Ghostly Mob
creatures:
  - 1: Ghostly Mob
```



When a horrific tragedy results in mass death, the restless spirits of the numerous dead might arise as a ghostly mob. Like other ghosts, ghostly mobs are often unaware they're dead. The spirits trapped within the mob may try to carry out a semblance of their former lives, even though their memories are fragmentary and their forms are insubstantial. When forced to confront their true state, the spirits lash out in pain and violence.
