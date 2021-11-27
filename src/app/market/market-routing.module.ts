import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusDetailsResolver } from './services/status-details-resolver.service';
import { StatusDetailsComponent } from './status-details/status-details.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: StatusComponent, children: [
    { path: ':id', component: StatusDetailsComponent, resolve: {
      statusDetails: StatusDetailsResolver
    } }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
