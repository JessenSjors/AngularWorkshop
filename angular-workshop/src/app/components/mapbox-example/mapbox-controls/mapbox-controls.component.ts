import { Component } from '@angular/core';
import {Position} from "ngx-mapbox-gl";

@Component({
  selector: 'app-mapbox-controls',
  templateUrl: './mapbox-controls.component.html',
  styleUrls: ['./mapbox-controls.component.scss']
})
export class MapboxControlsComponent {
  public alert(message: string) {
    alert(message);
  }
  public onGeoLocate(position: Position) {
    console.log('Geo locate', position);
  }
}
