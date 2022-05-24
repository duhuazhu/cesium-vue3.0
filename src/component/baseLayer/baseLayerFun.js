/**
 * Description: 底图切换功能
 * Author: duhuazhu
 * Date: 2022/5/20
 */

import config from "@/component/baseLayer/config";
import {WebMapTileServiceImageryProvider ,UrlTemplateImageryProvider} from "cesium";
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
      if(qid.layers && qid.layers.length >= 1){
        qid.layers.forEach((item,index)=>{
            switch (qid.type){
                //天地图
                case 'WebMapTileServiceImageryProvider':
                    let url  = qid.url+item.layer+'/'+item.request+qid.token;
                     imageryProvider  =  new WebMapTileServiceImageryProvider({
                        url,
                        ...item.option
                    });
                    Viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "UrlTemplateImageryProvider":
                    // 添加高德图
                    imageryProvider = new UrlTemplateImageryProvider({
                       ...item.option
                   })
                    Viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
                case "BaiduImageryProvider":
                    imageryProvider=  new BaiduImageryProvider({
                        ...item.option
                        })
                    Viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
            }
        })
      }else{
            switch (qid.type){

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
      Viewer.imageryLayers._layers.forEach(item=>Viewer.imageryLayers.remove(item));
  },
  /**
   *
   * @param id 传入id
   * @returns {*}  返回查询到整个layer对象
   */
  inquireMapId(id) {
    const { baseLayer } = config;
    return baseLayer.find((item) => item.id === id);
  },
};
export default baseLayerFun;
