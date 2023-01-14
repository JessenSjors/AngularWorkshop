import {Component, Input, OnInit} from '@angular/core';
import {MapboxThreeModelImporterService} from "../mapbox-three-model-importer.service";
import {CustomLayerInterface, Map} from "mapbox-gl";

@Component({
  selector: 'app-mapbox-three-model',
  templateUrl: './mapbox-three-model.component.html',
  styleUrls: ['./mapbox-three-model.component.scss']
})
export class MapboxThreeModelComponent implements OnInit {
  @Input() map!: Map;

  constructor(private threeModelImporter: MapboxThreeModelImporterService){
  }

  ngOnInit(): void {
    this.load3DModel()
  }

  private load3DModel(): void {
    this.threeModelImporter.addModelToLayer(this.map).then((customLayer: CustomLayerInterface) => {
      this.map.addLayer(customLayer, 'waterway-label');
    });
  }
}
