import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  javascript: Skill = new Skill("Javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
  angular: Skill = new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png", "https://angular.io/");


  model: Developer = new Developer("Jess", "Wild", 35, "men", "Blablabla blabla", [this.javascript, this.angular]);



  ngOnInit(): void {
  }

}
