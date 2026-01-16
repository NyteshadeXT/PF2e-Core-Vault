---
noteType: pf2eMonster
aliases: "Duergar Guard"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Duergar Guard"
level: 1
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Drow Blademaster"
level: "Creature 8"
rare_01: "Uncommon"
alignment: "CE"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Drow"
trait_03: "Elf"
modifier: 16
perception:
  - name: "Perception"
    desc: "+16; __darkvision__"
languages: "Elven, Undercommon"
skills:
  - name: "Skills"
    desc: "__Athletics__ +18, __Intimidation__ +16, __Stealth__ +17"
abilityMods: [4, 3, 2, 0, 1, 1]

abilities_mid:
  - name: "Sunlight Vulnerability"
    desc: "In sunlight, the blademaster is [[dazzled]]."
  - name: "Innate Spells"
    desc: "DC 26, spell attack +18; __2nd__ [[3-Rules/Character Building/Spells/D/Darkness|Darkness]] (At will), [[Faerie Fire]] (At Will)"
  - name: "Blind-Fight"
    desc: "Your battle instincts make you more aware of concealed and invisible opponents. You don’t need to succeed at a flat check to target concealed creatures. You’re not off-guard to creatures that are hidden from you (unless you’re off-guard to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature. While you’re adjacent to an undetected creature of your level or lower, it is instead only hidden from you"
  - name: "Attack of Opportunity"
    desc: "`pf2:r`  The drow makes a melee Strike against a creature that uses a manipulate action, a move action, or a ranged attack while in its reach."

abilities_bot:
  - name: "Quick Draw"
    desc: "⬻ The drow Interacts to draw a weapon and then makes a Strike with that weapon."
  - name: "Skewer"
    desc: "⬺ The drow makes a Strike with a piercing weapon. If it hits, the Strike deals an additional weapon damage die. The target must succeed at a DC 26 Fortitude save or be [[immobilized]] until the start of the drow’s next turn. On a critical failure, the target is [[restrained]]."
  - name: "Mindburn"
    desc: "The drow's psionic connection with it's held weapons allows it to channel a bit of mental damage with each strike.  Drow crystal weapons cause an additional `dice: 1d4` mental damage on each hit."

speed: 25 feet

ac: 27
armorclass:
  - name: "AC"
    desc: "27 (with dueling parry); __Fort__ +18, __Ref__ +16, __Will__ +14"

hp: 135
health:
  - name: "HP"
    desc: "135"

attacks:
  - name: "Melee"
    desc: "⬻ Drow Crystal Longsword +19 ([[versatile|versatile-P]]); __Damage__ `dice: 2d8+8` 2d8+8 slashing plus mindburn"
  - name: "Melee • "
    desc: "⬻ Drow Crystal Dagger +19 ([[agile]], [[finesse]], [[thrown 10]]); __Damage__ `dice: 2d4+8` 2d4+8 piercing plus mindburn"

sourcebook: "Custom"
```
