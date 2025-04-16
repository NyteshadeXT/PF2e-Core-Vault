---
title: "Living Blade"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.battlezoo-bestiary-pf2e.pf2e-battlezoo-bestiary.Actor.tgSpw3lW0Spf1GRo" 
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/type/evil
  - pf2e/creature/type/soulbound
  - pf2eMonster
  - pf2e/creature/level/8
statblock: inline
name: "Living Blade"
level: 8
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/battlezoo-bestiary-pf2e/art/living_blade.webp| ]]
source: "Battlezoo Bestiary"
name: "Living Blade"
level: "Creature 8"

alignment: ""
size: "Medium"
trait_01: [[construct]]
trait_02: [[evil]]
trait_03: [[soulbound]]
modifier: 18
perception:
  - name: "Perception"
    desc: "+18; Darkvision"
languages: "telepathy 100 feet; tongues"
skills:
  - name: "Skills"
    desc: "Acrobatics: +18, Athletics: +17, Deception: +17"
abilityMods: [5, 6, 2, 0, 4, 5]
speed: 25 feet
sourcebook: "_Battlezoo Bestiary_"
ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__ +12, __Ref__ +18, __Will__ +16"
hp: 100
health:
  - name: ""
  - name: HP
    desc: "100, (as Phantom Warrior); __Immunities__  bleed,  death effects,  disease,  doomed,  drained,  fatigued,  healing,  nonlethal attacks,  paralyzed,  poison,  sickened,  unconscious,  spirit,  vitality,  void"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Scimitar|+1 Striking Flaming Scimitar]]"
  - name: "Weapon Form"
    desc: "  While its phantom warrior is inactive (see Summon Phantom Warrior), the living blade is a _+1 striking flaming scimitar_. While in this weapon form, the living blade cannot attack or move, but it can impart its Curse of the Living Blade on any creature that wields it. The living blade can cast spells on its own turn, but it can target only its cursed wielder."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Scimitar +19 (fire, forceful, magical, sweep)\n__Damage__  2d6 + 9 slashing 1d6 fire"

  - name: "Occult Innate Spells"
    desc: "DC 27, attack +17; __3rd __  _[[Spells/Haste|Haste]]_; __2nd __  _[[Spells/Soothe|Soothe]]_; __1st __  _[[Spells/Sure Strike|True Strike]]_\n__Constant__  __(5th)__ _[[Spells/Truespeech|Tongues]]_"

  - name: "Rituals"
    desc: "_[[Spells/Geas|Geas (See Curse of the Living Blade)]]_"

  - name: "Curse of the Living Blade"
    desc: " (curse,mental,occult) Any creature that attempts to wield the living blade is affected by its curse;\n\n**Saving Throw** DC 27 Will;\n\n**Effect** The living blade attempts to curse its wielder, compelling the creature to further the living blade's personal agenda. The living blade instantly casts a geas ritual on the triggering creature; the living blade always succeeds at casting this ritual. If the target critically succeeds its saving throw, it is immune to this curse for 24 hours. On a failure, the creature succumbs to the geas. While cursed, the creature must advance the living blade's agenda, which might be something discrete like \"avenge my master's death\" or something broader like \"achieve glory in my name.\" The cursed creature cannot willingly drop or give away the living blade. The geas lasts for 1 week, after which the wielder can make a new Will save."

  - name: "Summon Phantom Warrior"
    desc: "`pf2:3` (concentrate,occult) **Frequency** once per hour;\n\n**Requirements** The living blade isn't being wielded or carried by an intelligent creature;\n\n**Effect** The living blade manifests a phantom warrior that resembles a ghostly version of its original master, allowing the blade to move and act of its own accord. The phantom is made of nondescript soul-stuff from the Ethereal Plane and has no individual personality or identity, though it can interact with the physical world. A creature can identify the phantom warrior for what it is with a successful DC 27 Perception check. The living blade can dismiss the phantom warrior as a free action. This stat block represents the living blade while it has its phantom warrior active.\n\nWhen reduced to 0 Hit Points or counteracted with _[[Spells/Dispel Magic|Dispel Magic]]_ (counteract DC 27), the living blade assumes its weapon form (see Weapon Form) until the next time it uses Summon Phantom Warrior."
 
```

```encounter-table
name: Living Blade
creatures:
  - 1: Living Blade
```



A living blade is a sentient weapon driven to carry out some secret and often nefarious agenda. Its will to complete its mission is so strong that this powerful armament can actually manifest a phantom warrior to carry out its dark deeds. Otherwise, the weapon lives dormant, enticing an unsuspecting warrior to pick it up and receive its curse.

The exact force that animates a living blade differs in every case, though often it is the spirit of a mortal whose life's mission was left unresolved. One popular story is of a master blacksmith who was slaughtered by her own blade at the hands of a traitorous customer; the blacksmith's spirit clung to the weapon, and in this new form she vowed to achieve revenge on her killer.

## Other Living Blades

Living blades come in many varieties, not all of which are even blades. Generally, a living blade is a magic melee weapon whose level is equal to its creature level + 2. Its runes can be replaced, but any attempt to remove a rune without replacing it fails. The only way to permanently turn a living blade into a non-cursed weapon is by counteracting it with the _[[Disjunction|Disjunction]]_ spell.

## Monster Part Subsystem

**Living Blade Creature 8**

**Monster Parts** 64/140/250 gp

**Eligible Refinements** weapons (slashing), armor (heavy), perception item, skill items (Acrobatics, Athletics, Deception)

**Eligible Imbued Properties** bane, charisma, dexterity, energy resistant (negative, positive), evil, fire, mental, sensory (darkvision), spells (Occult: haste, soothe, tongues, true strike), strength, wild
