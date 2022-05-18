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
                "id": 2021,
                "pid": 10,
                "name": "天地图影像",
                "icon": tdt_img,
                "type": "group",
                "layers": [
                    {
                        "name": "底图",
                        "type": "tdt",
                        "layer": "img_d"
                    },
                    {
                        "name": "注记",
                        "type": "tdt",
                        "layer": "img_z"
                    }
                ],
                "show": true
            },
            {
                "pid": 10,
                "name": "天地图电子",
                "icon": tdt_vec,
                "type": "group",
                "layers": [
                    {
                        "name": "底图",
                        "type": "tdt",
                        "layer": "vec_d"
                    },
                    {
                        "name": "注记",
                        "type": "tdt",
                        "layer": "vec_z"
                    }
                ]
            },
            {
                "pid": 10,
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
                "pid": 10,
                "name": "高德电子",
                "type": "gaode",
                "icon": gaode_vec,
                "layer": "vec"
            },
            {
                "pid": 10,
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
                "pid": 10,
                "name": "百度电子",
                "icon": bd_vec,
                "type": "baidu",
                "layer": "vec"
            },
            {
                "pid": 10,
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
                "pid": 10,
                "name": "腾讯电子",
                "icon": gaode_vec,
                "type": "tencent",
                "layer": "vec"
            },
            {
                "pid": 10,
                "name": "ArcGIS影像",
                "icon": esriWorldImagery,
                "type": "xyz",
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                "enablePickFeatures": false
            },
            {
                "pid": 10,
                "name": "微软影像",
                "icon": bingAerial,
                "type": "bing",
                "layer": "Aerial"
            },
            {
                "pid": 10,
                "name": "OSM地图",
                "type": "xyz",
                "icon": osm,
                "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "subdomains": "abc"
            },
            {
                "id": 2017,
                "pid": 10,
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
                "pid": 10,
                "name": "蓝色底图",
                "icon": bd_c_midnight,
                "type": "xyz",
                "url": "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                "chinaCRS": "GCJ02",
                "enablePickFeatures": false
            },
            {
                "pid": 10,
                "name": "黑色底图",
                "icon": bd_c_drak,
                "type": "tencent",
                "layer": "custom",
                "style": "4"
            },
        ]
}
