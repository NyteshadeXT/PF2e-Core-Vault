```leaflet
### id must be unique
id: leaflet-map
image: 
 - [[Image.jpg]]
height: 1000px
width: 70%
### This sets where the map starts by default.  Set to the middle (half) of your bounds.
lat: 50
long: 50
### Zero is no zoom.  Negative zoom steps away from the map.  Positive zoom steps toward the map.
minZoom: 0
### maxZoom is 18.
maxZoom: 18
### Hover mouse over reset zoom icon to see your current zoom.
defaultZoom: 15
### How far it zooms in or out.  Can be a decimal.
zoomDelta: 0.5
### This is string so it can be any value.  Change to match your maps measurement scale
unit: meters
scale: 1
darkMode: true
```