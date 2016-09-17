import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS} from '@angular/forms';

@Directive({
    selector: 'input[ortAsync]', 
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => OrtAsyncValidatorDirective),
            multi: true
        }
    ]
})
export class OrtAsyncValidatorDirective {


    public validate(c): Promise<any> {

        return new Promise<any>((resove) => {
            // Kommunikation mit Server simulieren
            setTimeout(() => {

                if (c.value == 'Graz'
                    || c.value == 'Hamburg') {
                    resove({});
                }

                resove({ ortAsync: true });
            }, 2000);
        });

    }

}