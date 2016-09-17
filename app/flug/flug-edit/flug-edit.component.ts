import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import {FlugService} from "../services/flug.service";
import {Flug} from "../../entities/flug";

@Component({
    templateUrl:  './flug-edit.component.html',
})
export class FlugEditComponent {

    flug: Flug = {} as any;
    message: string;

    constructor(route: ActivatedRoute, private flugService: FlugService) {
        route.params.subscribe( (p) => {
            let id = p['id'];
            this.flugService
                .findById(id)
                .subscribe(
                    (flug) => {
                        this.flug = flug;
                    },
                    (err) => {
                        console.error('Fehler beim Laden', err);
                    }
                )

        })
    }

    save() {
        this.flugService
            .save(this.flug)
            .subscribe(
                (flug) => {
                    this.flug = flug;
                    this.message = "Erfolgreich gespeichert!";
                },
                (err) => {
                    console.error('Fehler beim Speichern', err);
                    this.message = err.text();
                }
            )

    }

}