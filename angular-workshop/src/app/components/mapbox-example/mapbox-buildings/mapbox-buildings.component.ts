import { Component, Input, OnInit} from '@angular/core';
import { AnyLayer, Map } from "mapbox-gl";

@Component({
  selector: 'app-mapbox-buildings',
  templateUrl: './mapbox-buildings.component.html',
  styleUrls: ['./mapbox-buildings.component.scss']
})
export class MapboxBuildingsComponent implements OnInit{
  public labelLayerId?: string;
  @Input() map!: Map;

  ngOnInit() {
    this.onLoad();
  }

  onLoad(): void {
    const layers = this.map.getStyle().layers;
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
