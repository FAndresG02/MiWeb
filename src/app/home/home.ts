import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Skills } from '../components/skills/skills';
import { Portfolio } from "../components/portfolio/portfolio";
import { Experience } from "../components/experience/experience";

@Component({
  selector: 'app-home',
  imports: [
    About,
    Skills,
    Portfolio,
    Experience
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
