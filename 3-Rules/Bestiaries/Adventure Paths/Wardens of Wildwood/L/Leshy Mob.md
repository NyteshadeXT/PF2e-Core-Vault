---
title: "Leshy Mob"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.wardens-of-wildwood-bestiary.Actor.Cm96cXbKhov2TqJq" 
tags:
  - pf2e/creature/type/leshy
  - pf2e/creature/type/plant
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/11
  - remaster
statblock: inline
name: "Leshy Mob"
level: 11
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #203: Shepherd of Decay"
name: "Leshy Mob"
level: "Creature 11"

alignment: ""
size: "grg"
trait_01: [[leshy]]
trait_02: [[plant]]
trait_03: [[troop]]
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; Low-Light Vision"
languages: "Common, Fey; speak with plants"
skills:
  - name: "Skills"
    desc: "Acrobatics: +19, Athletics: +22, Nature: +22, Stealth: +19"
abilityMods: [5, 4, 7, 3, 5, 6]
speed: 25 feet
sourcebook: "_Pathfinder #203: Shepherd of Decay_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +23, __Ref__ +19, __Will__ +21"
hp: 195
health:
  - name: ""
  - name: HP
    desc: "195, Thresholds 130 (3 segments), 65 (2 segments); __Weaknesses__ area damage 12, fire 8, splash damage 8"
abilities_top:
  - name: ""

  - name: "[[Bestiary Ability Glossary/Form Up|Form Up]]"
    desc: "`pf2:1`  The troop chooses one of the squares it currently occupies and redistributes its squares to any configuration in which all squares are contiguous and within 15 feet of the chosen square. The troop can't share its space with other creatures."

abilities_mid:
  - name: ""
  - name: "[[Compendium.pf2e.bestiary-ability-glossary-srd.Item.RJbI07QSiYp0SF9A|Troop Defenses]]"
    desc: "  **Thresholds** 130 (3 segments), 65 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "Verdant Burst"
    desc: " (healing,primal,vitality) When a leshy mob's Hit Points reach a threshold that would reduce its size, a burst of primal energy explodes from the fallen leshies and empowers the surviving fighters. The leshy mob gains 4d8 temporary Hit Points that last for 10 minutes. In addition, all squares within 5 feet of the troop become filled with various plants, becoming difficult terrain. If the environment is not a viable environment for these plants, they wither after 24 hours."

attacks:
  - name: ""

  - name: "Primal Innate Spells"
    desc: "DC 30, attack +22; __5th __  _[[Spells/Wall of Thorns|Wall of Thorns]]_\n__Constant__  __(3rd)__ _[[Spells/Speak with Plants|Speak with Plants]]_"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,polymorph,primal) The leshies can transform into an assortment of Small plants that fills a 15-foot burst centered on any one square the leshy mob occupies, creating difficult terrain. When the leshies return to their natural form, they Form Up anywhere within the burst. This otherwise uses the effects of [[Spells/One with Plants|One with Plants]].\n* * *\n\nThe monster changes its shape indefinitely. It can use this action again to return to its natural shape or adopt a new shape. Unless otherwise noted, a monster cannot use Change Shape to appear as a specific individual. Using Change Shape counts as creating a disguise for the [[Actions/Impersonate|Impersonate]] use of Deception. The monster's transformation automatically defeats Perception DCs to determine whether the creature is a member of the ancestry or creature type into which it transformed, and it gains a +4 status bonus to its Deception DC to prevent others from seeing through its disguise. Change Shape abilities specify what shapes the monster can adopt. The monster doesn't gain any special abilities of the new shape, only its physical form. For example, in each shape, it replaces its normal Speeds and Strikes, and might potentially change its senses or size. Any changes are listed in its stat block."

  - name: "One with the Foliage"
    desc: "  The leshy mob ignores difficult terrain caused by plants and fungi, and it treats greater difficult terrain from such sources as difficult terrain."

  - name: "Rain of Seeds"
    desc: "`pf2:2`  The leshies grab and hurl an assortment of stones, spores, and explosive seeds, launching a ranged attack in the form of a volley. This volley is a 10-foot burst within 60 feet that deals 4d8 bludgeoning or 4d8 poison damage (DC 30 Reflex check save).\n\nWhen the leshies are reduced to 8 or fewer squares, this area decreases to a 5-foot burst."

  - name: "Troop Movement"
    desc: "  Whenever the leshy mob Strides, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to their Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop."

  - name: "Veggielante Justice"
    desc: "`pf2:1`  `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The leshies assault each enemy creature within 5 feet, with a DC 30 Reflex check save. The damage depends on the number of actions.\n\n`pf2:1` 3d8 bludgeoning or 3d8 slashing damage\n\n`pf2:2` 3d8+11 bludgeoning or 3d8+11 slashing damage\n\n`pf2:3` 3d8+16 bludgeoning or 3d8+16 slashing damage"
 
```

```encounter-table
name: Leshy Mob
creatures:
  - 1: Leshy Mob
```



A single leshy is a nuisance. A horde of leshies is a natural disaster. When confronted by existential threats or malicious ecological devastation, charismatic leshy leaders can rally their kin into a mob. These bands often include several kinds of leshy, creating a ragtag host that can communicate with and draw power from nearly any plant in its path. The farther they travel, the greater the mob's sense of cohesion becomes, gradually awakening an empathic hive mind, coordinated shapeshifting, and communal spellcasting far beyond what any individual could accomplish.

Leshy mobs rarely outlast whatever rallied them in the first place. After pillaging a lumber camp or liberating a greenhouse's contents, the leshies gradually shake off their mob mentality—often with some shock or sheepishness at recognizing whatever crimes they just committed. Though the leshies scatter, they often retain a faint sense of camaraderie with their old comrades, making it easier for them to gather again to confront future threats.

* * *

For all their cute appearances and harmless pretenses, leshies can become a formidable force when riled. What's more, leshies can grow larger, stronger, and more aggressive in regions rich in primal energy. The following presents several higher-level leshy threats that grow in primordial forests.
