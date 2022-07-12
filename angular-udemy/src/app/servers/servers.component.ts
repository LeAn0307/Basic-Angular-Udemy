import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  name: string = 'lean';
  age: number = 21;

  allowNewServer = false;

  serverName = 'Enter server name';
  serverCreated = false;
  serverCreationStatus = 'No server was created. ';

  servers = ['TestServer', 'TestServer 2', 'TestServer 3'];

  getName() {
    return this.name;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was create. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit(): void {}
}
