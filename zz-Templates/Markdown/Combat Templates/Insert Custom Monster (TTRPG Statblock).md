---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Ancient Red Dragon"
tags: 
  - pf2e/creature/type/dragon
  - pf2e/creature/level/19
statblock: inline
name: "Ancient Red Dragon"
level: 19
---

```statblock
layout: Pathfinder 2e Creature Layout
source: B1
sourcebook: Bestiary p. 105
name: Adult Black Dragon
level: Creature 11

alignment: "[CE](rules/traits/ce-b1.md)"
size: "[large](rules/traits/large-b1.md)"
traits:
  - "[acid](rules/traits/acid.md)"
  - "[amphibious](rules/traits/amphibious-b1.md)"
  - "[dragon](rules/traits/dragon.md)"

modifier: 22
senses: darkvision, scent (imprecise) 60
languages: common, draconic, jotun
skills:
  - Acrobatics: 18
  - Arcana: 19
  - Athletics: 24
  - Deception: 20
  - Intimidation: 20
  - Stealth: 20
attributes:
  - str: 7
  - dex: 3
  - con: 5
  - int: 2
  - wis: 3
  - cha: 3
speed: 50 feet, fly 120 feet, walk 50 feet, swim 50 feet

ac: 31
saves:
  - fort: 23
  - ref: 18
  - will: 21
  - note: +1 status to all saves vs. magic
hp: 215
immunities: "[acid](rules/traits/acid.md), paralyzed, [sleep](rules/traits/sleep.md)"


abilities_bot:
  - name: Breath Weapon
    desc: >
      ⬺ ([acid](rules/traits/acid.md), [arcane](rules/traits/arcane.md), [evocation](rules/traits/evocation.md)) The dragon breathes a spray of acid that deals 12d6 acid damage in an 80-foot line (DC 30 basic Reflex save). It can't use Breath Weapon again for 1d4 rounds.
  - name: Corrupt Water
    desc: >
      ⬻ ([arcane](rules/traits/arcane.md), [concentrate](rules/traits/concentrate.md), [necromancy](rules/traits/necromancy.md))
      **Frequency** once per day;
      **Effect** The dragon permanently befouls 10 cubic feet of liquid within 90 feet. The liquid becomes undrinkable and unable to support water-breathing life. This destroys liquid magic or alchemical items if they're of a lower level than the dragon (a creature can attempt a DC 28 Will save to protect liquids in its possession). This doesn't affect the liquids in a creature's body.
  - name: Draconic Frenzy
    desc: >
      ⬺ The dragon makes two claw [Strikes](rules/actions/strike.md) and one horns [Strike](rules/actions/strike.md) in any order.
  - name: Draconic Momentum
    desc: >
      The dragon recharges its Breath Weapon whenever it scores a critical hit with a [Strike](rules/actions/strike.md).
abilities_mid:
  - name: "[Frightful Presence](rules/abilities/frightful-presence.md)"
    desc: "([aura](rules/traits/aura.md), [emotion](rules/traits/emotion.md), [fear](rules/traits/fear.md), [mental](rules/traits/mental.md))([aura](rules/traits/aura.md), [emotion](rules/traits/emotion.md), [fear](rules/traits/fear.md), [mental](rules/traits/mental.md)) 90 feet, DC 28"
  - name: Tail Lash
    desc: >
      ⬲
      **Trigger** A creature within reach of the dragon's tail takes an action to [Strike](rules/actions/strike.md) or attempt a skill check;
      **Effect** The dragon [Strikes](rules/actions/strike.md) with its tail at the triggering creature at a –2 penalty. If it hits, the creature takes a –2 circumstance penalty to the triggering roll.

attacks:
  - name: ___Melee___ ⬻ jaws
    desc: ([acid](rules/traits/acid.md), [magical](rules/traits/magical.md), [reach 10 feet](rules/traits/reach-10-feet.md))
    bonus: 25
    damage: "2d12+13 piercing plus 2d6 acid"
  - name: ___Melee___ ⬻ claw
    desc: ([agile](rules/traits/agile.md), [magical](rules/traits/magical.md))
    bonus: 25
    damage: "2d10+13 slashing"
  - name: ___Melee___ ⬻ tail
    desc: ([magical](rules/traits/magical.md), [reach 15 feet](rules/traits/reach-15-feet.md))
    bonus: 23
    damage: "2d12+11 bludgeoning"
  - name: ___Melee___ ⬻ horns
    desc: ([magical](rules/traits/magical.md), [reach 10 feet](rules/traits/reach-10-feet.md))
    bonus: 23
    damage: "1d10+11 piercing"

spellcasting:
  - name: Arcane Innate Spells
    dc: 30
    desc: >
      **2nd** [darkness](compendium/spells/darkness.md) (at will);
```

```encounter-table
name: Adult Black Dragon
creatures:
  - 1: Adult Black Dragon
```
