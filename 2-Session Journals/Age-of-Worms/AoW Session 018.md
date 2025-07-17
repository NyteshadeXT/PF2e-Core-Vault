---
notetype: SessionNote
tags:
  - "#SessionNote"
aliases:
  - The Inner Temple
whichparty: "[[Age of Worms Party Dashboard]]"
sessiondate: 2025-07-10
quicknote: Escaping the mine and getting their "just?" rewards.
locations:
  - "[[The Three Faces of Evil]]"
  - "[[5-World/Settlements/Diamond Lake.md|Diamond Lake]]"
characters:
  - "[[Balabar Smenk]]"
  - "[[Wilryn Whistlesnatch]]"
session_xp: 0
session_coin:
  pp: 0
  gp: 120
  sp: 0
  cp: 0
session_items_permanent:
  - name: Recipe - Sapling Shield
    ilvl: 3
    gp: 57
    date: 2025-07-10
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
After crafting a make-shift platform for the elevator from the temple the players are able to escape the temple/mines.  Outside they discover the local militia as well as the miners preparing to investigate the "strange sounds" coming from the mine.  [[Akiowen|Wen]], using  [[Group Coercion]] convinces them this would be a bad idea and the group begins to disperse without actually entering the mines.  The PCs decide to recover at the mining office and send [[Jayden]] to sell some items at [[Tidwod's]] for them.  Things don't go as planed and Jayden meets [[Wilryn Whistlesnatch]].  The two of them have some drinks at [[The Emporium]] before parting ways, Jayden learning that [[Balabar Smenk]] and [[Ragnolin Dourstone]] had a falling out sometime in the past due to one of them cheating the other.  Armed with this new information, he heads back to the Mining Office, but soon learns that he's being followed.  After evading his pursuers Jayden decides going back to town is the more prudent option and ends up meeting with [[5-World/NPCs/Diamond Lake/Kullen|Kullen]] at [[The Feral Dog]].  Things go poorly for Jayden attempting to drink some orc mead with Kullen.  

In the mean time, the rest of the group starts to get concerned about Jayden tardiness and heads back to town to find him.  They run into a pair of orcs who were looking for Jayden and discover that Dourstone had sent them.  [[Haight Enashberry]] convinces them to go to the Emporium with the group.  Shenanigans ensue and one of the orcs flees after the other is paralyzed by the Emporium's elven mage guard.  Discovering their missing friend and Dourstone are both not present they head out into the courtyard about the same time as Jayden and Kullen exit the Feral Dog.  Jayden attempts to pretend to be drunk only to be discovered by Wen and Haight who are now suspicious of his story.  After some discussion, they decide to go and collect their earnings from Smenk in the middle of the night.  They collect that and a bit more after sharing with him that he was targeted for death by the cult due to loosing his usefulness.  They call it a night resting at the Mining Office.

The following morning Wen and Haight head to [[The Captain's Blade]] to trade some weapons and armor.  [[Zamosshe]], [[Jerrykk]] and [[Jayden]] head to [[Tidwod's]] to do the same.  Some bartering with [[Tyrol Ebberly]] nets them some coin and a recipe for a [[sapling-shield-(minor)|Recipe: Sapling Shield]].  We ended the night with Haight and Wen heading to [[Venelle's]] following the completion of those negotiations.  

### Travel & Rest
Overnight rest in the mining office.  Group is fully recovered.

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
Added [[Wilryn Whistlesnatch]] as an NPC.  He told Jayden that he travels a lot to [[Ardentia City]].  Might be nice to have him make an appearance there in the future.  

### Date & Time
7/10/25 from 6:30 pm CST to 9:30 pm CST

### End of Session Notes
Also of note, the one orc tough that ran away after his buddy was captured by The Emporium's staff.  Potential to have him reappear in the future as well.