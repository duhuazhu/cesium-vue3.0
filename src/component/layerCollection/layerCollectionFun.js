/**
 * Description: 底图点击切换功能
 * Author: duhuazhu
 * Date: 2022/5/20
 */

import {baseLayers} from "@/component/layerCollection/config";
import {
    WebMapTileServiceImageryProvider,
    UrlTemplateImageryProvider,
    ArcGisMapServerImageryProvider,
    BingMapsImageryProvider,
    BingMapsStyle,
} from "cesium";
import BaiduImageryProvider from "@/component/layerCollection/BaiduImageryProvider";
/**
 *
 * @param id 传入唯一标识
 * @param viewer 传入Viewer
 */
export const add = (id, viewer) =>{
    let LayerGroups;
    //移除所有图层
    remove(viewer);
    //通过id返回查询layer
    if(id){
        LayerGroups = inquireMapId(id);
    }else{
        // 默认查询
        LayerGroups =  inquireMapDefaultShow();
    }
    addPivotal(LayerGroups,viewer);
};
/**
 *
 * @param LayerGroups  传入图层组
 * @param viewer     传入Viewer 对象
 */
export const addPivotal = (LayerGroups, viewer)=>{
    let imageryProvider;
    // 判断layer 是否还要子集
    if (LayerGroups.layers && LayerGroups.layers.length >= 1) {
        LayerGroups.layers.forEach((item, index) => {
            switch (LayerGroups.type) {
                //天地图
                case "tdt":
                    let url = LayerGroups.url + item.layer + "/" + item.request + LayerGroups.token;
                    imageryProvider = new WebMapTileServiceImageryProvider({
                        url,
                        ...item.option,
                    });
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "google":
                case  "OSM":
                case "gaode":
                    // 添加高德图
                    imageryProvider = new UrlTemplateImageryProvider({
                        ...item.option,
                    });
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "baidu":
                    imageryProvider = new BaiduImageryProvider({
                        ...item.option,
                    });
                    imageryProvider.hasAlphaChannel = true;
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "Tencent":
                    imageryProvider = new UrlTemplateImageryProvider({
                        ...item.option,
                        customTags: {
                            sx: function (imageryProvider, x, y, level) {
                                return x >> 4;
                            },
                            sy: function (imageryProvider, x, y, level) {
                                return ((1 << level) - y) >> 4;
                            },
                        },
                    });
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "ArcGisMap":
                    imageryProvider = new ArcGisMapServerImageryProvider({
                        ...item.option,
                    });
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "BingMapsImagery":
                    imageryProvider = new BingMapsImageryProvider({
                        ...item.option,
                        mapStyle: BingMapsStyle.AERIAL,
                    });
                    viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "painting":
                    imageryProvider = new UrlTemplateImageryProvider({
                        ...item.option,
                    });
                    let imagery = viewer.imageryLayers.addImageryProvider(imageryProvider);
                    for (const at in item.colourScheme) {
                        imagery[at] = item.colourScheme[at];
                    }
                    break;
            }
        });
    }
    LayerGroups.show = true;
}
/**
 *
 * @param viewer 添加之前移除图层
 */
export const remove = (viewer)=>{
    viewer.imageryLayers._layers.forEach((item) =>
        viewer.imageryLayers.remove(item)
    );
}
/**
 *
 * @param id 传入id
 * @returns {*}  返回查询到整个layer对象
 */
export const inquireMapId = (id)=>{
    return baseLayers.find((item) => {
        item.show = false;
        return item.id === id
    });
}
/**
 *
 * @returns {*} 返回属性show为true的图层对象
 */
export const inquireMapDefaultShow = ()=>{
    return baseLayers.find((item)=>{
        return item.show =true;
    })
}
