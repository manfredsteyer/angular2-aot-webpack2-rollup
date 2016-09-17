import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {


    transform(value: any, ...args: any[]): any {

        console.debug('CityPipe.transform', value);

        switch(value) {
            case "Graz":
                return "Flughafen Graz Thalerhof";
            case "Hamburg":
                return "Aiport Hamburg Helmut Schmidt";
            default:
                return "ROM";   
        }

    }

}