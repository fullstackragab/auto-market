import { Component, OnInit } from '@angular/core';
import { StatsItem } from '../models/stats-item';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats: StatsItem[] = [];
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe((stats) => (this.stats = stats));
  }
}
