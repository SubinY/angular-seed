// 订单管理表格字段
export class OrderManageVo {
    /**
     * 订单号
     */
    public ddh: string;
    /**
     * 所属客户
     */
    public sskh: string="";

    /**
     *订单状态
     */
    public ddzt:string="1";
    /**
     *金额
     */
    public je:string="1";

    /**
     *包装件数
     */
    public bzjs:string="101223xxxxxxxxxx";

    /**
     *安装件数
     */
    public azjs:string="101223xxxxxxxxxx";

    /**
     *体积
     */
    public tj:string="5";

    /**
     *重量
     */
    public zl:string="6";

    /**
     *收货人
     */
    public shr:string="156415641465";

    /**
     *收货人电话
     */
    public shrdh:string="1";

    /**
     *收货人地址
     */
    public shrdz:string="1";

    /**
     *发货人
     */
    public fhr:string="1";

    /**
     *发货人电话
     */
    public fhrdh:string="1";

    /**
     *服务类型
     */
    public fwlx:string="1";

    /**
     *下单时间
     */
    public xdsj:string="1";

    /**
     *库存状态
     */
    public kczt:string="1";

    /**
     *备注
     */
    public bz:string="1";

    /**
     *操作
     */
    public cz:string="1";
}

// 商品明细表格字段
export class OrderManageGoodsVo {

}