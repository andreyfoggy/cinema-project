import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})

export class PosterComponent implements OnInit {
  @Input() film = <any>{};

  constructor() {

  }

  ngOnInit() {

  }

}
