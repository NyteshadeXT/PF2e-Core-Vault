---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- trait/magical
- trait/air
- trait/inhaled
- trait/poision
aliases: ["Poison Gas Trap"]
---

```pf2e-stats
# Poison Gas Trap
## Hazard 11

---

==Uncommon== ==Inhaled== ==Magical== ==Poision== ==Trap==

**Stealth** DC 30 (expert) to notice the nearly invisible seams of the concealed gas vents.

**Description** When triggered, hidden runes open vents in the ceiling and floor, flooding the area with a colorless, sweet-smelling toxic vapor.

**Disable** Thievery DC 30 (expert) to jam and disarm the vents, or Arcana DC 30 (expert) to counteract the trap (counteract rank 6, counteract DC 30).

**AC** 31; **Hardness** 20; **HP** 80 (BT 40)  
**Immunities** object immunities

---

**Toxic Release** `pf2:r` 
**Trigger** A creature enters the trapped 20-foot-square area.  
**Effect** The trap releases poison gas that fills the area for 1 minute. Each creature in the area, or that enters the gas, is exposed to **windspike vapor**.

**Reset** 1 minute after the gas disperses.

### Windspike Vapor

**Poison**  
**Saving Throw** Fortitude DC 30; **Onset** 1 round; **Maximum Duration** 6 rounds
	- **Stage 1** clumsy 1 (1 round)
	- **Stage 2** `dice: 2d6` poison damage and clumsy 2 (1 round)
	- **Stage 3** `dice: 4d6` poison damage and clumsy 3 (1 round)
```
