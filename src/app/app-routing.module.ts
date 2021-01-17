import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const entitatsModule = () => import('./entitats/entitats.module').then(x => x.EntitatsModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'entitats', loadChildren: entitatsModule },
    { path: 'users', loadChildren: usersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
