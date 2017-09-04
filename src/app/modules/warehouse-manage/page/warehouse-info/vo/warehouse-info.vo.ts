/*库存信息信息字段*/
export class WarehouseInfoVo {
    // 所属商家
    shangjia: string;
    // 货物名称
    name: string;
    // 货物编码
    id: string;
    // 型号
    xinghao: string;
    // 规格
    size: string;
    // 单位
    danwei: string;
    // 库存信息
    kucuninfo: any;
    // 库存总数
    zongshu: string;
    // 所在仓库
    suozai: any;
    // 库存件数
    jianshu: any;
    // 待出货数量
    daichuhuo: string;
    // 仓库
    warehouse: object;
    // 安全库存值
    anquanku: object;
    // 库存状态
    state: number;
}