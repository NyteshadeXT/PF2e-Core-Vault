---
obsidianUIMode: preview
title: "harleys-haunting-visage"
aliases: "Harley's Haunting Visage"
noteType: pf2eSpell
cssclasses: pf2e,pf2e-spell
tags:
  - pf2eSpell
  - spell/level/3
  - trait/illusion
  - trait/emotion
  - trait/fear
  - trait/mental
  - trait/rare
  - tradition/arcane
  - tradition/occult

license: ORC
---
```statblock
name: "Harley's Haunting Visage `pf2:2`"
level: "Spell 3"

trait_01: [[illusion]]
trait_02: [[emotion]]
trait_03: [[3-Rules/Trait Reference/F/fear|fear]]
trait_04: [[3-Rules/Trait Reference/M/mental|mental]]
rare_01: [[rare]]
layout: Basic Pathfinder 2e Layout
columns: 1
columnWidth: x

abilities_top:
  - name: "Traditions"
    desc: "arcane, occult"
  - name: "Range"
    desc: "30 ft.; **Targets** creatures of your choice within range who can see you"
  - name: "Saving Throw"
    desc: "Will"
  - name: "Duration"
    desc: "sustained up to 1 minute"

abilities_mid:
  - name: ""
    desc: "You draw upon the haunting glamour of Harley’s Hollow, cloaking yourself in spectral light and whispers of ghostly laughter. Your eyes burn like lanterns in fog, and shadows dance about your form, twisting into fleeting faces of terror and sorrow. Each chosen creature that can see you must attempt a Will save.<br><br>**Critical Success** The creature recognizes the illusion and is unaffected.<br>**Success** The creature is frightened 1.<br>**Failure** The creature is frightened 2 and becomes stupefied 1 as phantasmal whispers cloud its thoughts until the end of its next turn.<br>**Critical Failure** The creature is frightened 3 and stupefied 2 for 1 minute. For as long as it can see you, it is also immobilized with fear for 1 round.<br><br>When you cast this spell, you gain a +2 circumstance bonus to Intimidation checks to Demoralize until the spell ends.While the spell is sustained, your form glows faintly with spectral radiance, and your voice echoes as if spoken through a hollow mask."

abilities_bot:
  - name: "Heightened (+1)"
    desc: "Increase the range by 10 feet, and the frightened condition on a failure or critical failure increases by 1."

sourcebook: "_Homebrew_"
