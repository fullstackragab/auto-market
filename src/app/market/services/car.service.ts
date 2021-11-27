import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    {
      id: 'bmw-1',
      make: 'BMW',
      model: 'BMW 3 Series Gran Limousine',
      fuelType: 'Petrol',
      image: 'assets/cars/bmw-1.png',
      transmission: 'Auto',
      distance: '113000',
      location: 'Ottawa'
    },
    {
      id: 'bmw-2',
      make: 'BMW',
      model: 'BMW 5 Series New Age',
      fuelType: 'Petrol',
      image: 'assets/cars/bmw-2.png',
      transmission: 'Auto',
      distance: '115000',
      location: 'Vancouver'
    },
    {
      id: 'bmw-3',
      make: 'BMW',
      model: 'BMW 7 Series Gran Sky',
      fuelType: 'Petrol',
      image: 'assets/cars/bmw-1.png',
      transmission: 'Auto',
      distance: '125000',
      location: 'Ontario'
    },
    {
      id: 'honda-1',
      make: 'Honda',
      model: 'Honda Civic 2022',
      fuelType: 'Petrol',
      image: 'assets/cars/honda-1.png',
      transmission: 'Auto',
      distance: '116000',
      location: 'London'
    },
    {
      id: 'honda-2',
      make: 'Honda',
      model: 'Honda Orlan 2022',
      fuelType: 'Petrol',
      image: 'assets/cars/honda-1.png',
      transmission: 'Auto',
      distance: '116000',
      location: 'London'
    },
    {
      id: 'honda-3',
      make: 'Honda',
      model: 'Honda  2022',
      fuelType: 'Petrol',
      image: 'assets/cars/honda-1.png',
      transmission: 'Auto',
      distance: '118000',
      location: 'Mexico City'
    },
  ]

  constructor() { }

  getCars() {
    return of(this.cars.slice())
  }

  getCar(id: string): Car | undefined {
    return this.cars.find(car => car.id === id)
  }

  getMarkLogo(mark: string) {
    switch(mark.toLocaleLowerCase()) {
      case "bmw":
        return "assets/logos/bmw-logo.png"
      case "honda":
        return "assets/logos/honda-logo.png"
      default:
        return "assets/logos/bmw-logoo.png"
    }
  }
}
