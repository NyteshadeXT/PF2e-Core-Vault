```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew Conversion"
name: "Rennida"
level: "Creature 9"
rare_01: "Unique"
size: "Medium"
trait_01: "Elf"
trait_02: "Humanoid"
modifier: 19

perception:
  - name: "Perception"
    desc: "Perception +19; __low-light vision__"

languages: "Common, Draconic, Elven, Sylvan"

skills:
  - name: "Skills"
    desc: "__Acrobatics__ +20; __Arcana__ +17; __Athletics__ +14; __Crafting__ +18 (bowmaking); __Stealth__ +19; __Nature__ +16"

abilityMods: [0, 6, 2, 3, -1, 1]

speed: 30 feet

ac: 27
armorclass:
  - name: "AC"
    desc: "27; __Fort__ +18, __Ref__ +21, __Will__ +15"

hp: 145
health:
  - name: "HP"
    desc: "145; __Immunities__ sleep"

attacks:
  - name: "Melee-Shortsword"
    desc: "`pf2:1` Adamantine Shortsword +18 (agile, finesse, versatile S); __Damage__ `dice: 2d6+4` 2d6+4 piercing"

  - name: "Ranged-Longbow"
    desc: "`pf2:1` +1 Striking Frost Longbow +22 (deadly d10, magical, range increment 100 feet); __Damage__ `dice: 2d8+4 + 1d6` 2d8+4 piercing +1d6 cold"

abilities_top:
  - name: "Items"
    desc: "[[Weapon Potency (+1)|+1]] [[Striking]] [[Frost]] [[Longbow]], [[Arrows]] x40, [[Adamantine]] [[Shortsword]], [[armor-potency-1|Armor Potency (+1)]] [[Breastplate]], [[healing-potion-(moderate)|Healing Potion (Moderate)]], coin pouch (22 gp)"

abilities_mid:
  - name: "Arcane Archer"
    desc: "Rennida can channel arcane magic through her bow. When she casts a spell that requires a ranged spell attack, she can deliver it through a longbow Strike."

  - name: "Point Blank Shot"
    desc: "Creatures within 30 feet take an additional 2 damage from Rennida’s bow Strikes."

abilities_bot:
  - name: "Rapid Volley"
    desc: "⬺  Rennida makes two longbow Strikes against the same target. Both attacks count toward her multiple attack penalty, but she does not apply the penalty until after both Strikes."

  - name: "Manyshot"
    desc: "⬺  Rennida fires two arrows simultaneously at a creature within 60 feet. Make one attack roll. On a hit, the target takes the normal damage plus an additional 1d8 damage."

  - name: "Arcane Shot"
    desc: "⬺  Rennida casts a prepared spell and delivers it through a longbow Strike."


spellcasting:
  - name: "Arcane Prepared Spells (DC 26, attack +18)"
    desc: "**2nd** (2 slots) [[Mirror Image]], [[Acid Arrow]]\n**1st** (3 slots) [[Jump]], [[Enfeeble]], [[Sure Strike]]\n**Cantrips (4th)** [[Ray of Frost]], [[Acid Splash]], [[Daze]], [[Guidance]]"

sourcebook: "Homebrew"
```