---
obsidianUIMode: preview  
noteType: pf2eMonster  
aliases: "Advanced Wind Warrior"  
tags:
- pf2e/creature/type/elemental
- pf2e/creature/level/10  
statblock: inline  
name: "Advanced Wind Warrior"  
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from _Dungeon Magazine_ #124, page 47"
name: "Advanced Wind Warrior"
token: "Wind-Warrior.webp"
level: "Creature 10"
rare_03: "Uncommon"
size: "Medium"
trait_04: "Elemental"
trait_05: "Air"
modifier: 22
perception:
  - name: "Perception"
    desc: "Perception +19; __darkvision__;"
languages: "Auran (can't speak); "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +22; __Athletics__: +18; __Stealth__: +20; "
abilityMods: [4, 6, 3, -1, 1, 0]

abilities_mid:
  - name: "Body Suffusion"
    desc: "  The wind warrior's weapons are integral manifestations of its animating spirit. A manifested weapon immediately crumbles to dust if it leaves the warrior's grasp or if the warrior is destroyed. The warrior can't be disarmed of its manifested weapons."
  - name: "Wind-Forged Weapons"
    desc: "  The wind warrior's Strikes are magical. If it has no manifested longswords or crossbow, it can create one of the missing weapons with a single action, which has the [[concentrate]] trait."
  - name: "Wind Step"
    desc: "⬲ __Trigger__ An enemy's melee Strike misses the wind warrior; __Effect__ The warrior Flies up to 15 feet. This movement doesn't trigger reactions."

abilities_bot:
  - name: "Sonic Blast"
    desc: "⬺ ([[air]], [[sonic]]); __Frequency__ Once every 1d4 rounds; __Effect__ The wind warrior clangs its longswords together, releasing a discordant blast in a 30-foot line. Each creature in the area takes 5d6 (5d6) sonic damage with a DC 29 basic Reflex save. A creature that fails its save is [[deafened]] for 1 round (or 1 minute on a critical failure)."
  - name: "Twin-Blade Assault"
    desc: "⬺  The wind warrior makes two longsword [[Strike|Strikes]] against the same target. Both attacks count toward its multiple attack penalty, but the penalty doesn't increase until after both attacks are made."

speed: 30 feet, fly 80 feet

armorclass:
  - name: AC
    desc: "30; __Fort__ +17, __Ref__ +22, __Will__ +18"

health:
  - name: HP
    desc: "150; __Immunities__ bleed, paralyzed, poison, sleep;"

attacks:
  - name: Melee Wind-Forged Longsword
    desc: "⬻ +22 ([[magical]], [[versatile|versatile P]]); __Damage__ 2d8+8 (2d8+8) slashing"
  - name: Ranged Wind-Forged Light Crossbow
    desc: "⬻ +20 ([[magical]], [[range|range increment 80 feet]], [[reload|reload 0]]); __Damage__ 2d8+6 (2d8+6) piercing"

sourcebook: "Converted from Advanced Wind Warrior, _Dungeon Magazine_ #124, page 47."
```