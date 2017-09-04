import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-warehouse-entry-manage',
  templateUrl: './warehouse-entry-manage.component.html',
  styleUrls: ['./warehouse-entry-manage.component.scss']
})
export class WarehouseEntryManageComponent implements OnInit {
  static componentName = "入库单管理";

  ngOnInit() {
    
  }

}
