import { Component } from '@angular/core';
import { Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mapbox-markers-controller',
  templateUrl: './mapbox-markers-controller.component.html',
  styleUrls: ['./mapbox-markers-controller.component.scss']
})
export class MapboxMarkersControllerComponent {
  coordinates: number[] = [];
  color = '#3887be';

  onDragEnd(marker: Marker) {
    this.coordinates = marker.getLngLat().toArray();
  }
}
