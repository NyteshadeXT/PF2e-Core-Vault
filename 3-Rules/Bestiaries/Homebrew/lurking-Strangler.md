---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Lurking Strangler"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/2
statblock: inline
name: "Lurking Strangler"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Lurking Strangler"
level: "Creature 2"
rare_02: "Uncommon"
alignment: "LE"
size: "Tiny"
trait_03: "Aberration"
modifier: 2
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__, __all-around vision__;"
languages: "Understands Beholder, Command (cannot speak);"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +6 (1d20+6); __Intimidation__: +4 (1d20+4); "
abilityMods: [-1, 4, 1, -1, 0, 1]

abilities_top:
  - name: "All-Around Vision"
    desc: "  The lurking stalker gains a +2 circumstance bonus to [[rules/skills.md#perception|Perception]] checks and cannot be flanked."
abilities_mid:
  - name: "Eye Rays"
    desc: "([[occult]], [[enchantment]], [[mental]]) Each of the lurking stalker's two eye rays is usable once per round:\n\n*   **Cause Fear Ray**: Targets one creature within 30 feet. DC 16 Will save. On failure, the creature is [[Frightened|frightened 1]] (or [[Frightened|frightened 2]] on a critical failure).\n\n*   **Sleep Ray**: Targets one creature within 30 feet. DC 16 Will save. On failure, the creature falls [[Unconscious|unconscious]] for 1 minute or until awoken. Both rays are magical and operate at spell level 1."
  - name: "Suffocate"
    desc: " ([[attack]], [[death]]) If the lurking stalker hits a [[Unconscious|unconscious]] target with its lash attack, it automatically grapples the target:\n\n*   **1st Round**: The target becomes [[Unconscious|unconscious]].\n\n*   **2nd Round**: The target drops to 0 HP and is [[Dying|dying]].\n\n*   **3rd Round**: The target suffocates and dies unless the stalker is removed."
  - name: "Flight"
    desc: "  The lurking stalker flies at a speed of 20 feet using natural buoyancy. This also grants it a constant [[Gentle Landing|gentle landing]] effect."

speed: 5 feet, fly 20 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +5 (1d20+5); __Ref__: +7 (1d20+7); __Will__: +6 (1d20+6);"
hp: 30
health:
  - name: HP
    desc: "30; __Immunities__ none;"

attacks:
  - name: Melee
    desc: "⬻ lash +9 ([[reach|reach 10 feet]]); __Damage__ `dice: 1d4+2` 1d4+2 slashing"
  - name: Ranged
    desc: "⬻ eye ray +9 (range 30 feet); __Effect__ see Eye Rays ability"

sourcebook: "Homebrew"


```
