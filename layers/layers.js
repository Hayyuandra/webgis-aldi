var wms_layers = [];

var format_ARENAOLAHRAGA_AR_50K_0 = new ol.format.GeoJSON();
var features_ARENAOLAHRAGA_AR_50K_0 = format_ARENAOLAHRAGA_AR_50K_0.readFeatures(json_ARENAOLAHRAGA_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARENAOLAHRAGA_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENAOLAHRAGA_AR_50K_0.addFeatures(features_ARENAOLAHRAGA_AR_50K_0);
var lyr_ARENAOLAHRAGA_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENAOLAHRAGA_AR_50K_0, 
                style: style_ARENAOLAHRAGA_AR_50K_0,
                popuplayertitle: 'ARENAOLAHRAGA_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ARENAOLAHRAGA_AR_50K_0.png" /> ARENAOLAHRAGA_AR_50K'
            });
var format_KANTORPOS_PT_50K_1 = new ol.format.GeoJSON();
var features_KANTORPOS_PT_50K_1 = format_KANTORPOS_PT_50K_1.readFeatures(json_KANTORPOS_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_PT_50K_1.addFeatures(features_KANTORPOS_PT_50K_1);
var lyr_KANTORPOS_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORPOS_PT_50K_1, 
                style: style_KANTORPOS_PT_50K_1,
                popuplayertitle: 'KANTORPOS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_PT_50K_1.png" /> KANTORPOS_PT_50K'
            });
var format_CAGARBUDAYA_PT_50K_2 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_2 = format_CAGARBUDAYA_PT_50K_2.readFeatures(json_CAGARBUDAYA_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_2.addFeatures(features_CAGARBUDAYA_PT_50K_2);
var lyr_CAGARBUDAYA_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGARBUDAYA_PT_50K_2, 
                style: style_CAGARBUDAYA_PT_50K_2,
                popuplayertitle: 'CAGARBUDAYA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_2.png" /> CAGARBUDAYA_PT_50K'
            });
var format_DEPOKA_PT_50K_3 = new ol.format.GeoJSON();
var features_DEPOKA_PT_50K_3 = format_DEPOKA_PT_50K_3.readFeatures(json_DEPOKA_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPOKA_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPOKA_PT_50K_3.addFeatures(features_DEPOKA_PT_50K_3);
var lyr_DEPOKA_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPOKA_PT_50K_3, 
                style: style_DEPOKA_PT_50K_3,
                popuplayertitle: 'DEPOKA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DEPOKA_PT_50K_3.png" /> DEPOKA_PT_50K'
            });
var format_DEPOMINYAK_PT_50K_4 = new ol.format.GeoJSON();
var features_DEPOMINYAK_PT_50K_4 = format_DEPOMINYAK_PT_50K_4.readFeatures(json_DEPOMINYAK_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPOMINYAK_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPOMINYAK_PT_50K_4.addFeatures(features_DEPOMINYAK_PT_50K_4);
var lyr_DEPOMINYAK_PT_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPOMINYAK_PT_50K_4, 
                style: style_DEPOMINYAK_PT_50K_4,
                popuplayertitle: 'DEPOMINYAK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DEPOMINYAK_PT_50K_4.png" /> DEPOMINYAK_PT_50K'
            });
var format_GENLISTRIK_PT_50K_5 = new ol.format.GeoJSON();
var features_GENLISTRIK_PT_50K_5 = format_GENLISTRIK_PT_50K_5.readFeatures(json_GENLISTRIK_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GENLISTRIK_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GENLISTRIK_PT_50K_5.addFeatures(features_GENLISTRIK_PT_50K_5);
var lyr_GENLISTRIK_PT_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GENLISTRIK_PT_50K_5, 
                style: style_GENLISTRIK_PT_50K_5,
                popuplayertitle: 'GENLISTRIK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/GENLISTRIK_PT_50K_5.png" /> GENLISTRIK_PT_50K'
            });
var format_DERMAGA_PT_50K_6 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_6 = format_DERMAGA_PT_50K_6.readFeatures(json_DERMAGA_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_6.addFeatures(features_DERMAGA_PT_50K_6);
var lyr_DERMAGA_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_6, 
                style: style_DERMAGA_PT_50K_6,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_6.png" /> DERMAGA_PT_50K'
            });
var format_GARDULISTRIK_PT_50K_7 = new ol.format.GeoJSON();
var features_GARDULISTRIK_PT_50K_7 = format_GARDULISTRIK_PT_50K_7.readFeatures(json_GARDULISTRIK_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARDULISTRIK_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARDULISTRIK_PT_50K_7.addFeatures(features_GARDULISTRIK_PT_50K_7);
var lyr_GARDULISTRIK_PT_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARDULISTRIK_PT_50K_7, 
                style: style_GARDULISTRIK_PT_50K_7,
                popuplayertitle: 'GARDULISTRIK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/GARDULISTRIK_PT_50K_7.png" /> GARDULISTRIK_PT_50K'
            });
var format_KANTORPLN_PT_50K_8 = new ol.format.GeoJSON();
var features_KANTORPLN_PT_50K_8 = format_KANTORPLN_PT_50K_8.readFeatures(json_KANTORPLN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPLN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPLN_PT_50K_8.addFeatures(features_KANTORPLN_PT_50K_8);
var lyr_KANTORPLN_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORPLN_PT_50K_8, 
                style: style_KANTORPLN_PT_50K_8,
                popuplayertitle: 'KANTORPLN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORPLN_PT_50K_8.png" /> KANTORPLN_PT_50K'
            });
var format_WADUK_AR_50K_9 = new ol.format.GeoJSON();
var features_WADUK_AR_50K_9 = format_WADUK_AR_50K_9.readFeatures(json_WADUK_AR_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WADUK_AR_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WADUK_AR_50K_9.addFeatures(features_WADUK_AR_50K_9);
var lyr_WADUK_AR_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WADUK_AR_50K_9, 
                style: style_WADUK_AR_50K_9,
                popuplayertitle: 'WADUK_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/WADUK_AR_50K_9.png" /> WADUK_AR_50K'
            });
var format_WADUK_AR_50K_10 = new ol.format.GeoJSON();
var features_WADUK_AR_50K_10 = format_WADUK_AR_50K_10.readFeatures(json_WADUK_AR_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WADUK_AR_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WADUK_AR_50K_10.addFeatures(features_WADUK_AR_50K_10);
var lyr_WADUK_AR_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WADUK_AR_50K_10, 
                style: style_WADUK_AR_50K_10,
                popuplayertitle: 'WADUK_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/WADUK_AR_50K_10.png" /> WADUK_AR_50K'
            });
var format_WADUK_AR_50K_11 = new ol.format.GeoJSON();
var features_WADUK_AR_50K_11 = format_WADUK_AR_50K_11.readFeatures(json_WADUK_AR_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WADUK_AR_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WADUK_AR_50K_11.addFeatures(features_WADUK_AR_50K_11);
var lyr_WADUK_AR_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WADUK_AR_50K_11, 
                style: style_WADUK_AR_50K_11,
                popuplayertitle: 'WADUK_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/WADUK_AR_50K_11.png" /> WADUK_AR_50K'
            });
var format_TOPONIMI_PT_50K_12 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_50K_12 = format_TOPONIMI_PT_50K_12.readFeatures(json_TOPONIMI_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_50K_12.addFeatures(features_TOPONIMI_PT_50K_12);
var lyr_TOPONIMI_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_50K_12, 
                style: style_TOPONIMI_PT_50K_12,
                popuplayertitle: 'TOPONIMI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_50K_12.png" /> TOPONIMI_PT_50K'
            });
var format_LAYANANKESEHATAN_PT_50K_13 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_13 = format_LAYANANKESEHATAN_PT_50K_13.readFeatures(json_LAYANANKESEHATAN_PT_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_PT_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_13.addFeatures(features_LAYANANKESEHATAN_PT_50K_13);
var lyr_LAYANANKESEHATAN_PT_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_13, 
                style: style_LAYANANKESEHATAN_PT_50K_13,
                popuplayertitle: 'LAYANANKESEHATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_13.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_JEMBATAN_PT_50K_14 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_50K_14 = format_JEMBATAN_PT_50K_14.readFeatures(json_JEMBATAN_PT_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_50K_14.addFeatures(features_JEMBATAN_PT_50K_14);
var lyr_JEMBATAN_PT_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_50K_14, 
                style: style_JEMBATAN_PT_50K_14,
                popuplayertitle: 'JEMBATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_50K_14.png" /> JEMBATAN_PT_50K'
            });
var format_PIPAMINYAK_LN_50K_15 = new ol.format.GeoJSON();
var features_PIPAMINYAK_LN_50K_15 = format_PIPAMINYAK_LN_50K_15.readFeatures(json_PIPAMINYAK_LN_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPAMINYAK_LN_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPAMINYAK_LN_50K_15.addFeatures(features_PIPAMINYAK_LN_50K_15);
var lyr_PIPAMINYAK_LN_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIPAMINYAK_LN_50K_15, 
                style: style_PIPAMINYAK_LN_50K_15,
                popuplayertitle: 'PIPAMINYAK_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/PIPAMINYAK_LN_50K_15.png" /> PIPAMINYAK_LN_50K'
            });
