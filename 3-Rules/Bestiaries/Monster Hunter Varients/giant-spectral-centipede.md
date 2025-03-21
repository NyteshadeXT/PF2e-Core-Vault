---
noteType: pf2eMonster
aliases: "Giant Spectral Centipede"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/7
statblock: inline
name: "Giant Spectral Centipede"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB-Monster Hunter"
name: "Giant Spectral Centipede"
level: "Creature 7"
alignment: "N"
size: "Large"
trait_03: "Undead"
trait_04: "Incorporeal"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +17 (1d20+17); __Athletics__: +13 (1d20+13); __Stealth__: +15 (1d20+15); "
abilityMods: [2, 4, 4, -5, 2, 2]

abilities_top:
  - name: "Fragile"
    desc: "  Attacks and abilities with the Fragile trait can be [[broken|broken]] by destorying the linked part or location on the creatures body."
  - name: "Incorporeal Form"
    desc: " ([[fragile]]);  While the centipedes antenna remain the creature is considered incorporeal. It has a separate pool of hit points. Should the antenna be destroyed, the centipede will take on a corporeal form. In it's corporeal form it loses all resistances and immunities."
  - name: "Venom Veins"
    desc: " ([[fragile]]);  While the centipedes venom viens remain the creature adds 1d8 (1d8) poison damage to all attacks with it's mandibles and stinger."
  - name: "Stinger"
    desc: " ([[fragile]]);  The centipedes stinger can be severed from it's form. It has a separate pool of hit points. If brought to zero hit points the stinger is considered destroyed or severedd from the body and can no longer be used by the centipede as an attack. This damage is so tramatic to the centipede that it also loses one action per round until it is able to regrow the destroyed part."

speed: 30 feet, climb 30 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +18 (1d20+18); __Ref__: +15 (1d20+15); __Will__: +12 (1d20+12);"
hp: 148
health:
  - name: HP
    desc: "148;  __Immunities__ death effects, disease, paralyzed, poison, precision, unconscious; __Resistances__ all damage 5 except force, ghost touch , or positive , double resistance vs. non-magical) "


attacks:
  - name: Melee
    desc: "⬻ mandibles +16 __Damage__ 2d8+8 (2d8+8) slashing and 1d8 (1d8) poison damage"
  - name: Melee
    desc: "⬻ stinger +18 ([[fragile]]); __Damage__ 2d6+6 (2d6+6) piercing and 1d8 (1d8) poison damage This giant centipede is unlike anything you've ever seen before. There appears to be a fine mist emanating from its antenna which plays around its incorporeal form covering what appears to be a hard carapace. The creature's mandibles drip a caustic venom which seems to be fueled by a strange greenish set of veins running down the outside of its carapace and disappearing into its underbelly. In addition, it has a sharp, curved singer attached to the final segment of its body."

sourcebook: "_HB-Monster Hunter_."
```

```encounter-table
name: Giant Spectral Centipede
creatures:
  - 1: Giant Spectral Centipede
```
