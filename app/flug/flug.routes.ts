import {FlugEditComponent} from "./flug-edit/flug-edit.component";
import {PassagierSuchenComponent} from "./passagier-suchen/passagier.suchen.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";
import {FlugBuchenComponent} from "./flug-buchen/flug-buchen.component";
import {RouterModule, Routes } from '@angular/router';

const FLUG_ROUTES: Routes = [{
    path: 'flug-buchen',
    component: FlugBuchenComponent,
    children: [
        {
            path: 'flug-suchen', // flug-buchen/flug-suchen
            component: FlugSuchenComponent
        },
        {
            path: 'passagier-suchen',
            component: PassagierSuchenComponent
        },
        {
            path: 'flug-edit/:id',
            component: FlugEditComponent
        }
    ]
}];

export const FlugRouterModule = RouterModule.forChild(FLUG_ROUTES);