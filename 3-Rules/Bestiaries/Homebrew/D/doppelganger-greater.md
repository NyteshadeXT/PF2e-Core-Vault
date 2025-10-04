---
noteType: pf2eMonster
aliases: "Greater Doppelganger"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "doppelganger-greater"
level: 1
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "doppelganger-greater"
level: "Creature 9"
rare_01: "Uncommon"
alignment: "NE"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Shapechanger"
trait_03: "Aberration"
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; darkvision"
languages: "Common, Elven, Dwarven; plus any from consumed identities"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +16, __Athletics__ +15, __Deception__ +22, __Diplomacy__ +18, __Intimidation__ +17, __Society__ +19, __Stealth__ +17, __Thievery__ +16"
abilityMods: [2, 4, 3, 4, 4, 3]

abilities_mid:
  - name: "Change Shape"
    desc: "⬻ ([[arcane]], [[concentrate]], [[polymorph]], [[transmutation]]); The doppelganger takes the appearance of any Small or Medium humanoid, including clothing and gear. This doesn’t change its Speed or statistics. It gains a +4 circumstance bonus to Deception checks to Impersonate and a +10 bonus if it has consumed the target’s identity."
  - name: "Detect Thoughts"
    desc: "⬻ ([[aura]], [[divination]], [[mental]], [[occult]]); 30 feet, DC 28 Will. The doppelganger continuously senses thinking creatures. It can focus (1 action, concentrate) to read surface thoughts of one creature (Will DC 28 negates). While reading thoughts, it gains a +2 circumstance bonus to Deception, Diplomacy, and Intimidation against that creature."
  - name: "Consume Identity"
    desc: "If the greater doppelganger devours the brain of a dead humanoid within 1 hour, it can assume that creature’s form with flawless accuracy. While in that form, it can perfectly impersonate the target, including their alignment and memories, and can use that victim’s trained skills and languages. A doppelganger can retain a number of consumed identities equal to 18 class levels in total. It can recall memories from any consumed identity at will."
  - name: "Magic Item Use"
    desc: "The doppelganger can activate spell trigger and spell completion items of any tradition, ignoring class restrictions."

abilities_bot:
  - name: "Polymorph Rend"
    desc: "⬺ ([[attack]], [[occult]], [[transmutation]]); __Frequency__ once per round. __Requirements__ The target is affected by a polymorph or shapechanging effect. The doppelganger makes a melee Strike. On a hit, the target takes an additional `dice: 6d6` 6d6 damage (DC 28 Fortitude basic save)."
  - name: "Consume Mind"
    desc: "⬺ ([[occult]], [[mental]]); __Requirements__ The doppelganger has a creature grabbed. Effect: The target must succeed at a DC 28 Will save or become [[stupefied|stupefied 2]] for 1 minute. A critical failure also causes the target to be [[confused]] until the end of its next turn."

speed: 25 feet

ac: 28
armorclass:
  - name: "AC"
    desc: "28; __Fort__ +21, __Ref__ +19, __Will__ +22; immune [[sleep]], [[charmed]]"

hp: 165
health:
  - name: "HP"
    desc: "165"

attacks:
  - name: "Melee • Slam"
    desc: "⬻ +21; __Damage__ `dice: 2d8+9` 2d8+9 bludgeoning"
  - name: "Melee • Polymorph Rend"
    desc: "⬻ +21; __Damage__ `dice: 2d8+9` 2d8+9 bludgeoning plus `dice: 6d6` 6d6 polymorph rend (DC 28 Fortitude basic save)"

sourcebook: "Custom"

```