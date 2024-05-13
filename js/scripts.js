// Initializing map

mapboxgl.accessToken = 'pk.eyJ1IjoiamxzYWFiIiwiYSI6ImNsdWx2MWw0ajBuODgybG13NGJwdm1yYTYifQ.wYroyDZcY8OYGXc-qzEmdA';

// set a bounding box to limit scrolling away from Buffalo
const bounds = [
    [-79.11576, 42.81147],
    [-78.65267, 42.97024]
];

const satellite = 'mapbox://styles/mapbox/satellite-v9'
const light = 'mapbox://styles/mapbox/light-v11'

// create the map
const map = new mapboxgl.Map({
    container: 'map',
    style: light,
    center: [-78.88421, 42.89091],
    zoom: 10.92,
    maxBounds: bounds,
    // hash: true
});

// styles for reference
// streets style: 'mapbox://styles/mapbox/streets-v12'
// light style: 'mapbox://styles/mapbox/light-v11',
// satellite style: 'mapbox://styles/mapbox/satellite-v9',


// add zoom buttons
map.addControl(new mapboxgl.NavigationControl());

// add geolocate control
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })
);