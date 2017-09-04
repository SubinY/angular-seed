/*订单管理*/
import { OrderManageComponent } from "./order-manage/order-manage.component";

/*库存管理*/
import { WarehouseEntryManageComponent } from './warehouse-manage/page/warehouse-entry-manage/warehouse-entry-manage.component';
import { WarehouseLeaveManageComponent } from './warehouse-manage/page/warehouse-leave-manage/warehouse-leave-manage.component';
import { WarehouseCheckComponent } from './warehouse-manage/page/warehouse-check/warehouse-check.component';
import { WarehouseInfoComponent } from './warehouse-manage/page/warehouse-info/warehouse-info.component';
import { WarehouseAbnormalComponent } from './warehouse-manage/page/warehouse-abnormal/warehouse-abnormal.component';
import { WarehouseAreaAdjustmentComponent } from "./warehouse-manage/page/warehouse-area-adjustment/warehouse-area-adjustment.component";

export const ENTRY_COMPONENTS = [
    // 第一个页面必须写在第一位，其他组件随便写位置
    OrderManageComponent,
    WarehouseEntryManageComponent,
    WarehouseLeaveManageComponent,
    WarehouseCheckComponent,
    WarehouseInfoComponent,
    WarehouseAbnormalComponent,
    WarehouseAreaAdjustmentComponent,
]
