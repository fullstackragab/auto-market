import { Component, Input, OnInit } from '@angular/core';
import { CardStatus } from '../models/card-status';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() cardStatus: CardStatus[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
