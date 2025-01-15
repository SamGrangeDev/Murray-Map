var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LocalPlanningSchemeZones_2 = new ol.format.GeoJSON();
var features_LocalPlanningSchemeZones_2 = format_LocalPlanningSchemeZones_2.readFeatures(json_LocalPlanningSchemeZones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalPlanningSchemeZones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalPlanningSchemeZones_2.addFeatures(features_LocalPlanningSchemeZones_2);
var lyr_LocalPlanningSchemeZones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalPlanningSchemeZones_2, 
                style: style_LocalPlanningSchemeZones_2,
                popuplayertitle: 'Local Planning Scheme Zones',
                interactive: true,
    title: 'Local Planning Scheme Zones<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_0.png" /> Canal development<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_1.png" /> Caravan / chalet park<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_2.png" /> Civic / cultural<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_3.png" /> Commercial<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_4.png" /> Environmental conservation<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_5.png" /> Farmlet<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_6.png" /> Hills landscape protection<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_7.png" /> Hotel / motel<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_8.png" /> Industry<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_9.png" /> Local road<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_10.png" /> Major highway<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_11.png" /> Nambeelup industrial development<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_12.png" /> Nambeelup Industrial Development<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_13.png" /> No zone<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_14.png" /> Primary distributor road<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_15.png" /> Private clubs and institutions<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_16.png" /> Private recreation<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_17.png" /> Public purposes<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_18.png" /> Public recreation / conservation<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_19.png" /> Railway<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_20.png" /> Residential<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_21.png" /> Residential development<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_22.png" /> Road to be closed<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_23.png" /> Rural<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_24.png" /> Rural 1 - general farming<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_25.png" /> Rural 4 - hills face<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_26.png" /> Rural residential<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_27.png" /> Service commercial<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_28.png" /> Special development<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_29.png" /> Special residential<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_30.png" /> Special rural<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_31.png" /> Special use<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_32.png" /> State Forest<br />\
    <img src="styles/legend/LocalPlanningSchemeZones_2_33.png" /> Town centre<br />'
        });
var format_Waterways_3 = new ol.format.GeoJSON();
var features_Waterways_3 = format_Waterways_3.readFeatures(json_Waterways_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_3.addFeatures(features_Waterways_3);
var lyr_Waterways_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_3, 
                style: style_Waterways_3,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_3.png" /> Waterways'
            });
var format_Industrial_4 = new ol.format.GeoJSON();
var features_Industrial_4 = format_Industrial_4.readFeatures(json_Industrial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_4.addFeatures(features_Industrial_4);
var lyr_Industrial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrial_4, 
                style: style_Industrial_4,
                popuplayertitle: 'Industrial',
                interactive: true,
                title: '<img src="styles/legend/Industrial_4.png" /> Industrial'
            });
var format_Publicpurposeshighschool_5 = new ol.format.GeoJSON();
var features_Publicpurposeshighschool_5 = format_Publicpurposeshighschool_5.readFeatures(json_Publicpurposeshighschool_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicpurposeshighschool_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicpurposeshighschool_5.addFeatures(features_Publicpurposeshighschool_5);
var lyr_Publicpurposeshighschool_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publicpurposeshighschool_5, 
                style: style_Publicpurposeshighschool_5,
                popuplayertitle: 'Public purposes - high school',
                interactive: true,
                title: '<img src="styles/legend/Publicpurposeshighschool_5.png" /> Public purposes - high school'
            });
var format_Publicpurposeshospital_6 = new ol.format.GeoJSON();
var features_Publicpurposeshospital_6 = format_Publicpurposeshospital_6.readFeatures(json_Publicpurposeshospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicpurposeshospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicpurposeshospital_6.addFeatures(features_Publicpurposeshospital_6);
var lyr_Publicpurposeshospital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publicpurposeshospital_6, 
                style: style_Publicpurposeshospital_6,
                popuplayertitle: 'Public purposes - hospital',
                interactive: true,
                title: '<img src="styles/legend/Publicpurposeshospital_6.png" /> Public purposes - hospital'
            });
var format_Publicpurposespublicutilities_7 = new ol.format.GeoJSON();
var features_Publicpurposespublicutilities_7 = format_Publicpurposespublicutilities_7.readFeatures(json_Publicpurposespublicutilities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicpurposespublicutilities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicpurposespublicutilities_7.addFeatures(features_Publicpurposespublicutilities_7);
var lyr_Publicpurposespublicutilities_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publicpurposespublicutilities_7, 
                style: style_Publicpurposespublicutilities_7,
                popuplayertitle: 'Public purposes - public utilities',
                interactive: true,
                title: '<img src="styles/legend/Publicpurposespublicutilities_7.png" /> Public purposes - public utilities'
            });
var format_Parksandrecreation_8 = new ol.format.GeoJSON();
var features_Parksandrecreation_8 = format_Parksandrecreation_8.readFeatures(json_Parksandrecreation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parksandrecreation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parksandrecreation_8.addFeatures(features_Parksandrecreation_8);
var lyr_Parksandrecreation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parksandrecreation_8, 
                style: style_Parksandrecreation_8,
                popuplayertitle: 'Parks and recreation',
                interactive: true,
                title: '<img src="styles/legend/Parksandrecreation_8.png" /> Parks and recreation'
            });
var format_Privaterecreation_9 = new ol.format.GeoJSON();
var features_Privaterecreation_9 = format_Privaterecreation_9.readFeatures(json_Privaterecreation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privaterecreation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privaterecreation_9.addFeatures(features_Privaterecreation_9);
var lyr_Privaterecreation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Privaterecreation_9, 
                style: style_Privaterecreation_9,
                popuplayertitle: 'Private recreation',
                interactive: true,
                title: '<img src="styles/legend/Privaterecreation_9.png" /> Private recreation'
            });
var format_Regionalopenspace_10 = new ol.format.GeoJSON();
var features_Regionalopenspace_10 = format_Regionalopenspace_10.readFeatures(json_Regionalopenspace_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionalopenspace_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionalopenspace_10.addFeatures(features_Regionalopenspace_10);
var lyr_Regionalopenspace_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionalopenspace_10, 
                style: style_Regionalopenspace_10,
                popuplayertitle: 'Regional open space',
                interactive: true,
                title: '<img src="styles/legend/Regionalopenspace_10.png" /> Regional open space'
            });
var format_Otherregionalroads_11 = new ol.format.GeoJSON();
var features_Otherregionalroads_11 = format_Otherregionalroads_11.readFeatures(json_Otherregionalroads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Otherregionalroads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Otherregionalroads_11.addFeatures(features_Otherregionalroads_11);
var lyr_Otherregionalroads_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Otherregionalroads_11, 
                style: style_Otherregionalroads_11,
                popuplayertitle: 'Other regional roads',
                interactive: true,
                title: '<img src="styles/legend/Otherregionalroads_11.png" /> Other regional roads'
            });
var format_Primaryregionalroads_12 = new ol.format.GeoJSON();
var features_Primaryregionalroads_12 = format_Primaryregionalroads_12.readFeatures(json_Primaryregionalroads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primaryregionalroads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primaryregionalroads_12.addFeatures(features_Primaryregionalroads_12);
var lyr_Primaryregionalroads_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primaryregionalroads_12, 
                style: style_Primaryregionalroads_12,
                popuplayertitle: 'Primary regional roads',
                interactive: true,
                title: '<img src="styles/legend/Primaryregionalroads_12.png" /> Primary regional roads'
            });
var format_Railways_13 = new ol.format.GeoJSON();
var features_Railways_13 = format_Railways_13.readFeatures(json_Railways_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railways_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_13.addFeatures(features_Railways_13);
var lyr_Railways_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railways_13, 
                style: style_Railways_13,
                popuplayertitle: 'Railways',
                interactive: true,
                title: '<img src="styles/legend/Railways_13.png" /> Railways'
            });
var format_Stateforests_14 = new ol.format.GeoJSON();
var features_Stateforests_14 = format_Stateforests_14.readFeatures(json_Stateforests_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stateforests_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stateforests_14.addFeatures(features_Stateforests_14);
var lyr_Stateforests_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stateforests_14, 
                style: style_Stateforests_14,
                popuplayertitle: 'State forests',
                interactive: true,
                title: '<img src="styles/legend/Stateforests_14.png" /> State forests'
            });
var format_Rural_15 = new ol.format.GeoJSON();
var features_Rural_15 = format_Rural_15.readFeatures(json_Rural_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_15.addFeatures(features_Rural_15);
var lyr_Rural_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_15, 
                style: style_Rural_15,
                popuplayertitle: 'Rural',
                interactive: true,
                title: '<img src="styles/legend/Rural_15.png" /> Rural'
            });
var format_Urbandeferred_16 = new ol.format.GeoJSON();
var features_Urbandeferred_16 = format_Urbandeferred_16.readFeatures(json_Urbandeferred_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urbandeferred_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urbandeferred_16.addFeatures(features_Urbandeferred_16);
var lyr_Urbandeferred_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urbandeferred_16, 
                style: style_Urbandeferred_16,
                popuplayertitle: 'Urban deferred',
                interactive: true,
                title: '<img src="styles/legend/Urbandeferred_16.png" /> Urban deferred'
            });
var format_Urban_17 = new ol.format.GeoJSON();
var features_Urban_17 = format_Urban_17.readFeatures(json_Urban_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_17.addFeatures(features_Urban_17);
var lyr_Urban_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_17, 
                style: style_Urban_17,
                popuplayertitle: 'Urban',
                interactive: true,
                title: '<img src="styles/legend/Urban_17.png" /> Urban'
            });
var format_RuralResidentialInvestigation_18 = new ol.format.GeoJSON();
var features_RuralResidentialInvestigation_18 = format_RuralResidentialInvestigation_18.readFeatures(json_RuralResidentialInvestigation_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralResidentialInvestigation_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidentialInvestigation_18.addFeatures(features_RuralResidentialInvestigation_18);
var lyr_RuralResidentialInvestigation_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidentialInvestigation_18, 
                style: style_RuralResidentialInvestigation_18,
                popuplayertitle: 'Rural Residential Investigation',
                interactive: true,
                title: '<img src="styles/legend/RuralResidentialInvestigation_18.png" /> Rural Residential Investigation'
            });
var format_RuralResidential_19 = new ol.format.GeoJSON();
var features_RuralResidential_19 = format_RuralResidential_19.readFeatures(json_RuralResidential_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralResidential_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidential_19.addFeatures(features_RuralResidential_19);
var lyr_RuralResidential_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidential_19, 
                style: style_RuralResidential_19,
                popuplayertitle: 'Rural Residential',
                interactive: true,
                title: '<img src="styles/legend/RuralResidential_19.png" /> Rural Residential'
            });
var format_UrbanExpansion_20 = new ol.format.GeoJSON();
var features_UrbanExpansion_20 = format_UrbanExpansion_20.readFeatures(json_UrbanExpansion_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanExpansion_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanExpansion_20.addFeatures(features_UrbanExpansion_20);
var lyr_UrbanExpansion_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanExpansion_20, 
                style: style_UrbanExpansion_20,
                popuplayertitle: 'Urban Expansion',
                interactive: true,
                title: '<img src="styles/legend/UrbanExpansion_20.png" /> Urban Expansion'
            });
var format_UrbanInvestigation_21 = new ol.format.GeoJSON();
var features_UrbanInvestigation_21 = format_UrbanInvestigation_21.readFeatures(json_UrbanInvestigation_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanInvestigation_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanInvestigation_21.addFeatures(features_UrbanInvestigation_21);
var lyr_UrbanInvestigation_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanInvestigation_21, 
                style: style_UrbanInvestigation_21,
                popuplayertitle: 'Urban Investigation',
                interactive: true,
                title: '<img src="styles/legend/UrbanInvestigation_21.png" /> Urban Investigation'
            });
var format_UrbanDeferred_22 = new ol.format.GeoJSON();
var features_UrbanDeferred_22 = format_UrbanDeferred_22.readFeatures(json_UrbanDeferred_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanDeferred_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanDeferred_22.addFeatures(features_UrbanDeferred_22);
var lyr_UrbanDeferred_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanDeferred_22, 
                style: style_UrbanDeferred_22,
                popuplayertitle: 'Urban Deferred',
                interactive: true,
                title: '<img src="styles/legend/UrbanDeferred_22.png" /> Urban Deferred'
            });
