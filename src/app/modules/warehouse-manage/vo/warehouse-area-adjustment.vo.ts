/*库区货物信息字段*/
export class WarehouseAreaGoodsVo {
    // 货物编码
    code: string;
    // 货物名称
    name: string;
    // 所在仓库
    sizeWare: string;
    // 所在库区
    kuqu: string;
    // 商品规格
    size: string;
    // 重量
    weight: string;
    // 体积
    volumn: string;
    // 库存件数
    jianshu: string;

    // 所属客户
    kehu: string;
    // 调出库区
    diaochu: object;
    // 调入库区
    diaoru: object;
    // 调整数量
    tiaozhengNum: number;
    // 备注
    remark: string;
}