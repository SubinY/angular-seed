import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModulesComponent} from "./modules.component";
let modulesRouter: Routes = [
    {
        path: '',
        component: ModulesComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(modulesRouter)
    ],
    declarations: [],
    providers: [],
})
export class ModulesRoutingModule {
}
