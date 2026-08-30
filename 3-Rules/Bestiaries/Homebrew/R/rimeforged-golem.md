---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Rimeforged Golem"
tags: 
  - pf2e/creature/type/construct
  - pf2e/creature/level/11
statblock: inline
name: "Rimeforged Golem"
level: 11
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Pathfinder Bestiary 2, adapted to PF2e Remaster"
name: "Rimeforged Golem"
level: "Creature 11"
rare_03: "Uncommon"
size: "Medium"
trait_04: "Cold"
trait_05: "Construct"
trait_06: "Mindless"
modifier: 19

perception:
  - name: "Perception"
    desc: "Perception +19; __darkvision__;"

languages: "—;"

skills:
  - name: "Skills"
    desc: "__Athletics__: +24 (1d20+24);"

abilityMods: [7, 1, 6, -5, 0, -5]

abilities_mid:
  - name: "Constructed"
    desc: "  The rimeforged golem is immune to bleed, cold, death effects, disease, doomed, drained, electricity, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, sickened, spirit, unconscious, and vitality."

  - name: "Frozen Body"
    desc: "  The rimeforged golem has resistance 10 to physical damage except adamantine and bludgeoning."

  - name: "Fire Vulnerability"
    desc: "  Fire rapidly destabilizes the magic holding the rimeforged golem together. The rimeforged golem has weakness 10 to fire."

  - name: "Waterlogged"
    desc: "  If the rimeforged golem takes damage from a magical water effect or begins its turn substantially immersed in water, it is [[slowed|slowed 1]] until the end of its next turn."

  - name: "Icy Demise"
    desc: "⬲ ([[cold]]); __Trigger__ The rimeforged golem is destroyed; __Effect__ The magic maintaining the golem catastrophically releases its frozen body. Razor-sharp fragments of ice explode in a 20-foot emanation. Creatures in the area take 5d6 (5d6) cold damage and 5d6 (5d6) slashing damage with a DC 30 basic Reflex save."

abilities_bot:
  - name: "Breath Weapon"
    desc: "⬺ ([[cold]]);  The rimeforged golem exhales freezing mist in a 30-foot cone. Creatures in the area take 12d6 (12d6) cold damage with a DC 30 basic Reflex save. The rimeforged golem can't use Breath Weapon again for 1d4 rounds."

  - name: "Creeping Cold"
    desc: " ([[cold]]);  When the rimeforged golem critically hits a creature with its fist Strike, supernatural frost spreads through the target's body. The target takes 3d6 (3d6) persistent cold damage and is [[slowed|slowed 1]] until the end of its next turn."

  - name: "Rimeforged Advance"
    desc: "⬺  The rimeforged golem Strides up to its Speed and makes a fist Strike. If the Strike hits, the target must succeed at a DC 30 Fortitude save or be pushed 10 feet directly away from the golem (20 feet on a critical failure)."

speed: 25 feet

armorclass:
  - name: AC
    desc: "31; __Fort__ +24, __Ref__ +19, __Will__ +18"

health:
  - name: HP
    desc: "190; __Immunities__ bleed, cold, death effects, disease, doomed, drained, electricity, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, sickened, spirit, unconscious, vitality; __Weaknesses__ fire 10; __Resistances__ physical 10 (except adamantine and bludgeoning);"

attacks:
  - name: Melee Fist
    desc: "⬻ +24 ([[magical]], [[versatile|versatile P]]); __Damage__ 2d12+13 (2d12+13) bludgeoning plus 2d6 (2d6) cold"

sourcebook: "Pathfinder Bestiary 2, Ice Golem; rebuilt as a Creature 11 using Pathfinder 2e Remaster conventions."