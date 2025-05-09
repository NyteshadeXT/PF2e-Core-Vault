- [[Party Treasure by Level]]

# Total Coin Awarded by Adventure
```dataview
TABLE
  sum(awarded_pp) as "Total Platinum",
  sum(awarded_gp) as "Total Gold",
  sum(awarded_sp) as "Total Silver",
  sum(awarded_cp) as "Total Copper",
  sum(awarded_pp) * 10 + sum(awarded_gp) + sum(awarded_sp) / 10 + sum(awarded_cp) / 100 as "Total in Gold Pieces"
FROM "4-Campaign/Age of Worms"
WHERE awarded_pp OR awarded_gp OR awarded_sp OR awarded_cp

```

# Items Awarded by Level
```dataviewjs
const dataviewApi = app.plugins.plugins.dataview?.api;

if (dataviewApi) {
    const MAX_LEVEL = 20;
    const pages = dataviewApi.pages('"4-Campaign/Age of Worms"');

    // Static hardcoded summaries per level (you can modify or expand this list as needed)
    const summaries = {
        1:  "(175gp; Permanent: 2 1st, 2 2nd; Consumable 3 1st, 2 2nd)",
        2:  "(300gp; Permanent: 2 2nd, 2 3rd; Consumable 2 1st, 2 2nd, 2 3rd)",
        3:  "(500gp; Permanent: 2 3rd, 2 4th; Consumable 2 2nd, 2 3rd, 2 4th)",
        4:  "(850gp; Permanent: 2 4th, 2 5th; Consumable 2 3th, 2 4th, 2 5th)",
        5:  "(1350gp; Permanent: 2 5th, 2 6th; Consumable 2 4th, 2 5th, 2 6th)",
        6:  "(2000gp; Permanent: 2 6th, 2 7th; Consumable 2 5th, 2 6th, 2 7th)",
        7:  "(2900gp; Permanent: 2 7th, 2 8th; Consumable 2 6th, 2 7th, 2 8th)",
        8:  "(4000gp; Permanent: 2 8th, 2 9th; Consumable 2 7th, 2 8th, 2 9th)",
        9:  "(5700gp; Permanent: 2 9th, 2 10th; Consumable 2 8th, 2 9th, 2 10th)",
        10: "(8000gp; Permanent: 2 10th, 2 11th; Consumable 2 9th, 2 10th, 2 11th)",
        11: "(11500gp; Permanent: 2 11th, 2 12th; Consumable 2 10th, 2 11th, 2 12th)"
    };

    for (let level = 1; level <= MAX_LEVEL; level++) {
        let items = [];

        for (let page of pages) {
            if (page.awarded_permanent_items) {
                items = items.concat(page.awarded_permanent_items.map(item => {
                    return {
                        ...item,
                        type: "Permanent",
                        displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
                        noteName: page.file.name,
                        gp: item.gp || 0,
                        ilvl: item.ilvl || 0
                    };
                }));
            }
            if (page.awarded_consumable_items) {
                items = items.concat(page.awarded_consumable_items.map(item => {
                    return {
                        ...item,
                        type: "Consumable",
                        displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
                        noteName: page.file.name,
                        gp: item.gp || 0,
                        ilvl: item.ilvl || 0
                    };
                }));
            }
        }

        items = items.filter(item => item.ilvl === level);
        items.sort((a, b) => a.displayName.localeCompare(b.displayName));

        if (items.length > 0) {
            dv.header(3, `Level ${level} Items`);
            dv.paragraph(`###### ${summaries[level] || "(summary placeholder)"}`);

            const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);

            const table = dv.container.createEl("table", { cls: "item-table" });
            const headerRow = table.createEl("tr");
            ["Name", "Item Level", "Gold Pieces", "Type", "Note Name"].forEach(h =>
                headerRow.createEl("th", { text: h })
            );

            for (let item of items) {
                const row = table.createEl("tr");
                row.createEl("td", { text: item.displayName });
                row.createEl("td", { text: item.ilvl });
                row.createEl("td", { text: item.gp });
                row.createEl("td", { text: item.type });
                row.createEl("td", { text: item.noteName });
            }

            const totalRow = table.createEl("tr");
            totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
            totalRow.createEl("td", { text: totalGoldPieces });
            totalRow.createEl("td", { attr: { colspan: 2 } });
        }
    }

    const style = document.createElement("style");
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
```