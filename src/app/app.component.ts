import { Component } from '@angular/core';
import { PEOPLE, People } from 'src/mock-people';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // People[] is the interface
  people: People[] = PEOPLE;
 
  constructor() {
  }
  
  clearAll(){
    this.people = [];
  }
}
