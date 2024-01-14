var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_QuebecCityADPointsStatsCan2021_1 = new ol.format.GeoJSON();
var features_QuebecCityADPointsStatsCan2021_1 = format_QuebecCityADPointsStatsCan2021_1.readFeatures(json_QuebecCityADPointsStatsCan2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuebecCityADPointsStatsCan2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuebecCityADPointsStatsCan2021_1.addFeatures(features_QuebecCityADPointsStatsCan2021_1);
var lyr_QuebecCityADPointsStatsCan2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuebecCityADPointsStatsCan2021_1, 
                style: style_QuebecCityADPointsStatsCan2021_1,
                interactive: false,
                title: '<img src="styles/legend/QuebecCityADPointsStatsCan2021_1.png" /> Quebec City,AD Points, Stats Can 2021 '
            });
var format_AdPointsStatsCanada_2 = new ol.format.GeoJSON();
var features_AdPointsStatsCanada_2 = format_AdPointsStatsCanada_2.readFeatures(json_AdPointsStatsCanada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdPointsStatsCanada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdPointsStatsCanada_2.addFeatures(features_AdPointsStatsCanada_2);
var lyr_AdPointsStatsCanada_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdPointsStatsCanada_2, 
                style: style_AdPointsStatsCanada_2,
                interactive: false,
                title: '<img src="styles/legend/AdPointsStatsCanada_2.png" /> Ad, Points, Stats Canada'
            });
var format_LineWindsorQuebec_3 = new ol.format.GeoJSON();
var features_LineWindsorQuebec_3 = format_LineWindsorQuebec_3.readFeatures(json_LineWindsorQuebec_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineWindsorQuebec_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineWindsorQuebec_3.addFeatures(features_LineWindsorQuebec_3);
var lyr_LineWindsorQuebec_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineWindsorQuebec_3, 
                style: style_LineWindsorQuebec_3,
                interactive: false,
                title: '<img src="styles/legend/LineWindsorQuebec_3.png" /> Line Windsor Quebec'
            });
var format_BufferWindsorQuebec75Km_4 = new ol.format.GeoJSON();
var features_BufferWindsorQuebec75Km_4 = format_BufferWindsorQuebec75Km_4.readFeatures(json_BufferWindsorQuebec75Km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferWindsorQuebec75Km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferWindsorQuebec75Km_4.addFeatures(features_BufferWindsorQuebec75Km_4);
var lyr_BufferWindsorQuebec75Km_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BufferWindsorQuebec75Km_4, 
                style: style_BufferWindsorQuebec75Km_4,
                interactive: false,
                title: '<img src="styles/legend/BufferWindsorQuebec75Km_4.png" /> Buffer, Windsor Quebec, 75Km'
            });
var lyr_DensityMapPopulationQuebecCity_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Density Map, Population Quebec City",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensityMapPopulationQuebecCity_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7961791.741093, 5884290.725506, -7913791.741135, 5933956.513458]
                            })
                        });
var format_PolygonADCensus2021QuebecCity_6 = new ol.format.GeoJSON();
var features_PolygonADCensus2021QuebecCity_6 = format_PolygonADCensus2021QuebecCity_6.readFeatures(json_PolygonADCensus2021QuebecCity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygonADCensus2021QuebecCity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolygonADCensus2021QuebecCity_6.addFeatures(features_PolygonADCensus2021QuebecCity_6);
var lyr_PolygonADCensus2021QuebecCity_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolygonADCensus2021QuebecCity_6, 
                style: style_PolygonADCensus2021QuebecCity_6,
                interactive: false,
                title: '<img src="styles/legend/PolygonADCensus2021QuebecCity_6.png" /> Polygon, AD, Census 2021 (Quebec City)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_QuebecCityADPointsStatsCan2021_1.setVisible(true);lyr_AdPointsStatsCanada_2.setVisible(true);lyr_LineWindsorQuebec_3.setVisible(true);lyr_BufferWindsorQuebec75Km_4.setVisible(true);lyr_DensityMapPopulationQuebecCity_5.setVisible(true);lyr_PolygonADCensus2021QuebecCity_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QuebecCityADPointsStatsCan2021_1,lyr_AdPointsStatsCanada_2,lyr_LineWindsorQuebec_3,lyr_BufferWindsorQuebec75Km_4,lyr_DensityMapPopulationQuebecCity_5,lyr_PolygonADCensus2021QuebecCity_6];
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AdPointsStatsCanada_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', });
lyr_LineWindsorQuebec_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BufferWindsorQuebec75Km_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PolygonADCensus2021QuebecCity_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AdPointsStatsCanada_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', });
lyr_LineWindsorQuebec_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BufferWindsorQuebec75Km_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PolygonADCensus2021QuebecCity_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QuebecCityADPointsStatsCan2021_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'header label', 'icon': 'no label', });
lyr_AdPointsStatsCanada_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Name_2': 'no label', 'description_2': 'no label', 'timestamp_2': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitudeMode_2': 'no label', 'tessellate_2': 'no label', 'extrude_2': 'no label', 'visibility_2': 'no label', 'drawOrder_2': 'no label', 'icon_2': 'no label', });
lyr_LineWindsorQuebec_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BufferWindsorQuebec75Km_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PolygonADCensus2021QuebecCity_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PolygonADCensus2021QuebecCity_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});