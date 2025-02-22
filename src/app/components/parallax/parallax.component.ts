import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const flexDisplay = document.querySelector('[flex-display]');
    const scrollPosition = window.scrollY;
    const heroHeight = window.innerHeight;

    if (scrollPosition > heroHeight * 0.5) {
      flexDisplay?.classList.add('visible');
    } else {
      flexDisplay?.classList.remove('visible');
    }
  }
}
