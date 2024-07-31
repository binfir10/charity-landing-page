import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonial = [
    {
      name: 'Maria, Community Member',
      image: '/testimonial.png',
      description:
        '"Hope has given my community the resources we needed to build a better future.  Through their educational programs, my children now have opportunities I could only dream of. The difference in our lives is beyond words."',
    },
    {
      name: 'John, Volunteer',
      image: '/testimonial-1.png',
      description:
        '"Volunteering with Hope has been a life-changing experience. Seeing the direct impact of our work on people s lives is incredibly rewarding."',
    },
    {
      name: 'Sarah, Corporate Partner',
      image: '/testimonial-2.png',
      description:
        '"As a corporate partner, collaborating with Hope has been incredibly fulfilling. Their transparency, dedication, and impactful programs make it easy to support their mission. We are proud to contribute to a cause that truly transforms lives."',
    },
    {
      name: 'Raj, Entrepreneur',
      image: '/testimonial-3.png',
      description:
        '"Hope s micro-financing program has been a game-changer for our community. Small loans have allowed us to start businesses and improve our economic stability. We are now more self-reliant and optimistic about our future.""',
    },
    {
      name: 'David, Beneficiary',
      image: '/testimonial-4.png',
      description:
        '"Hope s healthcare initiatives have transformed our community s well-being. Access to regular medical check-ups and health education has drastically improved our quality of life. We are healthier and more informed, thanks to their tireless efforts."',
    },
    {
      name: 'Amina, Program Participant',
      image: '/testimonial-5.png',
      description:
        '"Participating in Hope s vocational training program has given me the skills and confidence to start my own business. I am now able to provide for my family and contribute to my community. Hope has truly changed my life."',
    },
  ];
}
