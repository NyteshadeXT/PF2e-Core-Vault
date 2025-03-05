---
obsidianUIMode: preview
---


> [!cards|4]
> **[[Map-Faerun]]**
> [![[Northern Faerun Map.jpg\|sban htiny ctr]]](Lampoteuo)
> 
> **[[Link]]**
> [![[JourneyBoard.png\|sban htiny ctr]]](Journey%20Board)
>
> **[[Link]]**
> [![[AdventureIcon.png\|sban htiny ctr]]](Lampoteuo)
> 
> **[[Link]]**
> [![[PartyLogo.jpg\|sban htiny ctr p+t]]|](Party%201%2FExample%20Party%201)


> [!infobox]
> # Session Journals
> ```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date", Status, characters
from "2-Session Journals/Age-of-Worms"
where contains(tags, "SessionNote")
SORT file.name DESC

```dataview  
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Ancestry, Heritage, level  
from "2-Party"  
where contains(tags, "Player")
where (Status = "Active")  
```

# Recently Modified NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", gender as "Gender", Race, age as "Age", location as "Location", AssociatedGroup  
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


