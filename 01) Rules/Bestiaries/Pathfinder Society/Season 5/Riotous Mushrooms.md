---
title: Riotous Mushrooms
noteType: pf2eHazard
tags:
  - environmental
  - magical
source: Pathfinder Society Scenario #5-12: Mischief in the Maze
aliases: "Compendium.pf2e.pfs-season-5-bestiary.Actor.YDr59BA0SzwFwvTF" 
level: 5
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Society Scenario #5-12: Mischief in the Maze"
name: "Riotous Mushrooms"
level: "Hazard 5"

trait_01: "environmental"
trait_02: "magical"
sourcebook: "_Pathfinder Society Scenario #5-12: Mischief in the Maze_"
armorclass:
  - name: AC
    desc: "19; __Fort__ +15, __Ref__ +9, __Will__ +0"
hp: 45
health:
  - name: ""
  - name: "HP"
    desc: "45, Per mushroom; __Hardness__ 5; __Immunities__  object immunities,  critical hits,  precision; __Weaknesses__ fire 5, slashing 5"
perception:
  - name: ""
  - name: "Stealth DC 20" 
    desc: "(trained)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "Giant mushrooms sprout from the ground, their caps reaching up to 15 feet high. Each giant mushroom flls up one 5-foot square and can appear anywhere within 20 feet of the center of the ring except adjacent to another giant mushroom. The ring can be disabled but not damaged before it activates."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 19 Nature check (trained) or DC 19 Occultism check (trained) to repair the runes, DC 23 Survival check (trained) to disturb the soil within the ring to weaken the mushrooms; one successful check to disable this hazard reduces the mushrooms' hardness to 0, and two total successes are required to disable the hazard."
attacks:
  - name: ""

  - name: "Sprouting Mushrooms"
    desc: "`pf2:r` **Trigger** A creature touches a standing stone or enters the ring\n**Effect** Two giant mushrooms sprout from the ground, each making a Sprout attack. The hazard then rolls initiative."

  - name: "Poison Spores"
    desc: "action Adjacent creatures take 1d6+6 nonlethal poison damage (DC 20 Fortitude check save)."

  - name: "Sprout"
    desc: "action A giant mushroom appears in a creature's square, dealing 1d10+6 nonlethal bludgeoning damage and pushing the creature to an adjacent square. The creature must attempt a DC 20 Reflex check save.\n**Critical Success** The creature takes no damage and can choose the square to be moved to.\n**Success** The creature takes half damage and can choose the square to be moved to.\n**Failure** The creature takes full damage and is randomly pushed to an adjacent square.\n**Critical Failure** The creature takes full damage, falls [[Conditions/Prone|Prone]], and is randomly pushed to an adjacent square."

  - name: "Routine"
    desc: "(two actions) A mushroom adjacent to one or more creatures uses Poison Spores. If there are no adjacent creatures, the mushroom vanishes in the ground and reappears in another square, making a Sprout attack. If no conscious creatures are within 20 feet of the center of the ring, the mushroom does nothing. A mushroom will not sprout underneath an [[Conditions/Unconscious|Unconscious]] creature. Each mushroom only acts once."
  - name: "Reset"
    desc: "The giant mushrooms start to wilt and disappear 1 minute after all conscious living creatures have left the area. After 1 hour, the magic recharges, and the hazard is ready to trigger again."
```
