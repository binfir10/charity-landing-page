import { Component } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [],
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.css',
})
export class GetInvolvedComponent {
  cards = [
    {
      icon: '/get-involved/div0.png',
      title: 'Donate',
      img: '/get-involved/Frame 238.png',
      description:
        'Your generous contributions help us fund vital programs and initiatives. Whether its a one-time donation or a recurring gift, your support enables us to provide education, healthcare, and economic opportunities to those who need it most. Every dollar makes a difference.',
      buttonInfo: 'Donate',
    },
    {
      icon: '/get-involved/div.png',
      title: 'Volunteer',
      img: '/get-involved/Frame 239.png',
      description:
        'Offer your time and skills to support our projects on the ground. Whether youre a teacher, a healthcare professional, a financial expert, or someone with a passion for environmental conservation, your expertise is invaluable. Join our team of dedicated volunteers and experience the profound impact of your efforts firsthand.',
      buttonInfo: 'Contact Us',
    },
    {
      icon: '/get-involved/div-1.png',
      title: 'Advocate for us',
      img: '/get-involved/Frame 240.png',
      description:
        'Raise awareness about our cause and help us amplify our message. Use your voice to share our mission with your network, organize fundraising events, or advocate for policy changes that support our work. Your advocacy can inspire others to join the movement and make a difference.',
      buttonInfo: 'Contact Us',
    },
  ];
}
