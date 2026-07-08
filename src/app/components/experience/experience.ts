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
      role: 'Desarrollador Web WordPress',
      company: 'EM&E CIA. LTDA.',
      location: 'Ecuador',
      startDate: 'Oct 2024',
      endDate: 'Feb 2025',
      description: 'Desarrollo del sitio web corporativo de Electro Mobility EC, implementación de formularios y simuladores interactivos para cálculo energético, además de la personalización y optimización de temas y plugins. Sitio web: electromobilityec.com',
      tags: ['WordPress', 'PHP', 'JavaScript', 'Calculated Fields Form'],
    },
    {
      role: 'Desarrollador Odoo',
      company: 'TESTNET S.A.S. B.I.C.',
      location: 'Ecuador',
      startDate: 'Mar 2025',
      endDate: 'Jul 2025',
      description: 'Personalización de módulos y vistas en Odoo 16, integración de la API de Twilio para notificaciones por WhatsApp y participación en procesos de migración, validación y adaptación multilenguaje de la plataforma.',
      tags: ['Odoo 16', 'Python', 'PostgreSQL', 'Twilio', 'XML', 'Ubuntu'],
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