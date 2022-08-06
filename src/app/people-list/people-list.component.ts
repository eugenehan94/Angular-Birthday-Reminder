import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  @Input() peopleInChildComponent!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
