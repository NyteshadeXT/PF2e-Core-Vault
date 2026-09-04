---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "True Ghoul"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/3
statblock: inline
name: "True Ghoul"
level: 3
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Dragon Magazine #252"
name: "True Ghoul"
level: "Creature 3"
rare_03: "Uncommon"
size: "Medium"
trait_04: "Ghoul"
trait_05: "Undead"
modifier: 11

perception:
  - name: "Perception"
    desc: "Perception +11; __darkvision__, __lifesense 60 feet (imprecise)__;"

languages: "Common, Sakvroth;"

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +10 (1d20+10); __Diplomacy__: +10 (1d20+10); __Society__: +8 (1d20+8); __Stealth__: +11 (1d20+11); __Survival__: +9 (1d20+9);"

abilityMods: [4, 3, 0, 1, 2, 4]

abilities_mid:
  - name: "Lifesense"
    desc: "  The true ghoul senses the vital essence of living creatures within 60 feet as an imprecise sense. Lifesense allows it to detect living creatures even when darkness or similar visual conditions would prevent it from seeing them."

  - name: "Tireless Hunter"
    desc: "  A true ghoul doesn't need to rest and isn't affected by fatigue caused by forced marches. When the true ghoul Tracks a living creature it has detected with lifesense, it gains a +2 circumstance bonus to its Survival check."

  - name: "Spectral Transformation"
    desc: "⬲ ([[occult]], [[spirit]]); __Trigger__ The true ghoul is destroyed; __Effect__ The supernatural force animating the true ghoul tears free of its remains and manifests as a luminous green phantom in its space. This phantom is harmless, can't affect or be affected by creatures or objects, and disappears at the end of the true ghoul's next turn. A true ghoul noble undergoes a more powerful transformation and can instead persist as a free-willed spectral undead."

abilities_bot:
  - name: "Consume Flesh"
    desc: "⬻ ([[manipulate]]); __Requirements__ The true ghoul is adjacent to the corpse of a creature that died within the last hour; __Effect__ The true ghoul devours a portion of the corpse and regains 3d6 Hit Points. It can regain Hit Points from any given corpse only once."

  - name: "Ghoul Whispers"
    desc: "⬻ ([[auditory]], [[curse]], [[linguistic]], [[occult]]); __Requirements__ The true ghoul has a living creature [[grabbed]] or [[restrained]]; __Effect__ The true ghoul whispers seductive promises of the grave into its victim's ear. The target must attempt a DC 20 Will save. On a failure, it is afflicted with Forbidden Cravings. On a critical failure, it begins at stage 2. A creature that succeeds at its save is temporarily immune to Ghoul Whispers for 24 hours."

  - name: "Forbidden Cravings"
    desc: " ([[curse]], [[occult]]); __Saving Throw__ DC 20 Will; __Stage 1__ The victim develops an unnatural hunger for raw flesh and is [[sickened|sickened 1]] (1 day); __Stage 2__ The victim is [[sickened|sickened 1]] and [[drained|drained 1]] as ordinary food becomes revolting and unsatisfying (1 day); __Stage 3__ The victim is [[sickened|sickened 2]] and [[drained|drained 2]] and can't reduce its sickened condition below 1 while afflicted (1 day); __Stage 4__ The victim dies and rises as a ghoul at the next midnight. The curse ends if removed before the victim reaches stage 4."

  - name: "Grave Knowledge"
    desc: "  When the true ghoul uses Consume Flesh, it can draw fragments of knowledge from the creature's remains. Until the true ghoul next uses Consume Flesh, it can attempt to Recall Knowledge about subjects the consumed creature knew using Society with a +10 modifier, even if another skill would normally be required. The GM determines what knowledge was available to the consumed creature."

  - name: "Cultured Butchery"
    desc: "⬺  The true ghoul makes a longsword Strike and a claw Strike in either order. Both attacks count toward its multiple attack penalty, but the penalty doesn't increase until after it makes both attacks. If both Strikes hit the same creature, the true ghoul can [[Grab]] that creature."

speed: 30 feet

armorclass:
  - name: AC
    desc: "19; __Fort__ +8, __Ref__ +11, __Will__ +10"

health:
  - name: HP
    desc: "50, void healing; __Immunities__ bleed, death effects, disease, doomed, drained, fatigued, healing, paralyzed, poison, unconscious;"

attacks:
  - name: Melee Longsword
    desc: "⬻ +12 ([[versatile|versatile P]]); __Damage__ 1d8+6 (1d8+6) slashing"
  - name: Melee Claw
    desc: "⬻ +12 ([[agile]], [[finesse]]); __Damage__ 1d6+4 (1d6+4) slashing plus Grab"
  - name: Melee Jaws
    desc: "⬻ +12 ([[finesse]]); __Damage__ 1d8+4 (1d8+4) piercing"

sourcebook: "Converted from True Ghoul, Dragon Magazine #252."