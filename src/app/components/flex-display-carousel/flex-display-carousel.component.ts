import { AfterViewInit, Component } from '@angular/core';
import { iFlexDisplay } from './flex-display/flex-display.component';

@Component({
  selector: 'app-flex-display-carousel',
  templateUrl: './flex-display-carousel.component.html',
  styleUrls: ['./flex-display-carousel.component.css']
})
export class FlexDisplayCarouselComponent implements AfterViewInit {
  boxes: iFlexDisplay[] = [
    {
      title: 'Back-End Projects',
      image: 'https://placehold.co/600x400', // Placeholder image URL
      description: 'This is the description for Box 1. It will be revealed on hover.'
    },
    {
      title: 'Web Development',
      image: 'https://placehold.co/600x400', // Placeholder image URL
      description: 'This is the description for Box 2. It will be revealed on hover.'
    },
    {
      title: 'Home Lab',
      image: 'https://placehold.co/600x400', // Placeholder image URL
      description: 'This is the description for Box 3. It will be revealed on hover.'
    },
    {
      title: 'Portfolio Site',
      image: 'https://placehold.co/600x400', // Placeholder image URL
      description: 'This is the description for Box 4. It will be revealed on hover.'
    },
    {
      title: 'GitHub',
      image: 'https://placehold.co/600x400', // Placeholder image URL
      description: 'This is the description for Box 5. It will be revealed on hover.'
    }
  ];

  ngAfterViewInit(): void {
    this.updateVisibleBoxes(); // Initialize visible boxes
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('scroll', () => this.updateVisibleBoxes());
    }
  }

  onWheel(event: WheelEvent) {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      // Prevent vertical scrolling
      event.preventDefault();
      // Scroll horizontally based on wheel delta
      carousel.scrollBy({ left: event.deltaY < 0 ? -500 : 500, behavior: 'smooth' });
    }
  }

  isBoxVisible(index: number): boolean {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return false;

    const box = carousel.children[index] as HTMLElement;
    if (!box) return false;

    const boxRect = box.getBoundingClientRect();
    const carouselRect = carousel.getBoundingClientRect();

    // Check if the box is fully or partially visible
    return (
      boxRect.left >= carouselRect.left &&
      boxRect.right <= carouselRect.right
    );
  }

  updateVisibleBoxes() {
    // This method will be called on scroll to update the active dots
    // Angular's change detection will handle the rest
  }

  scrollToBox(index: number) {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const box = carousel.children[index] as HTMLElement;
      if (box) {
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  }
}
