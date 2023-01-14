import {AfterViewInit, Component, Input} from '@angular/core';
import { AnyLayer, Map } from "mapbox-gl";
import {MapHolderService} from "../mapbox-holder.service";

@Component({
  selector: 'app-mapbox-buildings',
  templateUrl: './mapbox-buildings.component.html',
  styleUrls: ['./mapbox-buildings.component.scss']
})
export class MapboxBuildingsComponent implements AfterViewInit{
  public labelLayerId?: string;
  @Input() test!: Map;

  constructor(private mapHolder: MapHolderService) {
  }

  ngAfterViewInit() {

      this.onLoad();

  }

  onLoad(): void {
    console.log('Loading building: ',this.test);

    const map: Map = this.mapHolder.getMap();
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
