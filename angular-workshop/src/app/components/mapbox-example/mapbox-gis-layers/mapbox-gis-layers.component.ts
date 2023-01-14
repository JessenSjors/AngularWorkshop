import { Component } from '@angular/core';
import { AnyLayout } from "mapbox-gl";

@Component({
  selector: 'app-mapbox-gis-layers',
  templateUrl: './mapbox-gis-layers.component.html',
  styleUrls: ['./mapbox-gis-layers.component.scss']
})
export class MapboxGisLayersComponent {
  public layouts: { [key: string]: AnyLayout } = {
    contours: {
      visibility: 'visible',
      'line-join': 'round',
      'line-cap': 'round',
    },
    museums: {
      visibility: 'visible',
    },
  };
}
