---
notetype: SessionNote
aliases:
  - Messing with Hextor
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-05-08
quicknote: The players continued to investigate the Citadel of Hextor within the temple.
locations:
  - "[[The Three Faces of Evil]]"
session_xp: 60
session_items_permanent:
  - name: Magic Wand (Heal)
    ilvl: 3
    gp: 60
    date: 2025-05-08
session_items_consumable:
  - name: Healing Potion (Lesser)
    ilvl: 3
    gp: 12
    date: 2025-05-08
  - name: Eagle Eye Elixir (Lesser)
    ilvl: 1
    gp: 4
    date: 2025-05-08
  - name: Bravo's Brew (Lesser)
    ilvl: 2
    gp: 7
    date: 2025-05-08
  - name: Silvertongue Mutagen (Lesser)
    ilvl: 1
    gp: 4
    date: 2025-05-08
  - name: Scroll of Silence
    ilvl: 1
    gp: 4
    date: 2025-05-08
  - name: Scroll of Dispel Magic
    ilvl: 3
    gp: 12
    date: 2025-05-08
  - name: Potion of Fire Retaliation (Lesser)
    ilvl: 3
    gp: 12
    date: 2025-05-08
session_coin:
  pp: 0
  gp: 332
  sp: 103
  cp: 0
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
The players continued to foray into the Citadel of Hextor.  After encountering some more guards and clerics the players ultimately encounter Theldrick, the leader of the Hextorites.  After a prolonged battled they defeat him and and discover the blank scripts.  Some confusion due to the adventure conversions occur, but ultimately the players should have handout #2 and a book which they are unable to read without the cypher from The Faceless One's lab.  We ended the night with a mostly cleared Hextor temple and the players in the central space preparing to enter the Labyrinth of Vecna.

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
5/8/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Derek was unable to attend due to the new baby, but there were no issues.  This will be an extended break for the group so be sure to do a full adventure recap when we start back up in a few weeks.