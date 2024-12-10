import { Component, OnInit, HostListener } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';

interface Car {
  id: number;
  name: string;
  team: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car | null = null;
  newCar: Partial<Car> = {};

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.loadCars();
    this.selectedCar = this.f1Service.getSelectedCar();
  }

  loadCars(): void {
    this.f1Service.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  selectCar(car: Car): void {
    this.selectedCar = car;
    this.f1Service.setSelectedCar(car);
  }

  closeDetails(): void {
    this.selectedCar = null;
    this.f1Service.setSelectedCar(null);
  }

  addCar(): void {
    if (this.newCar.name && this.newCar.team && this.newCar.imageUrl && this.newCar.description) {
      const car: Car = {
        id: 0, // Temporary ID, will be set in the service
        name: this.newCar.name!,
        team: this.newCar.team!,
        imageUrl: this.newCar.imageUrl!,
        description: this.newCar.description!,
      };

      this.f1Service.addCar(car).subscribe(() => {
        this.loadCars();
        this.newCar = {}; // Reset the form
      });
    }
  }

  
  @HostListener('window:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.selectedCar) {
      this.closeDetails();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    console.log('Key Down:', event.key);
  }

  onKeyPress(event: KeyboardEvent): void {
    console.log('Key Press:', event.key);
  }

  onKeyUp(event: KeyboardEvent): void {
    console.log('Key Up:', event.key);
  }
}
