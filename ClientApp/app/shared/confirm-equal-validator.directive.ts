
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

//  @Directive({
//      selector: '[appConfirmEqualValidator]',
//      providers: [{
//          provide: NG_VALIDATORS,
//          useExisting: ConfirmEqualValidatorDirective,
//          multi: true
//      }]
//  })

export class ConfirmEqualValidatorDirective {
    validate(c?: AbstractControl):  { invalid: boolean } | null  {
        var result = null;
        if (!c) {
            return result;
        }

        var password = c.get('password');
        var confirmPassword = c.get('confirmPassword');
        if (!password || !confirmPassword || !password.value || !confirmPassword.value)
        {
            return result;
        }
        if (password.value !== confirmPassword.value) {
            return { invalid: true };
        }
        return result;
    }
}