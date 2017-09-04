// 订单管理表格字段
export class OrderSearchVo {
    /**
     * 订单状态
     */
    public state: string;
    /**
     * 时间查询类型
     */
    public queryType: string = 'Order';

    /**
     *开始时间
     */
    public beginDate: any;
    /**
     *结束时间
     */
    public endDate: any;

    /**
     *客户名称
     */
    public customerName: any;

    /**
     *订单号
     */
    public billNum:any;

    /**
     *客户单号
     */
    public customerBillNum:any;
}