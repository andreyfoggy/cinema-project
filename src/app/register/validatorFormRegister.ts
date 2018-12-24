import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {forEach} from '../../../node_modules/@angular/router/src/utils/collection';

export class ValidatorFormRegister {

  public validatorLogin(control: FormControl): ValidationErrors {
    let strBase = localStorage.getItem('userBase');
    let baseUser = JSON.parse(strBase);

    const errorMsg = <any>{};
    const value = control.value;

    const hasNumber = /[0-9]/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const isLengthValid = (value.length > 20 || value.length < 6) ? false : true;
    let alreadyHas = false;
    for (let b of baseUser) {
      if (b.login === value) {
        alreadyHas = true;
      }
    }
    if (alreadyHas) {
      errorMsg.alreadyHas = 'Такой логин уже есть';
    }
    if (!hasNumber) {
      errorMsg.invalidNumber = 'Нет цифр';
    }
    if (!hasCapitalLetter) {
      errorMsg.invalidCapitalLetter = 'Нет заглавных букв';
    }
    if (!hasLowercaseLetter) {
      errorMsg.invalidLowercaseLetter = 'Нет строчных букв';
    }
    if (!isLengthValid) {
      errorMsg.invalidLength = 'Длина не 6-20 символов';
    }
    if (alreadyHas || !hasNumber || !hasCapitalLetter || !hasCapitalLetter || !isLengthValid) {

      return errorMsg;
    }
    return null;
  }

  public validatorPhone(control: FormControl): ValidationErrors {
    let strBase = localStorage.getItem('userBase');
    let baseUser = JSON.parse(strBase);
    const errorMsg = <any>{};
    const value = control.value;
    const hasNumber = /[^(0-9+)]/.test(value);
    const isLength = (value.length == 10 || value.length == 12 || value.length == 13) ? true : false;
    let alreadyHas = false;
    for (let b of baseUser) {
      if (b.phone === value) {
        alreadyHas = true;
      }
    }
    if (alreadyHas) {
      errorMsg.alreadyHas = 'Такой телефон уже есть';
    }
    if (hasNumber) {
      errorMsg.invalidNumber = 'Вводите только цифры';
    }
    if (!isLength) {
      errorMsg.invalidLength = 'введен не мобильный номер(11 символов)';
    }
    if (hasNumber || !isLength || alreadyHas) {
      return errorMsg;
    }
    return null;
  }

  public validatorPass(control: FormControl): ValidationErrors {
    const errorMsg = <any>{};
    const value = control.value;
    /** Проверка на содержание цифр */
    const hasNumber = /[0-9]/.test(value);
    /** Проверка на содержание заглавных букв */
    const hasCapitalLetter = /[A-Z]/.test(value);
    /** Проверка на содержание прописных букв */
    const hasLowercaseLetter = /[a-z]/.test(value);
    /** Проверка на минимальную длину пароля */
    const isLengthValid = (value.length > 20 || value.length < 6) ? false : true;
    if (!hasNumber) {
      errorMsg.invalidNumber = 'Нец цифр';
    }
    if (!hasCapitalLetter) {
      errorMsg.invalidCapitalLetter = 'Нет заглавных букв';
    }
    if (!hasLowercaseLetter) {
      errorMsg.invalidLowercaseLetter = 'Нет строчных букв';
    }
    if (!isLengthValid) {
      errorMsg.invalidLength = 'Длина не 6-20 символов';
    }
    if (!hasNumber || !hasCapitalLetter || !hasCapitalLetter || !isLengthValid) {
      return errorMsg;
    }
    return null;
  }

  public validatorConfirmPass(formControl: FormGroup): ValidationErrors {
    const errorMsg = <any>{};
    const pass = formControl.controls.pass.value;
    const confirmPass = formControl.controls.confirmPass.value;

    if (!(pass === confirmPass)) {
      errorMsg.invalidConfirm = 'Пароли не совпадают';
      return errorMsg;
    }
    return null;
  }

  public validatorMail(control: FormControl): ValidationErrors {
    let strBase = localStorage.getItem('userBase');
    let baseUser = JSON.parse(strBase);
    const errorMsg = <any>{};
    const value = control.value;
    let alreadyHas = false;
    const hasDog = /.+?\@+.+\./.test(value);

    for (let b of baseUser) {
      if (b.mail === value) {
        alreadyHas = true;
      }
    }
    if (alreadyHas) {
      errorMsg.alreadyHas = 'Такая почта уже есть';
    }
    if (!hasDog) {
      errorMsg.invalidMail = 'Некорректныый адрес почты';
    }
    if (!hasDog || alreadyHas) {
      return errorMsg;
    }
    return null;
  }
}
