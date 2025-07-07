import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HeroSectionComponent } from '../shared/components/hero-section/hero-section.component';
import { StatsCardsComponent } from '../shared/components/stats-cards/stats-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    StatsCardsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
