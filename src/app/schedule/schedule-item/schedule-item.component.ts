import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  @Input() item = <any>{};
  public date: String;
  private sub;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.queryParams
        .subscribe(dateParams => this.date = dateParams.date);
    // this.sub.unsubscribe();
  }

}
