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
                "type": "group",
                "icon": gaode_img,
                "layers": [
                    {
                        "name": "底图",
                        "type": "gaode",
                        "layer": "img_d"
                    },
                    {
                        "name": "注记",
                        "type": "gaode",
                        "layer": "img_z"
                    }
                ]
            },
            {
                "id": 4,
                "name": "高德电子",
                "type": "gaode",
                "icon": gaode_vec,
                "layer": "vec"
            },
            {
                "id": 10,
                "name": "百度影像",
                "type": "group",
                "icon": bd_img,
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d"
                    },
                    {
                        "name": "注记",
                        "type": "baidu",
                        "layer": "img_z"
                    }
                ]
            },
            {
                "id": 5,
                "name": "百度电子",
                "icon": bd_vec,
                "type": "baidu",
                "layer": "vec"
            },
            {
                "id": 6,
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
                "id": 7,
                "name": "腾讯电子",
                "icon": gaode_vec,
                "type": "tencent",
                "layer": "vec"
            },
            {
                "id": 8,
                "name": "ArcGIS影像",
                "icon": esriWorldImagery,
                "type": "xyz",
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                "enablePickFeatures": false
            },
            {
                "id": 9,
                "name": "微软影像",
                "icon": bingAerial,
                "type": "bing",
                "layer": "Aerial"
            },
            {
                "id": 10,
                "name": "OSM地图",
                "type": "xyz",
                "icon": osm,
                "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "subdomains": "abc"
            },
            {
                "id": 11,
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
                "id": 12,
                "name": "蓝色底图",
                "icon": bd_c_midnight,
                "type": "xyz",
                "url": "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                "chinaCRS": "GCJ02",
                "enablePickFeatures": false
            },
            {
                "id": 13,
                "name": "黑色底图",
                "icon": bd_c_drak,
                "type": "tencent",
                "layer": "custom",
                "style": "4"
            },
        ]
}
