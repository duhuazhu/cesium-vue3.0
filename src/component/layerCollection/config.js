/**
 * Description:
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
                    id: 4,
                    iconType:'file',
                    label: '倾斜模型',
                    children: [
                        {
                            id: 9,
                            label: '倾斜模型1',
                        },
                        {
                            id: 10,
                            label: '倾斜模型2',
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
                    id: 5,
                    label: '化工厂',
                },
                {
                    id: 6,
                    label: '地下管网',
                },
            ],
        },
        {
            id: 3,
            iconType:'file',
            label: '城市白膜',
            children: [
                {
                    id: 7,
                    label: '上海市区',
                },
                {
                    id: 8,
                    label: '武汉市区',
                },
            ],
        },
    ]
}
