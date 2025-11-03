---
title: "Vansidieth"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.WQRJdpOzcnBsgbnp" 
tags:
  - pf2e/creature/type/demon
  - pf2e/creature/type/fiend
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/18
  - remaster
statblock: inline
name: "Vansidieth"
level: 18
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Vansidieth"
level: "Creature 18"
rare_03: [[Uncommon]]
alignment: ""
size: "Medium"
trait_01: [[demon]]
trait_02: [[fiend]]
trait_03: [[unholy]]
modifier: 32
perception:
  - name: "Perception"
    desc: "+32; Darkvision, Truesight"
languages: "Chthonian, Draconic, Empyrean; Telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Athletics: +33, Deception: +35, Intimidation: +35, Religion: +30, Warfare Lore: +31"
abilityMods: [7, 5, 6, 5, 6, 9]
speed: 35 feet,  fly 35 feet
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
ac: 41
armorclass:
  - name: AC
    desc: "41; __Fort__ +31, __Ref__ +29, __Will__ +32"
hp: 410
health:
  - name: ""
  - name: HP
    desc: "410; __Weaknesses__ cold iron 15, holy 15"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Bastard Sword|+2 Greater Striking Greater Flaming Bastard Sword]], [[Equipment/Breastplate|+2 Greater Resilient Breastplate]]"
  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
  - name: "Failure Vulnerability"
    desc: "  If the vansidieth uses a damaging spell or makes a Strike on their turn but doesn't deal any damage that turn, they take 4d6+6 mental damage at the end of their turn and their imperious gaze aura deactivates until the end of their next turn."

  - name: "Imperious Gaze"
    desc: " (aura,divine,emotion,mental,visual) 30 feet. A non-demon creature that ends their turn in the aura must attempt a DC 37 Will check save. If it fails, the demon's dismissive glance incurs overwhelming feelings of inferiority, causing the creature to become [[Conditions/Slowed|Slowed 1]] for 1 round as it doubts itself and hesitates."

  - name: "[[Bestiary Ability Glossary/Reactive Strike|Reactive Strike]]"
    desc: "`pf2:r`  **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\n* * *\n\n**Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Bastard Sword"
    desc: "+35 (magical, two-hand d12, unholy)\n__Damage__  3d8 + 15 slashing 1d6 fire"

  - name: "**Melee** `pf2:1` Jaws"
    desc: "+33 (magical, unarmed, unholy)\n__Damage__  3d10 + 15 piercing 2d6 spirit"

  - name: "**Melee** `pf2:1` Claw"
    desc: "+33 (agile, magical, unarmed, unholy)\n__Damage__  3d10 + 15 slashing"

  - name: "Divine Innate Spells"
    desc: "DC 40, attack +32; __9th __  _[[Spells/Dominate|Dominate]]_, _[[Spells/Overwhelming Presence|Overwhelming Presence]]_; __8th __  _[[Spells/Divine Decree|Divine Decree]]_, _[[Spells/Heal|Heal (x3)]]_, _[[Spells/Spiritual Armament|Spiritual Armament]]_; __7th __  _[[Spells/Illusory Disguise|Illusory Disguise]]_, _[[Spells/Regenerate|Regenerate]]_; __5th __  _[[Spells/Translocate|Translocate]]_; __4th __  _[[Spells/Translocate|Translocate (At Will)]]_\n__Cantrips__  __(9th)__ _[[Spells/Daze|Daze]]_, _[[Spells/Shield|Shield]]_, _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_\n__Constant__  __(9th)__ _[[Spells/Truesight|Truesight]]_"

  - name: "Rituals"
    desc: "_Demonic Pact_"

  - name: "Battle Roar"
    desc: "`pf2:1` (auditory,concentrate,emotion,fear,mental) **Frequency** once per minute\n* * *\n\n**Effect** The vansidieth attempts to [[Actions/Demoralize|Demoralize]] all foes within 30 feet (rolling one attempt against all enemies' Will DCs). If the vansidieth critically succeeds against at least one enemy, the demon becomes [[Conditions/Quickened|Quickened]] for 1 round on their next turn and can use the extra action each round to Demoralize or [[Actions/Feint|Feint]]."

  - name: "Leader of the Pack"
    desc: "`pf2:1` (auditory,divine) **Frequency** once per round\n* * *\n\n**Effect** The vansidieth orders allied creatures within 15 feet that are level 17 or lower to Step, Stride, or Strike; affected creatures can take the commanded action immediately as a free action."
 
```

```encounter-table
name: Vansidieth
creatures:
  - 1: Vansidieth
```



Vansidieths rise from the souls of politicians or generals whose pride resulted in great social suffering and tragedy.

## Demonic Generals

While some consider demons to be bickering monsters known more for infighting than uniting in a single army, the story of the Worldwound teaches an important lesson. A powerful demon can organize demonic hordes into an incredibly destructive war machine, and vansidieths often lead those armies as generals, coaxing cooperation from the fiendish rabble.
