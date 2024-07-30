import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  cards = [
    {
      title: 'Our Mission',
      description:
        'Our mission is to empower individuals and communities by providing the tools and support they need to overcome challenges and achieve their fullest potential through collaborative efforts.',
    },
    {
      title: 'Our Vision',
      description:
        'Our vision is a world where every individual, regardless of their background or circumstances has the opportunity to thrive. We envision communities that are resilient, self-reliant, and full of promise.',
    },
    {
      title: 'Global Movement',
      description:
        'We envision a global movement where compassion and empathy drive action, where the barriers of inequality and injustice are dismantled, and where hope is not just a fleeting sentiment but a tangible reality.',
    },
  ];
}
