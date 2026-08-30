---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- trait/magical
- trait/air
aliases: ["Windspike Trap"]
---

```pf2e-stats
# Windspike Trap
## Hazard 11

---

==Uncommon== ==Air== ==Magical== ==Trap==

**Stealth** DC 30 (expert) to notice the nearly invisible runes worked into the ceiling and the spike-lined wall at the far end of the corridor.

**Description** A creature crossing the trapped section triggers a blast of hurricane-force wind that hurls intruders into a wall of sharpened iron spikes.

**Disable** Thievery DC 30 (expert) to disrupt the runic focus, or Arcana DC 30 (expert) to counteract the trap (counteract rank 6, counteract DC 30).

**AC** 31; **Hardness** 20; **HP** 80 (BT 40)  
**Immunities** object immunities

### **Gale into Spikes** `pf2:r` 
**Trigger** A creature enters or moves through the trapped 20-foot-square area.  
**Effect** The trap unleashes a hurricane-force blast in a 30-foot cone aimed toward the spike-lined wall. Each creature in the area must attempt a DC 30 Fortitude save.
	- **Critical Success** The creature is unaffected.
	- **Success** The creature is pushed 5 feet toward the spikes.
	- **Failure** The creature is pushed 20 feet toward the spikes. A Large creature is also knocked prone. A Medium or smaller creature that is pushed into the spike-lined wall takes `dice: 8d6` piercing damage.
	- **Critical Failure** As failure, except the creature is pushed 30 feet and a Medium or smaller creature takes `dice: 16d6` piercing damage.

Huge and larger creatures are unaffected by the wind.

**Reset** 1 round.
```