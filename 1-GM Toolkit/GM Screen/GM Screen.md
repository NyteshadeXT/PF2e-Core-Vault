> [!kanban|clean no-t]+
> - [[Aetherial Highlands Map|Aetherial Highlands Map]]
> 	![[ Known World.png|sban center hs-sm]]
> - [[Encounter Builder]]
> 	![[Encounter.png|sban center hs-sm]]
> - [[Travel Calculator]]
> 	![[Travel.png|sban center hs-sm]]
> - [[DC Calculator]]
> 	![[DC-Logo.png|sban hs-sm]]

> [!infobox]
> # Session Journals
> ```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date", characters
from "2-Session Journals/Age-of-Worms"
where contains(tags, "SessionNote")
SORT file.name DESC

```dataview  
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Ancestry, Heritage, level  
from "2-Party"  
where contains(tags, "Player")
where (Status = "Active")  
```

> [!column | 3 no-t no-i] 
>> [!NOTE]- Actions
>> [[Basic Actions\|Basic Actions]]
>> [[Skill Actions\|Skill Actions]]
>
>> [!tip]- Conditions
>> [[Conditions\|Conditions]]
>> 
>> [[Blinded]] 
>> [[Broken]] 
>> [[Clumsy]]
>> [[3-Rules/Conditions/Concealed]]  
>> [[Confused]] 
>> [[Controlled]] 
>> [[Dazzled]] 
>> [[Deafened]] 
>> [[Doomed 1|Doomed]] 
>> [[Drained]] 
>> [[Dying 1|Dying]] 
>> [[Encumbered]] 
>> [[Enfeebled]] 
>> [[Fascinated]] 
>> [[Fatigued]] 
>> [[Off-Guard]] 
>> [[Fleeing]] 
>> [[Frightened 1|Frightened]] 
>> [[Grabbed]] 
>> [[Helpful]] 
>> [[Hidden]]
>> [[Hostile]] 
>> [[Immobilized]] 
>> [[Indifferent]] 
>> [[Invisible]] 
>> [[Observed]] 
>> [[Paralyzed]]
>> [[Persistent Damage]]  
>> [[Petrified]] 
>> [[Prone]] 
>> [[Quickened]] 
>> [[Restrained]] 
>> [[Sickened]] 
>> [[Slowed 1|Slowed]] 
>> [[Stunned]] 
>> [[Stupefied 1|Stupefied]] 
>> [[Unconscious]] 
>> [[Undetected]] 
>> [[Unfriendly]] 
>> [[Unnoticed]] 
>
>> [!example]- Rules Reference
>> [[Animal Companion]] 
>> [[Bulk Conversions for Different Sizes\|Bulk Conversions for Different Sizes]]
>> [[Character Wealth\|Character Wealth]]
>> [[Counteract\|Counteract]]
>> [[Cover\|Cover]]
>> [[Creature Identification\|Creature Identification]]
>> [[Critical Specialization Effects\|Critical Specialization Effects]]
>> [[Detecting Creatures\|Detecting Creatures]]
>> [[Elite_Weak Adjustments\|Elite/Weak Adjustments]]
>> [[Encounter Building & XP Awards\|Encounter Building & XP Awards]] |
>> [[Familiar]]
>> [[Hero Points\|Hero Points]]
>> [[Invest an Item]]
>> [[Light Effects\|Light Effects]]
>> [[Off-Guard]] 
>> [[Reputation\|Reputation]]
>> [[Senses\|Senses]]
>> [[Special Battles\|Special Battles]]
>> [[Treasure\|Treasure]]
>> [[Treasure Per Encounter\|Treasure Per Encounter]]
>> [[Victory Points\|Victory Points]]

> [!column | 3 no-t no-i] 
>> [!NOTE]- Equipment and Services
>> [[Animals & Barding\|Animals & Barding]]
>> [[Armor Traits\|Armor Traits]]
>> [[Basic Services\|Basic Services]]
>> [[Changing Equipment\|Changing Equipment]]
>> [[Critical Specialization Effects]]
>> [[Different Size Items\|Different Size Items]]
>> [[Formula Price\|Formula Price]]
>> [[Item Quirks\|Item Quirks]]
>> [[Lifestyle Expenses\|Lifestyle Expenses]] 
>> [[Material Hardness, Hit Points and Broken Threshold]]
>> [[Scroll Prices\|Scroll Prices]]
>> [[Spellcasting Services\|Spellcasting Services]]
>> [[Structures\|Structures]] 
>> [[Wand Prices\|Wand Prices]]
>> [[Weapon Traits\|Weapon Traits]]
>
>> [!warning]- Health and Dying
>> [[3-Rules/Character Building/Actions/Treat Wounds|Treat Wounds]]
>> [[Treat Disease]] 
>> [[Treat Poison]] 
>> [[Unconscious]] > [[Dying 1|Dying]] > [[Wounded 1|Wounded]] > [[Doomed 1|Doomed]] 
>> [[Heroic Recovery]] 
>> [[Death and Dying\|Death and Dying]]
>> [[Environmental Damage\|Environmental Damage]]
>> [[Falling\|Falling]]
>> [[Material Hardness, Hit Points and Broken Threshold\|Material Hardness, Hit Points and Broken Threshold]]
>> [[Resting\|Resting]]
>> [[Long-Term Rest]] 
>
>> [!example]- Exploration and Downtime Activities
>> [[Exploration Activities\|Exploration Activities]]
>> [[Downtime Tasks]] 
>> [[Downtime Events\|Downtime Events]]
>> [[downtime|Downtime]]
>> [[Temperature Effects\|Temperature Effects]] 
>> [[Terrain in Encounters\|Terrain in Encounters]]
>> [[Travel Speed\|Travel Speed]]


# Todo List
![[ToDo List]]

# Recently Modified NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", gender as "Gender", ancestry as "Ancestry", age as "Age", location as "Location", AssociatedGroup  
FROM "5-World/NPCs"
where contains(tags, "NPC") 
SORT file.mtime DESC
LIMIT 10
```

# Recently Modified Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name", settlementtype as "type", governmenttype as "Government", Community-Size, size, population  
FROM "5-World"
where contains(tags, "Location")  
SORT file.mtime DESC
LIMIT 10
```


# Recently Modified Notes
```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "zz-Attachments")
    AND !contains(file.path, "zz-Scripts")
    AND !contains(file.path, "zz-Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

![[Vault Report]]


