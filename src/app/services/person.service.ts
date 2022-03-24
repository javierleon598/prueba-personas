import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  people: Person[] = [];

  constructor() {}

  addPerson(persona: any) {
    this.people.push(persona);
  }

  getPeople() {
    return this.people;
  }

  deletePerson(id: number) {
    this.people.splice(id, 1);
  }
}
