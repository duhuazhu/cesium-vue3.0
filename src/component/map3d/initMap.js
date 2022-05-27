/**
 * Description: cesium 初始化加载
 * Author: duhuazhu
 * Date: 2022/5/21
 */
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { Viewer,createWorldTerrain,Ion} from 'cesium'
import {cesium_ion} from "@/config";
import {add} from "@/component/baseLayer/baseLayerFun";

class CesiumViewer{
    constructor(){
        this.view = null; // 地图
    }
    /**
     *
     * @param $el 传入 id名称
     * @returns {Promise<resolve>}  返回Viewer
     */
    init($el){
        return new Promise(((resolve, reject) => {
            Ion.defaultAccessToken = cesium_ion;
            /* eslint no-new: */
           let ViewerGlobe =  new Viewer($el,{
                geocoder: false, // 地理位置查询定位控件
                homeButton: false, // 默认相机位置控件
                timeline: false, // 时间滚动条控件
                navigationHelpButton: false, // 默认的相机控制提示控件
                fullscreenButton: false, // 全屏控件
                baseLayerPicker: false, // 底图切换控件
                animation: false, // 控制场景动画的播放速度控件(左下角仪表)
                shouldAnimate: true,
                infoBox: false, // 是否显示信息框
                sceneModePicker: false, // 是否显示3D/2D选择器
                selectionIndicator: false, // 是否显示选取指示器组件(聚焦框)
                terrainProvider: new createWorldTerrain(),
                showRenderLoopErrors: true, // 如果设为true，将在一个HTML面板中显示错误信息
                imageryProvider:false
            })
            add(undefined,ViewerGlobe);
            this.view = ViewerGlobe;
            resolve(ViewerGlobe)
        }))
    }
}
export default CesiumViewer;
