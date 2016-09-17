import { Component } from '@angular/core';

@Component({
    selector: 'passagier-suchen',
    template: `
        <h1>{{info}}</h1>
    `
})
export class PassagierSuchenComponent {
    public info = "PassagierSuchen!";
}