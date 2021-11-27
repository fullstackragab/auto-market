import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StatsItem } from '../models/stats-item';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats: StatsItem[] = [
    {
      make: 'BMW',
      top: true,
      image: 'assets/cars/bmw-1.png',
      percent: 90
    },
    {
      make: 'Toyota',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 80
    },
    {
      make: 'Honda',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 30
    },
    {
      make: 'Chevrolet',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 40
    },
    {
      make: 'Volkswagen',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 60
    },
    {
      make: 'Skoda',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 20
    },
    {
      make: 'Nissan',
      top: false,
      image: 'assets/cars/honda-1.png',
      percent: 40
    }
  ]

  constructor() { }

  getStats() {
    return of(this.stats.slice())
  }
}
