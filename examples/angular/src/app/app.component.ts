import { Component, OnInit } from '@angular/core';
import RikoList from 'riko-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  riko: RikoList<number>;
  numbers: number[];

  ngOnInit() {
    this.riko = new RikoList(1, 2, 3);
    this.numbers = this.riko.push(4).removeAt(1).getItems();
  }

  onClick() {
    this.numbers = this.riko.push(this.riko.tail() + 1).getItems();
  }
}
