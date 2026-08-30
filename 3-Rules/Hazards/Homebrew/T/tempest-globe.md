---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- rarity/unique
- trait/Magical
- trait/trap
aliases: ["Tempest Globe"]
---

```pf2e-stats
# Tempest Globe
## Hazard 12

---

==unique== ==magical== ==Trap==

**Stealth** +25 (expert) or **DC 35 [[Skills#Perception|Perception]]** to notice the connection between the ceiling spike and the tempest globe; the globe and metal spike themselves are obvious

**Description** A metal spike projects downward from the chamber's ceiling above a globe of violently churning electricity. The spike unleashes lightning at creatures entering the room, while the globe serves as an extradimensional temporal prison. The tempest globe can contain only one prisoner at a time.

**Disable** **[[Skills#Thievery|Thievery]] DC 35** (master) to disrupt the magical controls governing the tempest globe. This disables the globe's **Temporal Imprisonment** but does **not** disable the ceiling spike or Lightning Discharge. **[[Skills#Arcana|Arcana]] DC 33** (master) can be used instead of Thievery to unravel the magical bindings of the globe. The globe can also be temporarily suppressed with **dispel magic** (counteract rank 6, counteract DC 30). On a successful counteract check, Temporal Imprisonment is suppressed for **10 minutes**. Suppressing or disabling the globe immediately releases any creature imprisoned within it.

**AC** 33; **Fort** +24; **Ref** +18
**Ceiling Spike Hardness** 20; **HP** 80 (BT 40)  
**Immunities** critical hits, object immunities, precision damage

Destroying the ceiling spike permanently disables both Lightning Discharge and Temporal Imprisonment. The spike can't retaliate against creatures attacking it from outside the chamber.

### Lightning Discharge `pf2:0`
**Trigger** A creature enters the chamber.
**Effect** The ceiling spike launches a bolt of lightning at the triggering creature. The creature takes **`dice: 8d8` electricity damage** with a **DC 32 basic Reflex save**.

If the creature takes any damage from Lightning Discharge and the tempest globe is empty and functioning, it is also subjected to **Temporal Imprisonment**.

The tempest globe can use Lightning Discharge once against each creature entering the chamber, even if multiple creatures enter during the same round.

### Temporal Imprisonment ([[arcane]], [[teleportation]])
A creature damaged by Lightning Discharge while the tempest globe is empty must attempt a **DC 32 Reflex save**.
- **Critical Success** The creature resists the globe's pull.
- **Success** The creature resists the globe's pull.
- **Failure** The creature is instantaneously transported into the tempest globe and placed in temporal stasis.
- **Critical Failure** As failure.

A creature imprisoned within the globe is completely suspended outside the normal passage of time. It is **unconscious** and can't perceive, act, age, recover, or be affected by effects originating outside the globe. Conditions, afflictions, and other effects affecting it don't progress while it remains imprisoned.

The imprisoned creature isn't considered dead and doesn't need air, food, or water.

While the tempest globe contains a prisoner, Temporal Imprisonment can't affect another creature, though the ceiling spike continues using Lightning Discharge normally.

#### Release the Prisoner
A creature trapped within the tempest globe is immediately released into the nearest unoccupied space when any of the following occurs:
- The globe is successfully disabled.
- The globe's magic is successfully counteracted.
- The ceiling spike is destroyed.
- An effect specifically capable of overcoming extradimensional or temporal imprisonment successfully counteracts the globe, at the GM's discretion.

When the globe's magic returns after temporary suppression, it is again capable of imprisoning creatures. A released creature that remains in the room isn't immediately recaptured; the spike triggers again only if that creature **leaves and subsequently re-enters the chamber**.

---
**Reset** The ceiling spike resets immediately after each Lightning Discharge and can attack each creature entering the room once. Temporal Imprisonment resets immediately once its prisoner has been released.
```
