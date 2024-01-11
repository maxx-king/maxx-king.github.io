import { Component, ElementRef, NgZone, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model!: THREE.Object3D;

  constructor(private ngZone: NgZone, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.addModel();
    this.animate();
    this.handleMouseMove();
  }

  ngOnDestroy(): void {
    // Clean up resources (e.g., event listeners)
  }

  private initThree(): void {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 25;

    // Lighting
    // Add a directional light facing the object from the right
    const directionalLightRight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightRight.position.set(1, 0, 0).normalize(); // Adjust position as needed
    this.scene.add(directionalLightRight);
    // Add a directional light facing the object from the left
    const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightLeft.position.set(-1, 0, 0).normalize(); // Adjust position as needed
    this.scene.add(directionalLightLeft);
    // Add a top-down directional light
    const topDownLight = new THREE.DirectionalLight(0xffffff, 1);
    topDownLight.position.set(0, 1, 0).normalize(); // Adjust position as needed
    this.scene.add(topDownLight);
    // Add a bottom-up directional light
    const bottomUpLight = new THREE.DirectionalLight(0xffffff, 1);
    bottomUpLight.position.set(0, -1, 0).normalize(); // Adjust position as needed
    this.scene.add(bottomUpLight);
  }

  private addModel(): void {
    const loader = new STLLoader();
    loader.load('../../assets/MK_Coin_Logov20 - Copy.stl', (geometry: any) => {
      const material = new THREE.MeshStandardMaterial({
        color: 0xC0C0C0C0,
        roughness: 0.1, 
        metalness: .9,
        // emissive: 0xC0C0C0C0, // Emissive color, adjust as needed
        // emissiveIntensity: .2, // Emissive intensity, adjust as needed
        // envMapIntensity: .2, // Adjust as needed
      });
      this.model = new THREE.Mesh(geometry, material);

      // Scale the model appropriately
      this.model.scale.set(0.1, 0.1, 0.1);

      // Center the model in the scene
      const box = new THREE.Box3().setFromObject(this.model);
      const center = box.getCenter(new THREE.Vector3());
      this.model.position.sub(center);

      this.scene.add(this.model);
    });
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const animateFn = () => {
        this.updateModelOrientation();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(animateFn);
      };

      animateFn();
    });
  }

  private handleMouseMove(): void {
    let isMouseDown = false;

    window.addEventListener('mousedown', (event) => {
      isMouseDown = true;

      if (this.model && this.isMouseInsideContainer(event)) {
        this.model.scale.multiplyScalar(0.92);
      }
    });

    window.addEventListener('mouseup', (event) => {
      isMouseDown = false;

      if (this.model && this.isMouseInsideContainer(event)) {
        this.model.scale.multiplyScalar(1.08);
      }
    });
    
    window.addEventListener('mousemove', (event) => {
      // Update model orientation based on cursor position
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (this.model && this.isMouseInsideContainer(event)) {
        // Flip up-down controls
        this.model.rotation.x = -mouseY;
        this.model.rotation.y = mouseX;
      }
    });

    window.addEventListener('click', () => {
      // Trigger the stream of 1's and 0's
      this.shootBinaryStream();
    });
  }

  private isMouseInsideContainer(event: MouseEvent): boolean {
    const rendererContainer = document.getElementById('rendererContainer');
    
    if (!rendererContainer) return false;
  
    const rect = rendererContainer.getBoundingClientRect();

    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }

  private shootBinaryStream(): void {
    // Implement the logic to shoot 1's and 0's from the center to the edges
  }

  private updateModelOrientation(): void {
    // Update model orientation based on any dynamic factors
  }
}
