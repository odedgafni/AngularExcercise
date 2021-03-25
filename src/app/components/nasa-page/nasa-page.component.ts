import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service'
import { Asteroid } from '../../models/Asteroid'

@Component({
  selector: 'app-nasa-page',
  templateUrl: './nasa-page.component.html',
  styleUrls: ['./nasa-page.component.css']
})
export class NasaPageComponent implements OnInit {

  nasaData = {};

  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
  }

  getAsteroids(from: string, to: string) {
    this.nasaService.getAsteroids(from, to).subscribe((data: Partial<Asteroid>) => {
      this.nasaService.isLoading.next(false);
      this.nasaData = data.near_earth_objects;
      console.log(data)
    })
  }
}
