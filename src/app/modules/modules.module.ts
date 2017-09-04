//app module
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JsonpModule } from "@angular/http";
import { AppSharedModule } from "../shared/shared.module";
//app service
import { ModulesRoutingModule } from "./modules-routing.module";
import { ModulesComponent } from "./modules.component";
//app component
import { HeaderTopComponent } from "./common/header/header-top.component";
import { NavigationMenuComponent } from "./common/navigation-menu/navigation-menu.component";

import { ENTRY_COMPONENTS } from './EntryComponents';
import { TabViewResponseService } from "../shared/services/tabView-response.service";


@NgModule({
    imports: [
        FormsModule,
        JsonpModule,
        RouterModule,
        ModulesRoutingModule,
        AppSharedModule,
    ],
    declarations: [
        ModulesComponent,
        HeaderTopComponent,
        NavigationMenuComponent,
        ...ENTRY_COMPONENTS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
    providers: [
        TabViewResponseService
    ]
})
export class ModulesModule {
}
