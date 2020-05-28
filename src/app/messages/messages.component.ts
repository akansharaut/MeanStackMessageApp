import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages;

  constructor(private webApiService: WebApiService) { }

  ngOnInit(): void {
    this.webApiService.getMessages().subscribe((data)=> {
      this.messages = data;
    });
  }

}
