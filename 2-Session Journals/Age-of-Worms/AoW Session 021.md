---
notetype: SessionNote
tags:
  - "#SessionNote"
aliases:
  - Arriving at Blackwall Keep
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-08-21
quicknote: Back through the swamp and encounter the lizardfok at their lair.
locations:
session_xp: 0
misc:
  - "[[4-Campaign/Age of Worms/Encounter at Blackwall Keep.md|Encounter at Blackwall Keep]]"
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
The players journey to the lizardfolk lair in search of [[Marzena]]. After a few encounters through the swamp the players arrive and discover the entrance to the lair.  As they mill around they stumble into some harpies and are forced to do battle.  The harpies had warned the lizardfolk of their arrival though and following the battle they are approached by the shaman from the warband who Zam convinced to leave.  Believing they now have a different future, she gets the tribes shaman.  The party agrees to kill [[Shukak]] and in return can free[[Marzena]].  They are escorted thorough the lair and eventually do battle with the lizardfolk king.  We ended the night after they had a chance to heal and loot.

### Travel & Rest
No rest during this session.

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
None this session. 

### Date & Time
8/21/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
None