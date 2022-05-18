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
    baseLayer:[
        {
            mapName:"天地图影像",
            img:tdt_img,
            url:"",
        },
        {
            mapName:"天地图电子",
            img:tdt_vec,
            url:"",
        },
        {
            mapName:"高德影像",
            img:gaode_img,
            url:"",
        },
        {
            mapName:"高德电子",
            img:gaode_vec,
            url:"",
        },
        {
            mapName:"百度影像",
            img:bd_img,
            url:"",
        },
        {
            mapName:"百度电子",
            img:bd_vec,
            url:"",
        },
        {
            mapName:"腾讯影像",
            img:gaode_img,
            url:"",
        },
        {
            mapName:"腾讯电子",
            img:gaode_vec,
            url:"",
        },
        {
            mapName:"ArcGIS影像",
            img:esriWorldImagery,
            url:"",
        },
        {
            mapName:"微软影像",
            img:bingAerial,
            url:"",
        },
        {
            mapName:"OSM地图",
            img:osm,
            url:"",
        },
        {
            mapName:"暗色底图",
            img:blackMarble,
            url:"",
        },
        {
            mapName:"蓝色底图",
            img:bd_c_midnight,
            url:"",
        },
        {
            mapName:"黑色底图",
            img:bd_c_drak,
            url:"",
        }
    ]
}
