import { Component, ElementRef, NgZone, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MfLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html'
})
export class ThreeJSComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;


  constructor(private ngZone: NgZone, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.initControls();
    this.addFloor();
    this.addModel();
    this.animate();

    window.addEventListener('mousedown', (e) => this.enableControls(e));
    window.addEventListener('mouseup', (e) => this.disableControls(e));

    document.addEventListener('DOMContentLoaded', function () {
      const expandButtons = document.querySelectorAll('.expand-btn');
    
      expandButtons.forEach(button => {
        button.addEventListener('click', function () {
          // @ts-ignore
          const projectDetails = button.parentElement.nextElementSibling;
          // @ts-ignore
          projectDetails.classList.toggle('show');
        });
      });
    });
  }

  toggleDetails(card: any) {
    card.classList.toggle('expanded');
  }

  private enableControls(e: MouseEvent): void {
    if (e.button === 0) {
      this.controls.enabled = true;
    }
  }
  
  private disableControls(e: MouseEvent): void {
    if (e.button === 0) {
      this.controls.enabled = false;
    }
  }

  ngOnDestroy(): void {
    // TODO: Clean up resources (e.g., event listeners)
  }

  private initThree(): void {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070B06)

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 25;

    // Lighting
    // right
    const directionalLightRight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightRight.position.set(1, 0, 0).normalize(); 
    this.scene.add(directionalLightRight);
    // left
    const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightLeft.position.set(-1, 0, 0).normalize(); 
    this.scene.add(directionalLightLeft);
    // top-down 
    const topDownLight = new THREE.DirectionalLight(0xffffff, 1);
    topDownLight.position.set(0, 1, 0).normalize(); 
    this.scene.add(topDownLight);
    // bottom-up
    const bottomUpLight = new THREE.DirectionalLight(0xffffff, 1);
    bottomUpLight.position.set(0, -1, 0).normalize(); 
    this.scene.add(bottomUpLight);
  }

  private addFloor(): void {
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide, transparent: true, opacity: 0.5, wireframe: true});
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
    floor.position.y = -12; // Adjust the height of the floor below the model
    this.scene.add(floor);
  }

  private addModel(): void {
    const loader = new ThreeMFLoader();
    loader.load('../../assets/mk_coin_logo.3mf', (obj) => { 
      obj.scale.set(0.18, 0.18, 0.18);
      obj.position.x = 8;
      obj.name = "coin"
      this.scene.add(obj);
    });
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const model = this.scene.getObjectByName('coin');

      if (model && !this.controls.enabled) {
        model.rotation.y += 0.01; 
      }
  
      this.controls.update();
      // Render scene
      this.renderer.render(this.scene, this.camera);
  
      // Call animate function recursively
      requestAnimationFrame(() => this.animate());
    });
  }

  private initControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Smooth rotation
    this.controls.dampingFactor = 0.25;
    this.controls.rotateSpeed = 0.35;
    this.controls.enableZoom = false; // Disable mousewheel zoom
    this.controls.enabled = false;
  }
}
