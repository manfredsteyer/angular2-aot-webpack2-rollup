import { Injectable, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Headers, URLSearchParams} from '@angular/http';
import {Flug} from "../../entities/flug";


@Injectable()
export class FlugService {

    constructor(private http: Http) {
    }

    fluege: Array<Flug> = [];

    findById(id: string): Observable<Flug> {

        let search = new URLSearchParams();
        let url = "http://www.angular.at/api/flug";

        search.set('flugNummer', id);

        let headers = new Headers();
        //headers.set('Accept', 'text/json');

        return this.http
            .get(url, { search, headers })
            .map(resp => resp.json());

    }


    find(von: string, nach: string): Observable<Flug[]> {

        let search = new URLSearchParams();
        let url = "http://www.angular.at/api/flug";

        search.set('abflugort', von);
        search.set('zielort', nach);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this.http
                    .get(url, { search, headers })
                    .map(resp => resp.json());

    }

    save(flug: Flug): Observable<Flug> {

        let url = "http://www.angular.at/api/flug";

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this.http
            .post(url, flug, { headers })
            .map(resp => resp.json());

    }

}