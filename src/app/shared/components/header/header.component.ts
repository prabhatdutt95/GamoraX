import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Home,
  Gamepad2,
  Trophy,
  Gift,
  Moon,
  Sun,
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', icon: Home, route: '/home' },
    { label: 'Games', icon: Gamepad2, route: '/games' },
    { label: 'Tournaments', icon: Trophy, route: '/tournaments' },
    { label: 'Promos', icon: Gift, route: '/promos' },
  ];

  isDarkMode = false;
  readonly MoonIcon = Moon;
  readonly SunIcon = Sun;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}
