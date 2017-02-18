import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'setup', component: SetupComponent },
    { path: '', component: MainComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
