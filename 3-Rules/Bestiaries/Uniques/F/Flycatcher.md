---
obsidianUIMode: preview
noteType: pf2eMonster
aliases:
  - Flycatcher
tags:
  - pf2e/creature
  - beast
  - shadow
statblock: inline
name: Flycatcher
level: 11
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from *Monster Manual II*"
name: Flycatcher
level: "Creature 11"
token: flycatcher.png
rare_01: Rare
alignment: ""
size: Huge
trait_01: Beast
trait_02: Shadow
modifier: 22

perception:
  - name: Perception
    desc: "+22; [[darkvision]], low-light vision, motion sense (imprecise) 240 feet"
languages:
  - name: Languages
    desc: "Common"
skills:
  - name: Skills
    desc: "Acrobatics +22, Athletics +25, Deception +19, Stealth +20"
abilityMods: [6, 3, 5, -1, 0, 2]

abilities_mid:
  - name: Shadow Camouflage
    desc: "Flycatcher can [[Hide]] in dim light or darkness even if it lacks cover or concealment. While in such an area, it gains a +2 circumstance bonus to Stealth checks."
  - name: Split
    desc: "When Flycatcher is reduced to 105 HP or fewer by a [[Strike]] or effect that deals piercing or slashing damage, it splits into two identical shadow spiders, each with 105 HP. One remains in Flycatcher’s space; the other appears in an adjacent unoccupied space. If no such space is available, it pushes creatures or unattended objects aside to make room, as determined by the GM."
  - name: Paralytic Venom
    desc: "**Saving Throw** DC 30 Fortitude<br>**Critical Success** The creature is unaffected.<br>**Success** The creature is [[slowed 1]] until the start of its next turn.<br>**Failure** The creature is [[paralyzed]] for 1 round.<br>**Critical Failure** The creature is paralyzed for 1d4 rounds."

abilities_bot:
  - name: Many-Legged Assault ⬺
    desc: "Flycatcher makes two claw Strikes against different creatures. These attacks count toward its multiple attack penalty, but the penalty doesn’t increase until after both attacks are made."
  - name: Silk Slick ⬻
    desc: "(__arcane__, __shadow__) Flycatcher coats up to 16 contiguous 5-foot squares of solid ground within 60 feet in nearly invisible black silk. The silk lasts for 1 minute. Each creature standing on the silk must attempt a DC 30 Reflex save or fall [[prone]]. A creature that moves onto the silk must attempt the same save or an Acrobatics check to [[Balance]] against DC 30; on a failure, it falls prone. A creature that [[Step|Steps]] or Crawls onto the silk is unaffected."
  - name: Shadow Abduction ⬻
    desc: "(__arcane__, __shadow__, __teleportation__) **Requirements** Flycatcher has a creature [[Grabbed]]. **Effect** Flycatcher and the grabbed creature fade into the Netherworld. The creature attempts a DC 30 Will save.<ul class='inner-bullet-list'><li><b>Critical Success</b> The creature escapes Flycatcher’s Grab and remains behind.</li><li><b>Success</b> The creature remains in the tomb but is released in an unoccupied space within 20 feet of Flycatcher.</li><li><b>Failure</b> Flycatcher transports the creature with it to the Netherworld.</li><li><b>Critical Failure</b> As failure, and the creature is [[stupefied 1]] for 1 minute.</li></ul>Flycatcher can use this ability only within the tomb complex."
  - name: Arcane Innate Spells
    desc: "DC 30; attack +22<br>__5th__ [[Umbral Journey]] (at will; self only)<br>__2nd__ [[Invisibility]] (at will; self only)<br>__1st__ [[Sure Strike]] (at will)<br>__Cantrips (6th)__ [[Detect Magic]], [[Ghost Sound]], [[Prestidigitation]], [[Read Aura]], [[Telekinetic Hand]]"

speed:
  - name: Speed
    desc: "30 feet, climb 20 feet"

ac: 30
armorclass:
  - name: AC
    desc: "30; Fort +24, Ref +22, Will +19; +2 status bonus to saves against magic"
hp: 210
health:
  - name: HP
    desc: "210; __Resistances__ physical 10 (except magical)"

attacks:
  - name: Melee ⬻
    desc: "__claw__ +24 ([[agile]], [[reach|reach 15 feet]])<br>__Damage__ 2d6+12 slashing plus [[Grab]]"
  - name: Melee ⬻
    desc: "__jaws__ +22 ([[reach|reach 15 feet]])<br>__Damage__ 2d8+10 piercing plus paralytic venom"

sourcebook: "_Monster Manual II_ (3rd Edition), converted to Pathfinder 2e Remaster"