import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  }
  constructor() {
  }

  ngOnInit() {
  }

}
