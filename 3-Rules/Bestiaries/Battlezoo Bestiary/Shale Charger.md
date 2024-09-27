---
title: "Shale Charger"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.XcnEq7zBQm91hFXS" 
tags:
  - pf2e/creature/type/animal
  - pf2e/creature/type/earth
  - pf2eMonster
  - pf2e/creature/level/6
statblock: inline
name: "Shale Charger"
level: 6
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/shale_charger.webp| ]]
source: "Battlezoo Bestiary"
name: "Shale Charger"
level: "Creature 6"

alignment: ""
size: "Large"
trait_01: [[animal]]
trait_02: [[earth]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; Darkvision, Tremorsense (Imprecise) 60 Feet"
languages: ""
skills:
  - name: "Skills"
    desc: "Athletics: +14, Stealth: +13"
abilityMods: [4, 3, 5, -4, 3, 0]
speed: 40 feet,  burrow 30 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 24
armorclass:
  - name: AC
    desc: "24 26 while curled up; __Fort__ +17, __Ref__ +15, __Will__ +11"
hp: 100
health:
  - name: ""
  - name: HP
    desc: "100; __Immunities__  bleed; __Resistances__ piercing 5, slashing 5"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Opal|Opal Heart]]"
abilities_mid:
  - name: ""
  - name: "Curl Up"
    desc: "`pf2:r`  **Trigger** The shale charger is targeted by an attack;\n* * *\n\n**Effect** The shale charger recoils into its carapace, gaining a +2 circumstance bonus to AC against the triggering attack. It retains this bonus to AC and is [[Conditions/Slowed|Slowed 1]] until it uncurls by spending an action (this action has the move trait)."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Horn +17 (deadly d8)\n__Damage__  2d8 + 8 piercing"

  - name: "Ranged"
    desc: "`pf2:1` Rock +16 (range increment 60 feet)\n__Damage__  2d4 + 8 bludgeoning"

  - name: "Spew Shale"
    desc: "`pf2:2` (earth,primal) The shale charger spews forth a frothy mix of scree and mud in a 20-foot cone, dealing 4d6 piercing damage (DC 23 basic Reflex save). Creatures who critically fail their saving throw are also [[Conditions/Dazzled|Dazzled]] for 1 minute."

  - name: "Tunneling Charge"
    desc: "`pf2:2`  The shale charger Strides in a straight line up to twice its burrow Speed, charging through creatures and loose gravel alike. The charger's movement can be any combination of moving on land and burrowing, and it can move through the spaces of any creatures in its path. When the charger moves through the space of a Large or smaller creature, the creature must attempt a DC 24 Reflex save.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature takes 3d6 bludgeoning damage and is knocked aside; the creature chooses an adjacent space and Steps there.\n\n**Failure** The creature takes 5d6 bludgeoning damage and is knocked [[Conditions/Prone|Prone]].\n\n**Critical Failure** The creature takes 7d6 piercing damage and is pushed in a straight line along the shale charger's path. The creature stops moving at the end of the shale charger's Stride."

  - name: "Rock Stride"
    desc: "  A shale charger ignores difficult terrain caused in caves and rocky mountains."

  - name: "Rock Tunneler"
    desc: "  A shale charger can burrow through solid stone at a Speed of 15 feet, leaving behind a tunnel."
 
```

```encounter-table
name: Shale Charger
creatures:
  - 1: Shale Charger
```



Shale chargers are an extraordinarily large subspecies of shale spitter. Unlike their more sedentary cousins, shale chargers take a far more active role in their pack's ever-expanding search for new mineral deposits. Rushing forth on its cascading rows of legs and slamming its reinforced chitinous plating into anything in its path, the shale charger silently demands anyone opposing it to stand aside—and it doesn't ask twice.

Chargers can burrow at great speed, rapidly digging through even solid rock and opening up new tunnels for their smaller comrades to explore. Whereas the more common shale spitter might embed itself in an area and spend months or even years scouring a single cavern for minerals, a shale charger essentially feeds as it goes. Its simple digestive system sorts soil and sand from its nutrient-rich content as quickly as it can churn through the earth.

Dwarven spelunkers and other explorers of the subterranean world rejoice at finding shale charger droppings. Where there's a shale charger, riches are sure to abound, so the thinking goes—assuming you don't first find yourself going down the wrong direction a charger's one-way tunnel.

## Of Horns and Egos

Shale chargers grow hard, jagged horns atop their skulls, which aid them in both fighting as well as digging. When two shale chargers meet, the two are prone to joust for days on end, heedless of any other creatures around them. It's not uncommon for the winner of such jousts to achieve victory by snapping off the horn of its opponent. While its broken horn regrows over a course of months, a defeated shale charger is considerably more subdued, even skittish. Wounded shale chargers offer more than enough proof that these animals can feel emotions such as pride as well as humiliation.

## Shale Spitter

Earthen isopods that subsist on crystals and stones in order to proliferate under mighty mountains, shale spitters run the gamut in terms of the challenges they pose to spelunking adventurers. The lowliest of shale spitter kind are little more than scuttling nuisances or, at worst, swarms of stony spawn. On the other end of the spectrum are behemoths that might be called mountains in themselves—looming terrors that dominate entire caverns and give form to whole underground ecosystems. All share one common characteristic that makes every shale spitter highly sought after by fortune-seeking monster hunters: Their crystalline waste matter is literally worth more than its weight in gold.

## Monster Part Subsystem

**Shale Charger Creature 6**

**Monster Parts** 30/65/125 gp

**Eligible Refinements** weapons (bludgeoning, piercing), armor (heavy), shield, perception item, skill items (Athletics, Stealth)

**Eligible Imbued Properties** bane, constitution, energy resistant (positive), sensory (darkvision), strength, sturdy, wild
