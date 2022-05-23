/**
 * Description: 底图切换功能
 * Author: duhuazhu
 * Date: 2022/5/20
 */

import config from "@/component/baseLayer/config";
import {WebMapTileServiceImageryProvider } from "cesium";
const baseLayerFun = {
  add(id, Viewer) {
      this.remove(Viewer);
      let qid = this.inquireMapId(id);
      // 判断layer 是否还要子集
      if(qid.layers && qid.layers.length > 1){
        qid.layers.forEach((item,index)=>{
            switch (qid.type){
                case 'WebMapTileServiceImageryProvider':
                    let url  = qid.url+item.layer+'/'+item.request+qid.token;
                    let imageryProvider  =  new WebMapTileServiceImageryProvider({
                        url,
                        ...item.option
                    });
                    Viewer.imageryLayers.addImageryProvider(imageryProvider);
                    break;
            }
        })
      }else{

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
