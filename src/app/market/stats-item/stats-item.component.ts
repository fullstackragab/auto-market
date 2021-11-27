import { Component, Input, OnInit } from '@angular/core';
import { StatsItem } from '../models/stats-item';

@Component({
  selector: 'app-stats-item',
  templateUrl: './stats-item.component.html',
  styleUrls: ['./stats-item.component.scss']
})
export class StatsItemComponent implements OnInit {
  @Input() statsItem!: StatsItem
  constructor() { }

  ngOnInit(): void {
  }

}
