import { Component, ContentChild, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements AfterViewInit {
  @ContentChild('child1', { static: false }) child1!: ElementRef;
  @ContentChild('child2', { static: false }) child2!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.child1?.nativeElement) {
      this.child1.nativeElement.setAttribute('data-parallax', 'fixed');
    }
    
    if (this.child2?.nativeElement) {
      this.child2.nativeElement.setAttribute('data-parallax', 'scroll');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > window.innerHeight) {
      if (this.child1?.nativeElement) {
        this.child1.nativeElement.style.position = 'relative';
        this.child1.nativeElement.style.transform = `translateY(${window.innerHeight}px)`;
      }
    } else {
      if (this.child1?.nativeElement) {
        this.child1.nativeElement.style.position = 'fixed';
        this.child1.nativeElement.style.transform = 'none';
      }
    }
  }
}
