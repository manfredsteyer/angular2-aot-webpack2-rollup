import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {FlugService} from "../services/flug.service";
import {Flug} from "../../entities/flug";


@Component({
    selector: 'flug-suchen',
    templateUrl:  './flug-suchen.component.html',
    styleUrls: ['./flug-suchen.component.css'],
})
export class FlugSuchenComponent {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public selectedFlug: Flug;
    public fluege: Array<Flug> = [];

    constructor(private flugService: FlugService) {
    }

    suchen() {
        this
            .flugService
            .find(this.von, this.nach)
            .subscribe(
                (fluege: Flug[]) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error("Fehler beim Laden von Flügen!!");
                    console.error(err);
                }
            );


    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }

}

