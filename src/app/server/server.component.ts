import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerId() {
    return this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.getServerStatus() === 'online' ? 'green' : 'red';  
  }

  ngOnInit() {
  }

}
