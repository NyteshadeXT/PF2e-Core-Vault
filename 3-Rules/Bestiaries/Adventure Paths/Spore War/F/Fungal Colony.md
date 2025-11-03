---
title: Fungal Colony
obsidianUIMode: preview
noteType: pf2eHazard
tags:
  - environmental
  - fungus
  - pf2eHazard
  - complex
  - remaster
source: Pathfinder #212: A Voice in the Blight
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.9JFc5iSpc5a9TgRS" 
level: 19
license: ORC
statblock: inline
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #212: A Voice in the Blight"
name: "Fungal Colony"
level: "Hazard 19"

trait_06: "Complex"
trait_01: [[environmental]]
trait_02: [[fungus]]
modifier: 37
sourcebook: "_Pathfinder #212: A Voice in the Blight_"
perception:
  - name: ""
  - name: "Stealth DC 37" 
    desc: "(legendary)"
abilities_top:
  - name: ""
  - name: "Description"
    desc: "A ring of dead trees covered in dry fungus suddenly shakes and rattles as if something inside some of the trees were about to explode."
abilities_mid:
  - name: ""
  - name: "Disable"
    desc: "DC 45 Nature check twice to appeal to spirits of the natural world still lingering in the area and ask them to neutralize the infestation, DC 39 Survival check four times to gently break open four key tree trunks in the colony to allow the spores to vent harmlessly, or DC 48 Thievery check to trigger a chain reaction among the logs that forces the hazard to implode dramatically but harmlessly. Once the hazard is triggered, only the Nature check can disable it."
attacks:
  - name: ""

  - name: "Fungal Eruption"
    desc: "`pf2:r` (incapacitation, primal) **Trigger** A Small or larger creature enters the hazardous ring or attempts to fly over it at a height of less than 120 feet\n* * *\n\n**Effect** The ring of fallen trees explodes upward to a height of 120 feet. All creatures in the ring or within the area 120 feet above it take 8d6 piercing damage and must attempt a DC 41 Reflex check save. The fungal colony then rolls initiative.\n* * *\n\n**Critical Success** The target is unaffected.\n\n**Success** The target takes half damage and is [[Conditions/Sickened|Sickened 1]].\n\n**Failure** The target takes full damage, is sickened 1, and is [[Conditions/Slowed|Slowed 1]] for 1 minute as spores settle on their bodies and quickly grow into rigid, interlocking plates. A creature can attempt to [[Actions/Escape|Escape]] the shells (DC 41) to end the slowed 1 effect early.\n\n**Critical Failure** The target takes double damage and is [[Conditions/Restrained|Restrained]] as they become almost completely encased in a hard fungal shell until they roll to Escape (DC 41), at which point they are slowed 1 for an additional minute until they Escape a second time."

  - name: "Routine"
    desc: "(1 action; poison, primal) The 120-foot-tall plume of spores turn toxic. Each round, the spore cloud's highest point drops by 40 feet, and it expands outward from the initial perimeter at **A2** by 20 feet on the ground and at a height of 10 feet. At the end of the third round, the spore cloud stabilizes as a ten-foot-high ring with a width of 45 feet, which completely fills the clearing with ease. This spore cloud doesn't obscure vision, but creatures that end their turn in it take 5d6 poison damage (DC 41 Fortitude check save).\n\nOn round 4, the spore cloud settles to the ground on the hazard's action. If the hazard hasn't yet been disabled, the ground between areas **A1** and **A2** erupts, and a trio of fungus-encrusted warsworns, their bodies composed of ancient elven skeletons bound together by glistening filaments of mold, rises up to attack all intruders in the area. At this point, the hazard deactivates, but the warsworns fight until they're destroyed."
  - name: "Reset"
    desc: "24 hours after the fungal colonies erupt, the hazard reactivates and can trigger again. If the warsworns are activated and destroyed, they do not appear again on a subsequent triggering."
```

```encounter-table
name: Fungal Colony
creatures:
  - 1: Fungal Colony
```

