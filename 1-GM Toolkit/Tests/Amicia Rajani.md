---
title: Amicia Rajani  
pronounced: ah-MEE-see-ah rah-JAH-nee  
noteIcon:   
tags: NPC  
ancestry: Human  
heritage: Nidalese  
gender: Female  
age: 20 years  
sexuality: Heterosexual  
alignment: Neutral Good  
condition: Healthy  
aliases:
 - Amicia
occupation: Smithy Apprentice  
associatedGroup:  
associatedReligion:  
ownedLocations:  
location: Otari
---

> [!infobox]+
> # `=link(this.file.name)`
> **Pronounced:**  "`=this.Pronounced`"
> ![[Placeholder Portrait.png]]
> ###### Bio
> | | |
> | --- | --- |
> | **Ancestry** | `=this.ancestry` |
> | **Heritage** | `=this.heritage` |
> | **Gender** | `=this.gender` |
> | **Age** | `=this.age` |
> | **Sexuality** | `=this.sexuality` |
> | **Alignment** | `=this.alignment` |
> | **Condition** | `=this.condition` |
> ###### Info
> | | |
> | --- | --- |
> | **Aliases** | `=this.aliases` |
> |**Occupations** | `=this.occupation` |
> | **Groups** | `=link(this.AssociatedGroup)` |
> |**Religions** | `=link(this.AssociatedReligion)` |
> | **Owned Properties** | `=link(this.OwnedLocations)` |
> | **Current Location** | `=link(this.location)` |

> [!metadata|no-i]- Overview 
> Amicia Rajani is a spirited young woman working alongside her father, Carman Rajani, at the local smithy in [[Otari]]. She is friendly and high-spirited, always ready to laugh and bring joy to those around her. Although she shares her father's ambitious nature, she secretly admires heroes like her ancestor, Vol Rajani, and dreams of one day becoming as skilled and valiant as the legendary Rose Knight.

## Aspirations

- Dreams of becoming a hero like her ancestor, [[Vol Rajani]], and longs to prove herself as a skilled warrior or protector.

## Acquaintances

### Family:

- [[Carman Rajani]]: Her father, with whom she works at the smithy. Their relationship is complicated, as she admires him yet wishes he would focus on being a better person rather than seeking power.

### Friends:

- Well-liked among her peers, Amicia has made friends at the smithy and in the local community.

### Rivals:

- None specifically; however, she may feel a competitive spirit with local aspiring heroes or adventurers.

### Met:

- Interacts regularly with townsfolk, often offering her assistance in small ways at the smithy or during local events.

## History

Amicia has grown up under the shadow of her father's tragic past, which weighs heavily on their relationship. Despite her father's bitterness and antagonism, she believes in his potential for greatness. Having heard stories of her ancestor [[Vol Rajani]], she often visits his tomb in the [[Otari]] graveyard, feeling a connection to the heroic lineage. While working in the smithy, she has honed her skills and learned the craft, all the while dreaming of adventures and heroism that lay beyond the forge.


### Sessions
```dataview
TABLE npc.notes AS Notes, file.ctime AS Date

WHERE econtains(
  map(npcs, (x) => x.name),
  this.file.name)
OR econtains(
  map(npcs, (x) => x.name),
  this.file.link)

FLATTEN filter(
  npcs, (x) => econtains(x.name, this.file.link)
  OR econtains(x.name, this.file.name)) as npc
SORT file.ctime DESC
LIMIT 20
```

## DM
### Hooks

- **Father-Daughter Dynamics**: Players might be drawn into Amicia's quest for her father's redemption, as she seeks to steer him away from corrupt influences while yearning for his approval.
- **Heroic Aspirations**: Amicia could seek out the party for training, guidance, or advice on how to become a hero, leading to quests that help her gain experience and confidence.

### Hidden Details

- Amicia's admiration for [[Vol Rajani]] might inspire her to perform heroic acts, potentially leading to conflict or collaboration with the party.
- She may approach the party with concerns about her father’s dealings with the [[Kortos Consortium]], highlighting her belief that power might not bring him happiness.
- Despite her cheerful demeanor, Amicia may struggle with the pressure of her father's expectations and her desire to forge her own path as a hero.

### General Notes

- Amicia can serve as a moral compass for her father and a source of hope for the party, offering opportunities for character growth and connection. Her longing for heroism can spark subplots involving her development and the influence of the [[Kortos Consortium]] on her family.
