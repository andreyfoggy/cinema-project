import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {standartBase} from '../../register/standartBaseUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() search: boolean;
  @Output() searchValueBeta = new EventEmitter<string>();
  public searchValue: string;

  constructor() {

  }

  public logoUrl = 'assets/images/logo.png';
  stateWindowAuthorization: String = "none";

  ngOnInit() {

  }

  public onSearchChange(event) {
    this.searchValueBeta.emit(event.target.value);
  }

  showWindowAuthorization() {
    if (this.stateWindowAuthorization === 'none') {
      this.stateWindowAuthorization = 'table';
    }
    else {
      this.stateWindowAuthorization = 'none';
    }
  }

  closeWindow() {
    this.stateWindowAuthorization = "none";
  }
}
