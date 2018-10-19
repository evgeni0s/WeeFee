
import {
    NgModule,
    Component,
    Pipe,
    OnInit
} from '@angular/core';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    /*  constructor(
          private formBuilder: FormBuilder) { }*/

    ngOnInit() {
        debugger;
        this.createForm();
    }

    createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    public Login() {

    }

    public CreateNewAccount() {

    }
}