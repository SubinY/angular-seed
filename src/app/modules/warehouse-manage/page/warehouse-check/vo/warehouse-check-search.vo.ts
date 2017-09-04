/*库存盘点查询字段*/
export class WarehouseCheckSearchVo {
    /**
     * 盘点状态
     * */
    public state:any = null;
    /**
     * 开始时间
     */
    public beginTime: any;
    /**
     * 截止时间
     */
    public endTime: any;
    /**
     * 盘点单号
     */
    public inventoryNum: string;
    /**
     * 盘点仓库
     */
    public depotId: string;
}
