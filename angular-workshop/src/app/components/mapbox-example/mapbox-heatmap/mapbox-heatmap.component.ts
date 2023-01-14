import { Component, OnInit } from '@angular/core';
import {Layer} from "mapbox-gl";

@Component({
  selector: 'app-mapbox-heatmap',
  templateUrl: './mapbox-heatmap.component.html',
  styleUrls: ['./mapbox-heatmap.component.scss']
})
export class MapboxHeatmapComponent implements OnInit {
  earthquakes!: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  clusterLayers!: Layer[];

  async ngOnInit() {
    this.earthquakes = await import('../../../../assets/data/earthquakes.json') as unknown as GeoJSON.FeatureCollection<GeoJSON.Geometry>;
    const layersData: [number, string][] = [
      [0, 'green'],
      [20, 'orange'],
      [200, 'red'],
    ];
    this.clusterLayers = layersData.map((data, index) => ({
      type: 'circle',
      id: `cluster-${index}`,
      paint: {
        'circle-color': data[1],
        'circle-radius': 70,
        'circle-blur': 1,
      },
      filter:
        index === layersData.length - 1
          ? ['>=', 'point_count', data[0]]
          : [
            'all',
            ['>=', 'point_count', data[0]],
            ['<', 'point_count', layersData[index + 1][0]],
          ],
    }));
  }
}
