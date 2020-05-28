import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@ViewChild(MessagesComponent) messages : MessagesComponent; 

  constructor() { }

  ngOnInit(): void {
  }

  onPosted(message) {
    this.messages.messages.push(message);
  }

}
