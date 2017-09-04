import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

let appRoutes: Routes = [

    {
        path: '',
        component: AppComponent,
        children: [

            {
                path: 'modules',
                loadChildren: 'app/modules/modules.module#ModulesModule'
            },
            {
                path: '**',
                redirectTo: 'modules',
                pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {
}
