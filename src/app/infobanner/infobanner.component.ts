import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobanner',
  templateUrl: './infobanner.component.html',
  styleUrls: ['./infobanner.component.css']
})
export class InfobannerComponent implements OnInit {
  gameinfo = "Please start";

  constructor() { }

  ngOnInit() {
  }

}
