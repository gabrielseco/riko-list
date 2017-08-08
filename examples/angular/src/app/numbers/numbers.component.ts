import RikoList from 'riko-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
  @Input() numbers: RikoList<number>;
}
