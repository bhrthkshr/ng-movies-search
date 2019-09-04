import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  loginfn(){
    console.log('logging in......');
    this.change.emit();
  }
}
