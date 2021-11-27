import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/market/bmw-3', pathMatch: 'full' },
  {
    path: 'market',
    loadChildren: () =>
      import('./market/market.module').then((m) => m.MarketModule),
  },
  { path: '**', redirectTo: '/market' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
