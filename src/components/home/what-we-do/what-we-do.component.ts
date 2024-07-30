import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css',
})
export class WhatWeDoComponent {
  cards = [
    {
      title: 'Education Empowerment',
      description:
        'Providing resources and support to ensure every child has access to quality education.',
    },
    {
      title: 'Health and Wellness',
      description:
        'Delivering healthcare services and promoting healthy living in underserved areas.',
    },
    {
      title: 'Economic Development',
      description:
        'Creating opportunities for sustainable income and self-sufficiency through vocational training and micro-financing.',
    },
    {
      title: 'Environmental Stewardship',
      description:
        'Protecting our planet by promoting sustainable practices and fostering environmental awareness.',
    },
  ];
}
