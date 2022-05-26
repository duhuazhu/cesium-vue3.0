/**
 * Description:底图切换功能
 * Author: duhuazhu
 * Date: 2022/5/16
 */
import tdt_img from '@/assets/images/baseLayer/tdt_img.png';
import tdt_vec from '@/assets/images/baseLayer/tdt_vec.png';
import gaode_img from '@/assets/images/baseLayer/gaode_img.png';
import gaode_vec from '@/assets/images/baseLayer/gaode_vec.png';
import bd_img from '@/assets/images/baseLayer/bd-img.png';
import bd_vec from '@/assets/images/baseLayer/bd-vec.png';
import tencent_img from '@/assets/images/baseLayer/tencent_img.png';
import tencent_vec from '@/assets/images/baseLayer/tencent_vec.png';
import esriWorldImagery from '@/assets/images/baseLayer/esriWorldImagery.png';
import bingAerial from '@/assets/images/baseLayer/bingAerial.png';
import osm from '@/assets/images/baseLayer/osm.png';
import osm_dark from '@/assets/images/baseLayer/osm_dark.png';
import gaode_paint from '@/assets/images/baseLayer/painting.png';
import bd_drak from '@/assets/images/baseLayer/bd-c-dark.png';
import geoq_blue from '@/assets/images/baseLayer/geoq_blue.png';
import geoq_gray from '@/assets/images/baseLayer/geoq_gray.png';
import geoq_water from '@/assets/images/baseLayer/geoq_water.png';
import geoq_colours from '@/assets/images/baseLayer/geoq_colours.png';
import geoq_eng from '@/assets/images/baseLayer/geoq_eng.png';
import google_img from '@/assets/images/baseLayer/google_img.png';
import {tdt_token} from "@/config";
import { nanoid } from 'nanoid'
export const baseLayer= [
       /*         {
                    "id": 10,
                    "name": "地图底图",
                    "type": "group"
                },*/
            {
                "id": nanoid(6),
                "name": "天地图影像",
                "icon": tdt_img,
                "type": "tdt",
                "token":tdt_token,
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
                "id": nanoid(6),
                "name": "天地图电子",
                "type": "tdt",
                "token":tdt_token,
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
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "高德影像",
                "type": "gaode",
                "icon": gaode_img,
                "layers": [
                    {
                        "name": "底图",
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
                        "option":{
                            "url": "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
                            "layer": "tdtAnnoLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "高德电子",
                "type": "gaode",
                "icon": gaode_vec,
                "layers": [
                    {
                        "name": "底图",
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
                        "option":{
                            "url": "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
                            "layer": "tdtAnnoLayer",
                            "style": "default",
                            "format": "image/jpeg",
                            "tileMatrixSetID": "GoogleMapsCompatible",
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "百度影像",
                "type": "baidu",
                "icon": bd_img,
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://maponline{s}.bdimg.com/starpic/?u=x%3D{x}%3By%3D{y}%3Bz%3D{z}%3Bv%3D009%3Btype%3Dsate&qt=satepc&app=webearth2&udt=20220519&fm=46&v=009"
                        }
                    },
                    {
                        "name": "标注",
                        "option":{
                            url: "http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=017",
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "百度电子",
                "type": "baidu",
                "icon": bd_vec,
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&udt=20220519&scaler=1&showtext=1"
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "腾讯影像",
                "icon": tencent_img,
                "type": "Tencent",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=244",
                        }
                    },
                    {
                        "name": "注记",
                        "option":{
                            url:"https://rt0.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=2&scene=0"
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "腾讯电子",
                "icon": tencent_vec,
                "type": "Tencent",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://rt3.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=1&version=297"
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "ArcGIS影像",
                "icon": esriWorldImagery,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            "url":"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "微软影像",
                "icon": bingAerial,
                "type": "BingMapsImagery",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://dev.virtualearth.net",
                            key: "AqM_f-xO0YW-52FSEnMmZJK__RaOgLWrvYAwbv6_BCbu6oFegBVk4LzzIxevoRHQ",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "OSM地图",
                "type": "OSM",
                "icon": osm,
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: 'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                            subdomains: ["a", "b", "c", "d"],
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "OSM暗黑",
                "type": "OSM",
                "icon": osm_dark,
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png ",
                            subdomains: ["a", "b", "c", "d"],
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "高德水墨",
                "type": "painting",
                "icon": gaode_paint,
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "url": "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
                        },
                        "colourScheme":{
                            "brightness": 0.6,
                            "contrast": 1.8,
                            "gamma": 0.3,
                            "hue": 1,
                            "saturation": 0,
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "百度暗黑",
                "icon": bd_drak,
                "type": "baidu",
                "layers": [
                    {
                        "name": "暗色百度底图",
                        "option":{
                            url: "http://api2.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=dark"
                        }
                    }
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "GeoQ蓝黑",
                "icon": geoq_blue,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "GeoQ灰色",
                "icon": geoq_gray,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "GeoQ水系",
                "icon": geoq_water,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "GeoQ彩色",
                "icon": geoq_colours,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "GeoQ英文",
                "icon": geoq_eng,
                "type": "ArcGisMap",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            "enablePickFeatures": false,
                            url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer/",
                        }
                    },
                ],
                "show": false
            },
            {
                "id": nanoid(6),
                "name": "谷歌影像(国内已禁)",
                "icon": google_img,
                "type": "google",
                "layers": [
                    {
                        "name": "底图",
                        "option":{
                            url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
                        }
                    },
                ],
                "show": false
            },
        ]

