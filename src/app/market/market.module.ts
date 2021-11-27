import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { StatusComponent } from './status/status.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { StatusDetailsComponent } from './status-details/status-details.component';
import { StatsComponent } from './stats/stats.component';
import { StatsItemComponent } from './stats-item/stats-item.component';


@NgModule({
  declarations: [
    StatusComponent,
    CardComponent,
    SliderComponent,
    StatusDetailsComponent,
    StatsComponent,
    StatsItemComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
