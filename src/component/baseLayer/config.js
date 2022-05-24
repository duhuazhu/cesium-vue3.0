/**
 * Description:底图切换
 * Author: duhuazhu
 * Date: 2022/5/16
 */
import tdt_img from '@/assets/images/baseLayer/tdt_img.png';
import tdt_vec from '@/assets/images/baseLayer/tdt_vec.png';
import gaode_img from '@/assets/images/baseLayer/gaode_img.png';
import gaode_vec from '@/assets/images/baseLayer/gaode_vec.png';
import bd_img from '@/assets/images/baseLayer/bd-img.png';
import bd_vec from '@/assets/images/baseLayer/bd-vec.png';
import esriWorldImagery from '@/assets/images/baseLayer/esriWorldImagery.png';
import bingAerial from '@/assets/images/baseLayer/bingAerial.png';
import osm from '@/assets/images/baseLayer/osm.png';
import blackMarble from '@/assets/images/baseLayer/blackMarble.png';
import bd_c_midnight from '@/assets/images/baseLayer/bd-c-midnight.png';
import bd_c_drak from '@/assets/images/baseLayer/bd-c-dark.png';

export default {
    baseLayer: [
       /*         {
                    "id": 10,
                    "name": "地图底图",
                    "type": "group"
                },*/
            {
                "id": 1,
                "name": "天地图影像",
                "icon": tdt_img,
                "type": "WebMapTileServiceImageryProvider",
                "token":"13c73c2f430e97a4e5b1f768bef733a0",
                "url": "http://t0.tianditu.com/",
                "layers": [
                    {
                        "name": "底图",
                        "type": "tdt",
                        "layer": "img_w",
                        "request":"wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=",
                        "option":{
                            "layer": "tdtImgLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    },
                    {
                        "name": "注记",
                        "type": "tdt",
                        "layer": "cia_w",
                        "request":"wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=",
                        "option":{
                            "layer": "tdtCiaLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible"
                        }
                    }
                ],
                "show": true
            },
            {
                "id": 2,
                "name": "天地图电子",
                "type": "WebMapTileServiceImageryProvider",
                "token":"13c73c2f430e97a4e5b1f768bef733a0",
                "url": "http://t0.tianditu.com/",
                "icon": tdt_vec,
                "layers": [
                    {
                        "name": "底图",
                        "type": "tdt",
                        "layer": "vec_w",
                        "request":"wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=",
                        "option":{
                            "layer": "tdtVecLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    },
                    {
                        "name": "注记",
                        "type": "tdt",
                        "layer": "cva_w",
                        "request":"wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=",
                        "option":{
                            "layer": "tdtCvaLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "高德影像",
                "type": "UrlTemplateImageryProvider",
                "icon": gaode_img,
                "layers": [
                    {
                        "name": "底图",
                        "type": "gaode",
                        "layer": "img_d",
                        "option":{
                            "url": "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
                            "layer": "tdtVecBasicLayer",
                            "style": "default",
                            "format": "image/png",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    },
                    {
                        "name": "注记",
                        "type": "gaode",
                        "layer": "img_z",
                        "option":{
                            "url": "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
                            "layer": "tdtAnnoLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    }
                ]
            },
            {
                "id": 4,
                "name": "高德电子",
                "type": "UrlTemplateImageryProvider",
                "icon": gaode_vec,
                "layers": [
                    {
                        "name": "底图",
                        "type": "gaode",
                        "layer": "img_d",
                        "option":{
                            "url": "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
                            "layer": "tdtVecBasicLayer",
                            "style": "default",
                            "format": "image/png",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    },
                    {
                        "name": "注记",
                        "type": "gaode",
                        "layer": "img_z",
                        "option":{
                            "url": "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
                            "layer": "tdtAnnoLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    }
                ]
            },
            {
                "id": 5,
                "name": "百度影像",
                "type": "BaiduImageryProvider",
                "icon": bd_img,
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "https://maponline{s}.bdimg.com/starpic/?u=x%3D{x}%3By%3D{y}%3Bz%3D{z}%3Bv%3D009%3Btype%3Dsate&qt=satepc&app=webearth2&udt=20220519&fm=46&v=009"
                        }
                    }
                ]
            },
            {
                "id": 6,
                "name": "百度电子",
                "type": "BaiduImageryProvider",
                "icon": bd_vec,
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&udt=20220519&scaler=1&showtext=1"
                        }
                    }
                ]
            },
            {
                "id": 7,
                "name": "腾讯影像",
                "icon": gaode_img,
                "type": "group",
                "layers": [
                    {
                        "name": "底图",
                        "type": "tencent",
                        "layer": "img_d"
                    },
                    {
                        "name": "注记",
                        "type": "tencent",
                        "layer": "img_z"
                    }
                ]
            },
            {
                "id": 8,
                "name": "腾讯电子",
                "icon": gaode_vec,
                "type": "tencent",
                "layer": "vec"
            },
            {
                "id": 9,
                "name": "ArcGIS影像",
                "icon": esriWorldImagery,
                "type": "xyz",
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                "enablePickFeatures": false
            },
            {
                "id": 10,
                "name": "微软影像",
                "icon": bingAerial,
                "type": "bing",
                "layer": "Aerial"
            },
            {
                "id": 11,
                "name": "OSM地图",
                "type": "xyz",
                "icon": osm,
                "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "subdomains": "abc"
            },
            {
                "id": 12,
                "name": "暗色底图",
                "type": "gaode",
                "icon": blackMarble,
                "layer": "vec",
                "invertColor": true,
                "filterColor": "#4e70a6",
                "brightness": 0.6,
                "contrast": 1.8,
                "gamma": 0.3,
                "hue": 1,
                "saturation": 0
            },
            {
                "id": 13,
                "name": "蓝色底图",
                "icon": bd_c_midnight,
                "type": "xyz",
                "url": "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                "chinaCRS": "GCJ02",
                "enablePickFeatures": false
            },
            {
                "id": 14,
                "name": "黑色底图",
                "icon": bd_c_drak,
                "layer": "custom",
                "type": "BaiduImageryProvider",
                "layers": [
                    {
                        "name": "暗色百度底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=dark"
                        }
                    }
                ]
            },
        ]
}
