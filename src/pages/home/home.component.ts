import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { WhatWeDoComponent } from '../../components/home/what-we-do/what-we-do.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { JourneyComponent } from '../../components/home/journey/journey.component';
import { OurTeamsComponent } from '../../components/home/our-teams/our-teams.component';
import { TestimonialsComponent } from '../../components/home/testimonials/testimonials.component';
import { GalleryHomeComponent } from '../../components/home/gallery-home/gallery-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WhatWeDoComponent,
    AboutComponent,
    JourneyComponent,
    OurTeamsComponent,
    TestimonialsComponent,
    GalleryHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
