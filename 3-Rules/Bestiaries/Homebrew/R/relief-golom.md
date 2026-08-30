---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Relief Golem"
tags: 
  - pf2e/creature/type/construct
  - pf2e/creature/level/10
statblock: inline
name: "Relief Golem"
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Dragon Magazine #334"
name: "Relief Golem"
level: "Creature 10"
token: relief-golom.png
rare_03: "Rare"
size: "Large"
trait_04: "Construct"
trait_05: "Earth"
modifier: 19

perception:
  - name: "Perception"
    desc: "Perception +19; __darkvision__;"

languages: "Common (can't speak);"

skills:
  - name: "Skills"
    desc: "__Athletics__: +23 (1d20+23); __Stealth__: +19 (1d20+19), +23 while Melded into Relief;"

abilityMods: [7, 2, 5, -2, 3, -5]

abilities_mid:
  - name: "Constructed"
    desc: "  The relief golem is immune to bleed, death effects, disease, doomed, drained, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, sickened, spirit, unconscious, and vitality."

  - name: "Stone Body"
    desc: "  The relief golem has resistance 10 to physical damage except bludgeoning."

  - name: "Meld into Relief"
    desc: "⬻ ([[earth]], [[move]]); __Requirements__ The relief golem is adjacent to a stone surface large enough to contain it; __Effect__ The relief golem melds into the stone surface. Its three-dimensional form flattens into a carving, fresco, or bas-relief appropriate to the surrounding architecture. While melded, the golem has greater cover, can't be flanked, and can see and hear through the stone normally. It can remain melded indefinitely. While melded, the golem can't Strike or take actions with the attack trait. It can leave the surface by using Meld into Relief again, appearing in an unoccupied space adjacent to the surface."

  - name: "Architectural Camouflage"
    desc: "  While Melded into Relief and remaining motionless, the relief golem can Hide without cover or concealment. Creatures specifically Searching the wall can detect it normally. A creature that doesn't detect the relief golem before it emerges is [[off-guard]] to the golem's first Strike before the end of that turn."

  - name: "Disrupt the Stone"
    desc: "  Magic that substantially reshapes, softens, or transforms stone interacts unusually with the relief golem. If such an effect targets stone containing a melded relief golem, the golem is immediately expelled into the nearest available space and takes 4d6 (4d6) force damage, with no save. At the GM's discretion, especially potent magic that transforms stone into a substantially different substance also suppresses Stone Body and prevents the relief golem from using Meld into Relief or Relief Passage until the end of its next turn."

abilities_bot:
  - name: "Relief Passage"
    desc: "⬻ ([[earth]], [[move]]); __Requirements__ The relief golem is Melded into Relief; __Effect__ The golem travels through contiguous stone, wood, or plaster up to its Speed. It doesn't need line of sight or line of effect to its destination, but it must end this movement either melded into another solid surface or in an unoccupied space adjacent to one. If it attempts to pass through a barrier too thick to cross with this movement, the action is lost and the golem remains where it began."

  - name: "Emerge from the Wall"
    desc: "⬺ ([[earth]], [[flourish]]); __Requirements__ The relief golem is Melded into Relief; __Effect__ The golem uses Relief Passage. At any point during this movement, it can emerge into an unoccupied space adjacent to the surface and make a fist Strike. If the target hadn't detected the golem before it emerged, the target is [[off-guard]] against this Strike. On a successful Strike, the golem can Push the target 5 feet. The golem can then complete any remaining movement from Relief Passage, including melding into another valid surface."

  - name: "Crushing Sweep"
    desc: "⬺  The relief golem makes two fist Strikes against two different creatures within its reach. These attacks count toward the relief golem's multiple attack penalty, but the penalty doesn't increase until after it makes both attacks."

speed: 20 feet

armorclass:
  - name: AC
    desc: "30; __Fort__ +23, __Ref__ +18, __Will__ +19"

health:
  - name: HP
    desc: "175; __Immunities__ bleed, death effects, disease, doomed, drained, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, sickened, spirit, unconscious, vitality; __Resistances__ physical 10 (except bludgeoning);"

attacks:
  - name: Melee Fist
    desc: "⬻ +23 ([[magical]], [[reach|reach 10 feet]]); __Damage__ 2d12+13 (2d12+13) bludgeoning"

sourcebook: "Converted from Relief Golem, Dragon Magazine #334, page 42."