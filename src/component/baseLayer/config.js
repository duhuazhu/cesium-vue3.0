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
import painting from '@/assets/images/baseLayer/painting.png';
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
                "type": "tdt",
                "token":"13c73c2f430e97a4e5b1f768bef733a0",
                "url": "http://t0.tianditu.com/",
                "layers": [
                    {
                        "name": "底图",
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
                "type": "tdt",
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
                "type": "gaode",
                "icon": gaode_img,
                "layers": [
                    {
                        "name": "底图",
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
                "type": "gaode",
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
                "type": "baidu",
                "icon": bd_img,
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "https://maponline{s}.bdimg.com/starpic/?u=x%3D{x}%3By%3D{y}%3Bz%3D{z}%3Bv%3D009%3Btype%3Dsate&qt=satepc&app=webearth2&udt=20220519&fm=46&v=009"
                        }
                    },
                    {
                        "name": "标注",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=017",
                        }
                    }
                ]
            },
            {
                "id": 6,
                "name": "百度电子",
                "type": "baidu",
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
                "type": "Tencent",
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=244",
                        }
                    },
                    {
                        "name": "注记",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url:"https://rt0.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=2&scene=0"
                        }
                    },
                ]
            },
            {
                "id": 8,
                "name": "腾讯电子",
                "icon": gaode_vec,
                "type": "Tencent",
                "layers": [
                    {
                        "name": "底图",
                        "type": "baidu",
                        "layer": "img_d",
                        "option":{
                            url: "https://rt3.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=1&version=297"
                        }
                    },
                ]
            },
            {
                "id": 9,
                "name": "ArcGIS影像",
                "icon": esriWorldImagery,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "layer": "img_d",
                        "option":{
                            "enablePickFeatures": false,
                            // url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",  蓝色的
                            "url":"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                        }
                    },
                ]
            },
            {
                "id": 10,
                "name": "微软影像",
                "icon": bingAerial,
                "type": "BingMapsImagery",
                "layers": [
                    {
                        "name": "底图",
                        "layer": "img_d",
                        "option":{
                            url: "https://dev.virtualearth.net", //’'https://dev.virtualearth.net',
                            key: "AqM_f-xO0YW-52FSEnMmZJK__RaOgLWrvYAwbv6_BCbu6oFegBVk4LzzIxevoRHQ",
                        }
                    },
                ]
            },
            {
                "id": 11,
                "name": "OSM地图",
                "type": "OSM",
                "icon": osm,
                "layers": [
                    {
                        "name": "底图",
                        "layer": "img_d",
                        "option":{
                            url: 'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                            subdomains: ["a", "b", "c", "d"],
                        }
                    },
                ]
            },
            {
                "id": 12,
                "name": "水墨底图",
                "type": "painting",
                "icon": painting,
                "layers": [
                    {
                        "name": "底图",
                        "layer": "img_d",
                        "option":{
                            "url": "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
                        },
                        "colourScheme":{
                            "invertColor": true,
                            "filterColor": "#4e70a6",
                            "brightness": 0.6,
                            "contrast": 1.8,
                            "gamma": 0.3,
                            "hue": 1,
                            "saturation": 0,
                        }
                    },
                ]
            },
            {
                "id": 13,
                "name": "蓝色底图",
                "icon": bd_c_midnight,
                "type": "ArcGisMap",
                "chinaCRS": "GCJ02",
                "layers": [
                    {
                        "name": "底图",
                        "layer": "img_d",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
                        }
                    },
                ]
            },
            {
                "id": 14,
                "name": "黑色底图",
                "icon": bd_c_drak,
                "layer": "custom",
                "type": "baidu",
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