var format_Urban_23 = new ol.format.GeoJSON();
var features_Urban_23 = format_Urban_23.readFeatures(json_Urban_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_23.addFeatures(features_Urban_23);
var lyr_Urban_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_23, 
                style: style_Urban_23,
                popuplayertitle: 'Urban',
                interactive: true,
                title: '<img src="styles/legend/Urban_23.png" /> Urban'
            });
var format_PlanningInvestigation_24 = new ol.format.GeoJSON();
var features_PlanningInvestigation_24 = format_PlanningInvestigation_24.readFeatures(json_PlanningInvestigation_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanningInvestigation_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningInvestigation_24.addFeatures(features_PlanningInvestigation_24);
var lyr_PlanningInvestigation_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningInvestigation_24, 
                style: style_PlanningInvestigation_24,
                popuplayertitle: 'Planning Investigation',
                interactive: true,
                title: '<img src="styles/legend/PlanningInvestigation_24.png" /> Planning Investigation'
            });
var format_ClearingRegulationsScheduleOneAreas_25 = new ol.format.GeoJSON();
var features_ClearingRegulationsScheduleOneAreas_25 = format_ClearingRegulationsScheduleOneAreas_25.readFeatures(json_ClearingRegulationsScheduleOneAreas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClearingRegulationsScheduleOneAreas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClearingRegulationsScheduleOneAreas_25.addFeatures(features_ClearingRegulationsScheduleOneAreas_25);
var lyr_ClearingRegulationsScheduleOneAreas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClearingRegulationsScheduleOneAreas_25, 
                style: style_ClearingRegulationsScheduleOneAreas_25,
                popuplayertitle: 'Clearing Regulations Schedule One Areas',
                interactive: true,
                title: '<img src="styles/legend/ClearingRegulationsScheduleOneAreas_25.png" /> Clearing Regulations Schedule One Areas'
            });
var format_CoastalPlanExtents_26 = new ol.format.GeoJSON();
var features_CoastalPlanExtents_26 = format_CoastalPlanExtents_26.readFeatures(json_CoastalPlanExtents_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalPlanExtents_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalPlanExtents_26.addFeatures(features_CoastalPlanExtents_26);
var lyr_CoastalPlanExtents_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalPlanExtents_26, 
                style: style_CoastalPlanExtents_26,
                popuplayertitle: 'Coastal Plan Extents',
                interactive: true,
                title: '<img src="styles/legend/CoastalPlanExtents_26.png" /> Coastal Plan Extents'
            });
var format_GovernmentSeweragePolicy_27 = new ol.format.GeoJSON();
var features_GovernmentSeweragePolicy_27 = format_GovernmentSeweragePolicy_27.readFeatures(json_GovernmentSeweragePolicy_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovernmentSeweragePolicy_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovernmentSeweragePolicy_27.addFeatures(features_GovernmentSeweragePolicy_27);
var lyr_GovernmentSeweragePolicy_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GovernmentSeweragePolicy_27, 
                style: style_GovernmentSeweragePolicy_27,
                popuplayertitle: 'Government Sewerage Policy',
                interactive: true,
                title: '<img src="styles/legend/GovernmentSeweragePolicy_27.png" /> Government Sewerage Policy'
            });
var format_LandsofInterest_28 = new ol.format.GeoJSON();
var features_LandsofInterest_28 = format_LandsofInterest_28.readFeatures(json_LandsofInterest_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandsofInterest_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandsofInterest_28.addFeatures(features_LandsofInterest_28);
var lyr_LandsofInterest_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandsofInterest_28, 
                style: style_LandsofInterest_28,
                popuplayertitle: 'Lands of Interest',
                interactive: true,
                title: '<img src="styles/legend/LandsofInterest_28.png" /> Lands of Interest'
            });
var format_LegislatedLandsandWaters_29 = new ol.format.GeoJSON();
var features_LegislatedLandsandWaters_29 = format_LegislatedLandsandWaters_29.readFeatures(json_LegislatedLandsandWaters_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegislatedLandsandWaters_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegislatedLandsandWaters_29.addFeatures(features_LegislatedLandsandWaters_29);
var lyr_LegislatedLandsandWaters_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegislatedLandsandWaters_29, 
                style: style_LegislatedLandsandWaters_29,
                popuplayertitle: 'Legislated Lands and Waters',
                interactive: true,
                title: '<img src="styles/legend/LegislatedLandsandWaters_29.png" /> Legislated Lands and Waters'
            });
var format_PerthandPeelUrbanLandDevelopmentOutlookResidential_30 = new ol.format.GeoJSON();
var features_PerthandPeelUrbanLandDevelopmentOutlookResidential_30 = format_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.readFeatures(json_PerthandPeelUrbanLandDevelopmentOutlookResidential_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.addFeatures(features_PerthandPeelUrbanLandDevelopmentOutlookResidential_30);
var lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerthandPeelUrbanLandDevelopmentOutlookResidential_30, 
                style: style_PerthandPeelUrbanLandDevelopmentOutlookResidential_30,
                popuplayertitle: 'Perth and Peel Urban Land Development Outlook Residential',
                interactive: true,
                title: '<img src="styles/legend/PerthandPeelUrbanLandDevelopmentOutlookResidential_30.png" /> Perth and Peel Urban Land Development Outlook Residential'
            });
var format_PlanningReferralsContacts_31 = new ol.format.GeoJSON();
var features_PlanningReferralsContacts_31 = format_PlanningReferralsContacts_31.readFeatures(json_PlanningReferralsContacts_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanningReferralsContacts_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanningReferralsContacts_31.addFeatures(features_PlanningReferralsContacts_31);
var lyr_PlanningReferralsContacts_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanningReferralsContacts_31, 
                style: style_PlanningReferralsContacts_31,
                popuplayertitle: 'Planning Referrals Contacts',
                interactive: true,
                title: '<img src="styles/legend/PlanningReferralsContacts_31.png" /> Planning Referrals Contacts'
            });
var format_SPPExclusionAreas_32 = new ol.format.GeoJSON();
var features_SPPExclusionAreas_32 = format_SPPExclusionAreas_32.readFeatures(json_SPPExclusionAreas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPPExclusionAreas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPExclusionAreas_32.addFeatures(features_SPPExclusionAreas_32);
var lyr_SPPExclusionAreas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPPExclusionAreas_32, 
                style: style_SPPExclusionAreas_32,
                popuplayertitle: 'SPP Exclusion Areas',
                interactive: true,
                title: '<img src="styles/legend/SPPExclusionAreas_32.png" /> SPP Exclusion Areas'
            });
var format_SPPExtractionSites_33 = new ol.format.GeoJSON();
var features_SPPExtractionSites_33 = format_SPPExtractionSites_33.readFeatures(json_SPPExtractionSites_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPPExtractionSites_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPExtractionSites_33.addFeatures(features_SPPExtractionSites_33);
var lyr_SPPExtractionSites_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPPExtractionSites_33, 
                style: style_SPPExtractionSites_33,
                popuplayertitle: 'SPP Extraction Sites',
                interactive: true,
                title: '<img src="styles/legend/SPPExtractionSites_33.png" /> SPP Extraction Sites'
            });
var format_BushFireProneAreas2021_34 = new ol.format.GeoJSON();
var features_BushFireProneAreas2021_34 = format_BushFireProneAreas2021_34.readFeatures(json_BushFireProneAreas2021_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushFireProneAreas2021_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushFireProneAreas2021_34.addFeatures(features_BushFireProneAreas2021_34);
var lyr_BushFireProneAreas2021_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushFireProneAreas2021_34, 
                style: style_BushFireProneAreas2021_34,
                popuplayertitle: 'Bush Fire Prone Areas 2021',
                interactive: true,
                title: '<img src="styles/legend/BushFireProneAreas2021_34.png" /> Bush Fire Prone Areas 2021'
            });
var format_AboriginalCulturalHeritageHistoric_35 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageHistoric_35 = format_AboriginalCulturalHeritageHistoric_35.readFeatures(json_AboriginalCulturalHeritageHistoric_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageHistoric_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageHistoric_35.addFeatures(features_AboriginalCulturalHeritageHistoric_35);
var lyr_AboriginalCulturalHeritageHistoric_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageHistoric_35, 
                style: style_AboriginalCulturalHeritageHistoric_35,
                popuplayertitle: 'Aboriginal Cultural Heritage Historic',
                interactive: true,
                title: '<img src="styles/legend/AboriginalCulturalHeritageHistoric_35.png" /> Aboriginal Cultural Heritage Historic'
            });
var format_AboriginalCulturalHeritageLodged_36 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageLodged_36 = format_AboriginalCulturalHeritageLodged_36.readFeatures(json_AboriginalCulturalHeritageLodged_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageLodged_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageLodged_36.addFeatures(features_AboriginalCulturalHeritageLodged_36);
var lyr_AboriginalCulturalHeritageLodged_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageLodged_36, 
                style: style_AboriginalCulturalHeritageLodged_36,
                popuplayertitle: 'Aboriginal Cultural Heritage Lodged',
                interactive: true,
                title: '<img src="styles/legend/AboriginalCulturalHeritageLodged_36.png" /> Aboriginal Cultural Heritage Lodged'
            });
var format_AboriginalCulturalHeritageRegister_37 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageRegister_37 = format_AboriginalCulturalHeritageRegister_37.readFeatures(json_AboriginalCulturalHeritageRegister_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageRegister_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageRegister_37.addFeatures(features_AboriginalCulturalHeritageRegister_37);
var lyr_AboriginalCulturalHeritageRegister_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageRegister_37, 
                style: style_AboriginalCulturalHeritageRegister_37,
                popuplayertitle: 'Aboriginal Cultural Heritage Register',
                interactive: true,
                title: '<img src="styles/legend/AboriginalCulturalHeritageRegister_37.png" /> Aboriginal Cultural Heritage Register'
            });
var format_AboriginalCulturalHeritageSurveyAreas_38 = new ol.format.GeoJSON();
var features_AboriginalCulturalHeritageSurveyAreas_38 = format_AboriginalCulturalHeritageSurveyAreas_38.readFeatures(json_AboriginalCulturalHeritageSurveyAreas_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AboriginalCulturalHeritageSurveyAreas_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AboriginalCulturalHeritageSurveyAreas_38.addFeatures(features_AboriginalCulturalHeritageSurveyAreas_38);
var lyr_AboriginalCulturalHeritageSurveyAreas_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AboriginalCulturalHeritageSurveyAreas_38, 
                style: style_AboriginalCulturalHeritageSurveyAreas_38,
                popuplayertitle: 'Aboriginal Cultural Heritage Survey Areas',
                interactive: true,
                title: '<img src="styles/legend/AboriginalCulturalHeritageSurveyAreas_38.png" /> Aboriginal Cultural Heritage Survey Areas'
            });
var format_MiningTenements_39 = new ol.format.GeoJSON();
var features_MiningTenements_39 = format_MiningTenements_39.readFeatures(json_MiningTenements_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningTenements_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningTenements_39.addFeatures(features_MiningTenements_39);
var lyr_MiningTenements_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningTenements_39, 
                style: style_MiningTenements_39,
                popuplayertitle: 'Mining Tenements',
                interactive: true,
                title: '<img src="styles/legend/MiningTenements_39.png" /> Mining Tenements'
            });
var format_FPMFloodplainArea_40 = new ol.format.GeoJSON();
var features_FPMFloodplainArea_40 = format_FPMFloodplainArea_40.readFeatures(json_FPMFloodplainArea_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPMFloodplainArea_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPMFloodplainArea_40.addFeatures(features_FPMFloodplainArea_40);
var lyr_FPMFloodplainArea_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPMFloodplainArea_40, 
                style: style_FPMFloodplainArea_40,
                popuplayertitle: 'FPM Floodplain Area',
                interactive: true,
                title: '<img src="styles/legend/FPMFloodplainArea_40.png" /> FPM Floodplain Area'
            });
var format_StatePlanningPolicyTransportNoiseCorridor_41 = new ol.format.GeoJSON();
var features_StatePlanningPolicyTransportNoiseCorridor_41 = format_StatePlanningPolicyTransportNoiseCorridor_41.readFeatures(json_StatePlanningPolicyTransportNoiseCorridor_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatePlanningPolicyTransportNoiseCorridor_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatePlanningPolicyTransportNoiseCorridor_41.addFeatures(features_StatePlanningPolicyTransportNoiseCorridor_41);
var lyr_StatePlanningPolicyTransportNoiseCorridor_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatePlanningPolicyTransportNoiseCorridor_41, 
                style: style_StatePlanningPolicyTransportNoiseCorridor_41,
                popuplayertitle: 'State Planning Policy Transport Noise Corridor',
                interactive: true,
                title: '<img src="styles/legend/StatePlanningPolicyTransportNoiseCorridor_41.png" /> State Planning Policy Transport Noise Corridor'
            });
