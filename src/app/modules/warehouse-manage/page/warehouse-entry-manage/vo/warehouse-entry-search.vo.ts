/*入库单管理查询字段*/
export class WarehouseEntrySearchVo {
    /**
     * 状态
     */
    public status: any = 'ALL';
    /**
     * 时间类型
     */
    // public timeStatu: string = 'createTime';
    /**
     * 制单开始时间
     */
    public createTimeStart: any;
    /**
     * 制单截止时间
     */
    public createTimeEnd: any;
    /**
     * 预计送达开始时间
     */
    public arrivedTimeStart: any;
    /**
     * 预计送达截止时间
     */
    public arrivedTimeEnd: any;
    /**
     * 入库类型
     */
    public inDepotBillType: string = 'ALL';
    /**
     * 入库仓库Id
     */
    public depotId: string;
    /**
     * 入库单号
     */
    public inDepotNum: string;
    /**
     * 相关单号
     */
    public relevantBillNum: string;

}
