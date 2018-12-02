import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  @Input() item = <any>{};
  public timeList = ['8:00', '14:30', '22:00'];
  constructor() { }

  ngOnInit() {
  }

}
