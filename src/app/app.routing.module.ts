import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';

import { TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from "./detail/detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'login', component: TestComponent },
            { path: 'resource', component: DetailComponent },
            { path: '**', redirectTo: 'login', pathMatch: 'full' },
          ]),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
