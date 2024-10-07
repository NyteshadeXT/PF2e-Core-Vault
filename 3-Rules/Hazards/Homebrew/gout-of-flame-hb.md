---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- trait/fire
- trait/evocation
- trait/magical
- trait/trap
aliases: ["Gout of Flame"]
---

```statblock
name: "Gout of Flame "
level: "Hazard -1"

trait_01: [[environmental]]
trait_02: [[fire]]
trait_03: [[mechanical]]
trait_04: [[trap]]
layout: Basic Pathfinder 2e Layout
columns: 1
columnWidth: x

abilities_top:
  - name: "Stealth"
    desc: "DC 15 trained"
  - name: "Description"
    desc: "An [[Invisible]] rune imprinted on a lid of some kind.  Moving the lid releases a powerful gout of flame to discharge."
    
abilities_mid:
  - name: "Disable"
    desc: "[[Skills#Thievery|Thievery]] DC 18 (trained) to scratch out the rune without allowing it to trigger, or dispel magic (2nd level; counteract DC 18) to counteract the rune."
  - name: "Action Type"
    desc: "`pf2:r` **Trigger** The lid upon which the rune is inscribed is moved; **Effect** The trap deals `dice: 1d4` 1d4 fire damage to the triggering creature (DC 16 basic Reflex save).  "

sourcebook: "_Homebrew_"
```
