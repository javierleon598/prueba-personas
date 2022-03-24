import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private personService: PersonService) {}
  incompleto = false;
  completado = false;

  persona = {
    id: 12,
    nombre: '',
    apellido: '',
    cedula: '',
    genero: '',
    edad: '',
  };

  ngOnInit(): void {}

  guardar(form: NgForm) {
    if (form.invalid) {
      this.incompleto = true;
      return;
    }

    this.persona.id =   Math.round(Math.random()*1000);
   
    form.value['id'] = this.persona.id;
   
    this.incompleto = false;
    this.completado = true;
    this.personService.addPerson(form.value);
  }
}
