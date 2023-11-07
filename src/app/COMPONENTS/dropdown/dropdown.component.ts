import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../SERVICES/country.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  countries: string[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
