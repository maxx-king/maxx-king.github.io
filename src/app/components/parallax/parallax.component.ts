import { Component, ContentChild, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements AfterViewInit {
  //@ts-ignore
  @ContentChild('child1', { static: false }) child1: ElementRef;
  //@ts-ignore
  @ContentChild('child2', { static: false }) child2: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.applyParallax();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.applyParallax();
  }

  private applyParallax(): void {
    const scrollY = window.scrollY || window.pageYOffset;
    const child2Element = this.child2.nativeElement;

    // Adjust the parallax effect by changing the translateY value
    child2Element.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
}
