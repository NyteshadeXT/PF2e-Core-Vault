---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Oculus Demon"
tags:
  - pf2e/creature/type/fiend
  - pf2e/creature/level/13
statblock: inline
name: "Oculus Demon"
level: 13
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Dungeon Magazine #252"
name: "Oculus Demon"
level: "Creature 13"
token: "oculus-demon.png"
rare_03: "Uncommon"
size: "Medium"
trait_04: "Demon"
trait_05: "Fiend"
trait_06: "Unholy"
modifier: 26

perception:
  - name: "Perception"
    desc: "Perception +26; __darkvision__, __greater darkvision__, __see the unseen__;"

languages: "Chthonian;"

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +26 (1d20+26); __Athletics__: +23 (1d20+23); __Intimidation__: +23 (1d20+23); __Stealth__: +28 (1d20+28);"

abilityMods: [6, 8, 7, 0, 4, 2]

abilities_top:
  - name: "Equipment"
    desc: "[*+2*](<Weapon Potency (+2)>) [*greater striking*](greater-striking) [*greater astral*](<Astral Rune>) [*longsword*](longsword)"

abilities_mid:
  - name: "All-Around Vision"
    desc: "  The oculus demon's multitude of constantly roving eyes allow it to see in every direction at once. It can't be flanked."

  - name: "Eyes Without Number"
    desc: "  The oculus demon can simultaneously look in multiple directions and through numerous sets of eyes. It gains a +2 circumstance bonus to Perception checks against visual illusions and to saves against visual effects. When it successfully disbelieves a visual illusion, it critically succeeds instead."

  - name: "Wind Duke Bane"
    desc: "  Oculus demons were hunted nearly to extinction by the Wind Dukes of Aaqa, and the ancient magic used against them remains particularly effective. The oculus demon has weakness 10 to attacks and effects with the air trait and to attacks made with cold iron weapons."

abilities_bot:
  - name: "Soul-Searing Eyebolt"
    desc: " ([[emotion]], [[fear]], [[mental]]);  A living creature damaged by an oculus demon's eyebolt must attempt a DC 33 Fortitude save. __Critical Success__ The creature is unaffected. __Success__ The creature is unaffected and temporarily immune to Soul-Searing Eyebolt until the beginning of the oculus demon's next turn. __Failure__ The creature becomes [[sickened|sickened 1]] and [[frightened|frightened 1]]. __Critical Failure__ The creature becomes [[sickened|sickened 2]] and [[frightened|frightened 2]]. If a creature already sickened by Soul-Searing Eyebolt fails this save, it is also [[fleeing]] until the end of its next turn. If a creature already fleeing due to Soul-Searing Eyebolt critically fails this save, it falls [[unconscious]] for 1 minute. The creature can attempt a new DC 33 Fortitude save at the end of each of its turns, waking on a success. Taking damage automatically awakens it."

  - name: "Triple Eyebolt"
    desc: "⬺ ([[divine]]);  The oculus demon fires three eyebolts, each from a different eye. It makes three eyebolt Strikes against creatures within range. These attacks can target the same or different creatures. All three attacks count toward the oculus demon's multiple attack penalty, but the penalty doesn't increase until after it makes all three attacks."

  - name: "Paralyzing Gaze"
    desc: "⬺ ([[divine]], [[incapacitation]], [[visual]]);  The oculus demon focuses dozens of its eyes upon one creature it can see within 30 feet. The target must attempt a DC 31 Fortitude save. __Critical Success__ The target is unaffected and temporarily immune for 24 hours. __Success__ The target is [[slowed|slowed 1]] until the end of its next turn. __Failure__ The target is [[paralyzed]] until the end of its next turn. __Critical Failure__ The target is [[paralyzed]] for 1 minute. At the end of each of its turns, it can attempt a new Fortitude save, ending the effect on a success. After the effect ends, the target is temporarily immune for 24 hours."

  - name: "Mobile Barrage"
    desc: "⬽  The oculus demon Flies up to its Speed and uses Triple Eyebolt at any point during this movement. This movement doesn't trigger reactions caused by movement from creatures the demon damaged with an eyebolt during this activity."

speed: 30 feet, fly 70 feet

armorclass:
  - name: AC
    desc: "34; __Fort__ +26, __Ref__ +28, __Will__ +22;"

health:
  - name: HP
    desc: "235; __Immunities__ electricity, fire, poison; __Resistances__ acid 10, cold 10; __Weaknesses__ air 10, cold iron 10;"

attacks:
  - name: Melee Longsword
    desc: "⬻ +27 ([[magical]], [[versatile|versatile P]]); __Damage__ 3d8+13 (3d8+13) slashing plus 1d6 spirit"
  - name: Melee Claw
    desc: "⬻ +25 ([[agile]]); __Damage__ 3d8+13 (3d8+13) slashing"
  - name: Ranged Eyebolt
    desc: "⬻ +28 ([[divine]], [[magical]], range 70 feet); __Damage__ 3d8+8 (3d8+8) void plus Soul-Searing Eyebolt"

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 33, attack +25; __7th__ [[truesight]]; __6th__ [[dispel magic]] (at will), [[truesight]]; __5th__ [[translocate]] (at will); __4th__ [[invisibility]] (self only, at will), [[mirror image]] (3/day), [[translate]] (at will); __Cantrips (7th)__ [[detect magic]];"

sourcebook: "Converted from Oculus Demon, Dungeon Magazine #252."

```
