---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Zifforian, Dread Wraith"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/12
statblock: inline
name: "Zifforian, Dread Wraith"
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Converted from D&D 3.5 Monster Manual"
name: "Zifforian, Dread Wraith"
level: "Creature 12"
rare_03: "Unique"
size: "Large"
trait_04: "Incorporeal"
trait_05: "Undead"
trait_06: "Wraith"
modifier: 25

perception:
  - name: "Perception"
    desc: "Perception +25; __darkvision__, __lifesense 60 feet__;"

languages: "Common, Necril;"

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +25 (1d20+25); __Intimidation__: +24 (1d20+24); __Religion__: +21 (1d20+21); __Stealth__: +27 (1d20+27);"

abilityMods: [-5, 7, 0, 3, 5, 6]

abilities_mid:
  - name: "Lifesense"
    desc: "  Zifforian senses the vital essence of living creatures within 60 feet as a precise sense."

  - name: "Sunlight Powerlessness"
    desc: "  If exposed to direct sunlight, Zifforian is [[slowed|slowed 1]] and can't use Dreadful Passage. The slowed condition from sunlight can't be removed while Zifforian remains in direct sunlight."

  - name: "Incorporeal"
    desc: "  Zifforian has no physical body. He can pass through solid objects, including walls, but can't end his movement inside one. His incorporeal form grants him resistance 10 to all damage (except force, ghost touch, or vitality; double resistance against non-magical damage)."

abilities_bot:
  - name: "Drain Constitution"
    desc: " ([[void]]);  When Zifforian damages a living creature with his spectral hand Strike, the target must attempt a DC 32 Fortitude save. Regardless of the result, the creature is temporarily immune to Drain Constitution until the start of Zifforian's next turn.<ul class='inner-bullet-list'><li>__Critical Success__ The creature is unaffected.</li><li>__Success__ The creature becomes [[drained|drained 1]].</li><li>__Failure__ The creature becomes [[drained|drained 2]].</li><li>__Critical Failure__ The creature becomes [[drained|drained 2]] and [[enfeebled|enfeebled 1]] for 1 minute.</li></ul> Whenever Drain Constitution causes a creature's drained value to increase, Zifforian gains 10 temporary Hit Points. If he already has temporary Hit Points from Drain Constitution, these temporary Hit Points replace them rather than adding together."

  - name: "Dreadful Passage"
    desc: "⬺ ([[flourish]]);  Zifforian Flies up to his Speed. At any point during this movement, he can make one spectral hand Strike. This movement doesn't trigger reactions from the creature targeted by the Strike. Zifforian can move through creatures and solid objects during this movement as normal for an incorporeal creature, but he can't end his movement inside a creature or object."

  - name: "Create Spawn"
    desc: " ([[occult]], [[void]]);  A living humanoid slain by Zifforian's spectral hand rises as a wraith after 1d4 rounds. The new wraith is under Zifforian's control. If Zifforian is destroyed before the transformation occurs, the transformation is prevented. A creature transformed in this way can be restored to life normally after the spawned wraith is destroyed."

speed: fly 60 feet

armorclass:
  - name: AC
    desc: "33; __Fort__ +20, __Ref__ +25, __Will__ +23"

health:
  - name: HP
    desc: "190; __Immunities__ bleed, death effects, disease, paralyzed, poison, precision, unconscious; __Resistances__ all damage 10 (except force, ghost touch, or vitality; double resistance against non-magical damage);"

attacks:
  - name: Melee Spectral Hand
    desc: "⬻ +26 ([[finesse]], [[magical]], [[reach|reach 10 feet]], [[void]]); __Damage__ 3d10+10 (3d10+10) void plus Drain Constitution"

sourcebook: "Converted from Dread Wraith, D&D 3.5 Monster Manual, using the Pathfinder 2e wraith family as a mechanical baseline."