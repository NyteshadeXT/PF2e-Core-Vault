---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- rarity/rare
- trait/complex
- trait/magical
- trait/trap
aliases: ["Force Burst Wall"]
---




---




*Source: Homebrew*

```pf2e-stats
# Force Burst Wall
## Hazard 9

---

==Rare== ==complex== ==Magical== ==Trap==

**Stealth** DC 33 (trained)

**Description** A flaring, translucent wall of blue force hangs like a sheet of wavering glass, blocking access between the corridor and the stone chamber vaguely visible on the other side. The chamber on the other side is empty but for a single closed door.

**Disable** Use the key to deactivate the trap but must turn the key counter-clockwise to do so. Turning it the other direction allows the trap to attack again as a free action. Success disables the trap. DC 30 [[Skills#Thievery|Thievery]] (expert) twice to on the control panel to disable it
**AC** 27, **Fort** +13, **Ref** +17
**Hardness** 14, **HP** 56 (BT 28) to destroy the control panel and disable the trap; **Immunities** critical hits; object immunities; precision damage

---

**Force Blast** `pf2:r` ([[3-Rules/Trait Reference/F/force|force]], [[conjuration]]) **Trigger**: A creature opens the door; **Effect** The wall attacks with a burst of blazing blue force as reaction action. A creature must succeed at a DC 28 Reflex save or is pushed back and falls [[Prone]] and suffers `dice: 2d8+4` bludgeoning damage. Then the trap rolls initiative and attacks as a single action each round thereafter.
- **Critical Success** The creature is unaffected.
- **Success** The creature is pushed back 5 feet.
- **Failure** The creature is pushed back 10 feet.
- **Critical Failure** The creature is pushed back 10 feet and knocked [[Prone]].

**Routine** `pf2:1` ([[3-Rules/Trait Reference/F/force|force]], [[conjuration]]) The trap emits a blast of force. Each creature in the hall must attempt a DC 28 Reflex save with the same results as Force Blast. If this forced movement would cause a creature to collide with a solid object or fall downstairs or out a window, that creature takes an additional `dice: 2d10+11` bludgeoning damage (or 20 damage due to a fall).

**Reset** Automatic

*Source: Homebrew*
```
