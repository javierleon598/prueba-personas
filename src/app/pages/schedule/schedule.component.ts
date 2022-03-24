import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private personService: PersonService, private router: Router) {}

  people: Person[] = [
  ];

  ngOnInit(): void {
  this.people = this.personService.getPeople();
  console.log(this.people);
  }

  reenviar(){
    console.log("hola");
    this.router.navigateByUrl("/add");
  }

  editar(id:any){
console.log(id);
  }

  borrar(id:number){
    console.log(id);
    this.personService.deletePerson(id);
  }

}
