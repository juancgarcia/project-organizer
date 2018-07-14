import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // { path: '**', component: AppComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
            // {enableTracing: true}
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {};