var format_Floodfringe_42 = new ol.format.GeoJSON();
var features_Floodfringe_42 = format_Floodfringe_42.readFeatures(json_Floodfringe_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodfringe_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floodfringe_42.addFeatures(features_Floodfringe_42);
var lyr_Floodfringe_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Floodfringe_42, 
                style: style_Floodfringe_42,
                popuplayertitle: 'Flood fringe',
                interactive: true,
                title: '<img src="styles/legend/Floodfringe_42.png" /> Flood fringe'
            });
var format_AcidSulfateSoilRisk_43 = new ol.format.GeoJSON();
var features_AcidSulfateSoilRisk_43 = format_AcidSulfateSoilRisk_43.readFeatures(json_AcidSulfateSoilRisk_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcidSulfateSoilRisk_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcidSulfateSoilRisk_43.addFeatures(features_AcidSulfateSoilRisk_43);
var lyr_AcidSulfateSoilRisk_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcidSulfateSoilRisk_43, 
                style: style_AcidSulfateSoilRisk_43,
                popuplayertitle: 'Acid Sulfate Soil Risk',
                interactive: true,
                title: '<img src="styles/legend/AcidSulfateSoilRisk_43.png" /> Acid Sulfate Soil Risk'
            });
var format_10metrecontours_44 = new ol.format.GeoJSON();
var features_10metrecontours_44 = format_10metrecontours_44.readFeatures(json_10metrecontours_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10metrecontours_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10metrecontours_44.addFeatures(features_10metrecontours_44);
var lyr_10metrecontours_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10metrecontours_44, 
                style: style_10metrecontours_44,
                popuplayertitle: '10 metre contours',
                interactive: true,
                title: '<img src="styles/legend/10metrecontours_44.png" /> 10 metre contours'
            });
var format_2meterContours_45 = new ol.format.GeoJSON();
var features_2meterContours_45 = format_2meterContours_45.readFeatures(json_2meterContours_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2meterContours_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2meterContours_45.addFeatures(features_2meterContours_45);
var lyr_2meterContours_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2meterContours_45, 
                style: style_2meterContours_45,
                popuplayertitle: '2meter Contours',
                interactive: true,
                title: '<img src="styles/legend/2meterContours_45.png" /> 2meter Contours'
            });
var format_EasementsPolygonized_46 = new ol.format.GeoJSON();
var features_EasementsPolygonized_46 = format_EasementsPolygonized_46.readFeatures(json_EasementsPolygonized_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EasementsPolygonized_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EasementsPolygonized_46.addFeatures(features_EasementsPolygonized_46);
var lyr_EasementsPolygonized_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EasementsPolygonized_46, 
                style: style_EasementsPolygonized_46,
                popuplayertitle: 'Easements - Polygonized',
                interactive: true,
                title: '<img src="styles/legend/EasementsPolygonized_46.png" /> Easements - Polygonized'
            });
var format_WBWaterwaysBuffered_47 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_47 = format_WBWaterwaysBuffered_47.readFeatures(json_WBWaterwaysBuffered_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_47.addFeatures(features_WBWaterwaysBuffered_47);
var lyr_WBWaterwaysBuffered_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_47, 
                style: style_WBWaterwaysBuffered_47,
                popuplayertitle: 'WB - Waterways Buffered',
                interactive: true,
                title: '<img src="styles/legend/WBWaterwaysBuffered_47.png" /> WB - Waterways Buffered'
            });
var format_FWFloodway_48 = new ol.format.GeoJSON();
var features_FWFloodway_48 = format_FWFloodway_48.readFeatures(json_FWFloodway_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FWFloodway_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FWFloodway_48.addFeatures(features_FWFloodway_48);
var lyr_FWFloodway_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FWFloodway_48, 
                style: style_FWFloodway_48,
                popuplayertitle: 'FW - Floodway',
                interactive: true,
                title: '<img src="styles/legend/FWFloodway_48.png" /> FW - Floodway'
            });
var format_HAHeritageAgreements_49 = new ol.format.GeoJSON();
var features_HAHeritageAgreements_49 = format_HAHeritageAgreements_49.readFeatures(json_HAHeritageAgreements_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAHeritageAgreements_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAHeritageAgreements_49.addFeatures(features_HAHeritageAgreements_49);
var lyr_HAHeritageAgreements_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAHeritageAgreements_49, 
                style: style_HAHeritageAgreements_49,
                popuplayertitle: 'HA - Heritage Agreements',
                interactive: true,
                title: '<img src="styles/legend/HAHeritageAgreements_49.png" /> HA - Heritage Agreements'
            });
var format_PAProtectedAreas_50 = new ol.format.GeoJSON();
var features_PAProtectedAreas_50 = format_PAProtectedAreas_50.readFeatures(json_PAProtectedAreas_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAProtectedAreas_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAProtectedAreas_50.addFeatures(features_PAProtectedAreas_50);
var lyr_PAProtectedAreas_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAProtectedAreas_50, 
                style: style_PAProtectedAreas_50,
                popuplayertitle: 'PA - Protected Areas',
                interactive: true,
                title: '<img src="styles/legend/PAProtectedAreas_50.png" /> PA - Protected Areas'
            });
var format_APAssessmentProgram_51 = new ol.format.GeoJSON();
var features_APAssessmentProgram_51 = format_APAssessmentProgram_51.readFeatures(json_APAssessmentProgram_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APAssessmentProgram_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APAssessmentProgram_51.addFeatures(features_APAssessmentProgram_51);
var lyr_APAssessmentProgram_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APAssessmentProgram_51, 
                style: style_APAssessmentProgram_51,
                popuplayertitle: 'AP - Assessment Program',
                interactive: true,
                title: '<img src="styles/legend/APAssessmentProgram_51.png" /> AP - Assessment Program'
            });
var format_HAHeritageArea_52 = new ol.format.GeoJSON();
var features_HAHeritageArea_52 = format_HAHeritageArea_52.readFeatures(json_HAHeritageArea_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAHeritageArea_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAHeritageArea_52.addFeatures(features_HAHeritageArea_52);
var lyr_HAHeritageArea_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAHeritageArea_52, 
                style: style_HAHeritageArea_52,
                popuplayertitle: 'HA - Heritage Area',
                interactive: true,
                title: '<img src="styles/legend/HAHeritageArea_52.png" /> HA - Heritage Area'
            });
var format_HLHeritageList_53 = new ol.format.GeoJSON();
var features_HLHeritageList_53 = format_HLHeritageList_53.readFeatures(json_HLHeritageList_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLHeritageList_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLHeritageList_53.addFeatures(features_HLHeritageList_53);
var lyr_HLHeritageList_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HLHeritageList_53, 
                style: style_HLHeritageList_53,
                popuplayertitle: 'HL - Heritage List',
                interactive: true,
                title: '<img src="styles/legend/HLHeritageList_53.png" /> HL - Heritage List'
            });
var format_LSLocalSurvey_54 = new ol.format.GeoJSON();
var features_LSLocalSurvey_54 = format_LSLocalSurvey_54.readFeatures(json_LSLocalSurvey_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSLocalSurvey_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSLocalSurvey_54.addFeatures(features_LSLocalSurvey_54);
var lyr_LSLocalSurvey_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSLocalSurvey_54, 
                style: style_LSLocalSurvey_54,
                popuplayertitle: 'LS - Local Survey',
                interactive: true,
                title: '<img src="styles/legend/LSLocalSurvey_54.png" /> LS - Local Survey'
            });
var format_POProtectionOrder_55 = new ol.format.GeoJSON();
var features_POProtectionOrder_55 = format_POProtectionOrder_55.readFeatures(json_POProtectionOrder_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POProtectionOrder_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POProtectionOrder_55.addFeatures(features_POProtectionOrder_55);
var lyr_POProtectionOrder_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POProtectionOrder_55, 
                style: style_POProtectionOrder_55,
                popuplayertitle: 'PO - Protection Order',
                interactive: true,
                title: '<img src="styles/legend/POProtectionOrder_55.png" /> PO - Protection Order'
            });
var format_SRStateRegister_56 = new ol.format.GeoJSON();
var features_SRStateRegister_56 = format_SRStateRegister_56.readFeatures(json_SRStateRegister_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRStateRegister_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRStateRegister_56.addFeatures(features_SRStateRegister_56);
var lyr_SRStateRegister_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRStateRegister_56, 
                style: style_SRStateRegister_56,
                popuplayertitle: 'SR - State Register',
                interactive: true,
                title: '<img src="styles/legend/SRStateRegister_56.png" /> SR - State Register'
            });
var format_WAPPWAPetroleumPipeline_57 = new ol.format.GeoJSON();
var features_WAPPWAPetroleumPipeline_57 = format_WAPPWAPetroleumPipeline_57.readFeatures(json_WAPPWAPetroleumPipeline_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAPPWAPetroleumPipeline_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAPPWAPetroleumPipeline_57.addFeatures(features_WAPPWAPetroleumPipeline_57);
var lyr_WAPPWAPetroleumPipeline_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAPPWAPetroleumPipeline_57, 
                style: style_WAPPWAPetroleumPipeline_57,
                popuplayertitle: 'WAPP - WA Petroleum Pipeline',
                interactive: true,
                title: '<img src="styles/legend/WAPPWAPetroleumPipeline_57.png" /> WAPP - WA Petroleum Pipeline'
            });
var format_RSSARegionSchemeSpecialAreas_58 = new ol.format.GeoJSON();
var features_RSSARegionSchemeSpecialAreas_58 = format_RSSARegionSchemeSpecialAreas_58.readFeatures(json_RSSARegionSchemeSpecialAreas_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSSARegionSchemeSpecialAreas_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSSARegionSchemeSpecialAreas_58.addFeatures(features_RSSARegionSchemeSpecialAreas_58);
var lyr_RSSARegionSchemeSpecialAreas_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSSARegionSchemeSpecialAreas_58, 
                style: style_RSSARegionSchemeSpecialAreas_58,
                popuplayertitle: 'RSSA - Region Scheme Special Areas',
                interactive: true,
                title: '<img src="styles/legend/RSSARegionSchemeSpecialAreas_58.png" /> RSSA - Region Scheme Special Areas'
            });
var format_StructurePlanBoundaries_59 = new ol.format.GeoJSON();
var features_StructurePlanBoundaries_59 = format_StructurePlanBoundaries_59.readFeatures(json_StructurePlanBoundaries_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StructurePlanBoundaries_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StructurePlanBoundaries_59.addFeatures(features_StructurePlanBoundaries_59);
var lyr_StructurePlanBoundaries_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StructurePlanBoundaries_59, 
                style: style_StructurePlanBoundaries_59,
                popuplayertitle: 'Structure Plan Boundaries',
                interactive: true,
    title: 'Structure Plan Boundaries<br />\
    <img src="styles/legend/StructurePlanBoundaries_59_0.png" /> District structure plan<br />\
    <img src="styles/legend/StructurePlanBoundaries_59_1.png" /> Structure plan<br />'
        });
var format_NorthDandalupProspectedDSPArea_60 = new ol.format.GeoJSON();
var features_NorthDandalupProspectedDSPArea_60 = format_NorthDandalupProspectedDSPArea_60.readFeatures(json_NorthDandalupProspectedDSPArea_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthDandalupProspectedDSPArea_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthDandalupProspectedDSPArea_60.addFeatures(features_NorthDandalupProspectedDSPArea_60);
var lyr_NorthDandalupProspectedDSPArea_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthDandalupProspectedDSPArea_60, 
                style: style_NorthDandalupProspectedDSPArea_60,
                popuplayertitle: 'North Dandalup Prospected DSP Area',
                interactive: true,
                title: '<img src="styles/legend/NorthDandalupProspectedDSPArea_60.png" /> North Dandalup Prospected DSP Area'
            });
