import { Component } from '@angular/core';
import { MapboxThreeModelImporterService } from '../mapbox-three-model-importer.service';
import { MapHolderService } from '../map-holder.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent {
  constructor(
    private threeModelImporter: MapboxThreeModelImporterService, 
    private mapHolder: MapHolderService){
  }

  public loadMap(map: Map): void {
    // console.log(map);
    this.threeModelImporter.addModelToLayer(map);
    this.mapHolder.setMapRef(map);
  }
}
