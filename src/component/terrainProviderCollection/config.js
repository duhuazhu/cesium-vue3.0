/**
 * Description:地形配置文件
 * Author: duhuazhu
 * Date: 2022/5/27
 */
import {nanoid} from "nanoid";
import bd_vec from "@/assets/images/layerCollectionImg/bd-vec.png";
export  const baseTerrains = [
    {
        "id": nanoid(6),
        "name": "谷歌地形",
        "type": "google",
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
]
