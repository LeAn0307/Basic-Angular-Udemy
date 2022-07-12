import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  name: string = 'lean';
  age: number = 21;

  allowNewServer = false;

  serverName = 'enter server name';

  serverCreationStatus = 'No server was created. ';

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return (this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline');
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getName() {
    return this.name;
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was create. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    // console.log('serverStatus', this.serverStatus);
  }
}
