import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() search: boolean;
  @Output() searchValueBeta = new EventEmitter<string>();
  public searchValue: string;
  constructor() { }
  public logoUrl = 'assets/images/logo.png';
  ngOnInit() {
  }
  public onSearchChange(event) {
      this.searchValueBeta.emit(event.target.value);
  }
}
