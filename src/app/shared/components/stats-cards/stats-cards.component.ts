import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-cards.component.html',
  styleUrl: './stats-cards.component.css',
})
export class StatsCardsComponent {
  stats = [
    {
      title: 'Active Games',
      value: 128,
      description: 'Live matches across genres',
    },
    {
      title: 'Registered Players',
      value: '34K+',
      description: 'Across all global servers',
    },
    {
      title: 'Tournaments Running',
      value: 6,
      description: 'With real-time leaderboards',
    },
    {
      title: 'Online Users',
      value: '1.2K',
      description: 'Currently active on platform',
    },
  ];
}
