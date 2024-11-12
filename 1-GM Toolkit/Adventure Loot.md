- [[Party Treasure by Level]]

# Total Coin Awarded by Adventure
```dataview
TABLE
  sum(awarded_pp) as "Total Platinum",
  sum(awarded_gp) as "Total Gold",
  sum(awarded_sp) as "Total Silver",
  sum(awarded_cp) as "Total Copper",
  sum(awarded_pp) * 10 + sum(awarded_gp) + sum(awarded_sp) / 10 + sum(awarded_cp) / 100 as "Total in Gold Pieces"
FROM "8) Adventures" OR "9) Completed Adventures"
WHERE awarded_pp OR awarded_gp OR awarded_sp OR awarded_cp

```

# Items Awarded by Level
> [!note]+ Level 11 Items 
> ###### 11500gp; Permanent: 2 11th, 2 12th; Consumable 2 10th, 2 11th, 2 12th
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 11);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```




> [!note]+ Level 10 Items 
> ###### 8000gp; Permanent: 2 10th, 2 11th; Consumable 2 9th, 2 10th, 2 11th
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 10);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 9 Items 
> ###### 5700gp; Permanent: 2 9th, 2 10th; Consumable 2 8th, 2 9th, 2 10th
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 9);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 8 Items
> ###### (4000gp; Permanent: 2 8th, 2 9th; Consumable 2 7th, 2 8th, 2 9th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 8);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 7 Items
> ###### (2900gp; Permanent: 2 7th, 2 8th; Consumable 2 6th, 2 7th, 2 8th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 7);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```




> [!note]+ Level 6 Items
> ###### (2000gp; Permanent: 2 6th, 2 7th; Consumable 2 5th, 2 6th, 2 7th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 6);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 5 Items
> ###### (1350gp; Permanent: 2 5th, 2 6th; Consumable 2 4th, 2 5th, 2 6th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 5);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 4 Items
> ###### (850gp; Permanent: 2 4th, 2 5th; Consumable 2 3th, 2 4th, 2 5th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 4);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 3 Items
> ###### (500gp; Permanent: 2 3rd, 2 4th; Consumable 2 2nd, 2 3rd, 2 4th)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 3);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 2 Items
> ###### (300gp; Permanent: 2 2nd, 2 3rd; Consumable 2 1st, 2 2nd, 2 3rd)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 2);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```





> [!note]+ Level 1 Items
> ###### (175gp; Permanent: 2 1st, 2 2nd; Consumable 3 1st, 2 2nd)
> ```dataviewjs
> const dataviewApi = app.plugins.plugins.dataview?.api;
> 
> if (dataviewApi) {
>     const pages = dataviewApi.pages('"8) Adventures"').concat(dataviewApi.pages('"9) Completed Adventures"'));
>     let items = [];
> 
>     for (let page of pages) {
>         if (page.awarded_permanent_items) {
>             items = items.concat(page.awarded_permanent_items.map(item => ({
>                 ...item,
>                 type: "Permanent",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>         if (page.awarded_consumable_items) {
>             items = items.concat(page.awarded_consumable_items.map(item => ({
>                 ...item,
>                 type: "Consumable",
>                 link: page.file.path,
>                 displayName: item.name.includes('|') ? item.name.split('|')[1] : item.name,
>                 noteName: page.file.name,
>                 gp: item.gp || 0
>             })));
>         }
>     }
> 
>     items = items.filter(item => item.ilvl === 1);
>     
>     // Calculate the total gold pieces
>     const totalGoldPieces = items.reduce((sum, item) => sum + item.gp, 0);
> 
>     // Create a table element
>     const table = dv.container.createEl("table", { cls: "item-table" });
>     const headerRow = table.createEl("tr");
>     headerRow.createEl("th", { text: "Name" });
>     headerRow.createEl("th", { text: "Item Level" });
>     headerRow.createEl("th", { text: "Gold Pieces" });
>     headerRow.createEl("th", { text: "Type" });
>     headerRow.createEl("th", { text: "Note Name" });
> 
>     for (let item of items) {
>         const row = table.createEl("tr");
>         const nameCell = row.createEl("td");
>         nameCell.createEl("a", { text: item.displayName, href: item.link });
>         row.createEl("td", { text: item.ilvl });
>         row.createEl("td", { text: item.gp });
>         row.createEl("td", { text: item.type });
>         row.createEl("td", { text: item.noteName });
>     }
> 
>     // Add the total row
>     const totalRow = table.createEl("tr");
>     totalRow.createEl("td", { text: "Total", attr: { colspan: 2 } });
>     totalRow.createEl("td", { text: totalGoldPieces });
>     totalRow.createEl("td", { attr: { colspan: 2 } });
> 
>     // Add some basic styling
>     const style = document.createElement('style');
>     style.textContent = `
>         .item-table {
>             width: 100%;
>             border-collapse: collapse;
>         }
>         .item-table th, .item-table td {
>             border: 1px solid #ddd;
>             padding: 8px;
>         }
>         .item-table th {
>             background-color: #333;
>             color: #fff;
>             text-align: left;
>         }
>         .item-table tr:nth-child(even) {
>             background-color: #444;
>         }
>         .item-table tr:hover {
>             background-color: #555;
>         }
>     `;
>     document.head.appendChild(style);
> }
> ```
