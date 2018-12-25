import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidatorFormRegister} from './validatorFormRegister';
import {standartBase} from './standartBaseUser';
import {ReCaptchaComponent} from 'angular2-recaptcha';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('captchaRef') recaptchControl: ReCaptchaComponent;
  validatorForm = new ValidatorFormRegister();
  loginForm: FormGroup;
  captchaStatus = false;

  formErrorMsg = {
    login: '',
    phone: '',
    pass: '',
    confermPass: '',
    mail: ''
  };
  valueForm = {
    login: '',
    phone: '',
    pass: '',
    confermPass: '',
    mail: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
  ) {
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [this.validatorForm.validatorLogin]],
      phone: ['', [this.validatorForm.validatorPhone]],
      pass: ['', [this.validatorForm.validatorPass]],
      mail: ['', [this.validatorForm.validatorMail]],
      confirmPass: ['', []],
    });
    this.loginForm.setValidators(this.validatorForm.validatorConfirmPass);
    this.captchaStatus = false;
    this.loadScript();
  }

  resetrRecapcha() {
    this.recaptchControl.reset();
  }

  public onSubmit() {
    this.showValidateFormMsg();
    if (this.loginForm.status === 'VALID' && this.captchaStatus === true) {

      this.clearInpputForm();
      this.resetrRecapcha();
      alert('Регистрация успешна');
    this.router.navigateByUrl("/gallery");this.addUserLocalStorage();
    }
    else {
      alert('Проверьте поля ввода и "я не робот"');
    }
  }

  addUserLocalStorage() {
    let strBase = localStorage.getItem('userBase');
    let baseUser = JSON.parse(strBase);
    baseUser.push({
      login: this.loginForm.get('login').value,
      pass: this.loginForm.get('pass').value,
      mail: this.loginForm.get('mail').value,
      phone: this.loginForm.get('phone').value
    });
    localStorage.setItem('userBase', JSON.stringify(baseUser));
  }

  clearInpputForm() {
    this.valueForm.login = '';
    this.valueForm.phone = '';
    this.valueForm.pass = '';
    this.valueForm.confermPass = '';
    this.valueForm.mail = '';
  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.captchaStatus = true;
    }
  }

  showValidateFormMsg() {
    if (this.loginForm.get('login').errors) {
      let loginKey = Object.keys(this.loginForm.get('login').errors);
      this.formErrorMsg.login = this.loginForm.get('login').errors[loginKey[0]];
    } else {
      this.formErrorMsg.login = '';
    }
    if (this.loginForm.get('phone').errors) {
      let phoneKey = Object.keys(this.loginForm.get('phone').errors);
      this.formErrorMsg.phone = this.loginForm.get('phone').errors[phoneKey[0]];
    } else {
      this.formErrorMsg.phone = '';
    }
    if (this.loginForm.get('pass').errors) {
      let passKey = Object.keys(this.loginForm.get('pass').errors);
      this.formErrorMsg.pass = this.loginForm.get('pass').errors[passKey[0]];
    } else {
      this.formErrorMsg.pass = '';
    }
    if (this.loginForm.errors) {
      let confermPassKey = Object.keys(this.loginForm.errors);
      this.formErrorMsg.confermPass = this.loginForm.errors[confermPassKey[0]];
    } else {
      this.formErrorMsg.confermPass = '';
    }
    if (this.loginForm.get('mail').errors) {
      let mailKey = Object.keys(this.loginForm.get('mail').errors);
      this.formErrorMsg.mail = this.loginForm.get('mail').errors[mailKey[0]];
    } else {
      this.formErrorMsg.mail = '';
    }
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = './src/app/register/snow.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    // document.getElementsByTagName('body')[0].appendChild(node);
    document.getElementsByClassName('registerContent')[0].appendChild(node);
  }
}
