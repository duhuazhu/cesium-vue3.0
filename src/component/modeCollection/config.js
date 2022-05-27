/**
 * Description: 数据类
 * Author: duhuazhu
 * Date: 2022/5/16
 */
export default {
    layers:[
        {
            id: 1,
            label: '三维模型',
            iconType:'file',
            children: [
                {
                    id: 1-1,
                    iconType:'file',
                    label: '倾斜模型',
                    children: [
                        {
                            id: 1-1-1,
                            label: '大雁塔',
                            url:'https://lab.earthsdk.com/model/66327820ce5f11eab7a4adf1d6568ff7/tileset.json',
                        },
                        {
                            id: 1-1-2,
                            label: '香港',
                            url:'http://lab.earthsdk.com/model/dca113104f4a11ebbf47fd6edec1a320/tileset.json',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            iconType:'file',
            label: '人工建模',
            children: [
                {
                    id: 2-1,
                    label: '小工厂',
                    url:'https://lab.earthsdk.com/model/887b3db0cd4f11eab7a4adf1d6568ff7/tileset.json'
                },
             /*   {
                    id: 2-2,
                    label: '地下管网',
                },*/
            ],
        },
        {
            id: 3,
            iconType:'file',
            label: '城市白膜',
            children: [
                {
                    id: 3-1,
                    label: '上海市区',
                    url:'https://lab.earthsdk.com/model/17a32610d08411eab7a4adf1d6568ff7/tileset.json'
                },
          /*      {
                    id: 3-2,
                    label: '武汉市区',
                },*/
            ],
        },
    ]
}