var format_AIRPORT_AR_50K_16 = new ol.format.GeoJSON();
var features_AIRPORT_AR_50K_16 = format_AIRPORT_AR_50K_16.readFeatures(json_AIRPORT_AR_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_AR_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_AR_50K_16.addFeatures(features_AIRPORT_AR_50K_16);
var lyr_AIRPORT_AR_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_AR_50K_16, 
                style: style_AIRPORT_AR_50K_16,
                popuplayertitle: 'AIRPORT_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_AR_50K_16.png" /> AIRPORT_AR_50K'
            });
var format_OLAHAIRMINUM_PT_50K_17 = new ol.format.GeoJSON();
var features_OLAHAIRMINUM_PT_50K_17 = format_OLAHAIRMINUM_PT_50K_17.readFeatures(json_OLAHAIRMINUM_PT_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OLAHAIRMINUM_PT_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLAHAIRMINUM_PT_50K_17.addFeatures(features_OLAHAIRMINUM_PT_50K_17);
var lyr_OLAHAIRMINUM_PT_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLAHAIRMINUM_PT_50K_17, 
                style: style_OLAHAIRMINUM_PT_50K_17,
                popuplayertitle: 'OLAHAIRMINUM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/OLAHAIRMINUM_PT_50K_17.png" /> OLAHAIRMINUM_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_18 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_18 = format_RUMAHSAKIT_PT_50K_18.readFeatures(json_RUMAHSAKIT_PT_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_18.addFeatures(features_RUMAHSAKIT_PT_50K_18);
var lyr_RUMAHSAKIT_PT_50K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_18, 
                style: style_RUMAHSAKIT_PT_50K_18,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_18.png" /> RUMAHSAKIT_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_19 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_19 = format_RUMAHSAKIT_PT_50K_19.readFeatures(json_RUMAHSAKIT_PT_50K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_19.addFeatures(features_RUMAHSAKIT_PT_50K_19);
var lyr_RUMAHSAKIT_PT_50K_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_19, 
                style: style_RUMAHSAKIT_PT_50K_19,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_19.png" /> RUMAHSAKIT_PT_50K'
            });
var format_OLAHMINYAK_PT_50K_20 = new ol.format.GeoJSON();
var features_OLAHMINYAK_PT_50K_20 = format_OLAHMINYAK_PT_50K_20.readFeatures(json_OLAHMINYAK_PT_50K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OLAHMINYAK_PT_50K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLAHMINYAK_PT_50K_20.addFeatures(features_OLAHMINYAK_PT_50K_20);
var lyr_OLAHMINYAK_PT_50K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLAHMINYAK_PT_50K_20, 
                style: style_OLAHMINYAK_PT_50K_20,
                popuplayertitle: 'OLAHMINYAK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/OLAHMINYAK_PT_50K_20.png" /> OLAHMINYAK_PT_50K'
            });
var format_SARANATELKOM_PT_50K_21 = new ol.format.GeoJSON();
var features_SARANATELKOM_PT_50K_21 = format_SARANATELKOM_PT_50K_21.readFeatures(json_SARANATELKOM_PT_50K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANATELKOM_PT_50K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANATELKOM_PT_50K_21.addFeatures(features_SARANATELKOM_PT_50K_21);
var lyr_SARANATELKOM_PT_50K_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANATELKOM_PT_50K_21, 
                style: style_SARANATELKOM_PT_50K_21,
                popuplayertitle: 'SARANATELKOM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SARANATELKOM_PT_50K_21.png" /> SARANATELKOM_PT_50K'
            });
var format_GARDUTELPON_PT_50K_22 = new ol.format.GeoJSON();
var features_GARDUTELPON_PT_50K_22 = format_GARDUTELPON_PT_50K_22.readFeatures(json_GARDUTELPON_PT_50K_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARDUTELPON_PT_50K_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARDUTELPON_PT_50K_22.addFeatures(features_GARDUTELPON_PT_50K_22);
var lyr_GARDUTELPON_PT_50K_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARDUTELPON_PT_50K_22, 
                style: style_GARDUTELPON_PT_50K_22,
                popuplayertitle: 'GARDUTELPON_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/GARDUTELPON_PT_50K_22.png" /> GARDUTELPON_PT_50K'
            });
var format_GORONG_PT_50K_23 = new ol.format.GeoJSON();
var features_GORONG_PT_50K_23 = format_GORONG_PT_50K_23.readFeatures(json_GORONG_PT_50K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GORONG_PT_50K_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GORONG_PT_50K_23.addFeatures(features_GORONG_PT_50K_23);
var lyr_GORONG_PT_50K_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GORONG_PT_50K_23, 
                style: style_GORONG_PT_50K_23,
                popuplayertitle: 'GORONG_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/GORONG_PT_50K_23.png" /> GORONG_PT_50K'
            });
var format_KELOLALIMBAH_PT_50K_24 = new ol.format.GeoJSON();
var features_KELOLALIMBAH_PT_50K_24 = format_KELOLALIMBAH_PT_50K_24.readFeatures(json_KELOLALIMBAH_PT_50K_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELOLALIMBAH_PT_50K_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELOLALIMBAH_PT_50K_24.addFeatures(features_KELOLALIMBAH_PT_50K_24);
var lyr_KELOLALIMBAH_PT_50K_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELOLALIMBAH_PT_50K_24, 
                style: style_KELOLALIMBAH_PT_50K_24,
                popuplayertitle: 'KELOLALIMBAH_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KELOLALIMBAH_PT_50K_24.png" /> KELOLALIMBAH_PT_50K'
            });
var format_SUMURGAS_PT_50K_25 = new ol.format.GeoJSON();
var features_SUMURGAS_PT_50K_25 = format_SUMURGAS_PT_50K_25.readFeatures(json_SUMURGAS_PT_50K_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMURGAS_PT_50K_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMURGAS_PT_50K_25.addFeatures(features_SUMURGAS_PT_50K_25);
var lyr_SUMURGAS_PT_50K_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMURGAS_PT_50K_25, 
                style: style_SUMURGAS_PT_50K_25,
                popuplayertitle: 'SUMURGAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMURGAS_PT_50K_25.png" /> SUMURGAS_PT_50K'
            });
var format_SUMURGAS_PT_50K_26 = new ol.format.GeoJSON();
var features_SUMURGAS_PT_50K_26 = format_SUMURGAS_PT_50K_26.readFeatures(json_SUMURGAS_PT_50K_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMURGAS_PT_50K_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMURGAS_PT_50K_26.addFeatures(features_SUMURGAS_PT_50K_26);
var lyr_SUMURGAS_PT_50K_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMURGAS_PT_50K_26, 
                style: style_SUMURGAS_PT_50K_26,
                popuplayertitle: 'SUMURGAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMURGAS_PT_50K_26.png" /> SUMURGAS_PT_50K'
            });
var format_SUMBERAIRMINUM_PT_50K_27 = new ol.format.GeoJSON();
var features_SUMBERAIRMINUM_PT_50K_27 = format_SUMBERAIRMINUM_PT_50K_27.readFeatures(json_SUMBERAIRMINUM_PT_50K_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBERAIRMINUM_PT_50K_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIRMINUM_PT_50K_27.addFeatures(features_SUMBERAIRMINUM_PT_50K_27);
var lyr_SUMBERAIRMINUM_PT_50K_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIRMINUM_PT_50K_27, 
                style: style_SUMBERAIRMINUM_PT_50K_27,
                popuplayertitle: 'SUMBERAIRMINUM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMBERAIRMINUM_PT_50K_27.png" /> SUMBERAIRMINUM_PT_50K'
            });
var format_SUMBERAIRMINUM_PT_50K_28 = new ol.format.GeoJSON();
var features_SUMBERAIRMINUM_PT_50K_28 = format_SUMBERAIRMINUM_PT_50K_28.readFeatures(json_SUMBERAIRMINUM_PT_50K_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBERAIRMINUM_PT_50K_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIRMINUM_PT_50K_28.addFeatures(features_SUMBERAIRMINUM_PT_50K_28);
var lyr_SUMBERAIRMINUM_PT_50K_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIRMINUM_PT_50K_28, 
                style: style_SUMBERAIRMINUM_PT_50K_28,
                popuplayertitle: 'SUMBERAIRMINUM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMBERAIRMINUM_PT_50K_28.png" /> SUMBERAIRMINUM_PT_50K'
            });
var format_SUMURMINYAK_PT_50K_29 = new ol.format.GeoJSON();
var features_SUMURMINYAK_PT_50K_29 = format_SUMURMINYAK_PT_50K_29.readFeatures(json_SUMURMINYAK_PT_50K_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMURMINYAK_PT_50K_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMURMINYAK_PT_50K_29.addFeatures(features_SUMURMINYAK_PT_50K_29);
var lyr_SUMURMINYAK_PT_50K_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMURMINYAK_PT_50K_29, 
                style: style_SUMURMINYAK_PT_50K_29,
                popuplayertitle: 'SUMURMINYAK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMURMINYAK_PT_50K_29.png" /> SUMURMINYAK_PT_50K'
            });
var format_STASIUNPASUT_PT_50K_30 = new ol.format.GeoJSON();
var features_STASIUNPASUT_PT_50K_30 = format_STASIUNPASUT_PT_50K_30.readFeatures(json_STASIUNPASUT_PT_50K_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNPASUT_PT_50K_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNPASUT_PT_50K_30.addFeatures(features_STASIUNPASUT_PT_50K_30);
var lyr_STASIUNPASUT_PT_50K_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STASIUNPASUT_PT_50K_30, 
                style: style_STASIUNPASUT_PT_50K_30,
                popuplayertitle: 'STASIUNPASUT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/STASIUNPASUT_PT_50K_30.png" /> STASIUNPASUT_PT_50K'
            });
