import { Component, Input } from '@angular/core';

export interface iFlexDisplay {
  title: string,
  image: string,
  description: string,
}

@Component({
  selector: 'app-flex-display',
  templateUrl: './flex-display.component.html',
  styleUrls: ['./flex-display.component.css']
})
export class FlexDisplayComponent {
  @Input() boxes: iFlexDisplay[] = [];
}
