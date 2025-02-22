export class FlexDisplayComponent implements AfterViewInit {
  @ViewChild('flexDisplay') flexDisplay!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const boxes = this.flexDisplay.nativeElement.querySelectorAll('.box');
    boxes.forEach((box: Element) => observer.observe(box));
  }
} 