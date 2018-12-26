import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Test Server';
  serverDesc = '';
  serverCreated = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000);
  }

  onServerCreate() {
    this.serverCreated = true;
  }

  onUpdateDesc(event) {
    this.serverDesc = event.target.value;
  }

  ngOnInit() {
  }

}
