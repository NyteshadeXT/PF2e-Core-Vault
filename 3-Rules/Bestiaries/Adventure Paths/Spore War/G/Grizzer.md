---
title: "Grizzer"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.THRmSpcf3FvVDXhj" 
tags:
  - pf2e/creature/type/fey
  - pf2eMonster
  - pf2e/creature/level/10
  - remaster
statblock: inline
name: "Grizzer"
level: 10
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #210: Whispers in the Dirt"
name: "Grizzer"
level: "Creature 10"
rare_03: [[Rare]]
alignment: ""
size: "Medium"
trait_01: [[fey]]
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; Darkvision, Scent (Imprecise) 30 Feet"
languages: "Fey; Can&#x27;t Speak Any Language"
skills:
  - name: "Skills"
    desc: "Athletics: +21, Stealth: +21, Thievery: +21"
abilityMods: [7, 5, 4, -3, 6, 2]
speed: 40 feet,  climb 40 feet,  swim 20 feet
sourcebook: "_Pathfinder #210: Whispers in the Dirt_"
ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__ +18, __Ref__ +17, __Will__ +22"
hp: 180
health:
  - name: ""
  - name: HP
    desc: "180; __Weaknesses__ cold iron 10"
abilities_top:
  - name: ""

abilities_mid:
  - name: ""
  - name: "Cold Iron Indigestion"
    desc: "  If the grizzer swallows a cold iron item or a creature holding or wearing a cold iron item, the grizzer becomes [[Conditions/Sickened|Sickened 2]] until they regurgitate it."

  - name: "Extradimensional Stomach"
    desc: "  The grizzer's stomach is an extradimensional space (that appears to be an immense elongated leathery chamber) capable of holding up to 24 Bulk. Unless the grizzer uses Digest, the space has the same environment as the grizzer's surroundings, and creatures inside don't take damage from being swallowed, nor do they face the threat of suffocation."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+23 (unarmed)\n__Damage__  2d12 + 13 piercing plus grab"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+23 (agile, unarmed)\n__Damage__  2d8 + 13 slashing"

  - name: "Digest"
    desc: "`pf2:3` (acid,concentrate,healing) The grizzer fills their stomach with acid for 1 round to digest its contents. Creatures inside the stomach must hold their breath or start suffocating, and they take 4d8 acid damage (DC 29 Reflex check save). The grizzer can Sustain this activity, in which case the stomach remains filled with acid; creatures inside take acid damage at the end of their turn and can't catch their breath. The grizzer regains 10 Hit Points if at least one creature takes acid damage as a result of Digest."

  - name: "Limber"
    desc: "  A grizzer ignores difficult terrain from narrow confines and can move at full Speed when Squeezing."

  - name: "Regurgitate"
    desc: "`pf2:1`  The grizzer regurgitates a creature or unattended item from their stomach into an adjacent unoccupied space."

  - name: "Snatch Object"
    desc: "`pf2:1` (agile,attack) The grizzer unfurls their sticky tongue at a creature within 15 feet and attempts to either pull the target closer or [[Actions/Disarm|Disarm]] it. If they choose to pull the target, they attempt an Athletics check against the target's Fortitude DC and pull it into an adjacent space on a success. If the grizzer attempts to Disarm the target, they gain a +1 circumstance bonus to the Athletics check if the item is made of shiny material or magically illuminated, such as by revealing light. If the Disarm attempt critically succeeds, the grizzer also grabs the item with their tongue and swallows it."

  - name: "[[Bestiary Ability Glossary/Swallow Whole|Swallow Whole]]"
    desc: "`pf2:1` (attack) Huge, no damage, Rupture 20\n* * *\n\nThe monster attempts to swallow a creature of the listed size or smaller that it has grabbed or restrained in its jaws or mouth. If a swallowed creature is of the maximum size listed, the monster can't use Swallow Whole again. If the creature is smaller than the maximum, the monster can usually swallow more creatures; the GM determines the maximum. The monster attempts an Athletics check check opposed by the grabbed creature's Reflex DC. If it succeeds, it swallows the creature. The monster's mouth or jaws no longer grab a creature it has swallowed, so the monster is free to use them to Strike or Grab once again. The monster can't attack creatures it has swallowed.\n\nA swallowed creature is [[Conditions/Grabbed|Grabbed]], is [[Conditions/Slowed|Slowed 1]], and has to hold its breath or start suffocating. The swallowed creature takes the listed amount of damage when first swallowed and at the end of each of its turns while it's swallowed. If the victim [[Actions/Escape|Escapes]] this ability's grabbed condition, it exits through the monster's mouth. This frees any other creature grabbed in the monster's mouth or jaws. A swallowed creature can attack the monster that has swallowed it, but only with unarmed attacks or with weapons of light Bulk or less. The swallowing creature is [[Conditions/Off-Guard|Off-Guard]] against the attack. If the monster takes piercing or slashing damage equaling or exceeding the listed Rupture value from a single attack or spell, the swallowed creature cuts itself free. A creature that gets free by either Escaping or cutting itself free can immediately breathe and exits the swallowing monster's space.\n\n[[Bestiary Effects/Effect_ Engulf and Swallow Whole|Effect: Engulf and Swallow Whole]]\n\nIf the monster dies, a swallowed creature can be freed by creatures adjacent to the corpse if they spend a combined total of 3 actions cutting the monster open with a weapon or unarmed attack that deals piercing or slashing damage."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Grizzer
creatures:
  - 1: Grizzer
```



These gangly fey lizards are known for two traits. First, they look ridiculous when they run, dashing on hind legs while waving their front legs wildly in the air. Second, they're inveterate thieves with the ability to store an extraordinary amount of goods in their stomach. Many grizzers appeared in the River Kingdoms a little over 10 years ago, but several coordinated hunts drove them further southwest, where they've begun to thrive in the forests of Razmiran.

## Strange Fey Appetites

A grizzer's strange appetite isn't unique among fey. Azarpals, for example, can store food in their bellies and infuse them with poisons that wreak havoc on feasts and banquets. Stories of whales swimming in otherworldly seas that have swallowed entire villages, or of duplicitous serpentine fey who can assume the forms of those they consume, suggest that fey with strange appetites aren't so unusual on the First World.
