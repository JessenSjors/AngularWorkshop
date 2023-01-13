import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapboxComponent } from './mapbox/mapbox.component';
import { MapboxMarkersControllerComponent } from './mapbox-markers-controller/mapbox-markers-controller.component';
import { BasicThreejsComponent } from './basic-threejs/basic-threejs.component';
import { Ng3Component } from './ng3/ng3.component';
import { CubeThreejsComponent } from './cube-threejs/cube-threejs.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemOutputContainerComponent } from './item-output-container/item-output-container.component';
import { HighlightDirective } from './highlight.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoic2pvcnNqZXNzZW4iLCJhIjoiY2xjdG5jNzI5MGZhdjNvcXRrazZ5ajBmOCJ9.lHEmPSLcgEV0aBUUCZ4LyQ',
    }),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    InputNumberModule
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
    Ng3Component,
    CubeThreejsComponent,
    ItemOutputComponent,
    ItemOutputContainerComponent,
    HighlightDirective,
    DirectiveExampleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
