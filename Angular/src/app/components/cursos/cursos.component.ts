import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  link: string;

  lista: string[] = ['Java', 'C#', 'C++', 'Kotlin'];

  constructor() {
    this.link = 'http//Luiz.training.com';
  }

  ngOnInit() {
  }

}