var format_STASIUNRADIO_PT_50K_31 = new ol.format.GeoJSON();
var features_STASIUNRADIO_PT_50K_31 = format_STASIUNRADIO_PT_50K_31.readFeatures(json_STASIUNRADIO_PT_50K_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNRADIO_PT_50K_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNRADIO_PT_50K_31.addFeatures(features_STASIUNRADIO_PT_50K_31);
var lyr_STASIUNRADIO_PT_50K_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STASIUNRADIO_PT_50K_31, 
                style: style_STASIUNRADIO_PT_50K_31,
                popuplayertitle: 'STASIUNRADIO_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/STASIUNRADIO_PT_50K_31.png" /> STASIUNRADIO_PT_50K'
            });
var format_MENARATELPON_PT_50K_32 = new ol.format.GeoJSON();
var features_MENARATELPON_PT_50K_32 = format_MENARATELPON_PT_50K_32.readFeatures(json_MENARATELPON_PT_50K_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MENARATELPON_PT_50K_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MENARATELPON_PT_50K_32.addFeatures(features_MENARATELPON_PT_50K_32);
var lyr_MENARATELPON_PT_50K_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MENARATELPON_PT_50K_32, 
                style: style_MENARATELPON_PT_50K_32,
                popuplayertitle: 'MENARATELPON_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/MENARATELPON_PT_50K_32.png" /> MENARATELPON_PT_50K'
            });
var format_TAXIWY_PT_50K_33 = new ol.format.GeoJSON();
var features_TAXIWY_PT_50K_33 = format_TAXIWY_PT_50K_33.readFeatures(json_TAXIWY_PT_50K_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAXIWY_PT_50K_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAXIWY_PT_50K_33.addFeatures(features_TAXIWY_PT_50K_33);
var lyr_TAXIWY_PT_50K_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAXIWY_PT_50K_33, 
                style: style_TAXIWY_PT_50K_33,
                popuplayertitle: 'TAXIWY_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TAXIWY_PT_50K_33.png" /> TAXIWY_PT_50K'
            });
var format_MENARAEKSPLOITMINYAK_PT_50K_34 = new ol.format.GeoJSON();
var features_MENARAEKSPLOITMINYAK_PT_50K_34 = format_MENARAEKSPLOITMINYAK_PT_50K_34.readFeatures(json_MENARAEKSPLOITMINYAK_PT_50K_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MENARAEKSPLOITMINYAK_PT_50K_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MENARAEKSPLOITMINYAK_PT_50K_34.addFeatures(features_MENARAEKSPLOITMINYAK_PT_50K_34);
var lyr_MENARAEKSPLOITMINYAK_PT_50K_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MENARAEKSPLOITMINYAK_PT_50K_34, 
                style: style_MENARAEKSPLOITMINYAK_PT_50K_34,
                popuplayertitle: 'MENARAEKSPLOITMINYAK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/MENARAEKSPLOITMINYAK_PT_50K_34.png" /> MENARAEKSPLOITMINYAK_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_35 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_35 = format_PENDIDIKAN_PT_50K_35.readFeatures(json_PENDIDIKAN_PT_50K_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_35.addFeatures(features_PENDIDIKAN_PT_50K_35);
var lyr_PENDIDIKAN_PT_50K_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_35, 
                style: style_PENDIDIKAN_PT_50K_35,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_35.png" /> PENDIDIKAN_PT_50K'
            });
var format_RUNWAY_PT_50K_36 = new ol.format.GeoJSON();
var features_RUNWAY_PT_50K_36 = format_RUNWAY_PT_50K_36.readFeatures(json_RUNWAY_PT_50K_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUNWAY_PT_50K_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUNWAY_PT_50K_36.addFeatures(features_RUNWAY_PT_50K_36);
var lyr_RUNWAY_PT_50K_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUNWAY_PT_50K_36, 
                style: style_RUNWAY_PT_50K_36,
                popuplayertitle: 'RUNWAY_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUNWAY_PT_50K_36.png" /> RUNWAY_PT_50K'
            });
var format_KELOLALIMBAH_PT_50K_37 = new ol.format.GeoJSON();
var features_KELOLALIMBAH_PT_50K_37 = format_KELOLALIMBAH_PT_50K_37.readFeatures(json_KELOLALIMBAH_PT_50K_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELOLALIMBAH_PT_50K_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELOLALIMBAH_PT_50K_37.addFeatures(features_KELOLALIMBAH_PT_50K_37);
var lyr_KELOLALIMBAH_PT_50K_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELOLALIMBAH_PT_50K_37, 
                style: style_KELOLALIMBAH_PT_50K_37,
                popuplayertitle: 'KELOLALIMBAH_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KELOLALIMBAH_PT_50K_37.png" /> KELOLALIMBAH_PT_50K'
            });
var format_SUMBERGAS_PT_50K_38 = new ol.format.GeoJSON();
var features_SUMBERGAS_PT_50K_38 = format_SUMBERGAS_PT_50K_38.readFeatures(json_SUMBERGAS_PT_50K_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBERGAS_PT_50K_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERGAS_PT_50K_38.addFeatures(features_SUMBERGAS_PT_50K_38);
var lyr_SUMBERGAS_PT_50K_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERGAS_PT_50K_38, 
                style: style_SUMBERGAS_PT_50K_38,
                popuplayertitle: 'SUMBERGAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SUMBERGAS_PT_50K_38.png" /> SUMBERGAS_PT_50K'
            });
var format_LIGHT_PT_50K_39 = new ol.format.GeoJSON();
var features_LIGHT_PT_50K_39 = format_LIGHT_PT_50K_39.readFeatures(json_LIGHT_PT_50K_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIGHT_PT_50K_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIGHT_PT_50K_39.addFeatures(features_LIGHT_PT_50K_39);
var lyr_LIGHT_PT_50K_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIGHT_PT_50K_39, 
                style: style_LIGHT_PT_50K_39,
                popuplayertitle: 'LIGHT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/LIGHT_PT_50K_39.png" /> LIGHT_PT_50K'
            });
var format_DERMAGA_PT_50K_40 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_40 = format_DERMAGA_PT_50K_40.readFeatures(json_DERMAGA_PT_50K_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_40.addFeatures(features_DERMAGA_PT_50K_40);
var lyr_DERMAGA_PT_50K_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_40, 
                style: style_DERMAGA_PT_50K_40,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_40.png" /> DERMAGA_PT_50K'
            });
var format_HIDRANUMUM_PT_50K_41 = new ol.format.GeoJSON();
var features_HIDRANUMUM_PT_50K_41 = format_HIDRANUMUM_PT_50K_41.readFeatures(json_HIDRANUMUM_PT_50K_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDRANUMUM_PT_50K_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDRANUMUM_PT_50K_41.addFeatures(features_HIDRANUMUM_PT_50K_41);
var lyr_HIDRANUMUM_PT_50K_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIDRANUMUM_PT_50K_41, 
                style: style_HIDRANUMUM_PT_50K_41,
                popuplayertitle: 'HIDRANUMUM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/HIDRANUMUM_PT_50K_41.png" /> HIDRANUMUM_PT_50K'
            });
var format_KANTORSTASKOMBUMI_PT_50K_42 = new ol.format.GeoJSON();
var features_KANTORSTASKOMBUMI_PT_50K_42 = format_KANTORSTASKOMBUMI_PT_50K_42.readFeatures(json_KANTORSTASKOMBUMI_PT_50K_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORSTASKOMBUMI_PT_50K_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORSTASKOMBUMI_PT_50K_42.addFeatures(features_KANTORSTASKOMBUMI_PT_50K_42);
var lyr_KANTORSTASKOMBUMI_PT_50K_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORSTASKOMBUMI_PT_50K_42, 
                style: style_KANTORSTASKOMBUMI_PT_50K_42,
                popuplayertitle: 'KANTORSTASKOMBUMI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORSTASKOMBUMI_PT_50K_42.png" /> KANTORSTASKOMBUMI_PT_50K'
            });
var format_STASIUNRADIO_PT_50K_43 = new ol.format.GeoJSON();
var features_STASIUNRADIO_PT_50K_43 = format_STASIUNRADIO_PT_50K_43.readFeatures(json_STASIUNRADIO_PT_50K_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNRADIO_PT_50K_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNRADIO_PT_50K_43.addFeatures(features_STASIUNRADIO_PT_50K_43);
var lyr_STASIUNRADIO_PT_50K_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STASIUNRADIO_PT_50K_43, 
                style: style_STASIUNRADIO_PT_50K_43,
                popuplayertitle: 'STASIUNRADIO_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/STASIUNRADIO_PT_50K_43.png" /> STASIUNRADIO_PT_50K'
            });
var format_ANTSTASIUNBUMIK_PT_50K_44 = new ol.format.GeoJSON();
var features_ANTSTASIUNBUMIK_PT_50K_44 = format_ANTSTASIUNBUMIK_PT_50K_44.readFeatures(json_ANTSTASIUNBUMIK_PT_50K_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANTSTASIUNBUMIK_PT_50K_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANTSTASIUNBUMIK_PT_50K_44.addFeatures(features_ANTSTASIUNBUMIK_PT_50K_44);
var lyr_ANTSTASIUNBUMIK_PT_50K_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANTSTASIUNBUMIK_PT_50K_44, 
                style: style_ANTSTASIUNBUMIK_PT_50K_44,
                popuplayertitle: 'ANTSTASIUNBUMIK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/ANTSTASIUNBUMIK_PT_50K_44.png" /> ANTSTASIUNBUMIK_PT_50K'
            });
