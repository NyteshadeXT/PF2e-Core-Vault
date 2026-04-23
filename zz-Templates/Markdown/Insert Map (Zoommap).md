---
---

```zoommap
image: zz-Attachments/Assets/MapPlaceholder.png
# markers is optional; defaults to <image>.markers.json
# markers: Assets/Map.jpg.markers.json

# Map view limits
minZoom: 0.3
maxZoom: 8

# Size & interactivity
height: 760px
width: 30%
resizable: true
resizeHandle: native     # left | right | both | native
render: canvas           # or: dom

# Responsive display (fit into width, no wheel/pinch/dblclick pan/zoom)
responsive: false        # true → always fit; disables pan/zoom gestures

# Storage (optional)
# storage: note          # default is json; use "note" to store markers inline
# id: map-1              # optional stable id for inline storage (per code block)

# Alignment / wrapping (optional)
align: left             # left | center | right
wrap: true               # wrap text; useful with left/right alignment
view:
  zoom: 0.7513
  centerX: 0.486849
  centerY: 0.510427
```
