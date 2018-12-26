import { Component, OnInit } from '@angular/core';
import {standartBase} from './register/standartBaseUser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sun CINEMA';
  constructor(private router: Router) {
    localStorage.setItem('userBase', JSON.stringify(standartBase));
    localStorage.setItem('userLogin', 'off');
  }

  ngOnInit() {
  }
}
