/**
 * Created by huxiubin on 2017/7/26.
 */
export let navigateInfo = [
    {
        "link": "/modules/order-manage",
        "name": "订单管理",
        "active": true,
        "icon": ""
    },
    {
        "link": "/modules/warehouse-manage",
        "name": "库存管理",
        "icon": "",
        "children": [
            {
                "link": "/modules/warehouse-manage/warehouse-entry-manage",
                "name": "入库单管理",
                "icon": " "
            },
            {
                "link": "/modules/warehouse-manage/warehouse-leave-manage",
                "name": "出库单管理",
                "icon": " "
            },
            {
                "link": "/modules/warehouse-manage/warehouse-check",
                "name": "库存盘点",
                "icon": " "
            },
            {
                "link": "/modules/warehouse-manage/warehouse-info",
                "name": "库存信息",
                "icon": " "
            },
            {
                "link": "/modules/warehouse-manage/warehouse-abnormal",
                "name": "盘点异常",
                "icon": " "
            },
            {
                "link": "/modules/warehouse-manage/warehouse-area-adjustment",
                "name": "库区调整",
                "icon": " "
            },
        ]
    }
];