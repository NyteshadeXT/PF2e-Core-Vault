---
noteType: pf2eMonster
aliases: "Octopin"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/7
statblock: inline
name: "Octopin"
level: 7
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Octopin"
level: "Creature 7"
token: octopin.png
rare_01: "Uncommon"
alignment: "LE"
size: "Medium"
trait_01: "Aberration"
modifier: 15
perception:
  - name: "Perception"
    desc: "+15; __darkvision 60 ft.__, __penetrating sight__"
languages: "Undercommon (understands, cannot speak)"
skills:
  - name: "Skills"
    desc: "__Athletics__ +17, __Stealth__ +16, __Climb__ +19"
abilityMods: [4, 3, 3, -1, 1, 2]

abilities_mid:
  - name: "Immunity"
    desc: "electricity"
  - name: "Penetrating Sight"
    desc: "The octopin can see through up to 2 feet of wood, 6 inches of stone or metal, or 1 inch of lead as if they were translucent shadows. It ignores [[illusion]] figments and glamers (such as *invisibility*), though it still requires line of effect to use other abilities."
  - name: "Slowing Gaze"
    desc: "⬻ ([[aura]], [[arcane]], [[enchantment]], [[visual]]); 30 feet, DC 25 Will. Each creature that starts its turn in the area must attempt a Will save. On a failure, the creature is [[slowed|slowed 1]] for 1 round (or [[slowed|slowed 2]] for 1 round on a critical failure). A creature that succeeds is temporarily immune for 24 hours."

abilities_bot:
  - name: "Rend"
    desc: "If the octopin hits the same creature with two claw Strikes in one turn, it deals an additional `dice: 2d8+8` 2d8+8 slashing damage as it tears flesh."
  - name: "Wall Climber"
    desc: "The octopin ignores difficult terrain when climbing and can always take 10 on Climb checks. It often clings to ceilings and ambushes prey from above."

speed: 30 feet, climb 30 feet

ac: 26
armorclass:
  - name: "AC"
    desc: "26; __Fort__ +15, __Ref__ +14, __Will__ +17"

hp: 115
health:
  - name: "HP"
    desc: "115"

attacks:
  - name: "Melee • Claw"
    desc: "⬻ +18 ([[reach|reach 10 feet]]); __Damage__ `dice: 2d8+8` 2d8+8 slashing plus Rend"
  - name: "Melee • Tentacle Grasp"
    desc: "⬻ +18; __Damage__ `dice: 1d8+8` 1d8+8 bludgeoning and the target must succeed at a DC 25 Reflex save or be [[grabbed]]."

sourcebook: "Custom"

```