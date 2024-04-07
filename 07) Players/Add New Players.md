---

database-plugin: basic

---

```yaml:dbfolder
name: Chaos Scar Players
description: Contains all players participating in the Chaos Scar campaign.
columns:
  column1:
    input: text
    key: column1
    accessorKey: column1
    label: Column 1
    position: 1
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 2
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  level:
    input: number
    accessorKey: level
    key: level
    id: level
    label: level
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  hp:
    input: number
    accessorKey: hp
    key: hp
    id: hp
    label: hp
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  modifier:
    input: number
    accessorKey: modifier
    key: modifier
    id: modifier
    label: modifier
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  ac:
    input: number
    accessorKey: ac
    key: ac
    id: ac
    label: ac
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 138
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Player_Name:
    input: text
    accessorKey: Player_Name
    key: Player_Name
    id: Player_Name
    label: Player
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 138
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Race:
    input: select
    accessorKey: Race
    key: Race
    id: Race
    label: Race
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Human", value: "Human", color: "hsl(312, 95%, 90%)"}
      - { label: "Dwarf", value: "Dwarf", color: "hsl(325, 95%, 90%)"}
      - { label: "Wild Elf", value: "Wild Elf", color: "hsl(116, 95%, 90%)"}
      - { label: "Oraed", value: "Oraed", color: "hsl(114, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Alignment:
    input: select
    accessorKey: Alignment
    key: Alignment
    id: Alignment
    label: Alignment
    position: 9
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 153
    options:
      - { label: "Lawful_Good", value: "LG", color: "hsl(213, 95%, 90%)"}
      - { label: "Lawful_Neutral", value: "LN", color: "hsl(75, 95%, 90%)"}
      - { label: "Lawful_Evil", value: "LE", color: "hsl(352, 95%, 90%)"}
      - { label: "Neutral_Good", value: "NG", color: "hsl(244, 95%, 90%)"}
      - { label: "Neutral", value: "N", color: "hsl(267, 95%, 90%)"}
      - { label: "Neutral_Evil", value: "NE", color: "hsl(308, 95%, 90%)"}
      - { label: "Chaotic_Good", value: "CG", color: "hsl(135, 95%, 90%)"}
      - { label: "Chaotic_Neutral", value: "CN", color: "hsl(63, 95%, 90%)"}
      - { label: "Chaotic_Evil", value: "CE", color: "hsl(1, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  __modified__:
    key: __modified__
    id: __modified__
    input: metadata_time
    label: Modified
    accessorKey: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    position: 11
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Class:
    input: text
    accessorKey: Class
    key: Class
    id: Class
    label: Class
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 133
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  NoteIcon:
    input: text
    accessorKey: NoteIcon
    key: NoteIcon
    id: NoteIcon
    label: NoteIcon
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: true
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```