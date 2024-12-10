import { Component, OnInit } from '@angular/core';
import { F1Service,Circuit } from 'src/app/services/f1.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  circuits: Circuit[] = [];
  filteredCircuits: Circuit[] = [];
  searchText: string = '';
  selectedFilter: string = '';
  filterOptions: any = {
    location: [],
    length: [],
    turns: []
  };
  selectedLocation: string = '';
  minLength: string = '';
  maxLength: string = '';
  minTurns: number | null = null;
  maxTurns: number | null = null;

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.loadCircuits();
  }

  loadCircuits(): void {
    this.f1Service.getCircuits().subscribe(
      (data: Circuit[]) => {
        this.circuits = data;
        this.initializeFilterOptions();
        this.applyFilter();
      },
      error => console.error('Error fetching circuits', error)
    );
  }

  initializeFilterOptions(): void {
    const locations = new Set<string>();
    const lengths = new Set<number>();
    const turns = new Set<number>();

    this.circuits.forEach(circuit => {
      locations.add(circuit.location);
      lengths.add(parseFloat(circuit.length.replace(' km', '')));
      turns.add(circuit.turns);
    });

    this.filterOptions.location = Array.from(locations);
    this.filterOptions.length = Array.from(lengths).sort((a, b) => a - b);
    this.filterOptions.turns = Array.from(turns).sort((a, b) => a - b);
  }

  applyFilter(): void {
    let filtered = this.circuits;

    // Apply search filter
    if (this.searchText) {
      const lowerSearchText = this.searchText.toLowerCase();
      filtered = filtered.filter(circuit =>
        circuit.name.toLowerCase().includes(lowerSearchText) ||
        circuit.location.toLowerCase().includes(lowerSearchText) ||
        circuit.length.toLowerCase().includes(lowerSearchText) ||
        circuit.turns.toString().includes(lowerSearchText)
      );
    }

    // Apply location filter
    if (this.selectedLocation) {
      filtered = filtered.filter(circuit => circuit.location === this.selectedLocation);
    }

    // Apply length range filter
    if (this.minLength || this.maxLength) {
      const minLength = parseFloat(this.minLength || '0');
      const maxLength = parseFloat(this.maxLength || 'Infinity');
      filtered = filtered.filter(circuit => {
        const circuitLength = parseFloat(circuit.length.replace(' km', ''));
        return circuitLength >= minLength && circuitLength <= maxLength;
      });
    }

    // Apply turns range filter
    if (this.minTurns !== null || this.maxTurns !== null) {
      const minTurns = this.minTurns || 0;
      const maxTurns = this.maxTurns || Infinity;
      filtered = filtered.filter(circuit => 
        circuit.turns >= minTurns && circuit.turns <= maxTurns
      );
    }

    this.filteredCircuits = filtered;
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedFilter = '';
    this.selectedLocation = '';
    this.minLength = '';
    this.maxLength = '';
    this.minTurns = null;
    this.maxTurns = null;
    this.applyFilter();
  }
}
