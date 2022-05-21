/**
 * Description:
 * Author: duhuazhu
 * Date: 2022/5/20
 */
import { getCurrentInstance } from 'vue'

const baseLayerFun = {
    add(id) {
        const { proxy } = getCurrentInstance();
        proxy.$EventBus.on('Viewer',data=>{
            console.log(data,'123');
        })
    }

}
export  default  baseLayerFun;
