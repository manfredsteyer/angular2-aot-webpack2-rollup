import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'home',
    template: `
        <h1>{{info}}</h1>
    `
})
export class HomeComponent {
    public info = "Willkommen!";

}