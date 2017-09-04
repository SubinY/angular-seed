/*入库管理字段*/
export class WarehouseEntryManVo {
    // 入库单号
    code: string;
    // 状态
    statu: string;
    // 隶属客户
    dskh: string;
    // 入库类型
    kuqu: string;
    // 预计送达时间
    yjsdsj: string;
    // 相关单号
    xgdh: string;
    // 入库仓
    rcc: string;
    // 数量
    number: string;
    // 已入库数量
    yrksl: string;
    // 制单时间
    zdsj: object;
    // 制单人
    zdr: object;
    // 入库时间
    rksj: number;
    // 入库确认人
    rkqrr: string;

    // 总数量
    totalNum: number;
    // 所属客户
    sskh: string;

    // 入库确认时间
    rkqrsj: string;
}