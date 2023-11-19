import { Component, ElementRef, Input } from '@angular/core';
import { TechIconsRegistry } from './techIcons.registry';
import { TechIconName } from '../icons-dist';

@Component({
  selector: 'tech-icon',
  template: "",
})
export class NgxTechIconsComponent {
  @Input({ required: true}) set name(value: TechIconName) {
    const icon = this.techIconsRegistry.getIcon(value);
    this.element.nativeElement.innerHTML = icon;
  }

  constructor(private element: ElementRef, private techIconsRegistry: TechIconsRegistry) {}
}
