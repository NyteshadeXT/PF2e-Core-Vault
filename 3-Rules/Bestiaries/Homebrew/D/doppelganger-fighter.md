---
noteType: pf2eMonster
aliases: "Doppelganger Fighter"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "doppelganger-fighter"
level: 3
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "doppelganger-fighter"
level: "Creature 7"
alignment: "NE"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Shapechanger"
trait_03: "Aberration"
modifier: 17
perception:
  - name: "Perception"
    desc: "+17; __darkvision__"
languages: "Common, Dwarven"
skills:
  - name: "Skills"
    desc: "__Athletics__ +17, __Deception__ +18 (+22 to Impersonate when using Change Shape), __Intimidation__ +14, __Society__ +12, __Stealth__ +15"
abilityMods: [4, 3, 3, 1, 1, 2]

abilities_mid:
  - name: "Change Shape"
    desc: "⬻ ([[arcane]], [[concentrate]], [[polymorph]], [[transmutation]]) The doppelganger takes on the appearance of any Small or Medium humanoid. This doesn't change their Speed or attack/defense modifiers, but it can adjust voice, scent, and mannerisms. They gain a +4 circumstance bonus to Deception checks to Impersonate as that individual."
  - name: "Detect Thoughts"
    desc: "⬻ ([[aura]], [[divination]], [[mental]], [[occult]]); 30 feet, DC 24 Will. The doppelganger automatically detects the presence of thinking creatures in range. They can spend an action (concentrate) to attempt to read one creature’s surface thoughts (Will DC 24 negates). While reading thoughts, they gain a +2 circumstance bonus to Deception, Diplomacy, and Intimidation checks against that creature."
  - name: "Attack of Opportunity"
    desc: "⬲  The doppelganger makes a melee Strike against a triggering foe that uses a manipulate or move action, or makes a ranged attack."

abilities_bot:
  - name: "Power Attack"
    desc: "⬺  The doppelganger makes a melee Strike with their longsword. This Strike deals an extra weapon damage die."
  - name: "Shield Block"
    desc: "⬲  The doppelganger can block with their heavy steel shield (Hardness 5, HP 20, BT 10)."
  - name: "Martial Training"
    desc: "The doppelganger’s fighter training grants them weapon specialization, adding extra damage with their longsword (+2)."
  - name: "Mind-Guided Feint"
    desc: "⬺  The doppelganger attempts to Feint against a creature whose thoughts they’re reading via Detect Thoughts. On success, the target is flat-footed against the doppelganger’s next melee Strike before the end of their next turn. On a critical success, the flat-footed condition lasts until the end of the doppelganger’s next turn."

speed: 25 feet

ac: 25
armorclass:
  - name: "AC"
    desc: "25 (with heavy steel shield raised); __Fort__ +16, __Ref__ +14, __Will__ +12; immune [[sleep]], [[charmed]]"

hp: 115
health:
  - name: "HP"
    desc: "115"

attacks:
  - name: "Melee • Longsword"
    desc: "⬻ +18 (versatile P); __Damage__ `dice: 2d8+6` 2d8+6 slashing"
  - name: "Melee • Slam"
    desc: "⬻ +16; __Damage__ 2d6+6 `dice: 2d6+6` bludgeoning"
  - name: "Ranged • Thrown Weapon (dagger, bottle, or similar)"
    desc: "⬻ +15; __Damage__ 1d6+4 `dice: 1d6+4` piercing or bludgeoning"

sourcebook: "Custom"

```