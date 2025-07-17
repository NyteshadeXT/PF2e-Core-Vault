---
notetype: SessionNote
tags:
  - "#SessionNote"
aliases:
  - The Inner Temple
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-07-03
quicknote: The players encounter The Faceless One and deal with a much more dangerous menace.
locations:
  - "[[The Three Faces of Evil]]"
session_xp: 140
session_coin:
  pp: 0
  gp: 394
  sp: 11
  cp: 0
session_items_permanent:
  - name: Alchemist's Lab (Expanded)
    ilvl: 3
    gp: 55
    date: 2025-07-03
  - name: Ring of Minor Arcana]
    ilvl: 5
    gp: 160
    date: 2025-07-03
  - name: Sturdy Shield (Minor)
    ilvl: 4
    gp: 100
    date: 2025-07-03
session_items_consumable:
  - name: Acid Flask (Moderate)|Acid Flask (Moderate)
    ilvl: 3
    gp: 10
    date: 2025-07-03
  - name: Acid Flask (Moderate)
    ilvl: 3
    gp: 10
    date: 2025-07-03
  - name: Alchemist's Fire (Moderate) x3
    ilvl: 3
    gp: 10
    date: 2025-07-03

---


> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Session Date** | `INPUT[datePicker:sessiondate]`
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>
>> [!metadata|metadataoption]- Quick References
>> #### Quick References
>>  |
>> ---|---|
>> **Character** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):characters]` |
>> **Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates")):locations]` |
>> **Miscellaneous** | `INPUT[inlineListSuggester(optionQuery("" AND !"z_Templates")):misc]` |

#  `=link(this.whichparty)` `=this.file.name` "`=this.aliases`"
## Prep
### To-Do
None

### Quick References
> [!column|3 no-title]
>> [!metadata|characters] People
>> `VIEW[{characters}][link]`
>
>> [!metadata|location] Locations
>> `VIEW[{locations}][link]`
>
>> [!metadata|misc] Misc
>> `VIEW[{misc}][link]`

## During
### Events
Players continued exploring the inner temple after [[Jayden]] peeked the door and discovered The Faceless One.  He slams the door in Jayden's face prompting the players to delve a bit more into the rest of the temple.  They attempt to ambush The Faceless One and his acolytes by entering though a different door, but really just gave them time to prepare for the battle.  [[Haight Enashberry]] manages to land a sleep spell on the Faceless One and they attempt to transport him to the surface for questioning.  However, they soon discover that he is being devoured from the inside by a large grey worm of some kind.  Despite efforts to keep him alive, the Faceless One soon dies and triggers the birth of the Ebon Aspect in the black pool.  After a heated battle where several of them fall the PCs are able to prevail and we finish the night at that point.

### Travel & Rest
None

### Loot, Rewards & Purchases
#### **Session XP:** `VIEW[{session_xp}]`

#### Coin
- pp: `VIEW[{session_coin.pp}]`
- gp: `VIEW[{session_coin.gp}]`
- sp: `VIEW[{session_coin.sp}]`
- cp: `VIEW[{session_coin.cp}]`
<br>

#### Permanent Items
```dataviewjs
// Inject custom table styling (only once per session)
if (!document.getElementById("styled-item-table")) {
    const style = document.createElement("style");
    style.id = "styled-item-table";
    style.textContent = `
        .item-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Noto Serif', 'Georgia', serif;
            background-color: #f3efe4;
            color: #2e1a0f;
        }

        .item-table th {
            background-color: #7a4f1b;
            color: #f9e5c1;
            text-align: left;
            padding: 8px;
            border-bottom: 2px solid #d4b071;
            font-weight: bold;
        }

        .item-table td {
            padding: 6px 8px;
            border: 1px solid #d4b071;
        }

        .item-table tr:nth-child(even) td {
            background-color: #ede3d0;
        }

        .item-table tr:hover td {
            background-color: #fff8e1;
        }

        .item-table td:first-child {
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}

const items = dv.current().session_items_permanent ?? [];
if (items.length === 0) {
    dv.paragraph("_No permanent items recorded for this session._");
} else {
    const table = dv.el("table", "", { cls: "item-table" });
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    ["Item", "Level", "Price (gp)"].forEach(h => {
        const th = document.createElement("th");
        th.textContent = h;
        headerRow.appendChild(th);
    });

    const tbody = table.createTBody();
    for (let i of items) {
        const row = tbody.insertRow();
        [i.name, i.ilvl, i.gp].forEach(val => {
            const td = row.insertCell();
            td.textContent = val;
        });
    }
}


```

#### Consumable Items
```dataviewjs
// Inject custom table styling (only once per session)
if (!document.getElementById("styled-item-table")) {
    const style = document.createElement("style");
    style.id = "styled-item-table";
    style.textContent = `
        .item-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Noto Serif', 'Georgia', serif;
            background-color: #f3efe4;
            color: #2e1a0f;
        }

        .item-table th {
            background-color: #7a4f1b;
            color: #f9e5c1;
            text-align: left;
            padding: 8px;
            border-bottom: 2px solid #d4b071;
            font-weight: bold;
        }

        .item-table td {
            padding: 6px 8px;
            border: 1px solid #d4b071;
        }

        .item-table tr:nth-child(even) td {
            background-color: #ede3d0;
        }

        .item-table tr:hover td {
            background-color: #fff8e1;
        }

        .item-table td:first-child {
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}

const items = dv.current().session_items_consumable ?? [];
if (items.length === 0) {
    dv.paragraph("_No permanent items recorded for this session._");
} else {
    const table = dv.el("table", "", { cls: "item-table" });
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    ["Item", "Level", "Price (gp)"].forEach(h => {
        const th = document.createElement("th");
        th.textContent = h;
        headerRow.appendChild(th);
    });

    const tbody = table.createTBody();
    for (let i of items) {
        const row = tbody.insertRow();
        [i.name, i.ilvl, i.gp].forEach(val => {
            const td = row.insertCell();
            td.textContent = val;
        });
    }
}

```

## Post
### New Creations
No new creations this session.  

### Date & Time
7/03/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Jayden was missing from this adventure making the final encounter then originally anticipated.