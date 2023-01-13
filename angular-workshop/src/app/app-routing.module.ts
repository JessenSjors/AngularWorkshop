import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/hero-tutorial/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-tutorial/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/hero-tutorial/heroes/heroes.component';
import { MapboxComponent } from './components/mapbox-example/mapbox/mapbox.component';
import { ItemOutputContainerComponent } from './components/output-example/item-output-container/item-output-container.component';
import { BasicThreejsComponent } from './components/three-js-examples/basic-threejs/basic-threejs.component';
import { CubeThreejsComponent } from './components/three-js-examples/cube-threejs/cube-threejs.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'three-js', component: BasicThreejsComponent },
  { path: 'cube-three-js', component: CubeThreejsComponent },
  { path: 'item-output', component: ItemOutputContainerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
