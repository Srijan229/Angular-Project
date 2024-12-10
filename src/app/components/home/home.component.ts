import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredRaces = [
    { name: 'Australian Grand Prix', date: new Date('2024-03-10'), imageUrl: 'https://s3p.sofifa.net/b6644da8601165439945bf73dfeac8a323ab0a18.png', detailsLink: '/races/australian' },
    { name: 'Monaco Grand Prix', date: new Date('2024-05-26'), imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/driver-ratings/driver-small-portraits//7.png', detailsLink: '/races/monaco' },
    { name: 'British Grand Prix', date: new Date('2024-07-07'), imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdVMyiqysB-FhxriRZn-14zlfrYDFBS2Vjd-GtJud5whknanVSHePo2msTFSRDqvYriA&usqp=CAU', detailsLink: '/races/british' }
  ];

  news = [
    { title: 'F1 Unveils New 2024 Car Design', link: 'https://f1.com/news/new-car-design' },
    { title: 'Top Drivers to Watch in 2024', link: 'https://f1.com/news/top-drivers-2024' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
