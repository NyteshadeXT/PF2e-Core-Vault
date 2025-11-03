---
title: "Fogfisher"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.shades-of-blood-bestiary.Actor.tRD9nT9535e4p1oH" 
tags:
  - pf2e/creature/type/aberration
  - pf2eMonster
  - pf2e/creature/level/4
  - remaster
statblock: inline
name: "Fogfisher"
level: 4
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #214: The Broken Palace"
name: "Fogfisher"
level: "Creature 4"
rare_03: [[Rare]]
alignment: ""
size: "Large"
trait_01: [[aberration]]
modifier: 13
perception:
  - name: "Perception"
    desc: "+13; "
languages: "Sussuran; can&#x27;t speak any language"
skills:
  - name: "Skills"
    desc: "Acrobatics: +12, Athletics: +10, Stealth: +11"
abilityMods: [2, 4, 2, -3, 5, 0]
speed: 10 feet,  fly 25 feet
sourcebook: "_Pathfinder #214: The Broken Palace_"
ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__ +8, __Ref__ +12, __Will__ +13"
hp: 50
health:
  - name: ""
  - name: HP
    desc: "50; __Immunities__  acid; __Weaknesses__ silver 5, slashing 5; __Resistances__ bludgeoning 5"
abilities_top:
  - name: ""

  - name: "Mist Vision"
    desc: "  The fogfisher ignores the [[Conditions/Concealed|Concealed]] condition from fog and mist."

abilities_mid:
  - name: ""
  - name: "Fog Rupture"
    desc: "  If a fogfisher takes damage from a critical hit, it must succeed at a DC 16 Flat check or the sac that produces its fog aura ruptures. This causes its fog aura to dissipate at the start of the fogfisher's next turn. The fogfisher is then [[Conditions/Slowed|Slowed 1]] for 24 hours, after which it recovers and produces its fog aura again."

attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Tendrils"
    desc: "+12 (agile, finesse, unarmed)\n__Damage__  2d4 + 4 piercing 1d4 acid"

  - name: "**Ranged** `pf2:1` Harpoon Hook"
    desc: "+12 (propulsive, range increment 30 feet)\n__Damage__  2d6 + 3 piercing plus drifting-toxin,grab"

  - name: "Drifting Toxin"
    desc: " (poison,primal) **Saving Throw** DC 21 Fortitude check\n\n**Maximum Duration** 10 minutes\n\n**Stage 1** the creature becomes buoyant in the air and is treated as a Tiny creature for the purposes of wind effects and being pulled by the fogfisher's harpoon; if the creature falls, it drifts gently to the ground (1 round)\n\n**Stage 2** as stage 1 plus [[Conditions/Enfeebled|Enfeebled 1]] (1 minute)"

  - name: "Fog Aura"
    desc: " (air,aura,primal) 15 feet. The fogfisher constantly exudes an aura of fog. All creatures within the aura become [[Conditions/Concealed|Concealed]], and all creatures outside the fog become concealed to creatures within it."

  - name: "Reel In"
    desc: "`pf2:1` (manipulate) **Requirements** The fogfisher has a Tiny creature [[Conditions/Grabbed|Grabbed]] with its harpoon\n* * *\n\n**Effect** The fogfisher retracts its harpoon, pulling the grabbed creature toward it. The grabbed creature must attempt a DC 21 Fortitude check save.\n* * *\n\n**Critical Success** The fogfisher fails to move the creature.\n\n**Success** The fogfisher pulls the creature 5 feet closer.\n\n**Failure** The fogfisher pulls the creature up to 30 feet closer.\n\n**Critical Failure** The fogfisher pulls the creature to an adjacent space."

  - name: "Rip Out"
    desc: "`pf2:1`  **Requirements** The fogfisher has a creature [[Conditions/Grabbed|Grabbed]] with its harpoon\n* * *\n\n**Effect** The fogfisher rips free its harpoon, retracting the spike and leaving a bloody hole behind. The grabbed creature is no longer grabbed and takes 3d6 persistent bleed damage (DC 21 Fortitude check save)."
 
```

```encounter-table
name: Fogfisher
creatures:
  - 1: Fogfisher
```



Fogfishers are rarely encountered less than a mile above the ground, preferring instead to drift high in the atmosphere in clusters that look like drifting fog banks. Only when their favored foods—birds, bats, and other tiny flying creatures—grow scarce do fogfishers descend to feed. Fogfishers trapped in enclosed areas, such as subterranean caverns, might be forced into such tactics.

A fogfisher appears as an ovoid mass of pulsing, translucent flesh from which dangle dozens of spike-tipped tendrils. When it attacks, the fogfisher launches a harpoon-like hook. By injecting victims with its buoyant drifting toxin, a fogfisher can reel in creatures much larger than its typical vermin prey.

## Fishers Above

The fogfisher occupies a similar ecological niche as another deadly predator of the world above—the [[Sky Fisher|Sky Fisher]]. Scholars have noted the similarities between these creatures, although enough differences remain to suggest the two are unrelated. It makes one wonder, though, what other predators might lurk in the cloud-jungles high above the ground.
