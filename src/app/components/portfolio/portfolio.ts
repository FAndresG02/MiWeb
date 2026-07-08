import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {

  projects: Project[] = [
    {
      name: 'Proyecto Cafetería',
      description: 'Aplicación full stack para la gestión de cafeterías, desarrollada con Angular, Spring Boot, MySQL y Docker.',
      image: 'assets/portfolioImages/SystemCafeteria.png',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Spring Boot', 'MySQL', 'Docker', 'Java'],
      repoUrl: 'https://github.com/FAndresG02/ProyectoCafeteria',
    },

    {
      name: 'Proyecto Hoteles',
      description: 'Aplicación full stack para la búsqueda y reserva de hoteles, desarrollada con Angular, Spring Boot, MySQL, Docker y arquitectura de microservicios.',
      image: 'assets/portfolioImages/SystemHotel.png',
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'MySQL', 'Docker', 'Microservices'],
      repoUrl: 'https://github.com/FAndresG02/ProyectoHoteles',
    },

    {
      name: 'Diagnóstico Vehicular Inteligente',
      description: 'Aplicación móvil para el diagnóstico y mantenimiento preventivo de vehículos mediante el análisis de códigos OBD-II e inteligencia artificial.',
      image: 'assets/portfolioImages/appCar.png',
      tags: ['Flutter', 'Python', 'Flask', 'Dart', 'ESP32', 'Arduino', 'OBD-II', 'WiFi', 'Firebase'],
      repoUrl: 'https://github.com/FAndresG02/Diagn-stico-Vehicular-Inteligente',
    },

    // {
    //   name: 'Proyecto Hoteles',
    //   description: 'Aplicación full stack para la búsqueda y reserva de hoteles, desarrollada con Angular, Spring Boot, MySQL, Docker y arquitectura de microservicios.',
    //   image: 'assets/portfolioImages/SystemHotel.png',
    //   tags: ['Angular', 'TypeScript', 'SCSS'],
    //   repoUrl: 'https://github.com/usuario/miweb',
    // },

  ];
}

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}
