import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Car {
  id: number;
  name: string;
  team: string;
  imageUrl: string;
  description: string;
}

interface Driver {
  name: string;
  team: string;
}

export interface Circuit {
  name: string;
  location: string;
  length: string;
  turns: number;
}

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  private cars: Car[] = [
    {
      id: 1,
      name: 'W11',
      team: 'Mercedes AMG',
      imageUrl: 'https://cdn-1.motorsport.com/images/amp/27vn3M30/s1000/lewis-hamilton-mercedes-f1-w11.jpg',
      description: 'Fastest car ever made in F1, driven by Lewis Hamilton.'
    },
    {
      id: 2,
      name: 'RB23',
      team: 'Red Bull Racing',
      imageUrl: 'https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/58d7b042f186e.jpg',
      description: 'The latest Red Bull Racing car, known for its speed and agility.'
    },
    {
      id: 3,
      name: 'SF71H',
      team: 'Ferrari',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mdxx9Vq3UGqg6RaoNo3pDwAAAA?rs=1&pid=ImgDetMain',
      description: 'Ferrari’s SF71H, designed for high performance on fast tracks.'
    },
    {
      id: 4,
      name: 'AMR23',
      team: 'Aston Martin',
      imageUrl: 'https://th.bing.com/th/id/OIP.kU0yjYnGDlapCh74-eKV2gHaEK?rs=1&pid=ImgDetMain',
      description: 'Aston Martin’s AMR23, a sleek and powerful competitor in the F1 championship.'
    }
  ];

  private drivers: Driver[] = [
    { "name": "Lewis Hamilton", "team": "Mercedes AMG" },
    { "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "name": "Charles Leclerc", "team": "Ferrari" },
    { "name": "Sebastian Vettel", "team": "Aston Martin" },
    { "name": "Fernando Alonso", "team": "Alpine" },
    { "name": "Lando Norris", "team": "McLaren" },
    { "name": "Valtteri Bottas", "team": "Alfa Romeo" },
    { "name": "Sergio Perez", "team": "Red Bull Racing" },
    { "name": "Carlos Sainz", "team": "Ferrari" },
    { "name": "George Russell", "team": "Mercedes AMG" },
    { "name": "Pierre Gasly", "team": "Alpine" },
    { "name": "Esteban Ocon", "team": "Alpine" },
    { "name": "Daniel Ricciardo", "team": "AlphaTauri" },
    { "name": "Kevin Magnussen", "team": "Haas" },
    { "name": "Mick Schumacher", "team": "Mercedes AMG" },
    { "name": "Lance Stroll", "team": "Aston Martin" },
    { "name": "Yuki Tsunoda", "team": "AlphaTauri" },
    { "name": "Guanyu Zhou", "team": "Alfa Romeo" },
    { "name": "Alexander Albon", "team": "Williams" },
    { "name": "Logan Sargeant", "team": "Williams" },
    

    
    
  ];

  private circuits: Circuit[] = [
    {
      name: 'Circuit Paul Ricard',
      location: 'Le Castellet, France',
      length: '5.842 km',
      turns: 15
    },
    {
      name: 'Yas Marina Circuit',
      location: 'Abu Dhabi, United Arab Emirates',
      length: '5.554 km',
      turns: 21
    },
    {
      name: 'Circuit of the Americas',
      location: 'Austin, United States',
      length: '5.513 km',
      turns: 20
    },
    {
      name: 'Hockenheimring',
      location: 'Hockenheim, Germany',
      length: '4.574 km',
      turns: 17
    },
    {
      name: 'Red Bull Ring',
      location: 'Spielberg, Austria',
      length: '4.318 km',
      turns: 10
    },
    {
      name: 'Nurburgring',
      location: 'Nurburg, Germany',
      length: '5.148 km',
      turns: 16
    },
    {
      name: 'Marina Bay Street Circuit',
      location: 'Singapore',
      length: '5.063 km',
      turns: 23
    },
    {
      name: 'Hungaroring',
      location: 'Mogyorod, Hungary',
      length: '4.381 km',
      turns: 14
    },
    {
      name: 'Zandvoort Circuit',
      location: 'Zandvoort, Netherlands',
      length: '4.259 km',
      turns: 14
    },
    {
      name: 'Autodromo Hermanos Rodriguez',
      location: 'Mexico City, Mexico',
      length: '4.304 km',
      turns: 17
    },
    {
      name: 'Sochi Autodrom',
      location: 'Sochi, Russia',
      length: '5.848 km',
      turns: 18
    },
    {
      name: 'Imola Circuit',
      location: 'Imola, Italy',
      length: '4.909 km',
      turns: 19
    },
    {
      name: 'Shanghai International Circuit',
      location: 'Shanghai, China',
      length: '5.451 km',
      turns: 16
    },
    {
      name: 'Sepang International Circuit',
      location: 'Kuala Lumpur, Malaysia',
      length: '5.543 km',
      turns: 15
    },
    {
      name: 'Las Vegas Grand Prix Circuit',
      location: 'Las Vegas, United States',
      length: '6.120 km',
      turns: 17
    },
    {
      name: 'Jeddah Street Circuit',
      location: 'Jeddah, Saudi Arabia',
      length: '6.175 km',
      turns: 27
    },
    {
      name: 'Bahrain International Circuit',
      location: 'Sakhir, Bahrain',
      length: '5.412 km',
      turns: 15
    },
    {
      name: 'Portimao Circuit',
      location: 'Portimao, Portugal',
      length: '4.653 km',
      turns: 15
    },
    {
      name: 'Kyalami Grand Prix Circuit',
      location: 'Midrand, South Africa',
      length: '4.529 km',
      turns: 16
    },
    {
      name: 'Autodromo Internazionale Enzo e Dino Ferrari',
      location: 'Imola, Italy',
      length: '4.909 km',
      turns: 19
    }    
  ];

  private selectedCar: Car | null = null;

  constructor() { }

  
  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  addCar(car: Car): Observable<void> {
    car.id = this.cars.length + 1; 
    this.cars.push(car);
    return of();
  }

  getSelectedCar(): Car | null {
    return this.selectedCar;
  }

  setSelectedCar(car: Car | null): void {
    this.selectedCar = car;
  }

  
  getDrivers(): Observable<Driver[]> {
    return of(this.drivers);
  }

  addDriver(driver: Driver): Observable<void> {
    this.drivers.push(driver);
    return of();
  }

  
  getCircuits(): Observable<Circuit[]> {
    return of(this.circuits);
  }

  addCircuit(circuit: Circuit): Observable<void> {
    this.circuits.push(circuit);
    return of();
  }
}
