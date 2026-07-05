import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Skills } from '../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [
    About,
    Skills
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
