import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skills = [
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
  ];
}