var format_DwellingupProposedDSP_61 = new ol.format.GeoJSON();
var features_DwellingupProposedDSP_61 = format_DwellingupProposedDSP_61.readFeatures(json_DwellingupProposedDSP_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DwellingupProposedDSP_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DwellingupProposedDSP_61.addFeatures(features_DwellingupProposedDSP_61);
var lyr_DwellingupProposedDSP_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DwellingupProposedDSP_61, 
                style: style_DwellingupProposedDSP_61,
                popuplayertitle: 'Dwellingup Proposed DSP',
                interactive: true,
                title: '<img src="styles/legend/DwellingupProposedDSP_61.png" /> Dwellingup Proposed DSP'
            });
var format_PinjarraDSPProspectedCentreArea_62 = new ol.format.GeoJSON();
var features_PinjarraDSPProspectedCentreArea_62 = format_PinjarraDSPProspectedCentreArea_62.readFeatures(json_PinjarraDSPProspectedCentreArea_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PinjarraDSPProspectedCentreArea_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PinjarraDSPProspectedCentreArea_62.addFeatures(features_PinjarraDSPProspectedCentreArea_62);
var lyr_PinjarraDSPProspectedCentreArea_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PinjarraDSPProspectedCentreArea_62, 
                style: style_PinjarraDSPProspectedCentreArea_62,
                popuplayertitle: 'Pinjarra DSP Prospected Centre Area',
                interactive: true,
                title: '<img src="styles/legend/PinjarraDSPProspectedCentreArea_62.png" /> Pinjarra DSP Prospected Centre Area'
            });
var format_RavenswoodDSPProspectedArea_63 = new ol.format.GeoJSON();
var features_RavenswoodDSPProspectedArea_63 = format_RavenswoodDSPProspectedArea_63.readFeatures(json_RavenswoodDSPProspectedArea_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RavenswoodDSPProspectedArea_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RavenswoodDSPProspectedArea_63.addFeatures(features_RavenswoodDSPProspectedArea_63);
var lyr_RavenswoodDSPProspectedArea_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RavenswoodDSPProspectedArea_63, 
                style: style_RavenswoodDSPProspectedArea_63,
                popuplayertitle: 'Ravenswood DSP Prospected Area',
                interactive: true,
                title: '<img src="styles/legend/RavenswoodDSPProspectedArea_63.png" /> Ravenswood DSP Prospected Area'
            });
var lyr_L803NorthYunderupRoadNorthYunderupStructurePlan_64 = new ol.layer.Image({
                            opacity: 1,
                            title: 'L803 North Yunderup Road, North Yunderup Structure Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/L803NorthYunderupRoadNorthYunderupStructurePlan_64.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12889835.911116, -3839083.408450, 12890183.693869, -3838663.744330]
                            })
                        });
var lyr_Lot1LakesRdLot2ShannsRdNorthDandalupSP_65 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lot 1 Lakes Rd & Lot 2 Shanns Rd, North Dandalup SP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lot1LakesRdLot2ShannsRdNorthDandalupSP_65.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12904940.177862, -3834343.764208, 12906015.717965, -3831364.794190]
                            })
                        });
var lyr_GreenlandsRoadstructureplan_66 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Greenlands Road structure plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/GreenlandsRoadstructureplan_66.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12890788.583487, -3849356.461315, 12894339.639176, -3847976.994952]
                            })
                        });
var lyr_Lot602BeachamRdWestPinjarraLSP_67 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lot 602 Beacham Rd, West Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lot602BeachamRdWestPinjarraLSP_67.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895587.341033, -3844575.471750, 12896029.102380, -3843526.568385]
                            })
                        });
var lyr_FurnissdaleLot91PaullStreetLot157RonlynRoadLSP_68 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Furnissdale Lot 91 Paull Street & Lot 157 Ronlyn Road LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/FurnissdaleLot91PaullStreetLot157RonlynRoadLSP_68.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12886648.360710, -3837392.344872, 12887295.088992, -3836899.746459]
                            })
                        });
var lyr_Lots111416123BedingfeldRdPinjarraLSP_69 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lots 1114, 16 & 123 Bedingfeld Rd, Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lots111416123BedingfeldRdPinjarraLSP_69.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12898887.975358, -3847535.116552, 12899347.421535, -3847128.064879]
                            })
                        });
var lyr_Lot9500WisteriaCrsLot304RedgumRdPinjarraLSP_70 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lot 9500 Wisteria Crs & Lot 304 Redgum Rd, Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lot9500WisteriaCrsLot304RedgumRdPinjarraLSP_70.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12900543.399159, -3843059.585976, 12901268.662347, -3842097.726778]
                            })
                        });
var lyr_ThomasStreetPinjarraLSP_71 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Thomas Street Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ThomasStreetPinjarraLSP_71.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12897027.847162, -3845878.645538, 12897761.357203, -3845168.539190]
                            })
                        });
var lyr_Lots12PinjarraRdWestPinjarraODP_72 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lots 1 & 2 Pinjarra Rd, West Pinjarra ODP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lots12PinjarraRdWestPinjarraODP_72.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895937.467798, -3844103.602188, 12896635.382482, -3843526.021529]
                            })
                        });
var lyr_Lot51McLartyRoadPinjarraLSP_73 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lot 51 McLarty Road, Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lot51McLartyRoadPinjarraLSP_73.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12898305.133415, -3847534.041613, 12898566.846163, -3847359.721896]
                            })
                        });
var lyr_Lot41HamptonRdPinjarraLSP_74 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Lot 41 Hampton Rd, Pinjarra LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Lot41HamptonRdPinjarraLSP_74.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12898102.308155, -3847357.735790, 12898364.012976, -3847183.572399]
                            })
                        });
var lyr_KwelRoadLSP_75 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Kwel Road LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/KwelRoadLSP_75.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12897063.343060, -3847925.966526, 12897610.716685, -3847086.514211]
                            })
                        });
var lyr_NorthPinjarraStructurePlan_76 = new ol.layer.Image({
                            opacity: 1,
                            title: 'North Pinjarra Structure Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/NorthPinjarraStructurePlan_76.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12899702.782702, -3845634.976039, 12901676.108806, -3843029.971816]
                            })
                        });
var lyr_FurnissdaleWestLSP_77 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Furnissdale West LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/FurnissdaleWestLSP_77.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12886392.209895, -3836846.655129, 12887865.015370, -3835241.867800]
                            })
                        });
var lyr_MurrayCountryEstateODP_78 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Murray Country Estate ODP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/MurrayCountryEstateODP_78.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12895596.347060, -3844092.077345, 12899214.932714, -3841171.298614]
                            })
                        });
var lyr_AustinLakesMasterplan_79 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Austin Lakes Masterplan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/AustinLakesMasterplan_79.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12889267.822748, -3843216.295738, 12892335.267203, -3841611.980852]
                            })
                        });
var lyr_AustinLakesSouthYunderupLSP_80 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Austin Lakes South Yunderup LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/AustinLakesSouthYunderupLSP_80.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12891189.265918, -3842555.623872, 12892336.894736, -3841024.453158]
                            })
                        });
var lyr_RavenswoodEastODP_81 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Ravenswood East ODP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/RavenswoodEastODP_81.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12894681.777551, -3840867.809734, 12896057.093987, -3839137.362806]
                            })
                        });
var lyr_RavenswoodWestODP_82 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Ravenswood West ODP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/RavenswoodWestODP_82.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12893166.761509, -3840119.043294, 12894806.689032, -3838764.290752]
                            })
                        });
var lyr_NorthDandalupTownsiteMap_83 = new ol.layer.Image({
                            opacity: 1,
                            title: 'North Dandalup Townsite Map',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/NorthDandalupTownsiteMap_83.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12907768.448096, -3833630.168253, 12910355.008562, -3830211.530763]
                            })
                        });
var lyr_PointGreyLSP_84 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Point Grey LSP',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PointGreyLSP_84.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12875920.778234, -3847430.480511, 12878670.957758, -3844244.087264]
                            })
                        });
var lyr_DwellingupStructurePlanProposed_85 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Dwellingup Structure Plan Proposed',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/DwellingupStructurePlanProposed_85.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12918828.214834, -3858470.857026, 12921095.425841, -3856430.582286]
                            })
                        });
var format_MurrayLGA_86 = new ol.format.GeoJSON();
var features_MurrayLGA_86 = format_MurrayLGA_86.readFeatures(json_MurrayLGA_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayLGA_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayLGA_86.addFeatures(features_MurrayLGA_86);
var lyr_MurrayLGA_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayLGA_86, 
                style: style_MurrayLGA_86,
                popuplayertitle: 'Murray LGA',
                interactive: false,
                title: '<img src="styles/legend/MurrayLGA_86.png" /> Murray LGA'
            });
var format_Suburb_87 = new ol.format.GeoJSON();
var features_Suburb_87 = format_Suburb_87.readFeatures(json_Suburb_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_87.addFeatures(features_Suburb_87);
var lyr_Suburb_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_87, 
                style: style_Suburb_87,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_87.png" /> Suburb'
            });
var format_Estates_88 = new ol.format.GeoJSON();
var features_Estates_88 = format_Estates_88.readFeatures(json_Estates_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estates_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estates_88.addFeatures(features_Estates_88);
var lyr_Estates_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estates_88, 
                style: style_Estates_88,
                popuplayertitle: 'Estates',
                interactive: true,
                title: '<img src="styles/legend/Estates_88.png" /> Estates'
            });
var format_Rezone_89 = new ol.format.GeoJSON();
var features_Rezone_89 = format_Rezone_89.readFeatures(json_Rezone_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rezone_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rezone_89.addFeatures(features_Rezone_89);
var lyr_Rezone_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rezone_89, 
                style: style_Rezone_89,
                popuplayertitle: 'Rezone',
                interactive: true,
                title: '<img src="styles/legend/Rezone_89.png" /> Rezone'
            });
var format_Unzoned_90 = new ol.format.GeoJSON();
var features_Unzoned_90 = format_Unzoned_90.readFeatures(json_Unzoned_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unzoned_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_90.addFeatures(features_Unzoned_90);
var lyr_Unzoned_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_90, 
                style: style_Unzoned_90,
                popuplayertitle: 'Unzoned',
                interactive: true,
                title: '<img src="styles/legend/Unzoned_90.png" /> Unzoned'
            });
var format_Zoned_91 = new ol.format.GeoJSON();
var features_Zoned_91 = format_Zoned_91.readFeatures(json_Zoned_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoned_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoned_91.addFeatures(features_Zoned_91);
var lyr_Zoned_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoned_91, 
                style: style_Zoned_91,
                popuplayertitle: 'Zoned',
                interactive: true,
                title: '<img src="styles/legend/Zoned_91.png" /> Zoned'
            });
var format_EstateLabel_92 = new ol.format.GeoJSON();
var features_EstateLabel_92 = format_EstateLabel_92.readFeatures(json_EstateLabel_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstateLabel_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstateLabel_92.addFeatures(features_EstateLabel_92);
var lyr_EstateLabel_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstateLabel_92, 
                style: style_EstateLabel_92,
                popuplayertitle: 'Estate Label',
                interactive: false,
                title: '<img src="styles/legend/EstateLabel_92.png" /> Estate Label'
            });
var format_ParcelAttributesLabel_93 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_93 = format_ParcelAttributesLabel_93.readFeatures(json_ParcelAttributesLabel_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributesLabel_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_93.addFeatures(features_ParcelAttributesLabel_93);
var lyr_ParcelAttributesLabel_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_93, 
                style: style_ParcelAttributesLabel_93,
                popuplayertitle: 'Parcel Attributes Label',
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_93.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_EstateLabel_92,lyr_ParcelAttributesLabel_93,],
                                fold: "open",
                                title: 'Label Switch'});
var group_ParcelAttributes = new ol.layer.Group({
                                layers: [lyr_Rezone_89,lyr_Unzoned_90,lyr_Zoned_91,],
                                fold: "open",
                                title: 'Parcel Attributes'});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_MurrayLGA_86,lyr_Suburb_87,lyr_Estates_88,],
                                fold: "open",
                                title: 'Administrative'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_L803NorthYunderupRoadNorthYunderupStructurePlan_64,lyr_Lot1LakesRdLot2ShannsRdNorthDandalupSP_65,lyr_GreenlandsRoadstructureplan_66,lyr_Lot602BeachamRdWestPinjarraLSP_67,lyr_FurnissdaleLot91PaullStreetLot157RonlynRoadLSP_68,lyr_Lots111416123BedingfeldRdPinjarraLSP_69,lyr_Lot9500WisteriaCrsLot304RedgumRdPinjarraLSP_70,lyr_ThomasStreetPinjarraLSP_71,lyr_Lots12PinjarraRdWestPinjarraODP_72,lyr_Lot51McLartyRoadPinjarraLSP_73,lyr_Lot41HamptonRdPinjarraLSP_74,lyr_KwelRoadLSP_75,lyr_NorthPinjarraStructurePlan_76,lyr_FurnissdaleWestLSP_77,lyr_MurrayCountryEstateODP_78,lyr_AustinLakesMasterplan_79,lyr_AustinLakesSouthYunderupLSP_80,lyr_RavenswoodEastODP_81,lyr_RavenswoodWestODP_82,lyr_NorthDandalupTownsiteMap_83,lyr_PointGreyLSP_84,lyr_DwellingupStructurePlanProposed_85,],
                                fold: "open",
                                title: 'PSP'});
