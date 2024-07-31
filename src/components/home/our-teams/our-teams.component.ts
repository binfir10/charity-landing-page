import { Component } from '@angular/core';

@Component({
  selector: 'app-our-teams',
  standalone: true,
  imports: [],
  templateUrl: './our-teams.component.html',
  styleUrl: './our-teams.component.css',
})
export class OurTeamsComponent {
  team = [
    {
      name: 'Emma Johnson',
      position: 'Founder & Executive Director',
      image: '/Team.png',
      description:
        'Emma Johnson founded Hope in 2023 and has over 20 years of nonprofit experience. Her passion for education and health drives Hope’s mission, inspiring the team with her leadership and dedication to making a difference.',
    },
    {
      name: 'Michael Ramirez',
      position: 'Director of Programs',
      image: '/Team-1.png',
      description:
        'Michael Ramirez, with a background in social work and public health, oversees all of Hope’s initiatives. His strategic planning and compassionate approach ensure our programs effectively meet community needs.',
    },
    {
      name: 'Sophia Lee',
      position: 'Head of Education Initiatives',
      image: '/Team-2.png',
      description:
        'Sophia Lee designs and leads our education programs. With over a decade of teaching experience, she is committed to providing quality education and creating opportunities for children to thrive.',
    },
    {
      name: 'Dora Thompson',
      position: 'Community Health Coordinator',
      image: '/Team-3.png',
      description:
        'Dora Thompson manages our health and wellness programs. With a background in nursing and public health, he focuses on improving health outcomes and promoting preventive care in underserved communities.',
    },
  ];
}
