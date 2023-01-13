import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-tutorial/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/hero-tutorial/messages/messages.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapboxComponent } from './components/mapbox-example/mapbox/mapbox.component';
import { BasicThreejsComponent } from './components/three-js-examples/basic-threejs/basic-threejs.component';
import { ItemOutputComponent } from './components/output-example/item-output/item-output.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectiveExampleComponent } from './directives/directive-example/directive-example.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { InMemoryDataService } from './components/hero-tutorial/in-memory-data.service';
import { DashboardComponent } from './components/hero-tutorial/dashboard/dashboard.component';
import { HeroesComponent } from './components/hero-tutorial/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-tutorial/hero-search/hero-search.component';
import { MapboxMarkersControllerComponent } from './components/mapbox-example/mapbox-markers-controller/mapbox-markers-controller.component';
import { CubeThreejsComponent } from './components/three-js-examples/cube-threejs/cube-threejs.component';
import { ItemOutputContainerComponent } from './components/output-example/item-output-container/item-output-container.component';
import { HeroService } from './components/hero-tutorial/hero.service';

@NgModule({
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoic2pvcnNqZXNzZW4iLCJhIjoiY2xjdG5jNzI5MGZhdjNvcXRrazZ5ajBmOCJ9.lHEmPSLcgEV0aBUUCZ4LyQ',
    }),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    MapboxComponent,
    MapboxMarkersControllerComponent,
    BasicThreejsComponent,
    CubeThreejsComponent,
    ItemOutputComponent,
    ItemOutputContainerComponent,
    HighlightDirective,
    DirectiveExampleComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
