import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    {name:'Ti', age:'18'},
    {name:'Teo', age:'19'},
    {name:'Tun', age:'20'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
