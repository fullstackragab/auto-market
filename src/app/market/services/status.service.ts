import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  status: Status[] = [
    {
      carId: 'bmw-1',
      searched: 7500,
      visited: 172000,
      sold: 1000,
      date: '26-11-2021'
    },
    {
      carId: 'bmw-2',
      searched: 8500,
      visited: 182000,
      sold: 2000,
      date: '25-11-2021'
    },
    {
      carId: 'bmw-3',
      searched: 9500,
      visited: 192000,
      sold: 3000,
      date: '20-11-2021'
    },{
      carId: 'honda-1',
      searched: 6500,
      visited: 152000,
      sold: 5000,
      date: '25-11-2021'
    },{
      carId: 'honda-2',
      searched: 6500,
      visited: 152000,
      sold: 5000,
      date: '25-11-2021'
    },{
      carId: 'honda-3',
      searched: 6500,
      visited: 152000,
      sold: 5000,
      date: '25-11-2021'
    }
  ]

  constructor() { }

  getStatus() {
    return of(this.status.slice())
  }

  getCarStatus(carId: any, date: any) {
    return this.status.find(item => item.carId === carId)
  }
}
