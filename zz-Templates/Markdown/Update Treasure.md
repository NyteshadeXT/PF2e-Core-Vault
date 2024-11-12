<%* 
try {
    await tp.user.update_treasure(tp);
} catch (err) {
    new Notice("Error: " + err.message, 2000);
}
%>

<%*
tp.hooks.on_all_templates_executed(async () => {
    const file = tp.file.find_tfile(tp.file.path(true));
    await app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.awarded_pp = tp.frontmatter.awarded_pp;
        frontmatter.awarded_gp = tp.frontmatter.awarded_gp;
        frontmatter.awarded_sp = tp.frontmatter.awarded_sp;
        frontmatter.awarded_cp = tp.frontmatter.awarded_cp;
        frontmatter.awarded_permanent_items = tp.frontmatter.awarded_permanent_items;
        frontmatter.awarded_consumable_items = tp.frontmatter.awarded_consumable_items;
    });
});
%>
