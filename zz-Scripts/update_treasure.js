module.exports = async (tp) => {
    try {
        // Ensure Dataview API is available
        const dv = app.plugins.plugins.dataview.api;
        let awardedPP = 0;
        let awardedGP = 0;
        let awardedSP = 0;
        let awardedCP = 0;
        let awardedPermanentItems = [];
        let awardedConsumableItems = [];

        // Load the contents of the current note
        const fileContent = tp.file.content;

        // Extract tasks from the current note
        const tasks = fileContent.match(/> - \[(x| )\] .*/g);

        if (tasks) {
            tasks.forEach(task => {
                if (task.match(/- \[x\]/)) {
                    let ppMatch = task.match(/pp::(\d+)/);
                    if (ppMatch) awardedPP += parseInt(ppMatch[1]);

                    let gpMatch = task.match(/gp::(\d+)/);
                    if (gpMatch && !task.match(/permanent::/) && !task.match(/consumable::/)) {
                        awardedGP += parseInt(gpMatch[1]);
                    }

                    let spMatch = task.match(/sp::(\d+)/);
                    if (spMatch && !task.match(/permanent::/) && !task.match(/consumable::/)) {
                        awardedSP += parseInt(spMatch[1]);
                    }

                    let cpMatch = task.match(/cp::(\d+)/);
                    if (cpMatch) awardedCP += parseInt(cpMatch[1]);

                    let permanentMatch = task.match(/permanent::\[\[(.*?)\|(.*?)\]\] \[ilvl::(\d+)\] \[gp::(\d+)\]/);
                    if (permanentMatch) awardedPermanentItems.push({ name: permanentMatch[2], ilvl: parseInt(permanentMatch[3]), gp: parseInt(permanentMatch[4]) });

                    let consumableMatch = task.match(/consumable::\[\[(.*?)\|(.*?)\]\] \[ilvl::(\d+)\] \[gp::(\d+)\]/);
                    if (consumableMatch) awardedConsumableItems.push({ name: consumableMatch[2], ilvl: parseInt(consumableMatch[3]), gp: parseInt(consumableMatch[4]) });
                }
            });
        }

        // Update frontmatter variables
        tp.frontmatter.awarded_pp = awardedPP;
        tp.frontmatter.awarded_gp = awardedGP;
        tp.frontmatter.awarded_sp = awardedSP;
        tp.frontmatter.awarded_cp = awardedCP;
        tp.frontmatter.awarded_permanent_items = awardedPermanentItems;
        tp.frontmatter.awarded_consumable_items = awardedConsumableItems;

    } catch (error) {
        console.error("Error occurred:", error);
    }
};
