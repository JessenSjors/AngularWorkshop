import { Component } from '@angular/core';
import { MapboxThreeModelImporterService } from '../mapbox-three-model-importer.service';
import {AnyLayer, CustomLayerInterface, Map} from 'mapbox-gl';
import {MapHolderService} from "../mapbox-holder.service";


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent {
  public map!: Map;
  public labelLayerId?: string;

  constructor(private threeModelImporter: MapboxThreeModelImporterService, private mapHolder: MapHolderService){
  }

  public load3DModel(map: Map): void {
    this.map = map;
    this.mapHolder.setMapRef(map);

    this.threeModelImporter.addModelToLayer(map).then((customLayer: CustomLayerInterface) => {
        map.addLayer(customLayer, 'waterway-label');
    });
  }

  public load3DBuildingsLayer(map: Map): void {
    const layers = map.getStyle().layers;
    if (!layers) {
      return;
    }
    this.labelLayerId = this.getLabelLayerId(layers);
  }

  private getLabelLayerId(layers: AnyLayer[]) {
    for (const layer of layers) {
      if (layer.type === 'symbol' && layer.layout?.['text-field']) {
        return layer.id;
      }
    }
    return;
  }
}
