import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { Status } from '../models/status';
import { StatusService } from '../services/status.service';
import { CardStatus } from '../models/card-status';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  status: Status[] = [];
  cars: Car[] = [];
  cardStatus: CardStatus[] = [];
  constructor(
    private carService: CarService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.statusService
      .getStatus()
      .pipe(
        switchMap((status: Status[]) => {
          this.status = status;
          return this.carService.getCars();
        })
      )
      .subscribe((cars: Car[]) => {
        this.cars = cars;
        this.cardStatus = []
        this.status.forEach((item) => {
          const car = this.cars.find((car) => car.id === item.carId);
          if (!car) return;
          const statusItem: CardStatus = {
            carId: item.carId,
            carTitle: car.model,
            carFuelType: car.fuelType,
            carImage: car.image,
            carLogo: this.carService.getMarkLogo(car.make),
            searched: Math.floor(item.searched / 1000),
            visited: Math.floor(item.visited / 1000),
            sold: Math.floor(item.sold / 1000),
          };
          this.cardStatus.push(statusItem)
        });
      });
  }
}
