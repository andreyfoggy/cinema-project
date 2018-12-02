import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

    public id: number;
    private subscription: Subscription;
    constructor(private route: ActivatedRoute) {
        this.subscription = route.params.subscribe(params => this.id = params['id']);
    }

  ngOnInit() {
  }

}
