import { Component } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent {
  public map!: Map;
  public mapStyle: string = 'mapbox://styles/mapbox/streets-v9';
  public coordinates: [number, number] = [140, -35];
}
