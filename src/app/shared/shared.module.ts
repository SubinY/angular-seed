import { NgModule } from "@angular/core";
//share module
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//primeng-ext
import {
    ConfirmDialogModule,
    ConfirmationService,
    CheckboxModule,
    StepsModule,
    MenuModule,
    MultiSelectModule,
    GrowlModule,
    TabViewModule
} from "primeng/primeng";
import { TabDirective } from "./services/ui/tabview/tab.directive";
import { UITabViewModule } from "./services/ui/tabview/tabview";
import { TabViewService } from "./services/tabview.service";
import { SharedModule } from "primeng/components/common/shared";

export { TabDirective } from "./services/ui/tabview/tab.directive";
export { UITabViewModule } from "./services/ui/tabview/tabview";
export { TabViewService } from "./services/tabview.service";
export { SharedModule } from "primeng/components/common/shared";





@NgModule({
    imports: [
        TabViewModule,
        UITabViewModule,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        TabDirective
    ],
    exports: [
        TabDirective,
        UITabViewModule,
        CommonModule,
        FormsModule,
        SharedModule,
        TabViewModule,
    ],
    providers: [
        TabViewService,
    ],
})
export class AppSharedModule {
}
