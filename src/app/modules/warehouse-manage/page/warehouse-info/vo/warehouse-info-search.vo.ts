/*库存信息信息字段*/
export class WarehouseInfoSearchVo {
    // 所属商家
    customer: string;
    // 仓库
    depot: string;
    // 库区
    depotRegion: any;
    // 货物编号
    cargoNum: string;
    // 货物名称
    cargoName: string;
    // 货物型号
    cargoModel: string;
    // 安全与否
    safety: any = '';
}
