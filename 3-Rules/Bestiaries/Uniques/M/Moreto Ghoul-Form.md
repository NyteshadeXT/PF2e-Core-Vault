---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Moreto, Marquis of Ravenstone"
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/level/14
statblock: inline
name: "Moreto, Marquis of Ravenstone"
level: 14
---

```statblock
layout: Basic Pathfinder 2e Layout
source: "Dungeon Magazine #252"
name: "Moreto, Marquis of Ravenstone"
level: "Creature 14"
rare_03: "Unique"
size: "Medium"
trait_04: "Ghoul"
trait_05: "Undead"
modifier: 26

perception:
  - name: "Perception"
    desc: "Perception +26; __darkvision__, __lifesense 60 feet (imprecise)__;"

languages: "Chthonian, Common, Diabolic, Draconic, Sakvroth;"

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +25 (1d20+25); __Arcana__: +27 (1d20+27); __Athletics__: +28 (1d20+28); __Crafting__: +25 (1d20+25); __Deception__: +29 (1d20+29); __Diplomacy__: +27 (1d20+27); __Intimidation__: +27 (1d20+27); __Society__: +25 (1d20+25); __Stealth__: +27 (1d20+27);"

abilityMods: [6, 5, 3, 4, 4, 7]

abilities_top:
  - name: "Equipment"
    desc: "[*+2*](<Weapon Potency (+2)>) [*greater striking*](greater-striking) [*greatsword*](greatsword), [*greater cloak of the bat*](<Cloak of the Bat>), [*ghoul-light lantern*](<Ghoul-Light Lantern>), [*Seal of Law*](<Seal of Law>), five rare books on magical theory and prophecy, files for sharpening teeth and claws"

abilities_mid:
  - name: "Lifesense"
    desc: "  Moreto senses the vital essence of living creatures within 60 feet as an imprecise sense. Lifesense allows him to detect living creatures even when darkness or similar visual conditions would prevent him from seeing them."

  - name: "Grave Knowledge"
    desc: "  When Moreto uses Consume Flesh, he can draw fragments of knowledge from the creature's remains. Until he next uses Consume Flesh, he can attempt to Recall Knowledge about subjects the consumed creature knew using Arcana with a +27 modifier, even if another skill would normally be required. The GM determines what knowledge was available to the consumed creature."

  - name: "Globe of Interdiction"
    desc: "⬲ ([[arcane]]); __Trigger__ Moreto is targeted by a spell or is in the area of a spell; __Frequency__ once per round; __Effect__ Moreto surrounds himself with a momentary sphere of disruptive magic. He gains a +2 circumstance bonus to his saving throw or AC against the triggering spell. If the spell requires neither a saving throw nor an attack roll, Moreto can instead attempt to counteract it with a counteract modifier of +26 and a counteract rank of 6."

  - name: "Spectral Transformation"
    desc: "⬲ ([[occult]], [[spirit]]); __Trigger__ Moreto is reduced to 0 Hit Points; __Effect__ Moreto's animating force tears free of his corpse as a glowing green phantom. Remove Moreto from the encounter and place **Moreto, Marquis of Ravenstone (Spectral Form)** in his space. The spectral form rolls initiative and acts normally when its turn occurs. It begins with full Hit Points."

  - name: "Winged Cloak"
    desc: "  Moreto can use the wings of his cloak to Fly, gaining a fly Speed of 30 feet. He must begin and end this movement on a surface capable of supporting him. This ability is unavailable during Spectral Transformation."

abilities_bot:
  - name: "Consume Flesh"
    desc: "⬻ ([[manipulate]]); __Requirements__ Moreto is adjacent to the corpse of a creature that died within the last hour; __Effect__ Moreto devours a portion of the corpse and regains 6d6 Hit Points. He can regain Hit Points from any given corpse only once."

  - name: "Ghoul Whispers"
    desc: "⬻ ([[auditory]], [[curse]], [[linguistic]], [[occult]]); __Requirements__ Moreto has a living creature [[grabbed]] or [[restrained]]; __Effect__ Moreto whispers seductive promises of immortality and forbidden hunger. The target must attempt a DC 34 Will save. On a failure, it is afflicted with Forbidden Cravings. On a critical failure, it begins at stage 2. A creature that succeeds at its save is temporarily immune to Moreto's Ghoul Whispers for 24 hours."

  - name: "Forbidden Cravings"
    desc: " ([[curse]], [[occult]]); __Saving Throw__ DC 34 Will; __Stage 1__ [[sickened|sickened 1]] as the victim develops an unnatural hunger for raw flesh (1 day); __Stage 2__ [[sickened|sickened 1]] and [[drained|drained 1]] (1 day); __Stage 3__ [[sickened|sickened 2]] and [[drained|drained 2]], and the victim can't reduce its sickened condition below 1 while afflicted (1 day); __Stage 4__ the victim dies and rises as a ghoul at the next midnight. The curse ends if removed before the victim reaches stage 4."

  - name: "Marquis's Assault"
    desc: "⬺  Moreto makes a greatsword Strike and a jaws Strike in either order. Both attacks count toward his multiple attack penalty, but the penalty doesn't increase until after he makes both attacks. If both Strikes hit the same creature, that creature is [[off-guard]] to Moreto until the beginning of his next turn."

  - name: "Disarming Riposte"
    desc: "⬲  __Trigger__ A creature within Moreto's reach critically fails a Strike against him with a weapon or critically fails an attempt to Disarm him; __Effect__ Moreto attempts to Disarm the triggering creature. This attempt doesn't count toward Moreto's multiple attack penalty, and his multiple attack penalty doesn't apply to it."

speed: 30 feet, fly 30 feet (Winged Cloak)

armorclass:
  - name: AC
    desc: "35; __Fort__ +23, __Ref__ +27, __Will__ +28;"

health:
  - name: HP
    desc: "230, void healing; __Immunities__ bleed, death effects, disease, doomed, drained, fatigued, healing, paralyzed, poison, unconscious;"

attacks:
  - name: Melee Greatsword
    desc: "⬻ +29 ([[magical]], [[versatile|versatile P]]); __Damage__ 3d12+14 (3d12+14) slashing"
  - name: Melee Jaws
    desc: "⬻ +27 ([[finesse]]); __Damage__ 3d8+12 (3d8+12) piercing"
  - name: Melee Spectral Hand
    desc: "⬻ +27 ([[magical]], [[spirit]]); __Requirements__ Moreto is in his spectral form; __Damage__ 3d10+12 (3d10+12) spirit"

spellcasting:
  - name: "Arcane Innate Spells"
    desc: "DC 34, attack +26; __6th__ [[dispel magic]] (2), [[lightning bolt]] (2); __5th__ [[force barrage]], [[levitate]]; __4th__ [[charm]], [[translocate]]; __2nd__ [[false vitality]]; __1st__ [[sure strike]]; __Cantrips (7th)__ [[detect magic]], [[figment]], [[light]], [[prestidigitation]], [[read aura]], [[shield]];"

sourcebook: "Converted from Moreto, Marquis of Ravenstone."