import { Injectable } from '@angular/core';
import * as MapboxGL from "mapbox-gl";
import {LngLatLike} from "mapbox-gl";
import { Camera, Matrix4, Scene, Vector3, WebGLRenderer } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Injectable({
  providedIn: 'root'
})
export class MapboxThreeModelImporterService
{
  private camera: Camera = new Camera();
  private scene: Scene = new Scene();

  public addModelToLayer(mapboxMap: any): void {
    console.log("Add model to layer");
    
    const scene: Scene = this.scene;
    const camera: Camera = this.camera;

    // parameters to ensure the model is geo referenced correctly on the map
    const modelOrigin = [148, -35];
    const modelAltitude = 0;
    const modelRotate = [Math.PI / 2, 0, 0];

    const modelAsMercatorCoordinate = MapboxGL.MercatorCoordinate.fromLngLat(modelOrigin as LngLatLike, modelAltitude);

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since the 3D model is in real world meters, a scale transform needs to be
      * applied since the CustomLayerInterface expects units in MercatorCoordinates.
      */
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
    };

    let renderer = new WebGLRenderer();

    // configuration of the custom layer for a 3D model per the CustomLayerInterface

    const customLayer = {
      id: '3d-model',
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map: { getCanvas: () => any; }, gl: any) {
        // use the three.js GLTF loader to add the 3D model to the three.js scene
        // gltfModelLoader.loadThreeModel('https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf', scene);
        const loader = new GLTFLoader();
        loader.load('https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf', (gltf) => {
          scene.add(gltf.scene);
        });        
        mapboxMap = map;
        console.log(mapboxMap);
        
        // use the Mapbox GL JS map canvas for three.js
        //Todo: Refactor to Renderer Manager
        renderer = new WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: true
        });

        renderer.autoClear = false;
      },
      //Todo: Refactor to Renderer Manager
      render: function (gl: WebGLRenderer, matrix: any) {
        const rotationX = new Matrix4().makeRotationAxis(new Vector3(1, 0, 0), modelTransform.rotateX);
        const rotationY = new Matrix4().makeRotationAxis(new Vector3(0, 1, 0), modelTransform.rotateY);
        const rotationZ = new Matrix4().makeRotationAxis(new Vector3(0, 0, 1), modelTransform.rotateZ);

        const m = new Matrix4().fromArray(matrix);
        const l = new Matrix4()
          .makeTranslation(modelTransform.translateX, modelTransform.translateY, <number>modelTransform.translateZ)
          .scale(new Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale)
          ).multiply(rotationX).multiply(rotationY).multiply(rotationZ);

        camera.projectionMatrix = m.multiply(l);
        renderer.resetState();
        renderer.render(scene, camera);
        mapboxMap.triggerRepaint();
      }
    };

    mapboxMap.on('style.load', () => {
      mapboxMap.addLayer(customLayer, 'waterway-label');
    });
  }
}
