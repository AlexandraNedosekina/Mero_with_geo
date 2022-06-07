// var map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.OSM()
//         })
//     ],
//     view: new ol.View({
//         center: ol.proj.fromLonLat([60.658895213029815,56.839647146522445]),
//         zoom: 8
//     })
// });
var myview = new ol.View({
    center: ([750651880409.3649, 7718377.643053987]),
    zoom: 15,
})

var mylayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var layer = [mylayer]

var map = new ol.Map({
    target: 'map',
    layers: layer,
    view: myview,
});
var mykmllayer = new ol.layer.Vector({
    // strategies: [new ol.Strategy.fixed()],
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'result.kml'
    })
})
map.addLayer(mykmllayer)
// var osm = new ol.layer.Title({
//     source: new ol.source.OSM()
// })

// layerArray = [osm]
//
// var map = new ol.Map({
//     target: 'map',
//     view: myview,
//     layers: layerArray
// })
