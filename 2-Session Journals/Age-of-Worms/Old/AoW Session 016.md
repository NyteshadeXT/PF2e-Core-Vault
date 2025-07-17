---
notetype: SessionNote
aliases:
  - The Inner Temple
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-06-12
quicknote: The players discover the inner temple of Vecna.
locations:
  - "[[The Three Faces of Evil]]"
session_xp: 140
session_coin:
  pp: 0
  gp: 142
  sp: 25
  cp: 0
session_items_consumable:
  - name: Oak Potion x2
    ilvl: 4
    gp: 15
    date: 2025-06-12
  - name: Ghost Oil x2
    ilvl: 4
    gp: 15
    date: 2025-06-12
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
Players continued exploring the labyrinth and encounter another group of Tengu.  One of them attempts to escape to the inner temple opening a previously undiscovered secret door.  Chasing the Tengu the players also encounter a group of Vecna cultists supported by a ghost.  After a prolonged battle they emerge successful.  They take a brief rest and loot the area.  Then moving into to a near by sleeping area.  We end the night with Jayden opening the door to the room with the boss, The Faceless One.

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
6/12/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Had to have the Tengu reveal the path to the inner areas of the temple as the players were struggling to find it.  The Tengu Wing Fan can only be used by Zam by utilizing "Trick Item."  They will not function for any of the other players.