var group_FutureGrowthArea = new ol.layer.Group({
                                layers: [lyr_NorthDandalupProspectedDSPArea_60,lyr_DwellingupProposedDSP_61,lyr_PinjarraDSPProspectedCentreArea_62,lyr_RavenswoodDSPProspectedArea_63,],
                                fold: "open",
                                title: 'Future Growth Area'});
var group_PSPGrowthArea = new ol.layer.Group({
                                layers: [lyr_StructurePlanBoundaries_59,],
                                fold: "open",
                                title: 'PSP / Growth Area'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_EasementsPolygonized_46,lyr_WBWaterwaysBuffered_47,lyr_FWFloodway_48,lyr_HAHeritageAgreements_49,lyr_PAProtectedAreas_50,lyr_APAssessmentProgram_51,lyr_HAHeritageArea_52,lyr_HLHeritageList_53,lyr_LSLocalSurvey_54,lyr_POProtectionOrder_55,lyr_SRStateRegister_56,lyr_WAPPWAPetroleumPipeline_57,lyr_RSSARegionSchemeSpecialAreas_58,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDD = new ol.layer.Group({
                                layers: [lyr_BushFireProneAreas2021_34,lyr_AboriginalCulturalHeritageHistoric_35,lyr_AboriginalCulturalHeritageLodged_36,lyr_AboriginalCulturalHeritageRegister_37,lyr_AboriginalCulturalHeritageSurveyAreas_38,lyr_MiningTenements_39,lyr_FPMFloodplainArea_40,lyr_StatePlanningPolicyTransportNoiseCorridor_41,lyr_Floodfringe_42,lyr_AcidSulfateSoilRisk_43,lyr_10metrecontours_44,lyr_2meterContours_45,],
                                fold: "open",
                                title: 'Note to DD'});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_ClearingRegulationsScheduleOneAreas_25,lyr_CoastalPlanExtents_26,lyr_GovernmentSeweragePolicy_27,lyr_LandsofInterest_28,lyr_LegislatedLandsandWaters_29,lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30,lyr_PlanningReferralsContacts_31,lyr_SPPExclusionAreas_32,lyr_SPPExtractionSites_33,],
                                fold: "open",
                                title: 'Other Overlays'});
var group_PerthandPeelPlanningFrameworkLandUse = new ol.layer.Group({
                                layers: [lyr_RuralResidentialInvestigation_18,lyr_RuralResidential_19,lyr_UrbanExpansion_20,lyr_UrbanInvestigation_21,lyr_UrbanDeferred_22,lyr_Urban_23,lyr_PlanningInvestigation_24,],
                                fold: "open",
                                title: 'Perth and Peel Planning Framework Land Use'});
