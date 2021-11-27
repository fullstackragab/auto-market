import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusDetails } from '../models/status-details';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.scss']
})
export class StatusDetailsComponent implements OnInit {
  statusDetails!: StatusDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.statusDetails = data.statusDetails
    })
  }

}
