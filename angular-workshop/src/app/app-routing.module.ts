import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { BasicThreejsComponent } from './basic-threejs/basic-threejs.component';
import { CubeThreejsComponent } from './cube-threejs/cube-threejs.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'three-js', component: BasicThreejsComponent },
  { path: 'cube-three-js', component: CubeThreejsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
