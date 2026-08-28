---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- rarity/uncommon
- trait/auditory
- trait/divine
- trait/magical
aliases: ["Word of Law"]
---

```pf2e-stats
# Word of Law
## Hazard 11

---

==Uncommon== ==Auditory== ==Divine== ==Magical== ==Trap==

**Stealth** DC 30 (expert) to notice the sacred script embedded in the floor and walls.

**Description** The chamber is warded with a divine proclamation that recognizes its creator’s chosen faithful—such as creatures bearing an Ebon Triad sigil. All others hear a thunderous command condemning them as intruders.

**Disable** Thievery DC 30 (expert) to deface the script, or Religion DC 30 (expert) to counteract the ward (counteract rank 6, counteract DC 30).

**AC** 31; **Hardness** 20; **HP** 80 (BT 40)  
**Immunities** object immunities

---

**Condemning Decree** `pf2:r` 
**Trigger** A creature enters or moves through the trapped 20-foot-square area.  
**Effect** The trap unleashes a 30-foot emanation of divine authority. Each unwarded creature in the area that can hear the decree must attempt a DC 30 Fortitude save.
	- **Critical Success** The creature is unaffected.
	- **Success** The creature takes `dice: 4d10` spirit damage.
	- **Failure** The creature takes `dice: 7d10` spirit damage and is [[Enfeebled|enfeebled 2]] for 1 minute.
	- **Critical Failure** The creature takes `dice: 14d10` spirit damage and is [[Enfeebled|enfeebled 2]] for 1 minute. It must then attempt a DC 30 Will save; on a failure, it is [[Paralyzed]] for 1 round.

**Reset** 1 minute.
```
