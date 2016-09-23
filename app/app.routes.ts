import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },

/*
    {
        path: 'flug-buchen',
        // loadChildren: () => System.import('./flug/flug.module').then(m => m.FlugModule)
        loadChildren: 'app/flug/flug.module#FlugModule'
    },
*/
    {
        path: '**',
        redirectTo: 'home'
    }
];


export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG);

