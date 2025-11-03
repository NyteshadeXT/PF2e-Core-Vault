---
title: "Watchmage Squadron"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-npc-core.Actor.4gz263pSwpuyZQ6O" 
tags:
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/troop
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Watchmage Squadron"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder NPC Core"
name: "Watchmage Squadron"
level: "Creature 10"

alignment: ""
size: "grg"
trait_01: [[human]]
trait_02: [[humanoid]]
trait_03: [[troop]]
modifier: 22
perception:
  - name: "Perception"
    desc: "+22; "
languages: "Common"
skills:
  - name: "Skills"
    desc: "Arcana: +21, Athletics: +19, Intimidation: +20, Society: +19, Legal Lore: +21"
abilityMods: [3, 4, 3, 5, 2, 0]
speed: 25 feet
sourcebook: "_Pathfinder NPC Core_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +22, __Ref__ +16, __Will__ +19"
hp: 180
health:
  - name: ""
  - name: HP
    desc: "180; __Weaknesses__ area damage 10, splash damage 10"
abilities_top:
  - name: ""

  - name: "Invisibility Scan"
    desc: "  Invisibility can't make anything undetected or unnoticed to the watchmage squadron."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Troop Defenses|Troop Defenses]]"
    desc: "  **Thresholds** 120 (3 segments), 60 (2 segments)\n* * *\n\nTroops are composed of many individuals, represented by four \"segments\" on a battle grid. Each segment is 10 feet on each side and as tall as the individual members of the troop. Segments must remain contiguous. Each one has to share at least 5 feet of one of its edges with another segment—being adjacent on a diagonal isn't sufficient! You can measure flanking, cover, and the like using the center of any segment.\n\nA troop has two Hit Point thresholds in its HP entry and loses segments as it crosses thresholds. Typically, the higher threshold is at 2/3 of the troop's maximum Hit Points and the lower is at 1/3 of its maximum. Once the troop drops below the higher threshold, it loses one segment, leaving three segments (12 squares) remaining and setting the first threshold as the troop's new maximum Hit Points. This repeats when the troop drops below the lower threshold, leaving two segments (8 squares). At 0 Hit Points, the troop disperses entirely, with the few remaining members surrendering, [[Conditions/Fleeing|Fleeing]], or easily dispatched, as determined by the GM. Typically the creature who caused the troop to lose a segment decides which to remove, or the GM decides when a specific creature wasn't responsible. To restore lost segments and maximum Hit Points, a troop needs to spend downtime to use long-term treatment on casualties or recruit new members to replace the fallen.\n\nTroops are typically immune to non-damaging effects that target a single creature, such as a [[Spells/Charm|Charm]] spell or the [[Actions/Demoralize|Demoralize]] action. An ability that can target 5 or more creatures can target an entire segment, increasing to two segments if it can target 10 or more creatures and to the entire troop if it can target 20 or more creatures. An ability that affects all creatures in a certain range affects all segments in range (make any checks or saves separately for each segment). As examples, an 8th rank _charm_ spell (with 10 targets) can affect two segments, and an ability that Demoralizes all creatures within 30 feet of you would affect all segments that are fully within that range. A non-damaging ability that would prevent a segment from acting, cause them to flee, or otherwise make them unable to function as part of the troop for a round or more removes the segment entirely. The troop loses a number of HP required to bring it to the next threshold. If an ability both deals damage and has a non-damaging effect, apply the damage then the rest of the effect."

  - name: "[[Bestiary Ability Glossary/Troop Movement|Troop Movement]]"
    desc: "  Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place."

attacks:
  - name: ""

  - name: "Arcane Prepared Spells"
    desc: "DC 26, attack +18; __5th __  _[[Spells/Slither|Slither]]_; __3rd __  _[[Spells/Fireball|Fireball]]_, _[[Spells/Locate|Locate]]_; __2nd __  _[[Spells/Dispel Magic|Dispel Magic]]_, _[[Spells/Revealing Light|Revealing Light]]_; __1st __  _[[Spells/Grim Tendrils|Grim Tendrils]]_\n__Cantrips__  __(5th)__ _[[Spells/Detect Magic|Detect Magic]]_, _[[Spells/Frostbite|Frostbite]]_, _[[Spells/Light|Light]]_, _[[Spells/Tangle Vine|Tangle Vine]]_"

  - name: "Bash Heads"
    desc: "`pf2:2` (nonlethal) The watchmages lash out against all enemies in a 5-foot emanation with their fists, dealing 4d4+4 bludgeoning damage with a DC 29 Reflex check save."

  - name: "Fire Shortbows!"
    desc: "`pf2:1` (arcane) `pf2:1` to `pf2:3`\n\n**Frequency** once per round\n* * *\n\n**Effect** The watchmages fire a volley against each enemy in a 10-foot burst within 150 feet, with a DC 26 Reflex check save. The damage depends on the number of actions. When the squadron is reduced to 2 or fewer segments, this area decreases to a 5-foot burst.\n\n`pf2:1` 1d6+3 piercing plus 1d6 force damage\n\n`pf2:2` 3d6+6 piercing plus 1d6 force damage\n\n`pf2:3` 4d6+6 piercing plus 1d6 force damage"

  - name: "[[Actor.oNsWPm1fWwrAvHMP.Item.LLbhMo87QsyrDt3v|Troop Spellcasting]]"
    desc: "  When the watchmage squadron Casts a Spell, the individual members combine their efforts into casting a more powerful version than any one member could achieve alone. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line."
 
```

```encounter-table
name: Watchmage Squadron
creatures:
  - 1: Watchmage Squadron
```



Governments often organize and deploy squadrons of watchmages in places where dangerous magic is expected. Members combine their spellcasting to cast at a higher level than they could alone.

* * *

Larger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.