var format_TONGGAKKM_PT_50K_45 = new ol.format.GeoJSON();
var features_TONGGAKKM_PT_50K_45 = format_TONGGAKKM_PT_50K_45.readFeatures(json_TONGGAKKM_PT_50K_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TONGGAKKM_PT_50K_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TONGGAKKM_PT_50K_45.addFeatures(features_TONGGAKKM_PT_50K_45);
var lyr_TONGGAKKM_PT_50K_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TONGGAKKM_PT_50K_45, 
                style: style_TONGGAKKM_PT_50K_45,
                popuplayertitle: 'TONGGAKKM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TONGGAKKM_PT_50K_45.png" /> TONGGAKKM_PT_50K'
            });
var format_TIANGLISTRIK_PT_50K_46 = new ol.format.GeoJSON();
var features_TIANGLISTRIK_PT_50K_46 = format_TIANGLISTRIK_PT_50K_46.readFeatures(json_TIANGLISTRIK_PT_50K_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIANGLISTRIK_PT_50K_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIANGLISTRIK_PT_50K_46.addFeatures(features_TIANGLISTRIK_PT_50K_46);
var lyr_TIANGLISTRIK_PT_50K_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIANGLISTRIK_PT_50K_46, 
                style: style_TIANGLISTRIK_PT_50K_46,
                popuplayertitle: 'TIANGLISTRIK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TIANGLISTRIK_PT_50K_46.png" /> TIANGLISTRIK_PT_50K'
            });
var format_TERUMBUKARANG_AR_50K_47 = new ol.format.GeoJSON();
var features_TERUMBUKARANG_AR_50K_47 = format_TERUMBUKARANG_AR_50K_47.readFeatures(json_TERUMBUKARANG_AR_50K_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERUMBUKARANG_AR_50K_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERUMBUKARANG_AR_50K_47.addFeatures(features_TERUMBUKARANG_AR_50K_47);
var lyr_TERUMBUKARANG_AR_50K_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERUMBUKARANG_AR_50K_47, 
                style: style_TERUMBUKARANG_AR_50K_47,
                popuplayertitle: 'TERUMBUKARANG_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/TERUMBUKARANG_AR_50K_47.png" /> TERUMBUKARANG_AR_50K'
            });
var format_TEROWONG_PT_50K_48 = new ol.format.GeoJSON();
var features_TEROWONG_PT_50K_48 = format_TEROWONG_PT_50K_48.readFeatures(json_TEROWONG_PT_50K_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEROWONG_PT_50K_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEROWONG_PT_50K_48.addFeatures(features_TEROWONG_PT_50K_48);
var lyr_TEROWONG_PT_50K_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEROWONG_PT_50K_48, 
                style: style_TEROWONG_PT_50K_48,
                popuplayertitle: 'TEROWONG_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TEROWONG_PT_50K_48.png" /> TEROWONG_PT_50K'
            });
var format_TERMINALBUS_PT_50K_49 = new ol.format.GeoJSON();
var features_TERMINALBUS_PT_50K_49 = format_TERMINALBUS_PT_50K_49.readFeatures(json_TERMINALBUS_PT_50K_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALBUS_PT_50K_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALBUS_PT_50K_49.addFeatures(features_TERMINALBUS_PT_50K_49);
var lyr_TERMINALBUS_PT_50K_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALBUS_PT_50K_49, 
                style: style_TERMINALBUS_PT_50K_49,
                popuplayertitle: 'TERMINALBUS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TERMINALBUS_PT_50K_49.png" /> TERMINALBUS_PT_50K'
            });
var format_TEMPATSAMPAHAKHIR_AR_50K_50 = new ol.format.GeoJSON();
var features_TEMPATSAMPAHAKHIR_AR_50K_50 = format_TEMPATSAMPAHAKHIR_AR_50K_50.readFeatures(json_TEMPATSAMPAHAKHIR_AR_50K_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATSAMPAHAKHIR_AR_50K_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATSAMPAHAKHIR_AR_50K_50.addFeatures(features_TEMPATSAMPAHAKHIR_AR_50K_50);
var lyr_TEMPATSAMPAHAKHIR_AR_50K_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATSAMPAHAKHIR_AR_50K_50, 
                style: style_TEMPATSAMPAHAKHIR_AR_50K_50,
                popuplayertitle: 'TEMPATSAMPAHAKHIR_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/TEMPATSAMPAHAKHIR_AR_50K_50.png" /> TEMPATSAMPAHAKHIR_AR_50K'
            });
var format_TAXIWY_PT_50K_51 = new ol.format.GeoJSON();
var features_TAXIWY_PT_50K_51 = format_TAXIWY_PT_50K_51.readFeatures(json_TAXIWY_PT_50K_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAXIWY_PT_50K_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAXIWY_PT_50K_51.addFeatures(features_TAXIWY_PT_50K_51);
var lyr_TAXIWY_PT_50K_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAXIWY_PT_50K_51, 
                style: style_TAXIWY_PT_50K_51,
                popuplayertitle: 'TAXIWY_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TAXIWY_PT_50K_51.png" /> TAXIWY_PT_50K'
            });
var format_TANGGUL_PT_50K_52 = new ol.format.GeoJSON();
var features_TANGGUL_PT_50K_52 = format_TANGGUL_PT_50K_52.readFeatures(json_TANGGUL_PT_50K_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANGGUL_PT_50K_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANGGUL_PT_50K_52.addFeatures(features_TANGGUL_PT_50K_52);
var lyr_TANGGUL_PT_50K_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANGGUL_PT_50K_52, 
                style: style_TANGGUL_PT_50K_52,
                popuplayertitle: 'TANGGUL_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TANGGUL_PT_50K_52.png" /> TANGGUL_PT_50K'
            });
var format_TAMBANGAN_PT_50K_53 = new ol.format.GeoJSON();
var features_TAMBANGAN_PT_50K_53 = format_TAMBANGAN_PT_50K_53.readFeatures(json_TAMBANGAN_PT_50K_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBANGAN_PT_50K_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBANGAN_PT_50K_53.addFeatures(features_TAMBANGAN_PT_50K_53);
var lyr_TAMBANGAN_PT_50K_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBANGAN_PT_50K_53, 
                style: style_TAMBANGAN_PT_50K_53,
                popuplayertitle: 'TAMBANGAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TAMBANGAN_PT_50K_53.png" /> TAMBANGAN_PT_50K'
            });
var format_KESEHATAN_PT_50K_54 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_50K_54 = format_KESEHATAN_PT_50K_54.readFeatures(json_KESEHATAN_PT_50K_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_50K_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_50K_54.addFeatures(features_KESEHATAN_PT_50K_54);
var lyr_KESEHATAN_PT_50K_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_PT_50K_54, 
                style: style_KESEHATAN_PT_50K_54,
                popuplayertitle: 'KESEHATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_50K_54.png" /> KESEHATAN_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_55 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_55 = format_RUMAHSAKIT_PT_50K_55.readFeatures(json_RUMAHSAKIT_PT_50K_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_55.addFeatures(features_RUMAHSAKIT_PT_50K_55);
var lyr_RUMAHSAKIT_PT_50K_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_55, 
                style: style_RUMAHSAKIT_PT_50K_55,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_55.png" /> RUMAHSAKIT_PT_50K'
            });
var format_TAMBANGAN_LN_50K_56 = new ol.format.GeoJSON();
var features_TAMBANGAN_LN_50K_56 = format_TAMBANGAN_LN_50K_56.readFeatures(json_TAMBANGAN_LN_50K_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBANGAN_LN_50K_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBANGAN_LN_50K_56.addFeatures(features_TAMBANGAN_LN_50K_56);
var lyr_TAMBANGAN_LN_50K_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBANGAN_LN_50K_56, 
                style: style_TAMBANGAN_LN_50K_56,
                popuplayertitle: 'TAMBANGAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/TAMBANGAN_LN_50K_56.png" /> TAMBANGAN_LN_50K'
            });
var format_SPBU_PT_50K_57 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_57 = format_SPBU_PT_50K_57.readFeatures(json_SPBU_PT_50K_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_57.addFeatures(features_SPBU_PT_50K_57);
var lyr_SPBU_PT_50K_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_57, 
                style: style_SPBU_PT_50K_57,
                popuplayertitle: 'SPBU_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_57.png" /> SPBU_PT_50K'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_58 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_58 = format_ADMINISTRASIKECAMATAN_AR_50K_58.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_58.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_58);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_58, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_58,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_58.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_PANCARTV_PT_50K_59 = new ol.format.GeoJSON();
var features_PANCARTV_PT_50K_59 = format_PANCARTV_PT_50K_59.readFeatures(json_PANCARTV_PT_50K_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANCARTV_PT_50K_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCARTV_PT_50K_59.addFeatures(features_PANCARTV_PT_50K_59);
var lyr_PANCARTV_PT_50K_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCARTV_PT_50K_59, 
                style: style_PANCARTV_PT_50K_59,
                popuplayertitle: 'PANCARTV_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PANCARTV_PT_50K_59.png" /> PANCARTV_PT_50K'
            });
