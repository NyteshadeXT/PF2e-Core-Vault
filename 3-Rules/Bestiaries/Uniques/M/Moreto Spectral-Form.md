---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Moreto, Marquis of Ravenstone (Spectral Form)"
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/level/12
statblock: inline
name: "Moreto, Marquis of Ravenstone (Spectral Form)"
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Dungeon Magazine #252"
name: "Moreto, Marquis of Ravenstone"
level: "Creature 12"
rare_03: "Unique"
size: "Medium"
trait_04: "Incorporeal"
trait_05: "Spirit"
trait_06: "Undead"
modifier: 24

perception:
  - name: "Perception"
    desc: "Perception +24; __darkvision__, __lifesense 60 feet (imprecise)__;"

languages: "Chthonian, Common, Diabolic, Draconic, Sakvroth;"

skills:
  - name: "Skills"
    desc: "__Arcana__: +23 (1d20+23); __Deception__: +25 (1d20+25); __Diplomacy__: +23 (1d20+23); __Intimidation__: +25 (1d20+25); __Occultism__: +23 (1d20+23); __Society__: +21 (1d20+21); __Stealth__: +26 (1d20+26);"

abilityMods: [-5, 6, 0, 4, 4, 7]

abilities_mid:
  - name: "Incorporeal"
    desc: "  Moreto has no physical body. He can pass through solid objects but can't end his turn inside one. He can move through creatures but can't end his movement in another creature's space."

  - name: "Lifesense"
    desc: "  Moreto senses the vital essence of living creatures within 60 feet as an imprecise sense. Lifesense allows him to detect living creatures even when darkness or similar visual conditions would prevent him from seeing them."

  - name: "Ghostly Courtier"
    desc: "  Moreto retains his memories, personality, languages, and knowledge after his spectral transformation, but none of the class abilities, equipment, or spellcasting he possessed in his corporeal form."

  - name: "Spectral Rejuvenation"
    desc: "  If Moreto's spectral form is destroyed without his spirit being laid to rest, his essence retreats into the Ethereal Plane rather than being permanently destroyed. After 2d4 days, he can manifest again within Ravenstone or another location strongly tied to him. The GM determines what actions are sufficient to permanently lay Moreto's spirit to rest."

abilities_bot:
  - name: "Life-Draining Touch"
    desc: "  A living creature damaged by Moreto's spectral hand Strike must attempt a DC 32 Fortitude save. __Critical Success__ The creature is unaffected. __Success__ The creature takes 2d6 spirit damage. __Failure__ The creature takes 4d6 spirit damage and becomes [[drained|drained 1]]. __Critical Failure__ The creature takes 8d6 spirit damage and becomes [[drained|drained 2]]. A creature's drained value from Life-Draining Touch can't exceed 2."

  - name: "Ravenstone's Claim"
    desc: "⬺ ([[curse]], [[emotion]], [[fear]], [[mental]], [[occult]]); Moreto fixes his spectral gaze upon one living creature he can sense within 60 feet and declares the creature subject to his eternal dominion. The target must attempt a DC 32 Will save. __Critical Success__ The target is unaffected and temporarily immune for 24 hours. __Success__ The target is [[frightened|frightened 1]]. __Failure__ The target is [[frightened|frightened 2]] and [[off-guard]] to Moreto until the end of Moreto's next turn. __Critical Failure__ The target is [[frightened|frightened 3]] and [[off-guard]] to Moreto for 1 minute. At the end of each of its turns, it can attempt a new Will save, ending the off-guard effect on a success. The target is then temporarily immune for 24 hours."

  - name: "Spectral Passage"
    desc: "⬺ ([[occult]], [[teleportation]]); Moreto vanishes into the boundary between the Material and Ethereal Planes and reappears in an unoccupied space he can see within 60 feet. If he appears adjacent to a living creature, that creature is [[off-guard]] to Moreto's next spectral hand Strike made before the end of his turn."

  - name: "Siphon Vitality"
    desc: "⬻ ([[occult]], [[spirit]]); __Requirements__ Moreto is adjacent to a living creature that is [[drained]]; __Effect__ Moreto draws vitality from the creature. The target takes 4d6 spirit damage (DC 32 basic Fortitude save), and Moreto regains Hit Points equal to half the damage dealt. A creature that critically succeeds at its save is temporarily immune to Siphon Vitality for 1 minute."

speed: fly 40 feet

armorclass:
  - name: AC
    desc: "33; __Fort__ +19, __Ref__ +24, __Will__ +25;"

health:
  - name: HP
    desc: "175, void healing; __Immunities__ bleed, death effects, disease, doomed, drained, fatigued, healing, paralyzed, poison, precision, unconscious; __Resistances__ all damage 10 (except force, ghost touch, spirit, or vitality);"

attacks:
  - name: Melee Spectral Hand
    desc: "⬻ +26 ([[agile]], [[finesse]], [[magical]]); __Damage__ 3d8+10 (3d8+10) spirit plus Life-Draining Touch"

sourcebook: "Converted from the spectral transformation of Moreto, Marquis of Ravenstone."