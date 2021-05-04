import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  message="";
  messages=[];
  constructor() { }
  send(){
    let messages ={
      message: this.message
    }
    this.messages.push(messages);
    this.clearField();
  }
  clearField(){
    this.message = "";
  }
  ngOnInit() {
  }

}
