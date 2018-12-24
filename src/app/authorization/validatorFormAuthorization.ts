import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {forEach} from '../../../node_modules/@angular/router/src/utils/collection';

export class ValidatorFormAuthorization {

  public validatorForm(formControl: FormGroup): ValidationErrors {
    let strBase = localStorage.getItem('userBase');
    let baseUser = JSON.parse(strBase);
    const errorMsg = <any>{};
    const login = formControl.controls.login.value;
    const pass = formControl.controls.pass.value;

    const isLengthLogin = (login.length > 20 || login.length < 6) ? false : true;
    const isLengthPass = (pass.length > 20 || pass.length < 6) ? false : true;

    let key = false;
    for (let b of baseUser) {
      if (b.login === login && b.pass === pass) {
        key = true;
      }
    }
    if (!isLengthLogin || !isLengthPass) {
      errorMsg.invalidLength = 'Не все поля заполнены';
      return errorMsg;
    }
    if (!key) {
      errorMsg.login = 'Ошибка авторизации';
      return errorMsg;
    }
    return null;
  }
}
