import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-promo-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.css'],
})
export class PromoCarouselComponent {
  promos = [
    {
      id: 'slide1',
      title: 'Mystic Quest',
      subtitle: 'Enter the realm and win rewards!',
      image: '/images/game1.jpg',
    },
    {
      id: 'slide2',
      title: 'Spin & Win Mega Jackpot',
      subtitle: 'Daily prizes and leaderboard bonuses.',
      image: '/images/game2.jpg',
    },
    {
      id: 'slide3',
      title: 'Battle Royale Season 8',
      subtitle: 'Compete with thousands. Become the champion.',
      image: '/images/game3.jpg',
    },
  ];

  scrollToSlide(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }
}
