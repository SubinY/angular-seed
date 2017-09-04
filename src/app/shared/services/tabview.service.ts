/**
 * tabview服务，获取注册页面数组
 * Created by giscafer on 2017-07-20.
 */


import {Injectable} from '@angular/core';

import { TabItem } from "./ui/tabview/tab-item";
import { ENTRY_COMPONENTS } from "../../modules/EntryComponents";

@Injectable()
export class TabViewService {

    constructor() {

    }

    getTabs() {
        let tabs = [];
        for (let c of ENTRY_COMPONENTS) {
            let item = new TabItem(c, {name: c['componentName'] || '无名称'});
            tabs.push(item);
        }
        return tabs;
    }
}
