import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ValidatorFormRegister} from '../register/validatorFormRegister';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidatorFormAuthorization} from './validatorFormAuthorization';
import {standartBase} from '../register/standartBaseUser';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  @Output() closeWindowAuthorization = new EventEmitter<string>();
  validatorForm = new ValidatorFormAuthorization();
  formErrorMsg: String;
  loginForm: FormGroup;
  statusAuthorization: boolean;
  userInfo = {
    login: '',
    pass: ''
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', []],
      pass: ['', []],
    });
    this.loginForm.setValidators(this.validatorForm.validatorForm);
    this.statusAuthorization = false;
  }

  public onSubmit() {
    this.validFormMsg();
    if (this.loginForm.status === 'VALID') {
      this.statusAuthorization = true;
      this.userInfo.pass = '';
      localStorage.setItem('userLogin', this.loginForm.get('login').value);
      this.closeWindowAuthorization.emit();
    }
  }

  public validFormMsg() {
    if (this.loginForm.errors) {
      let loginKey = Object.keys(this.loginForm.errors);
      this.formErrorMsg = this.loginForm.errors[loginKey[0]];
    } else {
      this.formErrorMsg = '';
    }
  }

  public goRegistrPage() {
    localStorage.setItem('userLogin', 'off');
    this.statusAuthorization = false;
    this.userInfo.pass = '';
    this.userInfo.login = '';
    this.router.navigateByUrl('/register');
  }

  public ExitUserRoom() {
    localStorage.setItem('userLogin', 'off');
    this.statusAuthorization = false;
  }
}
