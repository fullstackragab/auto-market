import { Component, Input, OnInit } from '@angular/core';
import { CardStatus } from '../models/card-status';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardStatus!: CardStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
