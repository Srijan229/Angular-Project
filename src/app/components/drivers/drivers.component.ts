import { Component, OnInit } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';

interface Driver {
  name: string;
  team: string;
}

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [];
  filteredDrivers: Driver[] = [];
  newDriver: Driver = { name: '', team: '' };
  viewMode: 'list' | 'grid' = 'list';
  searchQuery: string = '';

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.f1Service.getDrivers().subscribe(
      (drivers) => {
        this.drivers = drivers;
        this.filteredDrivers = drivers;
      }
    );
  }

  addDriver(): void {
    if (this.newDriver.name && this.newDriver.team) {
      this.f1Service.addDriver(this.newDriver).subscribe(() => {
        this.loadDrivers();
        this.newDriver = { name: '', team: '' };
      });
    }
  }

  toggleView(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  searchDrivers(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredDrivers = this.drivers.filter(driver => 
      driver.name.toLowerCase().includes(query) || 
      driver.team.toLowerCase().includes(query)
    );
  }
}
