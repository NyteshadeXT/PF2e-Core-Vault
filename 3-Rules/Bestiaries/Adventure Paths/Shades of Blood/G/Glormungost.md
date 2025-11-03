---
title: "Glormungost"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.OUnOwGyGysTtnVqG" 
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/type/vampire
  - pf2eMonster
  - pf2e/creature/level/6
  - remaster
statblock: inline
name: "Glormungost"
level: 6
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #214: The Broken Palace"
name: "Glormungost"
level: "Creature 6"
rare_03: [[Unique]]
alignment: ""
size: "Medium"
trait_01: [[undead]]
trait_02: [[unholy]]
trait_03: [[vampire]]
modifier: 10
perception:
  - name: "Perception"
    desc: "+10; Darkvision"
languages: "Alghollthu, Azlanti, Necril, Sakvroth, Thalassic; Truespeech"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Athletics: +14, Crafting: +12, Deception: +14, Nature: +12, Stealth: +12"
abilityMods: [4, 4, 2, 2, 0, 4]
speed: 25 feet,  climb 25 feet
sourcebook: "_Pathfinder #214: The Broken Palace_"
ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__ +12, __Ref__ +14, __Will__ +10; +2 status to all saves vs. auditory and visual"
hp: 66
health:
  - name: ""
  - name: HP
    desc: "66, coffin restoration, fast healing 7, void healing; __Resistances__ bludgeoning 5, physical 5 (except silver)"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Sickle|+1 Striking Sickle]]"
  - name: "Blood Bombs"
    desc: "  Glormungost carries 6 glass vials filled with alchemically treated blood that deal persistent bleed damage, and 2 splash slashing damage. Glormungost replenishes these bombs each day using blood drawn from prisoners."

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Fast Healing|Fast Healing 7]]"
    desc: "  A monster with this ability regains the given number of Hit Points each round at the beginning of its turn."

  - name: "[[Creature Family Ability Glossary/(Vampire, Basic) Coffin Restoration|Coffin Restoration]]"
    desc: " (divine,void) Unlike other undead, a vampire isn't destroyed at 0 HP. Instead, it falls [[Conditions/Unconscious|Unconscious]]. If its body rests in its coffin for 1 hour, the vampire gains 1 HP, after which its fast healing begins to function normally."

  - name: "[[Bestiary Ability Glossary/Void Healing|Void Healing]]"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Claw"
    desc: "+14 (agile, unarmed)\n__Damage__  2d6 + 6 slashing plus grab"

  - name: "**Melee** `pf2:1` Sickle"
    desc: "+15 (agile, finesse, magical, trip)\n__Damage__  2d4 + 6 slashing"

  - name: "**Ranged** `pf2:1` Blood Bomb"
    desc: "+14 (range increment 20 feet, splash)\n__Damage__  2d6 bleed 2 slashing"

  - name: "Occult Innate Spells"
    desc: "DC 21, attack +13\n__Constant__  __(5th)__ _[[Spells/Truespeech|Truespeech]]_"

  - name: "Assume Form"
    desc: " (concentrate,occult,polymorph) The ugothol spends 10 minutes reshaping its appearance to take on the shape of any Small or Medium humanoid. It gains a +4 circumstance bonus to Deception checks to pass as that creature."

  - name: "Compression"
    desc: "  When the ugothol successfully [[Actions/Squeeze|Squeezes]], it moves through the tight space at full speed. Narrow confines are not difficult terrain for an ugothol."

  - name: "[[Creature Family Ability Glossary/(Vampire, True) Drink Blood|Drink Blood]]"
    desc: "`pf2:1` (divine) **Requirement** A [[Conditions/Grabbed|Grabbed]], [[Conditions/Paralyzed|Paralyzed]], [[Conditions/Restrained|Restrained]], [[Conditions/Unconscious|Unconscious]], or willing creature is within the vampire's reach.\n* * *\n\n**Effect** The vampire uses its tongue to drink the creature's blood. This requires an Athletics check check against the victim's Fortitude DC if the victim is grabbed and is automatic for any of the other conditions.\n\nThe victim is [[Conditions/Drained|Drained 2]] and the vampire regains 6 healing HP, gaining any excess HP as temporary Hit Points. Drinking Blood from a creature that's already drained doesn't restore any HP to the vampire but increases the victim's drained value by 1, killing the victim when it reaches drained 5. A vampire can also consume blood that's been emptied into a vessel for sustenance, but it gains no HP from doing so.\n\nA victim's drained condition decreases by 1 per week. A blood transfusion, which requires a DC 20 Medicine check check and sufficient blood or a blood donor, reduces the drain by 1 after 10 minutes."

  - name: "Quick Bombardier"
    desc: "`pf2:1`  Glormungost draws a blood bomb with an Interact action and throws it as a ranged Strike."

  - name: "Revert Form"
    desc: "  **Requirements** The ugothol is in an assumed form\n* * *\n\n**Effect** The ugothol resumes its true form. Until the start of its next turn, it gains a +2 status bonus to attack rolls, damage rolls, saving throws, and skill checks.\n\n[[Bestiary Effects/Effect_ Revert Form|Effect: Revert Form]]"

  - name: "Sneak Attack"
    desc: "  Glormungost deals 1d6 extra precision damage to [[Conditions/Off-Guard|Off-Guard]] creatures."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Glormungost
creatures:
  - 1: Glormungost
```


Agender ugothol vampire alchemist

Among the subtler of the alghollthu creations were the ugothols—also known as faceless stalkers. These twisted beings used shapeshifting to infiltrate settlements and assassinate key targets. They sowed discord and replaced leaders, causing unwanted organizations to implode and bothersome people to lose face and eventually disappear.

* * *

In bygone millennia, aquatic monsters known as alghollthus used their occult powers to conquer and rule vast swaths of the world. Alghollthus shaped their servitors and other creatures using mental manipulation and physically transformative magic. The rulers of the alghollthus, the so-called "veiled masters," further shaped entire societies by assuming the forms of those they controlled.

In time, the alghollthus grew frustrated with upstart surface societies and meddling gods. They used incredible magical power to call forth a cataclysm, hoping to destroy the rebellious societies they'd manipulated. Yet they miscalculated the will to survive of those they treated as their pawns, and in time the world recovered, this time free of alghollthu influence.

Today, the alghollthus have mostly remained within the deep aquatic realms where they still rule without question. Yet they have not abandoned their plots entirely, and the reemergence of servitors like faceless stalkers suggests that the alghollthus have turned their hateful eyes to the surface once again.
