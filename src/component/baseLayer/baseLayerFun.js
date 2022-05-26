/**
 * Description: 底图点击切换功能
 * Author: duhuazhu
 * Date: 2022/5/20
 */

import {baseLayer} from "@/component/baseLayer/config";
import {
    WebMapTileServiceImageryProvider,
    UrlTemplateImageryProvider,
    ArcGisMapServerImageryProvider,
    BingMapsImageryProvider,
    BingMapsStyle,
} from "cesium";
import BaiduImageryProvider from "@/component/baseLayer/BaiduImageryProvider";

const baseLayerFun = {
    /**
     *
     * @param id 传入唯一标识
     * @param Viewer 传入Viewer
     */
    add(id, Viewer) {
        let LayerGroups;
        //移除所有图层
        this.remove(Viewer);
        //通过id返回查询layer
        if(id){
             LayerGroups = this.inquireMapId(id);
        }else{
            // 默认查询
            LayerGroups =  this.inquireMapDefaultShow();
        }
        this.addPivotal(LayerGroups,Viewer);

    },
    /**
     *
     * @param LayerGroups  传入图层组
     * @param Viewer     传入Viewer 对象
     */
    addPivotal(LayerGroups, Viewer){
        let imageryProvider;
        // 判断layer 是否还要子集
        if (LayerGroups.layers && LayerGroups.layers.length >= 1) {
            LayerGroups.layers.forEach((item, index) => {
                switch (LayerGroups.type) {
                    //天地图
                    case "tdt":
                        let url = LayerGroups.url + item.layer + "/" + item.request + LayerGroups.token;
                        console.log(url);
                        imageryProvider = new WebMapTileServiceImageryProvider({
                            url,
                            ...item.option,
                        });
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "google":
                    case  "OSM":
                    case "gaode":
                        // 添加高德图
                        imageryProvider = new UrlTemplateImageryProvider({
                            ...item.option,
                        });
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "baidu":
                        imageryProvider = new BaiduImageryProvider({
                            ...item.option,
                        });
                        imageryProvider.hasAlphaChannel = true;
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
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
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "ArcGisMap":
                        imageryProvider = new ArcGisMapServerImageryProvider({
                            ...item.option,
                        });
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "BingMapsImagery":
                        imageryProvider = new BingMapsImageryProvider({
                            ...item.option,
                            mapStyle: BingMapsStyle.AERIAL,
                        });
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "painting":
                        imageryProvider = new UrlTemplateImageryProvider({
                            ...item.option,
                        });
                        let imagery = Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        for (const at in item.colourScheme) {
                            imagery[at] = item.colourScheme[at];
                        }
                        break;
                }
            });
        }
        LayerGroups.show = true;
        console.log(LayerGroups);
        console.log(baseLayer);
    },
    /**
     *
     * @param Viewer 添加之前移除图层
     */
    remove(Viewer) {
        Viewer.imageryLayers._layers.forEach((item) =>
            Viewer.imageryLayers.remove(item)
        );
    },
    /**
     *
     * @param id 传入id
     * @returns {*}  返回查询到整个layer对象
     */
    inquireMapId(id) {
        return baseLayer.find((item) => {
            item.show = false;
            return item.id === id
        });
    },
    /**
     *
     * @returns {*} 返回属性show为true的图层对象
     */
    inquireMapDefaultShow(){
        return baseLayer.find((item)=>{
            return item.show =true;
        })
    }
};
export default baseLayerFun;
