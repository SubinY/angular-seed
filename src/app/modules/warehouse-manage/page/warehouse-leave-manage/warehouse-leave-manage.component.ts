import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-warehouse-leave-manage',
  templateUrl: './warehouse-leave-manage.component.html',
  styleUrls: ['./warehouse-leave-manage.component.scss']
})
export class WarehouseLeaveManageComponent implements OnInit {
  static componentName = "出库单管理";

  ngOnInit() {

  }

}