import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  experiences: WorkExperience[] = [
    {
      role: 'Practicante de Desarrollo Full-Stack',
      company: 'Nombre de la Empresa',
      location: 'Guayaquil, Ecuador',
      startDate: 'Ene 2024',
      endDate: 'Jun 2024',
      description: 'Desarrollo y mantenimiento de módulos backend con Spring Boot y APIs REST, además de componentes frontend en Angular para mejorar la experiencia de usuario.',
      tags: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
    },
    
  ];
}

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  startDate: string;   // ej: 'Ene 2024'
  endDate: string;      // ej: 'Presente' o 'Jun 2024'
  description: string;
  tags: string[];       // tecnologías usadas en ese puesto
}