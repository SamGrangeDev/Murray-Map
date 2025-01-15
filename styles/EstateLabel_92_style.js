// Assuming you've already created your OpenLayers map object as `map`
var size = 0;
var placement = 'point';

// Define minimum and maximum font sizes
var minFontSize = 10;  // Adjust as needed
var maxFontSize = 20; // Adjust as needed

// Function to calculate dynamic font size based on zoom level
function getFontSize(zoomLevel) {
    if (zoomLevel < 13.5) {
        return `${minFontSize}px`; // Use minimum font size at zoom levels below 13.5
    } else if (zoomLevel < 16) {
        // Interpolate font size between min and max
        return `${Math.round(minFontSize + ((maxFontSize - minFontSize) * ((zoomLevel - 13.5) / (16 - 13.5))))}px`;
    } else {
        return `${maxFontSize}px`; // Use maximum font size at zoom level 16 and above
    }
}

var style_EstateLabel_92 = function(feature, resolution) {
    var labelText = "";
    var zoomLevel = map.getView().getZoom(); // Get current zoom level
    var labelFont = getFontSize(zoomLevel) + " 'Poppins', sans-serif";  // Dynamic font size and font family based on zoom level
    var labelFill = "#ffffff";  // Text color set to white
    var bufferColor = "#fa0004";  // Stroke color
    var bufferWidth = 2.0;  // Stroke width
    var rotationAngle = 0 * (Math.PI / 180);  // -25 degrees in radians

    // Access individual attributes
    var estateAddress = feature.get("Estate/Address") || 'n/a';
    var developer = feature.get("Developer") || 'n/a';
    var estateStatus = feature.get("Estate Status") || 'n/a';

    // Debugging: log the retrieved values
    console.log("Feature:", feature);
    console.log("Estate/Address:", estateAddress);
    console.log("Developer:", developer);
    console.log("Estate Status:", estateStatus);
    console.log("Current Zoom Level:", zoomLevel);

    // Only construct label text if not all values are 'n/a'
    if (!(estateAddress === 'n/a' && developer === 'n/a' && estateStatus === 'n/a')) {
        if (zoomLevel >= 13.5 && estateAddress !== 'n/a') {  // Show Estate/Address at zoom level 13.5 or closer
            labelText += "Estate/Address:\n" + estateAddress + "\n\n";  // Estate/Address section
        }
        if (zoomLevel >= 15 && developer !== 'n/a') {  // Show Developer at zoom level 15 or closer
            labelText += "Developer:\n" + developer + "\n\n";  // Developer section
        }
        if (zoomLevel >= 16 && estateStatus !== 'n/a') {  // Show Estate Status at zoom level 16 or closer
            labelText += "Estate Status: " + estateStatus + "\n";  // Estate Status section
        }
    }

    // Apply minimum zoom level for labels
    if (labelText) {  // Check if there is any label text to display
        var geometry = feature.getGeometry();
        var style;

        // Check if the geometry is multi-part and use the centroid
        if (geometry.getType() === 'MultiPolygon' || geometry.getType() === 'Polygon') {
            // Attempt to use getInteriorPoint if available
            var centroid;
            try {
                centroid = geometry.getInteriorPoint().getCoordinates();
            } catch (e) {
                // Fallback: calculate centroid using extent
                var extent = geometry.getExtent();
                centroid = [
                    (extent[0] + extent[2]) / 2,  // Center x-coordinate
                    (extent[1] + extent[3]) / 2   // Center y-coordinate
                ];
            }

            style = [ new ol.style.Style({
                geometry: new ol.geom.Point(centroid),  // Place label at the calculated centroid
                fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
                text: new ol.style.Text({
                    text: labelText,
                    font: labelFont,  // Use dynamic font size and font family here
                    fill: new ol.style.Fill({
                        color: labelFill  // Set text color to white
                    }),
                    stroke: new ol.style.Stroke({
                        color: bufferColor,  // Stroke color
                        width: bufferWidth
                    }),
                    overflow: true,  // Allow label to extend beyond feature boundary
                    placement: placement,
                    rotation: rotationAngle  // Apply label rotation in radians
                })
            })];
        } else {
            // Fallback for other geometry types
            style = [ new ol.style.Style({
                fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
                text: null  // Hide label for non-polygon geometries
            })];
        }
    } else {
        var style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: null  // Hide label if there's no text
        })];
    }

    return style;
};

// Optional: Log the zoom level to the console on map moveend
map.on('moveend', function() {
    console.log("Map has moved or zoomed.");  // Confirm the event is triggered
    var zoomLevel = map.getView().getZoom();  // Retrieve the current zoom level
    console.log("Current Zoom Level:", zoomLevel);  // Log the zoom level
});
