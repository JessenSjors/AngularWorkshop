import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapHolderService {
  public map!: Map;

  constructor() { 
    
  }

  public setMapRef(map: Map): void {
    this.map = map;
  }
}
