import { Component } from '@angular/core';
import { MapboxThreeModelImporterService } from '../mapbox-three-model-importer.service';
import { CustomLayerInterface, Map } from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent {
  constructor(private threeModelImporter: MapboxThreeModelImporterService){
  }

  public load3DModel(map: Map): void {
    this.threeModelImporter.addModelToLayer(map).then((customLayer: CustomLayerInterface) => {
        map.addLayer(customLayer, 'waterway-label');
    });
  }
}
