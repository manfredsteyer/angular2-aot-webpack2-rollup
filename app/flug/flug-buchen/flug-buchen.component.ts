import { Component } from '@angular/core';
import {FlugService} from "../services/flug.service";

@Component({
    templateUrl:  './flug-buchen.component.html',
    providers: [FlugService]
})
export class FlugBuchenComponent {
}