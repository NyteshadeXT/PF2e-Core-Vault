---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Blood Amniote"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/type/ooze
  - pf2e/creature/level/10
statblock: inline
name: "Blood Amniote"
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Libris Mortis"
name: "Blood Amniote"
level: "Creature 10"
token: blood-amniote.png
rare_03: "Rare"
size: "Huge"
trait_04: "Mindless"
trait_05: "Ooze"
trait_06: "Undead"
modifier: 18

perception:
  - name: "Perception"
    desc: "Perception +18; __darkvision__, __motion sense 60 feet__;"

languages: "—;"

skills:
  - name: "Skills"
    desc: "__Athletics__: +22 (1d20+22); __Stealth__: +21 (1d20+21);"

abilityMods: [6, 5, 5, -5, -4, -5]

abilities_mid:
  - name: "Mindless"
    desc: "  The blood amniote has no Intelligence modifier and is immune to mental effects."

  - name: "Ooze Senses"
    desc: "  A blood amniote senses nearby creatures through vibration and movement rather than conventional sight. Its motion sense is a precise sense, but it can't detect creatures that aren't moving unless they are adjacent to it."

  - name: "Undead Ooze"
    desc: "  The blood amniote has the immunities normally associated with both mindless oozes and undead. It is immune to bleed, critical hits, death effects, disease, doomed, drained, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, precision, sickened, spirit, unconscious, and vitality."

  - name: "Amorphous"
    desc: "  The blood amniote can move through gaps at least 1 foot wide without Squeezing and can Climb across walls and ceilings even if it has no handholds."

  - name: "Fast Healing"
    desc: "  The blood amniote regains 10 Hit Points at the beginning of its turn. This regeneration of its fluid mass is suppressed until the beginning of its next turn whenever it takes vitality damage."

abilities_bot:
  - name: "Blood Call"
    desc: " ([[void]]); __Trigger__ The blood amniote damages a living creature that has blood with its slam Strike; __Effect__ Blood violently beads from the creature's pores and streams through the air into the amniote. The target must attempt a DC 29 Fortitude save. Regardless of the result, the creature is temporarily immune to Blood Call from that blood amniote until the start of the amniote's next turn.<ul class='inner-bullet-list'><li>__Critical Success__ The target is unaffected.</li><li>__Success__ The target takes 2d6 (2d6) persistent bleed damage.</li><li>__Failure__ The target becomes [[drained|drained 1]] and takes 2d6 (2d6) persistent bleed damage. The blood amniote gains 1 blood point.</li><li>__Critical Failure__ The target becomes [[drained|drained 2]] and takes 2d6 (2d6) persistent bleed damage. The blood amniote gains 2 blood points.</li></ul> Blood Call can't affect a creature that doesn't have blood or a similar vital fluid."

  - name: "Siphon Spilled Blood"
    desc: "⬻ ([[void]]); __Requirements__ A living creature within 30 feet is taking persistent bleed damage; __Effect__ The blood amniote draws spilled blood through the air toward itself. The target immediately attempts the flat check to end its persistent bleed damage. On a failure, the amniote regains 15 Hit Points. A creature can be affected by Siphon Spilled Blood only once per round."

  - name: "Self Spawn"
    desc: "⬽ ([[manipulate]], [[void]]); __Requirements__ The blood amniote has at least 4 blood points; __Effect__ The amniote's distended mass convulses and tears itself into two separate creatures. Remove the original blood amniote from play and replace it with two blood amniotes in unoccupied spaces within its former space. Each new amniote has Hit Points equal to the original amniote's maximum Hit Points and begins with 3 blood points. Each offspring acts immediately after the original amniote's initiative position, but neither can act until the original amniote's next turn would have begun. Blood points have no effect other than fueling Self Spawn and are lost if the blood amniote is destroyed."

  - name: "Flowing Assault"
    desc: "⬺  The blood amniote Strides or Climbs up to its Speed and makes a slam Strike at any point during this movement."

speed: 30 feet, climb 20 feet

armorclass:
  - name: AC
    desc: "29; __Fort__ +19, __Ref__ +22, __Will__ +16"

health:
  - name: HP
    desc: "165, fast healing 10; __Immunities__ bleed, critical hits, death effects, disease, doomed, drained, fatigued, healing, mental, nonlethal attacks, paralyzed, poison, precision, sickened, spirit, unconscious, vitality;"

attacks:
  - name: Melee Slam
    desc: "⬻ +22 ([[reach|reach 10 feet]]); __Damage__ 2d12+11 (2d12+11) bludgeoning plus Blood Call"

sourcebook: "Converted from Blood Amniote, Libris Mortis, page 87."