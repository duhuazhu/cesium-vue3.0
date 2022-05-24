/**
 * Description: 底图切换功能
 * Author: duhuazhu
 * Date: 2022/5/20
 */

import config from "@/component/baseLayer/config";
import {
    WebMapTileServiceImageryProvider,
    UrlTemplateImageryProvider,
    ArcGisMapServerImageryProvider,
    BingMapsImageryProvider,
    BingMapsStyle
} from "cesium";
import BaiduImageryProvider from "@/component/baseLayer/BaiduImageryProvider";

const baseLayerFun = {
    /**
     *
     * @param id传入图层id
     * @param Viewer 传入Viewer
     */
    add(id, Viewer) {
        //移除所有图层
        this.remove(Viewer);
        //通过id返回查询layer
        let qid = this.inquireMapId(id);
        let imageryProvider;
        // 判断layer 是否还要子集
        if (qid.layers && qid.layers.length >= 1) {
            qid.layers.forEach((item, index) => {
                switch (qid.type) {
                    //天地图
                    case "tdt":
                        let url = qid.url + item.layer + "/" + item.request + qid.token;
                        imageryProvider = new WebMapTileServiceImageryProvider({
                            url,
                            ...item.option,
                        });
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
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
                    case "OSM":
                        imageryProvider =  new UrlTemplateImageryProvider({
                            ...item.option,
                        })
                        Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        break;
                    case "painting":
                        imageryProvider = new UrlTemplateImageryProvider({
                            ...item.option,
                        });
                        let imagery = Viewer.imageryLayers.addImageryProvider(imageryProvider);
                        for (const at in item.colourScheme) {
                            imagery[at]  = item.colourScheme[at];
                        }
                        break;
                }
            });
        } else {
            switch (qid.type) {
            }
        }
        console.log(qid);
        console.log(id, Viewer, "add");
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
        const {baseLayer} = config;
        return baseLayer.find((item) => item.id === id);
    },
};
export default baseLayerFun;
