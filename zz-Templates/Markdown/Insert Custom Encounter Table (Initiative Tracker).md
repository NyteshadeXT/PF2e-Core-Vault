### Encounter Title
**Encounter Difficulty: ??? **   
- [ ] difficulty (xxx XP) Level xxx

![[ImagePlaceholder.png]]

> [!note]+ Read Aloud
> Insert Read Aloud text

**Description** This should include additional details about the encounter not shared with the players in the read aloud section.  That could be descriptive elements, creatures, traps or other GM only information.

At the start of the encounter, place the following foes on the map: 
 - 2: [[BadGuy1]] W
 - 2: [[BadGuy2]] H

```encounter-table
name: EncounterName
party: PartyName
creatures:
  - 1: My Monster          # 1 monster named My Monster will be added, with no HP, AC or modifier.
  - 1d6: Goblin, 7, 15, 2        # 1 goblin with HP: 7, AC: 15, MOD: 2 will be added.
  - Goblin, 5, 15, 2, 25      # 1 goblin with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
```

#### Tactics
Insert tactics the foes in this encounter might use during the encounter or combat when applicable.  

#### Features of the Area
Insert a bullet point list of other important elements of the encounter area when applicable.  Things like information about lighting, room dimensions, furniture, traps, things to interact with, etc can be found here.

> [!tip]+ Treasure
> If applicable, insert location and description of treasure as well as any skill checks and equivalent DCs required for success.  If treasure found on defeated foes is added indicate which foe was using/carrying the items.
> 
> - [ ] pp::10
> - [ ] gp::10
> - [ ] sp::10
> - [ ] cp::10
> - [ ] permanent::[[itemlink]] [ilvl::000] [gp::000]
> - [ ] consumable::[[itemlink]] [ilvl::000] [gp::000]