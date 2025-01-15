// Assuming you've already created your OpenLayers map object as `map`
var size = 0;
var placement = 'point';

// Define minimum and maximum font sizes
var minFontSize = 6.5;  // Minimum font size
var maxFontSize = 13; // Maximum font size

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

// Function to calculate a single interior point inside the polygon
function getLabelPoint(geometry) {
    if (geometry.getType() === 'MultiPolygon') {
        let largestPolygon = geometry.getPolygons().reduce((largest, poly) =>
            poly.getArea() > largest.getArea() ? poly : largest
        );
        return largestPolygon.getInteriorPoint();  // Use an interior point of the largest part
    } else {
        return geometry.getInteriorPoint(); // For simple polygons, use the interior point directly
    }
}

var style_ParcelAttributesLabel_93 = function(feature, resolution) {
    var labelText = "";
    var zoomLevel = map.getView().getZoom();
    var labelFont = getFontSize(zoomLevel) + " 'Poppins', sans-serif";  // Dynamic font size based on zoom level
    var labelFill = "#ffffff";  // Text color set to white
    var bufferColor = "#000000";  // Stroke color
    var bufferWidth = 4.0;  // Stroke width

    // Access individual attributes
    var company = feature.get("Vendor Company") || 'n/a';
    var directors = feature.get("Vendor Names") || 'n/a';
    

    // Only construct label text if not all values are 'n/a'
    if (!(company === 'n/a' && directors === 'n/a' && marketValue === 'n/a')) {
        if (zoomLevel >= 13.5 && company !== 'n/a') {
            labelText += "Company:\n" + company + "\n\n";  // Company section with newline for the value
        }
        if (zoomLevel >= 15 && directors !== 'n/a') {
            labelText += "Directors:\n" + formatDirectors(directors) + "\n\n";  // Directors section with newline for the value
        }
        if (zoomLevel >= 16 && marketValue !== 'n/a') {
            labelText += "Market Value (20%DM):\n" + marketValue + "\n";  // Market value section with newline for the value
        }
    }

    // Only display label at a single interior point within the polygon
    var style = [];
    if (labelText) {
        var geometry = feature.getGeometry();
        
        // Calculate the interior point for the polygon
        var labelPoint = getLabelPoint(geometry);

        style.push(new ol.style.Style({
            geometry: labelPoint,  // Position label at the interior point
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),  // Fill transparency
            text: new ol.style.Text({
                text: labelText,
                font: labelFont,  // Use dynamic font size here
                fill: new ol.style.Fill({
                    color: labelFill  // Set text color to white
                }),
                stroke: new ol.style.Stroke({
                    color: bufferColor,  // Stroke color
                    width: bufferWidth
                }),
                overflow: true,  // Allow label to extend beyond feature boundary
                placement: placement,
                rotation: 0 * (Math.PI / 180)  // Apply label rotation in radians
            })
        }));
    } else {
        style.push(new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: null  // Hide label if there's no text
        }));
    }

    return style;
};

// Function to format directors with line breaks
function formatDirectors(directorsString) {
    return directorsString
        .split(';')  // Split by semicolon to get individual directors
        .map(d => d.trim())
        .flatMap(d => {
            // Split by comma and ensure everything after a comma goes on a new line
            return d.split(',').map(part => part.trim());
        })
        .join('\n');  // Join with line breaks for each director
}

// Log the zoom level to the console
map.on('moveend', function() {
    console.log("Map has moved or zoomed.");  // Confirm the event is triggered
    var zoomLevel = map.getView().getZoom();  // Retrieve the current zoom level
    console.log("Current Zoom Level:", zoomLevel);  // Log the zoom level
});