var format_PUSKESMAS_PT_50K_60 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_60 = format_PUSKESMAS_PT_50K_60.readFeatures(json_PUSKESMAS_PT_50K_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_60.addFeatures(features_PUSKESMAS_PT_50K_60);
var lyr_PUSKESMAS_PT_50K_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_60, 
                style: style_PUSKESMAS_PT_50K_60,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_60.png" /> PUSKESMAS_PT_50K'
            });
var format_MAKAM_PT_50K_61 = new ol.format.GeoJSON();
var features_MAKAM_PT_50K_61 = format_MAKAM_PT_50K_61.readFeatures(json_MAKAM_PT_50K_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKAM_PT_50K_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKAM_PT_50K_61.addFeatures(features_MAKAM_PT_50K_61);
var lyr_MAKAM_PT_50K_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKAM_PT_50K_61, 
                style: style_MAKAM_PT_50K_61,
                popuplayertitle: 'MAKAM_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/MAKAM_PT_50K_61.png" /> MAKAM_PT_50K'
            });
var format_INDUSTRI_AR_50K_62 = new ol.format.GeoJSON();
var features_INDUSTRI_AR_50K_62 = format_INDUSTRI_AR_50K_62.readFeatures(json_INDUSTRI_AR_50K_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_AR_50K_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_AR_50K_62.addFeatures(features_INDUSTRI_AR_50K_62);
var lyr_INDUSTRI_AR_50K_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDUSTRI_AR_50K_62, 
                style: style_INDUSTRI_AR_50K_62,
                popuplayertitle: 'INDUSTRI_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/INDUSTRI_AR_50K_62.png" /> INDUSTRI_AR_50K'
            });
var format_INDUSTRI_PT_50K_63 = new ol.format.GeoJSON();
var features_INDUSTRI_PT_50K_63 = format_INDUSTRI_PT_50K_63.readFeatures(json_INDUSTRI_PT_50K_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_PT_50K_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_PT_50K_63.addFeatures(features_INDUSTRI_PT_50K_63);
var lyr_INDUSTRI_PT_50K_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDUSTRI_PT_50K_63, 
                style: style_INDUSTRI_PT_50K_63,
                popuplayertitle: 'INDUSTRI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/INDUSTRI_PT_50K_63.png" /> INDUSTRI_PT_50K'
            });
var format_SUNGAI_AR_50K_64 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_64 = format_SUNGAI_AR_50K_64.readFeatures(json_SUNGAI_AR_50K_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_64.addFeatures(features_SUNGAI_AR_50K_64);
var lyr_SUNGAI_AR_50K_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_50K_64, 
                style: style_SUNGAI_AR_50K_64,
                popuplayertitle: 'SUNGAI_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_64.png" /> SUNGAI_AR_50K'
            });
var format_TIANGLISTRIK_PT_50K_65 = new ol.format.GeoJSON();
var features_TIANGLISTRIK_PT_50K_65 = format_TIANGLISTRIK_PT_50K_65.readFeatures(json_TIANGLISTRIK_PT_50K_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIANGLISTRIK_PT_50K_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIANGLISTRIK_PT_50K_65.addFeatures(features_TIANGLISTRIK_PT_50K_65);
var lyr_TIANGLISTRIK_PT_50K_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIANGLISTRIK_PT_50K_65, 
                style: style_TIANGLISTRIK_PT_50K_65,
                popuplayertitle: 'TIANGLISTRIK_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TIANGLISTRIK_PT_50K_65.png" /> TIANGLISTRIK_PT_50K'
            });
var format_SPOTHEIGHT_PT_50K_66 = new ol.format.GeoJSON();
var features_SPOTHEIGHT_PT_50K_66 = format_SPOTHEIGHT_PT_50K_66.readFeatures(json_SPOTHEIGHT_PT_50K_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPOTHEIGHT_PT_50K_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPOTHEIGHT_PT_50K_66.addFeatures(features_SPOTHEIGHT_PT_50K_66);
var lyr_SPOTHEIGHT_PT_50K_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPOTHEIGHT_PT_50K_66, 
                style: style_SPOTHEIGHT_PT_50K_66,
                popuplayertitle: 'SPOTHEIGHT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPOTHEIGHT_PT_50K_66.png" /> SPOTHEIGHT_PT_50K'
            });
var format_TOPONIMI_PT_50K_67 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_50K_67 = format_TOPONIMI_PT_50K_67.readFeatures(json_TOPONIMI_PT_50K_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_50K_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_50K_67.addFeatures(features_TOPONIMI_PT_50K_67);
var lyr_TOPONIMI_PT_50K_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_50K_67, 
                style: style_TOPONIMI_PT_50K_67,
                popuplayertitle: 'TOPONIMI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_50K_67.png" /> TOPONIMI_PT_50K'
            });
var format_AGRIKEBUN_AR_50K_68 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_68 = format_AGRIKEBUN_AR_50K_68.readFeatures(json_AGRIKEBUN_AR_50K_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_50K_68.addFeatures(features_AGRIKEBUN_AR_50K_68);
var lyr_AGRIKEBUN_AR_50K_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_50K_68, 
                style: style_AGRIKEBUN_AR_50K_68,
                popuplayertitle: 'AGRIKEBUN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_68.png" /> AGRIKEBUN_AR_50K'
            });
var format_PEMERINTAHASING_PT_50K_69 = new ol.format.GeoJSON();
var features_PEMERINTAHASING_PT_50K_69 = format_PEMERINTAHASING_PT_50K_69.readFeatures(json_PEMERINTAHASING_PT_50K_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHASING_PT_50K_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHASING_PT_50K_69.addFeatures(features_PEMERINTAHASING_PT_50K_69);
var lyr_PEMERINTAHASING_PT_50K_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHASING_PT_50K_69, 
                style: style_PEMERINTAHASING_PT_50K_69,
                popuplayertitle: 'PEMERINTAHASING_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHASING_PT_50K_69.png" /> PEMERINTAHASING_PT_50K'
            });
var format_PEMERINTAHAN_AR_50K_70 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_AR_50K_70 = format_PEMERINTAHAN_AR_50K_70.readFeatures(json_PEMERINTAHAN_AR_50K_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_AR_50K_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_AR_50K_70.addFeatures(features_PEMERINTAHAN_AR_50K_70);
var lyr_PEMERINTAHAN_AR_50K_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_AR_50K_70, 
                style: style_PEMERINTAHAN_AR_50K_70,
                popuplayertitle: 'PEMERINTAHAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_AR_50K_70.png" /> PEMERINTAHAN_AR_50K'
            });
var format_KANTORKIRIMPAKET_PT_50K_71 = new ol.format.GeoJSON();
var features_KANTORKIRIMPAKET_PT_50K_71 = format_KANTORKIRIMPAKET_PT_50K_71.readFeatures(json_KANTORKIRIMPAKET_PT_50K_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORKIRIMPAKET_PT_50K_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORKIRIMPAKET_PT_50K_71.addFeatures(features_KANTORKIRIMPAKET_PT_50K_71);
var lyr_KANTORKIRIMPAKET_PT_50K_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORKIRIMPAKET_PT_50K_71, 
                style: style_KANTORKIRIMPAKET_PT_50K_71,
                popuplayertitle: 'KANTORKIRIMPAKET_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORKIRIMPAKET_PT_50K_71.png" /> KANTORKIRIMPAKET_PT_50K'
            });
var format_BENDUNG_PT_50K_72 = new ol.format.GeoJSON();
var features_BENDUNG_PT_50K_72 = format_BENDUNG_PT_50K_72.readFeatures(json_BENDUNG_PT_50K_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENDUNG_PT_50K_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENDUNG_PT_50K_72.addFeatures(features_BENDUNG_PT_50K_72);
var lyr_BENDUNG_PT_50K_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BENDUNG_PT_50K_72, 
                style: style_BENDUNG_PT_50K_72,
                popuplayertitle: 'BENDUNG_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/BENDUNG_PT_50K_72.png" /> BENDUNG_PT_50K'
            });
var format_AIRPORT_PT_50K_73 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_73 = format_AIRPORT_PT_50K_73.readFeatures(json_AIRPORT_PT_50K_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_PT_50K_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_PT_50K_73.addFeatures(features_AIRPORT_PT_50K_73);
var lyr_AIRPORT_PT_50K_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_PT_50K_73, 
                style: style_AIRPORT_PT_50K_73,
                popuplayertitle: 'AIRPORT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_PT_50K_73.png" /> AIRPORT_PT_50K'
            });
var format_BANGUNAN_PT_50K_74 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_74 = format_BANGUNAN_PT_50K_74.readFeatures(json_BANGUNAN_PT_50K_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_74.addFeatures(features_BANGUNAN_PT_50K_74);
var lyr_BANGUNAN_PT_50K_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_50K_74, 
                style: style_BANGUNAN_PT_50K_74,
                popuplayertitle: 'BANGUNAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_74.png" /> BANGUNAN_PT_50K'
            });

