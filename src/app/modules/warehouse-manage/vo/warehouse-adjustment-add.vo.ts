/*新增调整单字段*/
export class WarehouseAdjustmentAddVo {
    // 调整单id
    adjustmentId: string;
    // 货物id
    cargoId: string;
    // 出库库区id
    outDepotRegionId: string;
    // 入库库区id
    inDepotRegionId: string;
    // 调整数量
    adjustmentNumber: any;
    // 备注
    remark: string;
}