require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer"
], function(Map, MapView, Home, Sketch, GraphicsLayer) {
  // Create a map
  var map = new Map({
    basemap: "streets"
  });
  
  // Create a map view
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-122.4194, 37.7749], // Longitude, latitude
    zoom: 12 // Zoom level
  });
  
  // Create a graphics layer
  var graphicsLayer = new GraphicsLayer();
  
  // Add the graphics layer to the map
  map.add(graphicsLayer);
  
  // Create a new sketch widget
  const sketch = new Sketch({
    view: view,
    layer: graphicsLayer
  });
  
  // Add the sketch widget to the view
  view.ui.add(sketch, "top-right"); // Adjust position as needed
  
  // Create a new home widget
  const homeWidget = new Home({
    view: view
  });
  
  // Add the home widget to the view
  view.ui.add(homeWidget, "top-left"); // Adjust position as needed
});
