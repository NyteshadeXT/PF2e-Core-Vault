---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- rarity/uncommon
- trait/complex
- trait/magical
- trait/trap
aliases: ["Flooding Tunnel Trap"]
---

```pf2e-stats
# Flooding Tunnel Trap
## Hazard 10

---

==uncommon== ==complex== ==magical== ==Trap==

**Stealth** +23 (expert) to notice the pressure plate; DC 30 Perception to notice the concealed mechanisms connecting the floor, iron panel, and secret floodgates

**Description** The floor of the small chamber is a massive pressure plate. Once sufficient weight rests upon it, hidden machinery begins a delayed sequence that seals the northern exit, opens concealed passages to the river, and floods the chamber with a violent current that sweeps creatures toward area 20.

**Disable** **[[Skills#Thievery|Thievery]] DC 30** (master) to jam the pressure plate before it's triggered.

**[[Skills#Thievery|Thievery]] DC 32** (master) to disable the floodgate mechanism after the pressure plate has been triggered but before the Floodgates Open.

A character adjacent to one of the concealed floodgates can attempt an **Athletics DC 30** check to physically jam it shut. On a success, that floodgate doesn't open. Preventing the northeastern river gate from opening prevents the flood entirely.

**AC** 30, **Fort** +22, **Ref** +16

**Pressure Plate Hardness** 18; **HP** 72 (BT 36)  
**Iron Panel Hardness** 18; **HP** 72 (BT 36)  
**Floodgate Hardness** 18; **HP** 72 (BT 36)

**Immunities** critical hits, object immunities, precision damage

Breaking the pressure plate before it triggers disables the trap. Breaking or jamming the northeastern floodgate before it opens prevents the flood.

### **Activate Trap** `pf2:0`
**Trigger** At least 50 pounds of weight is placed on the pressure plate.
**Effect** Hidden gears engage beneath the floor with a heavy metallic clunk. The hazard rolls initiative. The trap begins with **2 Delay counters**.

**Routine** `pf2:1` On each of the hazard's turns, resolve the next appropriate stage.

**Delay.** If the trap has one or more Delay counters, remove one. The machinery can be heard grinding within the walls, but nothing else happens. When the final Delay counter is removed, the trap immediately uses **Seal the Chamber**. On its next turn, it uses **Open the Floodgates**. On its following turn, and every turn thereafter, it uses **Flooding Current**.

#### Seal the Chamber
An iron panel shoots from the wall at the base of the stairs, sealing the chamber from area 14. Any unattended rope, cord, or similar object crossing the panel's path is severed. A creature within 5 feet of the descending panel can attempt a **DC 29 Reflex save**.
- **Critical Success** The creature chooses which side of the panel it ends up on and can Step up to 5 feet as part of the reaction.
- **Success** The creature chooses which side of the panel it ends up on.
- **Failure** The creature remains on its current side of the panel.
- **Critical Failure** As failure, and the creature takes `dice: 3d8` bludgeoning damage as the panel clips or crushes it before forcing it to the nearest available space.

Once closed, the iron panel remains sealed until destroyed or the trap is manually reset.

#### Open the Floodgates
The secret doors to the northeast and east slam open. A deafening roar becomes audible from the northeastern passage as river water rushes toward the chamber. The water doesn't reach the chamber until the trap's next turn. Creatures therefore have one full round to escape, find something secure to hold, climb above the expected waterline, block the river passage, or otherwise prepare for the flood.

#### Flooding Current
A wall of red water crashes into the chamber, immediately filling it to a depth of 10 feet before surging through the eastern tunnel toward area 20. Each creature in the flooded portion of the chamber must attempt a DC 29 [[Skills#Athletics|Athletics]] check to Swim.
- **Critical Success** The creature isn't moved by the current and can immediately Swim up to 10 feet.
- **Success** The creature isn't moved by the current.
- **Failure** The creature is carried 20 feet toward area 20.
- **Critical Failure** The creature is carried 40 feet toward area 20 and becomes submerged and [[Off-Guard]] until the beginning of its next turn.

A creature adjacent to a secure protrusion, such as a ladder rung, wall corner, firmly driven spike, or similar handhold can attempt a DC 27 [[Skills#Athletics|Athletics]] check instead of attempting to Swim.
- **Critical Success** The creature holds fast and gains a +2 circumstance bonus to its next check to resist the current.
- **Success** The creature holds fast and isn't moved.
- **Failure** The creature loses its grip and is carried 20 feet toward area 20.
- **Critical Failure** The creature loses its grip and is carried 40 feet toward area 20.

The flooded chamber and tunnel are greater difficult terrain for creatures attempting to move against the current. A creature that successfully Swims against the current can move normally according to the Swim action, but the first **20 feet of movement it would make against the current each round is lost** overcoming the force of the water. Creatures moving with the current don't suffer this penalty.

A creature carried beyond the eastern end of the flooded passage enters area 20. It immediately resolves whatever consequences apply for entering that area, including the fall described there. Being swept into area 20 removes the creature from the Flooding Current's affected area.

**Reset** Once triggered, the trap doesn't automatically reset. The iron panel must be reopened, the secret doors closed, and the pressure and floodgate mechanisms manually reset.

*Source: Homebrew*
```

