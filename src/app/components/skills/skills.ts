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
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Angular Material', icon: 'devicon-angular-plain colored' }
    ];

  tools = [
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MariaDB', icon: 'devicon-mariadb-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Visual Studio Code', icon: 'devicon-vscode-plain colored' },
    { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
  ];
}