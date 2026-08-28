---
obsidianUIMode: preview
cssclass: pf2e,pf2e-hazard
tags:
- compendium/src/pf2e/hb
- rarity/Curse
- trait/environmental
- trait/Magical
- trait/trap
aliases: ["Urn Energy Drain Trap"]
---

```pf2e-stats
# Urn Energy Drain Trap
## Hazard 11

---

==uncommon== ==curse== ==magical== ==Trap==

**Stealth** DC 30 (expert) to notice the nearly invisible necromantic sigils etched around the urn’s rim.

**Description** This ornate funerary urn contains a hungry fragment of death magic. Touching it causes black energy to lash out and drain the intruder’s vitality.

**Disable** [[Skills#Thievery|Thievery]] DC 30 (expert) to disrupt the urn’s hidden runes, or [[Skills#Arcana|Arcana]], [[Skills#Occultism|Occultism]], or [[Skills#Religion|Religion]] DC 30 (expert) to counteract its magic (counteract rank 6, counteract DC 30).

**AC** 31; **Hardness** 20; **HP** 80 (BT 40)  
**Immunities** object immunities

---

**Soul-Siphoning Ray** `pf2:r` 
**Trigger** A creature touches or attempts to move the urn.  
**Effect** A ray of black energy makes a +24 spell attack against the triggering creature’s AC.
- **Critical Success** The target is [[Drained|drained 4]].
- **Success** The target is [[Drained|drained 2]].
- **Failure** The target is unaffected.

**Reset** Manual. A creature must restore the urn’s runes with a successful DC 30 Crafting, Arcana, Occultism, or Religion check, requiring 1 hour of work. 
```