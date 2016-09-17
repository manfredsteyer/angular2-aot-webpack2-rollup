import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: 'input[ort]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => OrtValidatorDirective),
            multi: true
        }
    ]
})
export class OrtValidatorDirective implements Validator{

    @Input() ort: string;

    public validate(c: AbstractControl): any {

        var orte = this.ort.split(',');

        if (orte.indexOf(c.value) > -1) {
            return {};
        }

        return {
            ort: true
        }

    }

}