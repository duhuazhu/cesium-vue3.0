/**
 * Description: 模型加载
 * Author: duhuazhu
 * Date: 2022/5/27
 */
/**
 *
 * @param node 返回节点数据
 * @param visible   判断模型是否显示
 * @param viewer  Viewer对象
 */
import {Cesium3DTileset} from "cesium";

export function add(node,visible,viewer) {
    console.log(node, visible, viewer);
    const building  = new Cesium3DTileset({
        url: node.url,
        useSimpleLighting: true,
        maximumScreenSpaceError:16,//最大的屏幕空间误差
        maximumNumberOfLoadedTiles:2000,//最大加载瓦片个数
        dynamicScreenSpaceError:true,
        dynamicScreenSpaceErrorDensity:0.00278,
        dynamicScreenSpaceErrorFactor:16,
        dynamicScreenSpaceErrorHeightFalloff:0.25,
        skipLevelOfDetail:true,
        preferLeaves:true,
    })
    building.show =  visible;
    if(visible){
        viewer.scene.primitives.add(building)
        viewer.flyTo(building,{duration:5.0})
    }

}