lyr_ARENAOLAHRAGA_AR_50K_0.setVisible(true);lyr_KANTORPOS_PT_50K_1.setVisible(true);lyr_CAGARBUDAYA_PT_50K_2.setVisible(true);lyr_DEPOKA_PT_50K_3.setVisible(true);lyr_DEPOMINYAK_PT_50K_4.setVisible(true);lyr_GENLISTRIK_PT_50K_5.setVisible(true);lyr_DERMAGA_PT_50K_6.setVisible(true);lyr_GARDULISTRIK_PT_50K_7.setVisible(true);lyr_KANTORPLN_PT_50K_8.setVisible(true);lyr_WADUK_AR_50K_9.setVisible(true);lyr_WADUK_AR_50K_10.setVisible(true);lyr_WADUK_AR_50K_11.setVisible(true);lyr_TOPONIMI_PT_50K_12.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_13.setVisible(true);lyr_JEMBATAN_PT_50K_14.setVisible(true);lyr_PIPAMINYAK_LN_50K_15.setVisible(true);lyr_AIRPORT_AR_50K_16.setVisible(true);lyr_OLAHAIRMINUM_PT_50K_17.setVisible(true);lyr_RUMAHSAKIT_PT_50K_18.setVisible(true);lyr_RUMAHSAKIT_PT_50K_19.setVisible(true);lyr_OLAHMINYAK_PT_50K_20.setVisible(true);lyr_SARANATELKOM_PT_50K_21.setVisible(true);lyr_GARDUTELPON_PT_50K_22.setVisible(true);lyr_GORONG_PT_50K_23.setVisible(true);lyr_KELOLALIMBAH_PT_50K_24.setVisible(true);lyr_SUMURGAS_PT_50K_25.setVisible(true);lyr_SUMURGAS_PT_50K_26.setVisible(true);lyr_SUMBERAIRMINUM_PT_50K_27.setVisible(true);lyr_SUMBERAIRMINUM_PT_50K_28.setVisible(true);lyr_SUMURMINYAK_PT_50K_29.setVisible(true);lyr_STASIUNPASUT_PT_50K_30.setVisible(true);lyr_STASIUNRADIO_PT_50K_31.setVisible(true);lyr_MENARATELPON_PT_50K_32.setVisible(true);lyr_TAXIWY_PT_50K_33.setVisible(true);lyr_MENARAEKSPLOITMINYAK_PT_50K_34.setVisible(true);lyr_PENDIDIKAN_PT_50K_35.setVisible(true);lyr_RUNWAY_PT_50K_36.setVisible(true);lyr_KELOLALIMBAH_PT_50K_37.setVisible(true);lyr_SUMBERGAS_PT_50K_38.setVisible(true);lyr_LIGHT_PT_50K_39.setVisible(true);lyr_DERMAGA_PT_50K_40.setVisible(true);lyr_HIDRANUMUM_PT_50K_41.setVisible(true);lyr_KANTORSTASKOMBUMI_PT_50K_42.setVisible(true);lyr_STASIUNRADIO_PT_50K_43.setVisible(true);lyr_ANTSTASIUNBUMIK_PT_50K_44.setVisible(true);lyr_TONGGAKKM_PT_50K_45.setVisible(true);lyr_TIANGLISTRIK_PT_50K_46.setVisible(true);lyr_TERUMBUKARANG_AR_50K_47.setVisible(true);lyr_TEROWONG_PT_50K_48.setVisible(true);lyr_TERMINALBUS_PT_50K_49.setVisible(true);lyr_TEMPATSAMPAHAKHIR_AR_50K_50.setVisible(true);lyr_TAXIWY_PT_50K_51.setVisible(true);lyr_TANGGUL_PT_50K_52.setVisible(true);lyr_TAMBANGAN_PT_50K_53.setVisible(true);lyr_KESEHATAN_PT_50K_54.setVisible(true);lyr_RUMAHSAKIT_PT_50K_55.setVisible(true);lyr_TAMBANGAN_LN_50K_56.setVisible(true);lyr_SPBU_PT_50K_57.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_58.setVisible(true);lyr_PANCARTV_PT_50K_59.setVisible(true);lyr_PUSKESMAS_PT_50K_60.setVisible(true);lyr_MAKAM_PT_50K_61.setVisible(true);lyr_INDUSTRI_AR_50K_62.setVisible(true);lyr_INDUSTRI_PT_50K_63.setVisible(true);lyr_SUNGAI_AR_50K_64.setVisible(true);lyr_TIANGLISTRIK_PT_50K_65.setVisible(true);lyr_SPOTHEIGHT_PT_50K_66.setVisible(true);lyr_TOPONIMI_PT_50K_67.setVisible(true);lyr_AGRIKEBUN_AR_50K_68.setVisible(true);lyr_PEMERINTAHASING_PT_50K_69.setVisible(true);lyr_PEMERINTAHAN_AR_50K_70.setVisible(true);lyr_KANTORKIRIMPAKET_PT_50K_71.setVisible(true);lyr_BENDUNG_PT_50K_72.setVisible(true);lyr_AIRPORT_PT_50K_73.setVisible(true);lyr_BANGUNAN_PT_50K_74.setVisible(true);
var layersList = [lyr_ARENAOLAHRAGA_AR_50K_0,lyr_KANTORPOS_PT_50K_1,lyr_CAGARBUDAYA_PT_50K_2,lyr_DEPOKA_PT_50K_3,lyr_DEPOMINYAK_PT_50K_4,lyr_GENLISTRIK_PT_50K_5,lyr_DERMAGA_PT_50K_6,lyr_GARDULISTRIK_PT_50K_7,lyr_KANTORPLN_PT_50K_8,lyr_WADUK_AR_50K_9,lyr_WADUK_AR_50K_10,lyr_WADUK_AR_50K_11,lyr_TOPONIMI_PT_50K_12,lyr_LAYANANKESEHATAN_PT_50K_13,lyr_JEMBATAN_PT_50K_14,lyr_PIPAMINYAK_LN_50K_15,lyr_AIRPORT_AR_50K_16,lyr_OLAHAIRMINUM_PT_50K_17,lyr_RUMAHSAKIT_PT_50K_18,lyr_RUMAHSAKIT_PT_50K_19,lyr_OLAHMINYAK_PT_50K_20,lyr_SARANATELKOM_PT_50K_21,lyr_GARDUTELPON_PT_50K_22,lyr_GORONG_PT_50K_23,lyr_KELOLALIMBAH_PT_50K_24,lyr_SUMURGAS_PT_50K_25,lyr_SUMURGAS_PT_50K_26,lyr_SUMBERAIRMINUM_PT_50K_27,lyr_SUMBERAIRMINUM_PT_50K_28,lyr_SUMURMINYAK_PT_50K_29,lyr_STASIUNPASUT_PT_50K_30,lyr_STASIUNRADIO_PT_50K_31,lyr_MENARATELPON_PT_50K_32,lyr_TAXIWY_PT_50K_33,lyr_MENARAEKSPLOITMINYAK_PT_50K_34,lyr_PENDIDIKAN_PT_50K_35,lyr_RUNWAY_PT_50K_36,lyr_KELOLALIMBAH_PT_50K_37,lyr_SUMBERGAS_PT_50K_38,lyr_LIGHT_PT_50K_39,lyr_DERMAGA_PT_50K_40,lyr_HIDRANUMUM_PT_50K_41,lyr_KANTORSTASKOMBUMI_PT_50K_42,lyr_STASIUNRADIO_PT_50K_43,lyr_ANTSTASIUNBUMIK_PT_50K_44,lyr_TONGGAKKM_PT_50K_45,lyr_TIANGLISTRIK_PT_50K_46,lyr_TERUMBUKARANG_AR_50K_47,lyr_TEROWONG_PT_50K_48,lyr_TERMINALBUS_PT_50K_49,lyr_TEMPATSAMPAHAKHIR_AR_50K_50,lyr_TAXIWY_PT_50K_51,lyr_TANGGUL_PT_50K_52,lyr_TAMBANGAN_PT_50K_53,lyr_KESEHATAN_PT_50K_54,lyr_RUMAHSAKIT_PT_50K_55,lyr_TAMBANGAN_LN_50K_56,lyr_SPBU_PT_50K_57,lyr_ADMINISTRASIKECAMATAN_AR_50K_58,lyr_PANCARTV_PT_50K_59,lyr_PUSKESMAS_PT_50K_60,lyr_MAKAM_PT_50K_61,lyr_INDUSTRI_AR_50K_62,lyr_INDUSTRI_PT_50K_63,lyr_SUNGAI_AR_50K_64,lyr_TIANGLISTRIK_PT_50K_65,lyr_SPOTHEIGHT_PT_50K_66,lyr_TOPONIMI_PT_50K_67,lyr_AGRIKEBUN_AR_50K_68,lyr_PEMERINTAHASING_PT_50K_69,lyr_PEMERINTAHAN_AR_50K_70,lyr_KANTORKIRIMPAKET_PT_50K_71,lyr_BENDUNG_PT_50K_72,lyr_AIRPORT_PT_50K_73,lyr_BANGUNAN_PT_50K_74];
lyr_ARENAOLAHRAGA_AR_50K_0.set('fieldAliases', {'id': 'id', });
lyr_KANTORPOS_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DEPOKA_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'NODEPO': 'NODEPO', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DEPOMINYAK_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GENLISTRIK_PT_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSPLS': 'JNSPLS', 'FCODE': 'FCODE', 'DAYA': 'DAYA', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DERMAGA_PT_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GARDULISTRIK_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JGLGRL': 'JGLGRL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORPLN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_WADUK_AR_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSWDK': 'JNSWDK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_WADUK_AR_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSWDK': 'JNSWDK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_WADUK_AR_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSWDK': 'JNSWDK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TOPONIMI_PT_50K_12.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_LAYANANKESEHATAN_PT_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_JEMBATAN_PT_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PIPAMINYAK_LN_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AIRPORT_AR_50K_16.set('fieldAliases', {'id': 'id', });
lyr_OLAHAIRMINUM_PT_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RUMAHSAKIT_PT_50K_18.set('fieldAliases', {'id': 'id', });
lyr_RUMAHSAKIT_PT_50K_19.set('fieldAliases', {'id': 'id', });
lyr_OLAHMINYAK_PT_50K_20.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SARANATELKOM_PT_50K_21.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSSTK': 'JNSSTK', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GARDUTELPON_PT_50K_22.set('fieldAliases', {'FCODE': 'FCODE', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', });
lyr_GORONG_PT_50K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KELOLALIMBAH_PT_50K_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'JPLTPL': 'JPLTPL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMURGAS_PT_50K_25.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMURGAS_PT_50K_26.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMBERAIRMINUM_PT_50K_27.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMBERAIRMINUM_PT_50K_28.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMURMINYAK_PT_50K_29.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_STASIUNPASUT_PT_50K_30.set('fieldAliases', {'IDENTF': 'IDENTF', 'NAMOBJ': 'NAMOBJ', 'TIPALT': 'TIPALT', 'OCENEA': 'OCENEA', 'LOKASI': 'LOKASI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_STASIUNRADIO_PT_50K_31.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_MENARATELPON_PT_50K_32.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TAXIWY_PT_50K_33.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ARHSF': 'ARHSF', 'MAVBMI': 'MAVBMI', 'DIMHSF': 'DIMHSF', 'PCNHSF': 'PCNHSF', 'SLPHSF': 'SLPHSF', 'DIMSWY': 'DIMSWY', 'CWYHSF': 'CWYHSF', 'DIMSTR': 'DIMSTR', 'OFZHSF': 'OFZHSF', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_MENARAEKSPLOITMINYAK_PT_50K_34.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_50K_35.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_RUNWAY_PT_50K_36.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ARHSF': 'ARHSF', 'MAVBMI': 'MAVBMI', 'DIMHSF': 'DIMHSF', 'PCNHSF': 'PCNHSF', 'SLPHSF': 'SLPHSF', 'DIMSWY': 'DIMSWY', 'CWYHSF': 'CWYHSF', 'DIMSTR': 'DIMSTR', 'OFZHSF': 'OFZHSF', 'REMARK': 'REMARK', 'TIPRWY': 'TIPRWY', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KELOLALIMBAH_PT_50K_37.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'JPLTPL': 'JPLTPL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUMBERGAS_PT_50K_38.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_LIGHT_PT_50K_39.set('fieldAliases', {'TIPLYN': 'TIPLYN', 'IDLLYN': 'IDLLYN', 'FRQRUD': 'FRQRUD', 'KNLVOR': 'KNLVOR', 'HOSRUD': 'HOSRUD', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'TYPLIH': 'TYPLIH', 'CHTLCC': 'CHTLCC', 'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DERMAGA_PT_50K_40.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_HIDRANUMUM_PT_50K_41.set('fieldAliases', {'KAPSTS': 'KAPSTS', 'DEBIT': 'DEBIT', 'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORSTASKOMBUMI_PT_50K_42.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_STASIUNRADIO_PT_50K_43.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ANTSTASIUNBUMIK_PT_50K_44.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TONGGAKKM_PT_50K_45.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TIANGLISTRIK_PT_50K_46.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TERUMBUKARANG_AR_50K_47.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TEROWONG_PT_50K_48.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LENTRW': 'LENTRW', 'JLJTRW': 'JLJTRW', 'REMARK': 'REMARK', 'TIPTRW': 'TIPTRW', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TERMINALBUS_PT_50K_49.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TEMPATSAMPAHAKHIR_AR_50K_50.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TAXIWY_PT_50K_51.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ARHSF': 'ARHSF', 'MAVBMI': 'MAVBMI', 'DIMHSF': 'DIMHSF', 'PCNHSF': 'PCNHSF', 'SLPHSF': 'SLPHSF', 'DIMSWY': 'DIMSWY', 'CWYHSF': 'CWYHSF', 'DIMSTR': 'DIMSTR', 'OFZHSF': 'OFZHSF', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TANGGUL_PT_50K_52.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TAMBANGAN_PT_50K_53.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KESEHATAN_PT_50K_54.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_RUMAHSAKIT_PT_50K_55.set('fieldAliases', {'id': 'id', });
lyr_TAMBANGAN_LN_50K_56.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SPBU_PT_50K_57.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_58.set('fieldAliases', {'id': 'id', });
lyr_PANCARTV_PT_50K_59.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'TGGPNC': 'TGGPNC', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PUSKESMAS_PT_50K_60.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_MAKAM_PT_50K_61.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPMKM': 'TPMKM', });
lyr_INDUSTRI_AR_50K_62.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KLSBBK': 'KLSBBK', 'KLSTKI': 'KLSTKI', 'KLSPRD': 'KLSPRD', 'KLSBMT': 'KLSBMT', 'KLSLOK': 'KLSLOK', 'KLSPRO': 'KLSPRO', 'KLSKOM': 'KLSKOM', 'KLSMOD': 'KLSMOD', 'KLSJNS': 'KLSJNS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_INDUSTRI_PT_50K_63.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KLSBBK': 'KLSBBK', 'KLSTKI': 'KLSTKI', 'KLSPRD': 'KLSPRD', 'KLSBMT': 'KLSBMT', 'KLSLOK': 'KLSLOK', 'KLSPRO': 'KLSPRO', 'KLSKOM': 'KLSKOM', 'KLSMOD': 'KLSMOD', 'KLSJNS': 'KLSJNS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_AR_50K_64.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TIANGLISTRIK_PT_50K_65.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SPOTHEIGHT_PT_50K_66.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'Z': 'Z', });
lyr_TOPONIMI_PT_50K_67.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_AGRIKEBUN_AR_50K_68.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHASING_PT_50K_69.set('fieldAliases', {'FUNBPA': 'FUNBPA', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_AR_50K_70.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KANTORKIRIMPAKET_PT_50K_71.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BENDUNG_PT_50K_72.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_AIRPORT_PT_50K_73.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_PT_50K_74.set('fieldAliases', {'id': 'id', });
lyr_ARENAOLAHRAGA_AR_50K_0.set('fieldImages', {'id': '', });
lyr_KANTORPOS_PT_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DEPOKA_PT_50K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'NODEPO': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DEPOMINYAK_PT_50K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_GENLISTRIK_PT_50K_5.set('fieldImages', {'NAMOBJ': '', 'JNSPLS': '', 'FCODE': '', 'DAYA': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DERMAGA_PT_50K_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_GARDULISTRIK_PT_50K_7.set('fieldImages', {'NAMOBJ': '', 'JGLGRL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KANTORPLN_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_WADUK_AR_50K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSWDK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_WADUK_AR_50K_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSWDK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_WADUK_AR_50K_11.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSWDK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TOPONIMI_PT_50K_12.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'STATUS': 'TextEdit', });
lyr_LAYANANKESEHATAN_PT_50K_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_JEMBATAN_PT_50K_14.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PIPAMINYAK_LN_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_AIRPORT_AR_50K_16.set('fieldImages', {'id': '', });
lyr_OLAHAIRMINUM_PT_50K_17.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_RUMAHSAKIT_PT_50K_18.set('fieldImages', {'id': '', });
lyr_RUMAHSAKIT_PT_50K_19.set('fieldImages', {'id': '', });
lyr_OLAHMINYAK_PT_50K_20.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SARANATELKOM_PT_50K_21.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'JNSSTK': '', 'LCODE': '', 'METADATA': '', });
lyr_GARDUTELPON_PT_50K_22.set('fieldImages', {'FCODE': '', 'REMARK': '', 'LCODE': '', 'METADATA': '', 'NAMOBJ': '', 'SRS_ID': '', });
lyr_GORONG_PT_50K_23.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'FCODE': '', 'LCODE': '', 'METADATA': '', });
lyr_KELOLALIMBAH_PT_50K_24.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'JPLTPL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMURGAS_PT_50K_25.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMURGAS_PT_50K_26.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMBERAIRMINUM_PT_50K_27.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMBERAIRMINUM_PT_50K_28.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMURMINYAK_PT_50K_29.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_STASIUNPASUT_PT_50K_30.set('fieldImages', {'IDENTF': '', 'NAMOBJ': '', 'TIPALT': '', 'OCENEA': '', 'LOKASI': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_STASIUNRADIO_PT_50K_31.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_MENARATELPON_PT_50K_32.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TAXIWY_PT_50K_33.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ARHSF': '', 'MAVBMI': '', 'DIMHSF': '', 'PCNHSF': '', 'SLPHSF': '', 'DIMSWY': '', 'CWYHSF': '', 'DIMSTR': '', 'OFZHSF': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_MENARAEKSPLOITMINYAK_PT_50K_34.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PENDIDIKAN_PT_50K_35.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_RUNWAY_PT_50K_36.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ARHSF': '', 'MAVBMI': '', 'DIMHSF': '', 'PCNHSF': '', 'SLPHSF': '', 'DIMSWY': '', 'CWYHSF': '', 'DIMSTR': '', 'OFZHSF': '', 'REMARK': '', 'TIPRWY': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KELOLALIMBAH_PT_50K_37.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'JPLTPL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUMBERGAS_PT_50K_38.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_LIGHT_PT_50K_39.set('fieldImages', {'TIPLYN': '', 'IDLLYN': '', 'FRQRUD': '', 'KNLVOR': '', 'HOSRUD': '', 'ELEVAS': '', 'REMARK': '', 'TYPLIH': '', 'CHTLCC': '', 'FCODE': '', 'NAMOBJ': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DERMAGA_PT_50K_40.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_HIDRANUMUM_PT_50K_41.set('fieldImages', {'KAPSTS': '', 'DEBIT': '', 'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KANTORSTASKOMBUMI_PT_50K_42.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_STASIUNRADIO_PT_50K_43.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ANTSTASIUNBUMIK_PT_50K_44.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TONGGAKKM_PT_50K_45.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TIANGLISTRIK_PT_50K_46.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TERUMBUKARANG_AR_50K_47.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TEROWONG_PT_50K_48.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LENTRW': '', 'JLJTRW': '', 'REMARK': '', 'TIPTRW': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TERMINALBUS_PT_50K_49.set('fieldImages', {'NAMOBJ': '', 'KODTRM': '', 'MGTTRM': '', 'STATRM': '', 'KATTRM': '', 'TIPTRM': '', 'LUAS': '', 'THBTRM': '', 'THOTRM': '', 'THSTRM': '', 'KONKON': '', 'JLBTRM': '', 'KEBTRM': '', 'JLDTRM': '', 'KEDTRM': '', 'PARTRM': '', 'KEPTRM': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TEMPATSAMPAHAKHIR_AR_50K_50.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TAXIWY_PT_50K_51.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ARHSF': 'TextEdit', 'MAVBMI': 'TextEdit', 'DIMHSF': 'TextEdit', 'PCNHSF': 'TextEdit', 'SLPHSF': 'TextEdit', 'DIMSWY': 'TextEdit', 'CWYHSF': 'TextEdit', 'DIMSTR': 'TextEdit', 'OFZHSF': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_TANGGUL_PT_50K_52.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TAMBANGAN_PT_50K_53.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KESEHATAN_PT_50K_54.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_RUMAHSAKIT_PT_50K_55.set('fieldImages', {'id': '', });
lyr_TAMBANGAN_LN_50K_56.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SPBU_PT_50K_57.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_58.set('fieldImages', {'id': 'TextEdit', });
lyr_PANCARTV_PT_50K_59.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'TGGPNC': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PUSKESMAS_PT_50K_60.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_MAKAM_PT_50K_61.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPMKM': '', });
lyr_INDUSTRI_AR_50K_62.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KLSBBK': '', 'KLSTKI': '', 'KLSPRD': '', 'KLSBMT': '', 'KLSLOK': '', 'KLSPRO': '', 'KLSKOM': '', 'KLSMOD': '', 'KLSJNS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_INDUSTRI_PT_50K_63.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KLSBBK': '', 'KLSTKI': '', 'KLSPRD': '', 'KLSBMT': '', 'KLSLOK': '', 'KLSPRO': '', 'KLSKOM': '', 'KLSMOD': '', 'KLSJNS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUNGAI_AR_50K_64.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TIANGLISTRIK_PT_50K_65.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SPOTHEIGHT_PT_50K_66.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ELEVAS': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'Z': 'TextEdit', });
lyr_TOPONIMI_PT_50K_67.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'STATUS': 'TextEdit', });
lyr_AGRIKEBUN_AR_50K_68.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHASING_PT_50K_69.set('fieldImages', {'FUNBPA': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'LCODE': '', 'SRS_ID': '', 'METADATA': '', });
lyr_PEMERINTAHAN_AR_50K_70.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KANTORKIRIMPAKET_PT_50K_71.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BENDUNG_PT_50K_72.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_AIRPORT_PT_50K_73.set('fieldImages', {'KOBDMI': '', 'KDICAO': '', 'KDIATA': '', 'ELEVAS': '', 'MAVBMI': '', 'LGTBMI': '', 'KLSBMI': '', 'ADABMI': '', 'ADRBMI': '', 'REMARK': '', 'TIPAIP': '', 'TIPLOK': '', 'NAMOBJ': '', 'FCODE': '', 'KATKBM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BANGUNAN_PT_50K_74.set('fieldImages', {'id': '', });
lyr_ARENAOLAHRAGA_AR_50K_0.set('fieldLabels', {'id': 'no label', });
lyr_KANTORPOS_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_CAGARBUDAYA_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DEPOKA_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'NODEPO': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DEPOMINYAK_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GENLISTRIK_PT_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSPLS': 'no label', 'FCODE': 'no label', 'DAYA': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DERMAGA_PT_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GARDULISTRIK_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JGLGRL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORPLN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_WADUK_AR_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSWDK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_WADUK_AR_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSWDK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_WADUK_AR_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSWDK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TOPONIMI_PT_50K_12.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_JEMBATAN_PT_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PIPAMINYAK_LN_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AIRPORT_AR_50K_16.set('fieldLabels', {'id': 'no label', });
lyr_OLAHAIRMINUM_PT_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RUMAHSAKIT_PT_50K_18.set('fieldLabels', {'id': 'no label', });
lyr_RUMAHSAKIT_PT_50K_19.set('fieldLabels', {'id': 'no label', });
lyr_OLAHMINYAK_PT_50K_20.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SARANATELKOM_PT_50K_21.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSSTK': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GARDUTELPON_PT_50K_22.set('fieldLabels', {'FCODE': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', });
lyr_GORONG_PT_50K_23.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KELOLALIMBAH_PT_50K_24.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'JPLTPL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMURGAS_PT_50K_25.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMURGAS_PT_50K_26.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMBERAIRMINUM_PT_50K_27.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMBERAIRMINUM_PT_50K_28.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMURMINYAK_PT_50K_29.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_STASIUNPASUT_PT_50K_30.set('fieldLabels', {'IDENTF': 'no label', 'NAMOBJ': 'no label', 'TIPALT': 'no label', 'OCENEA': 'no label', 'LOKASI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_STASIUNRADIO_PT_50K_31.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_MENARATELPON_PT_50K_32.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TAXIWY_PT_50K_33.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ARHSF': 'no label', 'MAVBMI': 'no label', 'DIMHSF': 'no label', 'PCNHSF': 'no label', 'SLPHSF': 'no label', 'DIMSWY': 'no label', 'CWYHSF': 'no label', 'DIMSTR': 'no label', 'OFZHSF': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_MENARAEKSPLOITMINYAK_PT_50K_34.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_50K_35.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_RUNWAY_PT_50K_36.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ARHSF': 'no label', 'MAVBMI': 'no label', 'DIMHSF': 'no label', 'PCNHSF': 'no label', 'SLPHSF': 'no label', 'DIMSWY': 'no label', 'CWYHSF': 'no label', 'DIMSTR': 'no label', 'OFZHSF': 'no label', 'REMARK': 'no label', 'TIPRWY': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KELOLALIMBAH_PT_50K_37.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'JPLTPL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUMBERGAS_PT_50K_38.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_LIGHT_PT_50K_39.set('fieldLabels', {'TIPLYN': 'no label', 'IDLLYN': 'no label', 'FRQRUD': 'no label', 'KNLVOR': 'no label', 'HOSRUD': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'TYPLIH': 'no label', 'CHTLCC': 'no label', 'FCODE': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DERMAGA_PT_50K_40.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_HIDRANUMUM_PT_50K_41.set('fieldLabels', {'KAPSTS': 'no label', 'DEBIT': 'no label', 'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORSTASKOMBUMI_PT_50K_42.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_STASIUNRADIO_PT_50K_43.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_ANTSTASIUNBUMIK_PT_50K_44.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TONGGAKKM_PT_50K_45.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TIANGLISTRIK_PT_50K_46.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TERUMBUKARANG_AR_50K_47.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TEROWONG_PT_50K_48.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LENTRW': 'no label', 'JLJTRW': 'no label', 'REMARK': 'no label', 'TIPTRW': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TERMINALBUS_PT_50K_49.set('fieldLabels', {'NAMOBJ': 'no label', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TEMPATSAMPAHAKHIR_AR_50K_50.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TAXIWY_PT_50K_51.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ARHSF': 'no label', 'MAVBMI': 'no label', 'DIMHSF': 'no label', 'PCNHSF': 'no label', 'SLPHSF': 'no label', 'DIMSWY': 'no label', 'CWYHSF': 'no label', 'DIMSTR': 'no label', 'OFZHSF': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TANGGUL_PT_50K_52.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TAMBANGAN_PT_50K_53.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KESEHATAN_PT_50K_54.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_RUMAHSAKIT_PT_50K_55.set('fieldLabels', {'id': 'no label', });
lyr_TAMBANGAN_LN_50K_56.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SPBU_PT_50K_57.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_58.set('fieldLabels', {'id': 'no label', });
lyr_PANCARTV_PT_50K_59.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'TGGPNC': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PUSKESMAS_PT_50K_60.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_MAKAM_PT_50K_61.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPMKM': 'no label', });
lyr_INDUSTRI_AR_50K_62.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_INDUSTRI_PT_50K_63.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUNGAI_AR_50K_64.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TIANGLISTRIK_PT_50K_65.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SPOTHEIGHT_PT_50K_66.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'Z': 'no label', });
lyr_TOPONIMI_PT_50K_67.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_AGRIKEBUN_AR_50K_68.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMERINTAHASING_PT_50K_69.set('fieldLabels', {'FUNBPA': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_AR_50K_70.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KANTORKIRIMPAKET_PT_50K_71.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BENDUNG_PT_50K_72.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_AIRPORT_PT_50K_73.set('fieldLabels', {'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KATKBM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNAN_PT_50K_74.set('fieldLabels', {'id': 'no label', });
lyr_BANGUNAN_PT_50K_74.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});