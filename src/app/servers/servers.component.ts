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
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000);
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateDesc(event) {
    this.serverDesc = event.target.value;
  }

  ngOnInit() {
  }

}
