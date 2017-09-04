/*出库单管理查询字段*/
export class WarehouseLeaveSearchVo {
    /**
     * 状态
     */
    public outdepotState: string = '';
    /**
     * 开始时间
     */
    public beginTime: any;
    /**
     * 截止时间
     */
    public endTime: any;
    /**
     * 出库类型
     */
    public outDepotType: any = null;
    /**
     * 出库仓库Id
     */
    public depotId: string;
    /**
     * 相关单号
     */
    public relevantBillNum: string;
    /**
     * 出库单号
     */
    public outDepotnum: string;

}
