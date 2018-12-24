import { Component } from '@angular/core';
import {standartBase} from './register/standartBaseUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sun CINEMA';
  constructor(){
    localStorage.setItem('userBase', JSON.stringify(standartBase));
    localStorage.setItem('userLogin', 'off');
  }
}
