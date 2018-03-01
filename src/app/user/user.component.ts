import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '';
  isHightlight = true;
  constructor() { }

  ngOnInit() {
  }
  // showInfo(event) {
  //   this.name = event.target.value;
  // }

}
