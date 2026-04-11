---
obsidianUIMode: preview  
noteType: pf2eMonster  
aliases: "Bozal Zahol"  
tags:  
- pf2e/creature/type/humanoid  
- pf2e/creature/type/fiend  
- pf2e/creature/level/11  
statblock: inline  
name: "Bozal Zahol"  
level: 11
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3e"
name: "Bozal Zahol"
level: "Creature 11"
size: "Medium"
trait_01: "Human"
trait_02: "Humanoid"
trait_03: "Fiend"
trait_04: "Tiefling"

modifier: 18
perception:
  - name: "Perception"
    desc: "+18; __darkvision__"

languages: "Common, Abyssal, Infernal"

skills:
  - name: "Skills"
    desc: "__Religion__: +22; __Occultism__: +19; __Deception__: +18; __Diplomacy__: +18; __Crafting__: +17"

abilityMods: [1, 0, 1, 1, 4, 2]

abilities_top:
  - name: "Spontaneous Inflict"
    desc: "Bozal can swap prepared spells for [[Harm]] spells of the same rank."

  - name: "Equipment"
    desc: "[[Weapon Potency (+1)|+1]] [[resilient]] [[chain-mail]], [[reinforcing-rune-(moderate)|reinforced]] [[steel shield]], [[Weapon Potency (+1)|+1]] [[club]], [[Harm|Wand of Harm]] (rank 3), [[Restoration|Scroll of Restoration]], [[Healing Potion (Greater)]], [[holy-prayer-beads|Holy Prayer Beads]], jade holy symbol (10 gp), ring of keys"

abilities_mid:
  - name: "Aura of Decay"
    desc: " (aura, divine, necromancy) 20 feet. Living creatures in the aura take 5 void damage at the start of their turn (DC 28 basic Fortitude save)."

  - name: "Darkness"
    desc: "⬻ (divine, darkness) Bozal casts [[3-Rules/Character Building/Spells/D/Darkness|Darkness]] once per day."

abilities_bot:
  - name: "Death Touch"
    desc: "⬺ (death, necromancy) Bozal reaches out with corrupt divine power. Target creature must attempt a DC 30 Fortitude save.\n__Critical Success__ No effect.\n__Success__ `dice: 6d6` void damage.\n__Failure__ `dice: 12d6` void damage and [[enfeebled|enfeebled 2]] for 1 round.\n__Critical Failure__ `dice: 12d6` void damage and [[enfeebled|enfeebled 3]] for 1 minute."

  - name: "Channel Smite"
    desc: "⬻  Bozal delivers a [[Harm]] through a melee Strike. On a hit, the target takes additional negative damage equal to the spell’s rank."

speed: 25 feet

ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +21, __Ref__ +17, __Will__ +24"

hp: 185
health:
  - name: HP
    desc: "185; __Resistances__ cold 5, electricity 5, fire 5"

attacks:
  - name: "Melee Club"
    desc: "⬻ +21 ([[magical]]); __Damage__ 1d6+6 bludgeoning plus 1d6 void"

spellcasting:
  - name: "Divine Prepared Spells"
    desc: "DC 30, attack +22\n\n__6th__ (2 slots) [[Harm]] (rank 6), [[Blessed Boundary]]\n__5th__ (3 slots) [[Death Ward]], [[Summon Undead]], [[Wall of Flesh]]\n__4th__ (3 slots) [[Steal Voice]], [[Divine Wrath]], [[Painful Vibrations]]\n__3rd__ (4 slots) [[Blindness]], [[Vampiric Feast]], [[Dispel Magic]], [[Bind Undead]]\n__2nd__ (4 slots) [[False Vitality]], [[Resist Energy]], [[Silence]], [[Peaceful Rest]]\n__1st__ (4 slots) [[Command]], [[Fear]], [[Harm]] (rank 1), [[Sanctuary]]\n__Cantrips__ (at will) [[Void Warp]], [[Detect Magic]], [[Shield]], [[Guidance]]"

sourcebook: "Custom conversion"
```
