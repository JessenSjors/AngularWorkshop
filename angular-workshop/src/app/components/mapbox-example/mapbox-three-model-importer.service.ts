import {Injectable} from '@angular/core';
import * as MapboxGL from "mapbox-gl";
import {CustomLayerInterface, LngLatLike} from "mapbox-gl";
import {Camera, DirectionalLight, Matrix4, Scene, Vector3, WebGLRenderer} from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

@Injectable({
  providedIn: 'root'
})
export class MapboxThreeModelImporterService
{
  private camera: Camera = new Camera();
  private scene: Scene = new Scene();
  private renderer = new WebGLRenderer();

  public async addModelToLayer(mapboxMap: any): Promise<CustomLayerInterface> {
    const scene: Scene = this.scene;
    const camera: Camera = this.camera;
    let renderer: WebGLRenderer = this.renderer;

    const directionalLight = new DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight)

    const directionalLight2 = new DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

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

    // configuration of the custom layer for a 3D model per the CustomLayerInterface
    return {
      id: '3d-model',
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map: { getCanvas: () => any; }, gl: any) {
        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new GLTFLoader();
        loader.load('https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf', (gltf) => {
          scene.add(gltf.scene);
        });
        mapboxMap = map;

        // use the Mapbox GL JS map canvas for three.js
        renderer = new WebGLRenderer({
          canvas: mapboxMap.getCanvas(),
          context: gl,
          antialias: true
        });

        renderer.autoClear = false;
      },
      render: function (gl: WebGLRenderingContext, matrix: any) {
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
  }
}