var group_RegionSchemeZones = new ol.layer.Group({
                                layers: [lyr_Waterways_3,lyr_Industrial_4,lyr_Publicpurposeshighschool_5,lyr_Publicpurposeshospital_6,lyr_Publicpurposespublicutilities_7,lyr_Parksandrecreation_8,lyr_Privaterecreation_9,lyr_Regionalopenspace_10,lyr_Otherregionalroads_11,lyr_Primaryregionalroads_12,lyr_Railways_13,lyr_Stateforests_14,lyr_Rural_15,lyr_Urbandeferred_16,lyr_Urban_17,],
                                fold: "open",
                                title: 'Region Scheme Zones'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_LocalPlanningSchemeZones_2.setVisible(false);lyr_Waterways_3.setVisible(false);lyr_Industrial_4.setVisible(false);lyr_Publicpurposeshighschool_5.setVisible(false);lyr_Publicpurposeshospital_6.setVisible(false);lyr_Publicpurposespublicutilities_7.setVisible(false);lyr_Parksandrecreation_8.setVisible(false);lyr_Privaterecreation_9.setVisible(false);lyr_Regionalopenspace_10.setVisible(false);lyr_Otherregionalroads_11.setVisible(false);lyr_Primaryregionalroads_12.setVisible(false);lyr_Railways_13.setVisible(false);lyr_Stateforests_14.setVisible(false);lyr_Rural_15.setVisible(false);lyr_Urbandeferred_16.setVisible(false);lyr_Urban_17.setVisible(false);lyr_RuralResidentialInvestigation_18.setVisible(false);lyr_RuralResidential_19.setVisible(false);lyr_UrbanExpansion_20.setVisible(false);lyr_UrbanInvestigation_21.setVisible(false);lyr_UrbanDeferred_22.setVisible(false);lyr_Urban_23.setVisible(false);lyr_PlanningInvestigation_24.setVisible(false);lyr_ClearingRegulationsScheduleOneAreas_25.setVisible(false);lyr_CoastalPlanExtents_26.setVisible(false);lyr_GovernmentSeweragePolicy_27.setVisible(false);lyr_LandsofInterest_28.setVisible(false);lyr_LegislatedLandsandWaters_29.setVisible(false);lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.setVisible(false);lyr_PlanningReferralsContacts_31.setVisible(false);lyr_SPPExclusionAreas_32.setVisible(false);lyr_SPPExtractionSites_33.setVisible(false);lyr_BushFireProneAreas2021_34.setVisible(false);lyr_AboriginalCulturalHeritageHistoric_35.setVisible(false);lyr_AboriginalCulturalHeritageLodged_36.setVisible(false);lyr_AboriginalCulturalHeritageRegister_37.setVisible(false);lyr_AboriginalCulturalHeritageSurveyAreas_38.setVisible(false);lyr_MiningTenements_39.setVisible(false);lyr_FPMFloodplainArea_40.setVisible(false);lyr_StatePlanningPolicyTransportNoiseCorridor_41.setVisible(false);lyr_Floodfringe_42.setVisible(false);lyr_AcidSulfateSoilRisk_43.setVisible(false);lyr_10metrecontours_44.setVisible(false);lyr_2meterContours_45.setVisible(false);lyr_EasementsPolygonized_46.setVisible(false);lyr_WBWaterwaysBuffered_47.setVisible(false);lyr_FWFloodway_48.setVisible(false);lyr_HAHeritageAgreements_49.setVisible(false);lyr_PAProtectedAreas_50.setVisible(false);lyr_APAssessmentProgram_51.setVisible(false);lyr_HAHeritageArea_52.setVisible(false);lyr_HLHeritageList_53.setVisible(false);lyr_LSLocalSurvey_54.setVisible(false);lyr_POProtectionOrder_55.setVisible(false);lyr_SRStateRegister_56.setVisible(false);lyr_WAPPWAPetroleumPipeline_57.setVisible(false);lyr_RSSARegionSchemeSpecialAreas_58.setVisible(false);lyr_StructurePlanBoundaries_59.setVisible(false);lyr_NorthDandalupProspectedDSPArea_60.setVisible(false);lyr_DwellingupProposedDSP_61.setVisible(false);lyr_PinjarraDSPProspectedCentreArea_62.setVisible(false);lyr_RavenswoodDSPProspectedArea_63.setVisible(false);lyr_L803NorthYunderupRoadNorthYunderupStructurePlan_64.setVisible(false);lyr_Lot1LakesRdLot2ShannsRdNorthDandalupSP_65.setVisible(false);lyr_GreenlandsRoadstructureplan_66.setVisible(false);lyr_Lot602BeachamRdWestPinjarraLSP_67.setVisible(false);lyr_FurnissdaleLot91PaullStreetLot157RonlynRoadLSP_68.setVisible(false);lyr_Lots111416123BedingfeldRdPinjarraLSP_69.setVisible(false);lyr_Lot9500WisteriaCrsLot304RedgumRdPinjarraLSP_70.setVisible(false);lyr_ThomasStreetPinjarraLSP_71.setVisible(false);lyr_Lots12PinjarraRdWestPinjarraODP_72.setVisible(false);lyr_Lot51McLartyRoadPinjarraLSP_73.setVisible(false);lyr_Lot41HamptonRdPinjarraLSP_74.setVisible(false);lyr_KwelRoadLSP_75.setVisible(false);lyr_NorthPinjarraStructurePlan_76.setVisible(false);lyr_FurnissdaleWestLSP_77.setVisible(false);lyr_MurrayCountryEstateODP_78.setVisible(false);lyr_AustinLakesMasterplan_79.setVisible(false);lyr_AustinLakesSouthYunderupLSP_80.setVisible(false);lyr_RavenswoodEastODP_81.setVisible(false);lyr_RavenswoodWestODP_82.setVisible(false);lyr_NorthDandalupTownsiteMap_83.setVisible(false);lyr_PointGreyLSP_84.setVisible(false);lyr_DwellingupStructurePlanProposed_85.setVisible(false);lyr_MurrayLGA_86.setVisible(true);lyr_Suburb_87.setVisible(true);lyr_Estates_88.setVisible(false);lyr_Rezone_89.setVisible(true);lyr_Unzoned_90.setVisible(true);lyr_Zoned_91.setVisible(true);lyr_EstateLabel_92.setVisible(false);lyr_ParcelAttributesLabel_93.setVisible(true);
var layersList = [group_BaseLayer,lyr_LocalPlanningSchemeZones_2,group_RegionSchemeZones,group_PerthandPeelPlanningFrameworkLandUse,group_OtherOverlays,group_NotetoDD,group_NDHDeductedOverlays,group_PSPGrowthArea,group_FutureGrowthArea,group_PSP,group_Administrative,group_ParcelAttributes,group_LabelSwitch];
lyr_LocalPlanningSchemeZones_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'zone_numbe': 'Zone number', 'zone': 'Zone', 'add_label': 'Additional use label', 'rest_label': 'Restricted use label', 'specadd_la': 'Special additional use label', 'special_la': 'Special label', 'label': 'Label', 'label_desc': 'Label description', 'gazettal_d': 'Gazettal date', 'scheme_nam': 'Scheme name', 'lga': 'LGA', 'scheme_no': 'Scheme number', });
lyr_Waterways_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Industrial_4.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Publicpurposeshighschool_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Publicpurposeshospital_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Publicpurposespublicutilities_7.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Parksandrecreation_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Privaterecreation_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Regionalopenspace_10.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Otherregionalroads_11.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Primaryregionalroads_12.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Railways_13.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Stateforests_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Rural_15.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Urbandeferred_16.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_Urban_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'Region scheme code', 'descriptio': 'Description', 'label': 'label', 'rs_class': 'Zone or Reserve', 'reg_scheme': 'Region scheme', });
lyr_RuralResidentialInvestigation_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_RuralResidential_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_UrbanExpansion_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_UrbanInvestigation_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_UrbanDeferred_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_Urban_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_PlanningInvestigation_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'LUGROUP': 'LUGROUP', 'LUTYPE': 'LUTYPE', 'LUSUBTYPE': 'LUSUBTYPE', 'SP_TITLE': 'SP_TITLE', 'SUBREGION': 'SUBREGION', 'LABEL': 'LABEL', 'STAGING': 'STAGING', 'STAGINGSCH': 'STAGINGSCH', 'CHANGETOFR': 'CHANGETOFR', 'FRAMEWORKL': 'FRAMEWORKL', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT_': 'COMMENT_', 'ADDITIONAL': 'ADDITIONAL', 'SOURCE': 'SOURCE', 'REF_NO': 'REF_NO', 'TYPOLOGY': 'TYPOLOGY', 'CODE': 'CODE', 'CLASSOFACT': 'CLASSOFACT', 'COACOMMENT': 'COACOMMENT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_ClearingRegulationsScheduleOneAreas_25.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'schedule1_': 'schedule1_', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_CoastalPlanExtents_26.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'planid': 'Plan ID', 'plan_name': 'Place name', 'plan_title': 'Plan title', 'plan_date': 'Plan date', 'plan_type': 'Plan type', 'author': 'author', 'summary': 'summary', 'status': 'status', 'study_area': 'Study area', 'region': 'region', 'comments': 'comments', });
lyr_GovernmentSeweragePolicy_27.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'layer': 'Policy title', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_LandsofInterest_28.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'loi_pin': 'Pin', 'loi_poly_a': 'loi_poly_a', 'loi_identi': 'loi_identi', 'loi_regno': 'Register No.', 'loi_tenure': 'Tenure Category', 'loi_act': 'Act', 'loi_catego': 'loi_catego', 'loi_notes': 'Notes', 'loi_prprie': 'loi_prprie', });
lyr_LegislatedLandsandWaters_29.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'leg_pin': 'Pin', 'leg_poly_a': 'leg_poly_a', 'leg_class': 'Reserve Class', 'leg_identi': 'leg_identi', 'leg_purpos': 'leg_purpos', 'leg_vestin': 'leg_vestin', 'leg_name': 'Reserve Name', 'leg_name_s': 'leg_name_s', 'leg_iucn': 'IUCN Category', 'leg_tenure': 'Tenure Category', 'leg_act': 'Act', 'leg_catego': 'leg_catego', 'leg_notes': 'Notes', 'leg_agreem': 'leg_agreem', 'leg_classi': 'leg_classi', 'leg_regno': 'Register No.', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'project_id': 'Project ID', 'lga': 'lga', 'suburb': 'suburb', 'estate_nam': 'Estate Name', 'dev_type': 'Development Type', 'staging': 'staging', 'plus_10yrs': 'Long-term (10+ years)', 'zero_5yrs': 'Short-term (0-5 years)', 'six_10yrs': 'Medium-term (6-10 years)', 'com_floors': 'Amount of floor space', });
lyr_PlanningReferralsContacts_31.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'prc_referr': 'prc_referr', 'prc_contac': 'prc_contac', 'prc_postal': 'prc_postal', 'prc_teleph': 'prc_teleph', 'prc_fax_nu': 'prc_fax_nu', 'prc_email': 'Email Address', 'st_perimet': 'st_perimet', });
lyr_SPPExclusionAreas_32.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'status': 'status', 'extract_da': 'extract_da', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_SPPExtractionSites_33.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'status': 'status', 'extract_da': 'extract_da', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_BushFireProneAreas2021_34.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'lga': 'lga', 'designatio': 'designatio', 'type': 'type', 'designat_1': 'designat_1', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageHistoric_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageLodged_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageRegister_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ach_identi': 'ach_identi', 'name': 'name', 'place_stat': 'place_stat', 'place_type': 'place_type', 'region': 'region', 'culturally': 'culturally', 'cultural_1': 'cultural_1', 'restricted': 'restricted', 'boundary_r': 'boundary_r', 'knowledge_': 'knowledge_', 'legacy_id': 'legacy_id', 'boundary_l': 'boundary_l', 'objectid': 'objectid', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_AboriginalCulturalHeritageSurveyAreas_38.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'survey_rep': 'survey_rep', 'survey_r_1': 'survey_r_1', 'survey_are': 'survey_are', 'survey_a_1': 'survey_a_1', 'legacy_are': 'legacy_are', 'report_tit': 'report_tit', 'report_aut': 'report_aut', 'area_descr': 'area_descr', 'survey_typ': 'survey_typ', 'spatial_ac': 'spatial_ac', 'field_surv': 'field_surv', 'desktop_su': 'desktop_su', 'boundary_l': 'boundary_l', });
lyr_MiningTenements_39.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'gid': 'gid', 'tenid': 'tenid', 'type': 'type', 'survstatus': 'survstatus', 'tenstatus': 'tenstatus', 'holdercnt': 'holdercnt', 'holder1': 'holder1', 'addr1': 'addr1', 'holder2': 'holder2', 'addr2': 'addr2', 'holder3': 'holder3', 'addr3': 'addr3', 'holder4': 'holder4', 'addr4': 'addr4', 'holder5': 'holder5', 'addr5': 'addr5', 'holder6': 'holder6', 'addr6': 'addr6', 'holder7': 'holder7', 'addr7': 'addr7', 'holder8': 'holder8', 'addr8': 'addr8', 'holder9': 'holder9', 'addr9': 'addr9', 'fmt_tenid': 'fmt_tenid', 'legal_area': 'legal_area', 'unit_of_me': 'unit_of_me', 'special_in': 'special_in', 'extract_da': 'extract_da', 'grantdate': 'grantdate', 'granttime': 'granttime', 'startdate': 'startdate', 'starttime': 'starttime', 'enddate': 'enddate', 'endtime': 'endtime', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_FPMFloodplainArea_40.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'hyd_name': 'hyd_name', 'basin_no': 'basin_no', 'basin_name': 'basin_name', 'p_site_id': 'p_site_id', 'p_site_nam': 'p_site_nam', 'p_stage_le': 'p_stage_le', 'p_ahd_conv': 'p_ahd_conv', 'p_telemetr': 'p_telemetr', 's_site_id': 's_site_id', 's_site_nam': 's_site_nam', 's_stage_le': 's_stage_le', 's_ahd_conv': 's_ahd_conv', 's_telemetr': 's_telemetr', 'fwa_no': 'fwa_no', 'fwa_name': 'fwa_name', 'online': 'online', });
lyr_StatePlanningPolicyTransportNoiseCorridor_41.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'layer': 'layer', 'feature_ty': 'feature_ty', 'feature_na': 'feature_na', 'label': 'label', 'policy_num': 'policy_num', });
lyr_Floodfringe_42.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_AcidSulfateSoilRisk_43.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'createdate': 'Creation Date', 'capture': 'Capture Method', 'riskclass': 'Risk Class', 'risk_categ': 'risk_categ', 'natcode': 'Nat.Code', });
lyr_10metrecontours_44.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'elevation': 'elevation', });
lyr_2meterContours_45.set('fieldAliases', {'fid': 'fid', 'elevation_': 'elevation_', 'st_length_': 'st_length_', 'object_id': 'object_id', });
lyr_EasementsPolygonized_46.set('fieldAliases', {'id': 'id', });
lyr_WBWaterwaysBuffered_47.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FWFloodway_48.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ext_type': 'ext_type', 'status': 'status', 'start_date': 'start_date', 'location': 'location', 'vert_datum': 'vert_datum', 'date_check': 'date_check', 'source': 'source', 'comments': 'comments', 'ufi': 'ufi', 'crt_date': 'crt_date', 'src_date': 'src_date', 'edit_by': 'edit_by', 'auth_by': 'auth_by', 'cap_meth': 'cap_meth', 'cap_scale': 'cap_scale', 'online': 'online', });
lyr_HAHeritageAgreements_49.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_PAProtectedAreas_50.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'protecteda': 'protecteda', 'place_name': 'place_name', 'gazette_da': 'gazette_da', 'conditions': 'conditions', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_APAssessmentProgram_51.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_HAHeritageArea_52.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_HLHeritageList_53.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'more_info': 'more_info', 'shape_leng': 'shape_leng', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_LSLocalSurvey_54.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_POProtectionOrder_55.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_SRStateRegister_56.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'place_no': 'place_no', 'place_name': 'place_name', 'location': 'location', 'lga': 'lga', 'her_record': 'her_record', 'date_modif': 'date_modif', 'cluster': 'cluster', 'more_info': 'more_info', });
lyr_WAPPWAPetroleumPipeline_57.set('fieldAliases', {'oid': 'oid', 'gid': 'gid', 'title_id': 'title_id', 'type': 'type', 'issued': 'issued', 'expiry': 'expiry', 'status': 'status', 'act_abbrev': 'act_abbrev', 'coverage': 'coverage', 'holder_1': 'holder_1', 'holder_2': 'holder_2', 'holder_3': 'holder_3', 'holder_4': 'holder_4', 'holder_5': 'holder_5', 'holder_6': 'holder_6', 'holder_7': 'holder_7', 'holder_8': 'holder_8', 'purpose': 'purpose', 'name': 'name', 'start_poin': 'start_poin', 'end_point': 'end_point', 'built': 'built', 'extract_da': 'extract_da', 'st_area(th': 'st_area(th', 'st_perimet': 'st_perimet', });
lyr_RSSARegionSchemeSpecialAreas_58.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'rs_code': 'rs_code', 'descriptio': 'descriptio', 'site_no': 'site_no', 'label': 'label', 'reg_scheme': 'reg_scheme', });
lyr_StructurePlanBoundaries_59.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'filenumber': 'filenumber', 'alt_title': 'alt_title', 'status': 'status', 'endorsed_d': 'endorsed_d', 'sp_area_ha': 'sp_area_ha', 'type': 'type', });
lyr_NorthDandalupProspectedDSPArea_60.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Centre': 'Centre', });
lyr_DwellingupProposedDSP_61.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Centre': 'Centre', });
lyr_PinjarraDSPProspectedCentreArea_62.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Centre': 'Centre', });
lyr_RavenswoodDSPProspectedArea_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Centre': 'Centre', });
lyr_MurrayLGA_86.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'boundary_i': 'boundary_i', 'type_code': 'type_code', 'type_descr': 'type_descr', 'feature_nu': 'feature_nu', 'name': 'name', 'abs_lga_nu': 'abs_lga_nu', 'postcode': 'postcode', 'land_area': 'land_area', 'area_deriv': 'area_deriv', });
lyr_Suburb_87.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Estates_88.set('fieldAliases', {'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_Rezone_89.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_Unzoned_90.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_Zoned_91.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_EstateLabel_92.set('fieldAliases', {'fid': 'fid', 'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_ParcelAttributesLabel_93.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Lot Plan Identifier': 'Lot Plan Identifier', '_Suburb': '_Suburb', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', });
lyr_LocalPlanningSchemeZones_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'zone_numbe': 'TextEdit', 'zone': 'TextEdit', 'add_label': 'TextEdit', 'rest_label': 'TextEdit', 'specadd_la': 'TextEdit', 'special_la': 'TextEdit', 'label': 'TextEdit', 'label_desc': 'TextEdit', 'gazettal_d': 'DateTime', 'scheme_nam': 'TextEdit', 'lga': 'TextEdit', 'scheme_no': 'TextEdit', });
lyr_Waterways_3.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Industrial_4.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Publicpurposeshighschool_5.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Publicpurposeshospital_6.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Publicpurposespublicutilities_7.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Parksandrecreation_8.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Privaterecreation_9.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Regionalopenspace_10.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Otherregionalroads_11.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Primaryregionalroads_12.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Railways_13.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Stateforests_14.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Rural_15.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Urbandeferred_16.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_Urban_17.set('fieldImages', {'fid': '', 'objectid': '', 'rs_code': '', 'descriptio': '', 'label': '', 'rs_class': '', 'reg_scheme': '', });
lyr_RuralResidentialInvestigation_18.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_RuralResidential_19.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_UrbanExpansion_20.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_UrbanInvestigation_21.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_UrbanDeferred_22.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_Urban_23.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'LUGROUP': '', 'LUTYPE': '', 'LUSUBTYPE': '', 'SP_TITLE': '', 'SUBREGION': '', 'LABEL': '', 'STAGING': '', 'STAGINGSCH': '', 'CHANGETOFR': '', 'FRAMEWORKL': '', 'DESCRIPTIO': '', 'COMMENT_': '', 'ADDITIONAL': '', 'SOURCE': '', 'REF_NO': '', 'TYPOLOGY': '', 'CODE': '', 'CLASSOFACT': '', 'COACOMMENT': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_PlanningInvestigation_24.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'LUGROUP': 'TextEdit', 'LUTYPE': 'TextEdit', 'LUSUBTYPE': 'TextEdit', 'SP_TITLE': 'TextEdit', 'SUBREGION': 'TextEdit', 'LABEL': 'TextEdit', 'STAGING': 'TextEdit', 'STAGINGSCH': 'TextEdit', 'CHANGETOFR': 'TextEdit', 'FRAMEWORKL': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT_': 'TextEdit', 'ADDITIONAL': 'TextEdit', 'SOURCE': 'TextEdit', 'REF_NO': 'TextEdit', 'TYPOLOGY': 'TextEdit', 'CODE': 'TextEdit', 'CLASSOFACT': 'TextEdit', 'COACOMMENT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ClearingRegulationsScheduleOneAreas_25.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'schedule1_': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_CoastalPlanExtents_26.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'planid': 'TextEdit', 'plan_name': 'TextEdit', 'plan_title': 'TextEdit', 'plan_date': 'TextEdit', 'plan_type': 'TextEdit', 'author': 'TextEdit', 'summary': 'TextEdit', 'status': 'TextEdit', 'study_area': 'TextEdit', 'region': 'TextEdit', 'comments': 'TextEdit', });
lyr_GovernmentSeweragePolicy_27.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_LandsofInterest_28.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'loi_pin': 'TextEdit', 'loi_poly_a': 'TextEdit', 'loi_identi': 'TextEdit', 'loi_regno': 'TextEdit', 'loi_tenure': 'TextEdit', 'loi_act': 'TextEdit', 'loi_catego': 'TextEdit', 'loi_notes': 'TextEdit', 'loi_prprie': 'TextEdit', });
lyr_LegislatedLandsandWaters_29.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'leg_pin': 'TextEdit', 'leg_poly_a': 'TextEdit', 'leg_class': 'TextEdit', 'leg_identi': 'TextEdit', 'leg_purpos': 'TextEdit', 'leg_vestin': 'TextEdit', 'leg_name': 'TextEdit', 'leg_name_s': 'TextEdit', 'leg_iucn': 'TextEdit', 'leg_tenure': 'TextEdit', 'leg_act': 'TextEdit', 'leg_catego': 'TextEdit', 'leg_notes': 'TextEdit', 'leg_agreem': 'TextEdit', 'leg_classi': 'TextEdit', 'leg_regno': 'TextEdit', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'project_id': 'TextEdit', 'lga': 'TextEdit', 'suburb': 'TextEdit', 'estate_nam': 'TextEdit', 'dev_type': 'TextEdit', 'staging': 'TextEdit', 'plus_10yrs': 'TextEdit', 'zero_5yrs': 'TextEdit', 'six_10yrs': 'TextEdit', 'com_floors': 'TextEdit', });
lyr_PlanningReferralsContacts_31.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'prc_referr': 'TextEdit', 'prc_contac': 'TextEdit', 'prc_postal': 'TextEdit', 'prc_teleph': 'TextEdit', 'prc_fax_nu': 'TextEdit', 'prc_email': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_SPPExclusionAreas_32.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'status': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_SPPExtractionSites_33.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'status': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_BushFireProneAreas2021_34.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'lga': 'TextEdit', 'designatio': 'TextEdit', 'type': 'TextEdit', 'designat_1': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageHistoric_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageLodged_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageRegister_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ach_identi': 'TextEdit', 'name': 'TextEdit', 'place_stat': 'TextEdit', 'place_type': 'TextEdit', 'region': 'TextEdit', 'culturally': 'TextEdit', 'cultural_1': 'TextEdit', 'restricted': 'TextEdit', 'boundary_r': 'TextEdit', 'knowledge_': 'TextEdit', 'legacy_id': 'TextEdit', 'boundary_l': 'TextEdit', 'objectid': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_AboriginalCulturalHeritageSurveyAreas_38.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'survey_rep': 'TextEdit', 'survey_r_1': 'TextEdit', 'survey_are': 'TextEdit', 'survey_a_1': 'TextEdit', 'legacy_are': 'TextEdit', 'report_tit': 'TextEdit', 'report_aut': 'TextEdit', 'area_descr': 'TextEdit', 'survey_typ': 'TextEdit', 'spatial_ac': 'TextEdit', 'field_surv': 'TextEdit', 'desktop_su': 'TextEdit', 'boundary_l': 'TextEdit', });
lyr_MiningTenements_39.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'gid': 'TextEdit', 'tenid': 'TextEdit', 'type': 'TextEdit', 'survstatus': 'TextEdit', 'tenstatus': 'TextEdit', 'holdercnt': 'TextEdit', 'holder1': 'TextEdit', 'addr1': 'TextEdit', 'holder2': 'TextEdit', 'addr2': 'TextEdit', 'holder3': 'TextEdit', 'addr3': 'TextEdit', 'holder4': 'TextEdit', 'addr4': 'TextEdit', 'holder5': 'TextEdit', 'addr5': 'TextEdit', 'holder6': 'TextEdit', 'addr6': 'TextEdit', 'holder7': 'TextEdit', 'addr7': 'TextEdit', 'holder8': 'TextEdit', 'addr8': 'TextEdit', 'holder9': 'TextEdit', 'addr9': 'TextEdit', 'fmt_tenid': 'TextEdit', 'legal_area': 'TextEdit', 'unit_of_me': 'TextEdit', 'special_in': 'TextEdit', 'extract_da': 'TextEdit', 'grantdate': 'TextEdit', 'granttime': 'TextEdit', 'startdate': 'TextEdit', 'starttime': 'TextEdit', 'enddate': 'TextEdit', 'endtime': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_FPMFloodplainArea_40.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'hyd_name': 'TextEdit', 'basin_no': 'TextEdit', 'basin_name': 'TextEdit', 'p_site_id': 'TextEdit', 'p_site_nam': 'TextEdit', 'p_stage_le': 'TextEdit', 'p_ahd_conv': 'TextEdit', 'p_telemetr': 'TextEdit', 's_site_id': 'TextEdit', 's_site_nam': 'TextEdit', 's_stage_le': 'TextEdit', 's_ahd_conv': 'TextEdit', 's_telemetr': 'TextEdit', 'fwa_no': 'TextEdit', 'fwa_name': 'TextEdit', 'online': 'TextEdit', });
lyr_StatePlanningPolicyTransportNoiseCorridor_41.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'feature_ty': 'TextEdit', 'feature_na': 'TextEdit', 'label': 'TextEdit', 'policy_num': 'TextEdit', });
lyr_Floodfringe_42.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_AcidSulfateSoilRisk_43.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'createdate': 'TextEdit', 'capture': 'TextEdit', 'riskclass': 'TextEdit', 'risk_categ': 'TextEdit', 'natcode': 'TextEdit', });
lyr_10metrecontours_44.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'elevation': 'TextEdit', });
lyr_2meterContours_45.set('fieldImages', {'fid': 'TextEdit', 'elevation_': 'TextEdit', 'st_length_': 'TextEdit', 'object_id': 'TextEdit', });
lyr_EasementsPolygonized_46.set('fieldImages', {'id': 'TextEdit', });
lyr_WBWaterwaysBuffered_47.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FWFloodway_48.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ext_type': 'TextEdit', 'status': 'TextEdit', 'start_date': 'TextEdit', 'location': 'TextEdit', 'vert_datum': 'TextEdit', 'date_check': 'TextEdit', 'source': 'TextEdit', 'comments': 'TextEdit', 'ufi': 'TextEdit', 'crt_date': 'TextEdit', 'src_date': 'TextEdit', 'edit_by': 'TextEdit', 'auth_by': 'TextEdit', 'cap_meth': 'TextEdit', 'cap_scale': 'TextEdit', 'online': 'TextEdit', });
lyr_HAHeritageAgreements_49.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_PAProtectedAreas_50.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'protecteda': 'TextEdit', 'place_name': 'TextEdit', 'gazette_da': 'TextEdit', 'conditions': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_APAssessmentProgram_51.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_HAHeritageArea_52.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_HLHeritageList_53.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'more_info': 'TextEdit', 'shape_leng': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_LSLocalSurvey_54.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_POProtectionOrder_55.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_SRStateRegister_56.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'place_no': 'TextEdit', 'place_name': 'TextEdit', 'location': 'TextEdit', 'lga': 'TextEdit', 'her_record': 'TextEdit', 'date_modif': 'TextEdit', 'cluster': 'TextEdit', 'more_info': 'TextEdit', });
lyr_WAPPWAPetroleumPipeline_57.set('fieldImages', {'oid': 'TextEdit', 'gid': 'TextEdit', 'title_id': 'TextEdit', 'type': 'TextEdit', 'issued': 'TextEdit', 'expiry': 'TextEdit', 'status': 'TextEdit', 'act_abbrev': 'TextEdit', 'coverage': 'TextEdit', 'holder_1': 'TextEdit', 'holder_2': 'TextEdit', 'holder_3': 'TextEdit', 'holder_4': 'TextEdit', 'holder_5': 'TextEdit', 'holder_6': 'TextEdit', 'holder_7': 'TextEdit', 'holder_8': 'TextEdit', 'purpose': 'TextEdit', 'name': 'TextEdit', 'start_poin': 'TextEdit', 'end_point': 'TextEdit', 'built': 'TextEdit', 'extract_da': 'TextEdit', 'st_area(th': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_RSSARegionSchemeSpecialAreas_58.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'rs_code': 'TextEdit', 'descriptio': 'TextEdit', 'site_no': 'TextEdit', 'label': 'TextEdit', 'reg_scheme': 'TextEdit', });
lyr_StructurePlanBoundaries_59.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'filenumber': 'TextEdit', 'alt_title': 'TextEdit', 'status': 'TextEdit', 'endorsed_d': 'DateTime', 'sp_area_ha': 'TextEdit', 'type': 'TextEdit', });
lyr_NorthDandalupProspectedDSPArea_60.set('fieldImages', {'fid': '', 'id': '', 'Centre': '', });
lyr_DwellingupProposedDSP_61.set('fieldImages', {'fid': '', 'id': '', 'Centre': '', });
lyr_PinjarraDSPProspectedCentreArea_62.set('fieldImages', {'fid': '', 'id': '', 'Centre': '', });
lyr_RavenswoodDSPProspectedArea_63.set('fieldImages', {'fid': '', 'id': '', 'Centre': '', });
lyr_MurrayLGA_86.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'boundary_i': 'TextEdit', 'type_code': 'TextEdit', 'type_descr': 'TextEdit', 'feature_nu': 'TextEdit', 'name': 'TextEdit', 'abs_lga_nu': 'TextEdit', 'postcode': 'TextEdit', 'land_area': 'TextEdit', 'area_deriv': 'TextEdit', });
lyr_Suburb_87.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Estates_88.set('fieldImages', {'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', });
lyr_Rezone_89.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_Unzoned_90.set('fieldImages', {'fid': 'TextEdit', 'Unique ID': 'TextEdit', 'Lot Plan Identifier': 'TextEdit', '_Suburb': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Current Zone': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 15Dw/Ha': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_Zoned_91.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_EstateLabel_92.set('fieldImages', {'fid': 'TextEdit', 'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', });
lyr_ParcelAttributesLabel_93.set('fieldImages', {'fid': '', 'Unique ID': '', 'Lot Plan Identifier': '', '_Suburb': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Lead Link': '', });
lyr_LocalPlanningSchemeZones_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'zone_numbe': 'hidden field', 'zone': 'hidden field', 'add_label': 'hidden field', 'rest_label': 'hidden field', 'specadd_la': 'hidden field', 'special_la': 'hidden field', 'label': 'hidden field', 'label_desc': 'hidden field', 'gazettal_d': 'hidden field', 'scheme_nam': 'hidden field', 'lga': 'hidden field', 'scheme_no': 'hidden field', });
lyr_Waterways_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Industrial_4.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Publicpurposeshighschool_5.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Publicpurposeshospital_6.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Publicpurposespublicutilities_7.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Parksandrecreation_8.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Privaterecreation_9.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Regionalopenspace_10.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Otherregionalroads_11.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Primaryregionalroads_12.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Railways_13.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Stateforests_14.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Rural_15.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Urbandeferred_16.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_Urban_17.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'label': 'hidden field', 'rs_class': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_RuralResidentialInvestigation_18.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RuralResidential_19.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_UrbanExpansion_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_UrbanInvestigation_21.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_UrbanDeferred_22.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Urban_23.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PlanningInvestigation_24.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'OBJECTID': 'hidden field', 'LUGROUP': 'hidden field', 'LUTYPE': 'hidden field', 'LUSUBTYPE': 'hidden field', 'SP_TITLE': 'hidden field', 'SUBREGION': 'hidden field', 'LABEL': 'hidden field', 'STAGING': 'hidden field', 'STAGINGSCH': 'hidden field', 'CHANGETOFR': 'hidden field', 'FRAMEWORKL': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT_': 'hidden field', 'ADDITIONAL': 'hidden field', 'SOURCE': 'hidden field', 'REF_NO': 'hidden field', 'TYPOLOGY': 'hidden field', 'CODE': 'hidden field', 'CLASSOFACT': 'hidden field', 'COACOMMENT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ClearingRegulationsScheduleOneAreas_25.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'schedule1_': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_CoastalPlanExtents_26.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'planid': 'hidden field', 'plan_name': 'hidden field', 'plan_title': 'hidden field', 'plan_date': 'hidden field', 'plan_type': 'hidden field', 'author': 'hidden field', 'summary': 'hidden field', 'status': 'hidden field', 'study_area': 'hidden field', 'region': 'hidden field', 'comments': 'hidden field', });
lyr_GovernmentSeweragePolicy_27.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_LandsofInterest_28.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'loi_pin': 'hidden field', 'loi_poly_a': 'hidden field', 'loi_identi': 'hidden field', 'loi_regno': 'hidden field', 'loi_tenure': 'hidden field', 'loi_act': 'hidden field', 'loi_catego': 'hidden field', 'loi_notes': 'hidden field', 'loi_prprie': 'hidden field', });
lyr_LegislatedLandsandWaters_29.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'leg_pin': 'hidden field', 'leg_poly_a': 'hidden field', 'leg_class': 'hidden field', 'leg_identi': 'hidden field', 'leg_purpos': 'hidden field', 'leg_vestin': 'hidden field', 'leg_name': 'hidden field', 'leg_name_s': 'hidden field', 'leg_iucn': 'hidden field', 'leg_tenure': 'hidden field', 'leg_act': 'hidden field', 'leg_catego': 'hidden field', 'leg_notes': 'hidden field', 'leg_agreem': 'hidden field', 'leg_classi': 'hidden field', 'leg_regno': 'hidden field', });
lyr_PerthandPeelUrbanLandDevelopmentOutlookResidential_30.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'project_id': 'hidden field', 'lga': 'hidden field', 'suburb': 'hidden field', 'estate_nam': 'hidden field', 'dev_type': 'hidden field', 'staging': 'hidden field', 'plus_10yrs': 'hidden field', 'zero_5yrs': 'hidden field', 'six_10yrs': 'hidden field', 'com_floors': 'hidden field', });
lyr_PlanningReferralsContacts_31.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'prc_referr': 'hidden field', 'prc_contac': 'hidden field', 'prc_postal': 'hidden field', 'prc_teleph': 'hidden field', 'prc_fax_nu': 'hidden field', 'prc_email': 'hidden field', 'st_perimet': 'hidden field', });
lyr_SPPExclusionAreas_32.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'status': 'hidden field', 'extract_da': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_SPPExtractionSites_33.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'status': 'hidden field', 'extract_da': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_BushFireProneAreas2021_34.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'lga': 'hidden field', 'designatio': 'hidden field', 'type': 'hidden field', 'designat_1': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageHistoric_35.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageLodged_36.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageRegister_37.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ach_identi': 'hidden field', 'name': 'hidden field', 'place_stat': 'hidden field', 'place_type': 'hidden field', 'region': 'hidden field', 'culturally': 'hidden field', 'cultural_1': 'hidden field', 'restricted': 'hidden field', 'boundary_r': 'hidden field', 'knowledge_': 'hidden field', 'legacy_id': 'hidden field', 'boundary_l': 'hidden field', 'objectid': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_AboriginalCulturalHeritageSurveyAreas_38.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'survey_rep': 'hidden field', 'survey_r_1': 'hidden field', 'survey_are': 'hidden field', 'survey_a_1': 'hidden field', 'legacy_are': 'hidden field', 'report_tit': 'hidden field', 'report_aut': 'hidden field', 'area_descr': 'hidden field', 'survey_typ': 'hidden field', 'spatial_ac': 'hidden field', 'field_surv': 'hidden field', 'desktop_su': 'hidden field', 'boundary_l': 'hidden field', });
lyr_MiningTenements_39.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'gid': 'hidden field', 'tenid': 'hidden field', 'type': 'hidden field', 'survstatus': 'hidden field', 'tenstatus': 'hidden field', 'holdercnt': 'hidden field', 'holder1': 'hidden field', 'addr1': 'hidden field', 'holder2': 'hidden field', 'addr2': 'hidden field', 'holder3': 'hidden field', 'addr3': 'hidden field', 'holder4': 'hidden field', 'addr4': 'hidden field', 'holder5': 'hidden field', 'addr5': 'hidden field', 'holder6': 'hidden field', 'addr6': 'hidden field', 'holder7': 'hidden field', 'addr7': 'hidden field', 'holder8': 'hidden field', 'addr8': 'hidden field', 'holder9': 'hidden field', 'addr9': 'hidden field', 'fmt_tenid': 'hidden field', 'legal_area': 'hidden field', 'unit_of_me': 'hidden field', 'special_in': 'hidden field', 'extract_da': 'hidden field', 'grantdate': 'hidden field', 'granttime': 'hidden field', 'startdate': 'hidden field', 'starttime': 'hidden field', 'enddate': 'hidden field', 'endtime': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_FPMFloodplainArea_40.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'hyd_name': 'hidden field', 'basin_no': 'hidden field', 'basin_name': 'hidden field', 'p_site_id': 'hidden field', 'p_site_nam': 'hidden field', 'p_stage_le': 'hidden field', 'p_ahd_conv': 'hidden field', 'p_telemetr': 'hidden field', 's_site_id': 'hidden field', 's_site_nam': 'hidden field', 's_stage_le': 'hidden field', 's_ahd_conv': 'hidden field', 's_telemetr': 'hidden field', 'fwa_no': 'hidden field', 'fwa_name': 'hidden field', 'online': 'hidden field', });
lyr_StatePlanningPolicyTransportNoiseCorridor_41.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'layer': 'hidden field', 'feature_ty': 'hidden field', 'feature_na': 'hidden field', 'label': 'hidden field', 'policy_num': 'hidden field', });
lyr_Floodfringe_42.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_AcidSulfateSoilRisk_43.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'createdate': 'hidden field', 'capture': 'hidden field', 'riskclass': 'hidden field', 'risk_categ': 'hidden field', 'natcode': 'hidden field', });
lyr_10metrecontours_44.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'elevation': 'hidden field', });
lyr_2meterContours_45.set('fieldLabels', {'fid': 'hidden field', 'elevation_': 'hidden field', 'st_length_': 'hidden field', 'object_id': 'hidden field', });
lyr_EasementsPolygonized_46.set('fieldLabels', {'id': 'hidden field', });
lyr_WBWaterwaysBuffered_47.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FWFloodway_48.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'ext_type': 'hidden field', 'status': 'hidden field', 'start_date': 'hidden field', 'location': 'hidden field', 'vert_datum': 'hidden field', 'date_check': 'hidden field', 'source': 'hidden field', 'comments': 'hidden field', 'ufi': 'hidden field', 'crt_date': 'hidden field', 'src_date': 'hidden field', 'edit_by': 'hidden field', 'auth_by': 'hidden field', 'cap_meth': 'hidden field', 'cap_scale': 'hidden field', 'online': 'hidden field', });
lyr_HAHeritageAgreements_49.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_PAProtectedAreas_50.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'protecteda': 'hidden field', 'place_name': 'hidden field', 'gazette_da': 'hidden field', 'conditions': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_APAssessmentProgram_51.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_HAHeritageArea_52.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_HLHeritageList_53.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'more_info': 'hidden field', 'shape_leng': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_LSLocalSurvey_54.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_POProtectionOrder_55.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_SRStateRegister_56.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'place_no': 'hidden field', 'place_name': 'hidden field', 'location': 'hidden field', 'lga': 'hidden field', 'her_record': 'hidden field', 'date_modif': 'hidden field', 'cluster': 'hidden field', 'more_info': 'hidden field', });
lyr_WAPPWAPetroleumPipeline_57.set('fieldLabels', {'oid': 'hidden field', 'gid': 'hidden field', 'title_id': 'hidden field', 'type': 'hidden field', 'issued': 'hidden field', 'expiry': 'hidden field', 'status': 'hidden field', 'act_abbrev': 'hidden field', 'coverage': 'hidden field', 'holder_1': 'hidden field', 'holder_2': 'hidden field', 'holder_3': 'hidden field', 'holder_4': 'hidden field', 'holder_5': 'hidden field', 'holder_6': 'hidden field', 'holder_7': 'hidden field', 'holder_8': 'hidden field', 'purpose': 'hidden field', 'name': 'hidden field', 'start_poin': 'hidden field', 'end_point': 'hidden field', 'built': 'hidden field', 'extract_da': 'hidden field', 'st_area(th': 'hidden field', 'st_perimet': 'hidden field', });
lyr_RSSARegionSchemeSpecialAreas_58.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'rs_code': 'hidden field', 'descriptio': 'hidden field', 'site_no': 'hidden field', 'label': 'hidden field', 'reg_scheme': 'hidden field', });
lyr_StructurePlanBoundaries_59.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'filenumber': 'hidden field', 'alt_title': 'header label - visible with data', 'status': 'header label - visible with data', 'endorsed_d': 'hidden field', 'sp_area_ha': 'hidden field', 'type': 'hidden field', });
lyr_NorthDandalupProspectedDSPArea_60.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Centre': 'hidden field', });
lyr_DwellingupProposedDSP_61.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Centre': 'hidden field', });
lyr_PinjarraDSPProspectedCentreArea_62.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Centre': 'hidden field', });
lyr_RavenswoodDSPProspectedArea_63.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Centre': 'hidden field', });
lyr_MurrayLGA_86.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'boundary_i': 'hidden field', 'type_code': 'hidden field', 'type_descr': 'hidden field', 'feature_nu': 'hidden field', 'name': 'hidden field', 'abs_lga_nu': 'hidden field', 'postcode': 'hidden field', 'land_area': 'hidden field', 'area_deriv': 'hidden field', });
lyr_Suburb_87.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Estates_88.set('fieldLabels', {'Estate': 'inline label - always visible', 'Status': 'inline label - always visible', 'Developer': 'inline label - always visible', });
lyr_Rezone_89.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'inline label - always visible', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Vendor Company': 'inline label - always visible', 'Vendor Names': 'inline label - always visible', 'Vendor Mobiles': 'inline label - always visible', 'Vendor Emails': 'inline label - always visible', 'Vendor Addresses': 'inline label - always visible', 'Major Landowner': 'inline label - always visible', 'Lead Link': 'inline label - always visible', });
lyr_Unzoned_90.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'inline label - always visible', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Vendor Company': 'inline label - always visible', 'Vendor Names': 'inline label - always visible', 'Vendor Mobiles': 'inline label - always visible', 'Vendor Emails': 'inline label - always visible', 'Vendor Addresses': 'inline label - always visible', 'Major Landowner': 'inline label - always visible', 'Lead Link': 'inline label - always visible', });
lyr_Zoned_91.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Lot Plan Identifier': 'hidden field', '_Suburb': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - always visible', 'Zoned / Rezone': 'inline label - always visible', 'Current Zone': 'inline label - always visible', 'Strategy': 'inline label - always visible', 'Strategy Link': 'inline label - always visible', 'Overlays': 'inline label - always visible', 'Gross HA': 'inline label - always visible', 'NDH': 'inline label - always visible', 'Lot Yield @ 15Dw/Ha': 'inline label - always visible', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Vendor Company': 'inline label - always visible', 'Vendor Names': 'inline label - always visible', 'Vendor Mobiles': 'inline label - always visible', 'Vendor Emails': 'inline label - always visible', 'Vendor Addresses': 'inline label - always visible', 'Major Landowner': 'inline label - always visible', 'Lead Link': 'inline label - always visible', });
lyr_EstateLabel_92.set('fieldLabels', {'fid': 'hidden field', 'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', });
lyr_ParcelAttributesLabel_93.set('fieldLabels', {'fid': 'no label', 'Unique ID': 'no label', 'Lot Plan Identifier': 'no label', '_Suburb': 'no label', 'PARCEL': 'no label', 'Address': 'no label', 'Zoned / Rezone': 'no label', 'Current Zone': 'no label', 'Strategy': 'no label', 'Strategy Link': 'no label', 'Overlays': 'no label', 'Gross HA': 'no label', 'NDH': 'no label', 'Lot Yield @ 15Dw/Ha': 'no label', 'OWNERSHIP': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Vendor Company': 'no label', 'Vendor Names': 'no label', 'Vendor Mobiles': 'no label', 'Vendor Emails': 'no label', 'Vendor Addresses': 'no label', 'Major Landowner': 'no label', 'Lead Link': 'no label', });
lyr_ParcelAttributesLabel_93.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});