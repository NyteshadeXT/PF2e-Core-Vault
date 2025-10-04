---
noteType: pf2eMonster
aliases: "Octopin Stalker"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/10
statblock: inline
name: "octopin-stalker"
level: 10
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Octopin Stalker"
level: "Creature 10"
token: octopin.png
rare_01: "Uncommon"
alignment: "LE"
size: "Medium"
trait_01: "Aberration"
modifier: 20
perception:
  - name: "Perception"
    desc: "+20; __darkvision 60 ft.__, __penetrating sight__"
languages: "Undercommon (understands, cannot speak)"
skills:
  - name: "Skills"
    desc: "__Athletics__ +23, __Stealth__ +22, __Climb__ +25"
abilityMods: [6, 4, 4, 0, 2, 3]

abilities_mid:
  - name: "Immunity"
    desc: "electricity"
  - name: "Penetrating Sight"
    desc: "The octopin stalker can see through up to 2 feet of wood, 6 inches of stone or metal, or 1 inch of lead as if they were translucent shadows. It ignores [[illusion]] figments and glamers (such as *invisibility*), though it still requires line of effect to use other abilities."
  - name: "Slowing Gaze"
    desc: "⬻ ([[aura]], [[arcane]], [[enchantment]], [[visual]]); 30 feet, DC 30 Will. Each creature that starts its turn in the area must attempt a Will save. On a failure, the creature is [[slowed|slowed 1]] for 1 round (or [[slowed|slowed 2]] for 1 round on a critical failure). A creature that succeeds is temporarily immune for 24 hours."

abilities_bot:
  - name: "Rend"
    desc: "If the octopin stalker hits the same creature with two claw Strikes in one turn, it deals an additional 2d10+12 `dice: 2d10+12` slashing damage as it tears flesh."
  - name: "Wall Climber"
    desc: "The octopin stalker ignores difficult terrain when climbing and can always take 10 on Climb checks. It often clings to ceilings and ambushes prey from above."
  - name: "Sudden Drop"
    desc: "⬲ **Trigger:** A creature moves underneath the octopin stalker while it is climbing on a wall or ceiling. **Effect:** The octopin drops into the target’s space and makes two claw Strikes against it."

speed: 30 feet, climb 30 feet

ac: 29
armorclass:
  - name: "AC"
    desc: "29; __Fort__ +22, __Ref__ +21, __Will__ +23"

hp: 180
health:
  - name: "HP"
    desc: "180"

attacks:
  - name: "Melee • Claw"
    desc: "⬻ +23 ([[reach|reach 10 feet]]); __Damage__ `dice: 2d10+12` 2d10+12 slashing plus Rend"
  - name: "Melee • Tentacle Grasp"
    desc: "⬻ +23; __Damage__ `dice: 2d8+12` 2d8+12 bludgeoning and the target must succeed at a DC 30 Reflex save or be [[grabbed]]."

sourcebook: "Custom"

```