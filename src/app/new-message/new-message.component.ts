import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebApiService } from '../services/web-api.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message = {
    owner: '',
    text: ''
  }
  @Output() messagePosted = new EventEmitter();
  constructor(private webApiService: WebApiService) { }

  ngOnInit(): void {
  }

  post() {
      this.webApiService.postMessage(this.message).subscribe((data) => {});
      this.messagePosted.emit(this.message);
  }

}
