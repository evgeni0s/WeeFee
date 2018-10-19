import {
    NgModule,
    Component,
    Pipe,
    OnInit,
    Directive
} from '@angular/core';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../shared/confirm-equal-validator.directive';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

// This is a rectiveform aproach and Model Driven Form Validation
export class RegisterComponent implements OnInit {

    registerForm : FormGroup;

    constructor(private confirmEqualValidatorDirective: ConfirmEqualValidatorDirective) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern("^\S+@\S+$")]),
            passwords: new FormGroup({
              password: new FormControl('', [Validators.required, Validators.minLength(6)]),
              confirmPassword: new FormControl('', [Validators.required])
            }, this.confirmEqualValidatorDirective.validate) // validator for the whole group
            // confirmPassword: new FormControl('', [Validators.required, this.confirmEqualValidatorDirective.validate('')]),
        });
        // var p1 = this.registerForm.controls.password;
        // this.registerForm.controls.confirmPassword = new FormControl('', [this.confirmEqualValidatorDirective.validate])
    }
    // hint how to shorten syntax in accessing data
    // get name() { return this.heroForm.get('name'); }

    // local storage example
    // JSON.parse(localStorage.getItem('currentUser'));

    get password() { return this.registerForm.controls.password };

    public Register()
    {

    }

    public CreateNewAccount()
    {
        debugger;
console.log('create new account');
    }
}