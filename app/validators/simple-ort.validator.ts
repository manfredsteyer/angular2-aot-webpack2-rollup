import { Directive, Attribute, forwardRef } from '@angular/core';
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

    public validate(c: AbstractControl): any {

        if (c.value == 'Graz'
            || c.value == 'Hamburg'
            || c.value == 'Frankfurt'
            || c.value == 'Wien'
            || c.value == 'Mallorca') {

            return {};
        }

        return {
            ort: {
                actual: c.value
            }
        }


    }

}
