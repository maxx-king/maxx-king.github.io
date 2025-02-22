import { Component, ElementRef, NgZone, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MfLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.css']
})
export class ThreeJSComponent implements AfterViewInit, OnDestroy {
  @ViewChild('htmlContainer') htmlContainer!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  // private controls!: OrbitControls;
  private resizeObserver!: ResizeObserver;

  constructor(private ngZone: NgZone, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.setupResizeHandler();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    // Clean up Three.js resources
    this.renderer?.dispose();
    this.scene?.clear();
  }

  private initThree(): void {
    const width = this.htmlContainer.nativeElement.clientWidth;
    const height = this.htmlContainer.nativeElement.clientHeight;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.htmlContainer.nativeElement.appendChild(this.renderer.domElement);
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070B06)

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 250; // zoom out

    this._addFloor();
    this._addModel();
    this._setLights()
    this._animate();
  }
  

  private _setLights(): void {
    const directionalLightRight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightRight.position.set(1, 0, 0).normalize(); 
    const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightLeft.position.set(-1, 0, 0).normalize(); 
    const topDownLight = new THREE.DirectionalLight(0xffffff, 1);
    topDownLight.position.set(0, 1, 0).normalize(); 
    const bottomUpLight = new THREE.DirectionalLight(0xffffff, 1);
    bottomUpLight.position.set(0, -1, 0).normalize(); 
    this.scene.add(bottomUpLight, topDownLight, directionalLightRight, directionalLightLeft,);
  }

  private _addFloor(): void {
    const floorGeometry = new THREE.PlaneGeometry(1000, 1000, 200, 200);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide, transparent: true, opacity: 0.5, wireframe: true});
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
    floor.position.y = -75; // Adjust the height of the floor below the model
    this.scene.add(floor);
  }

  private _addModel(): void {
    const loader = new ThreeMFLoader();
    loader.load('../../assets/mk_coin_logo.3mf', (obj) => { 
      this.scene.add(obj);
    });
  }

  private _animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const model = this.scene.getObjectByName('coin');
      if (model) {
        model.rotation.y += 0.01; 
      }
      // Render scene
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(() => this._animate());
    });
    }

  private setupResizeHandler(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.onResize();
    });
    this.resizeObserver.observe(this.htmlContainer.nativeElement);
  }

  private onResize(): void {
    if (!this.renderer || !this.camera) return;

    const width = this.htmlContainer.nativeElement.clientWidth;
    const height = this.htmlContainer.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
