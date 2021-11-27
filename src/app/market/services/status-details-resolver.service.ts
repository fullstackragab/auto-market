import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StatusDetails } from '../models/status-details';
import { CarService } from './car.service';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root',
})
export class StatusDetailsResolver implements Resolve<StatusDetails> {
  constructor(
    private statusService: StatusService,
    private carService: CarService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<StatusDetails> | Promise<StatusDetails> | StatusDetails {
    const statusDetails = new StatusDetails()
    const carId = route.params['id']
    const date = route.queryParams['date']
    const car = this.carService.getCar(carId)
    if(car) {
      statusDetails.carId = carId
      statusDetails.carDistance = car.distance
      statusDetails.carFuelType = car.fuelType
      statusDetails.carImage = car.image
      statusDetails.carLocation = car.location
      statusDetails.carLogo = this.carService.getMarkLogo(car.make)
      statusDetails.carTitle = car.model
      statusDetails.carTransmission = car.transmission

      const status = this.statusService.getCarStatus(carId, date)
      if(status) {
        statusDetails.searched = Math.floor(status.searched / 1000)
        statusDetails.visited = Math.floor(status.visited / 1000)
        statusDetails.sold = Math.floor(status.sold / 1000)
      }
    }
    return statusDetails
  }
}
