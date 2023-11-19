import { Component } from "@angular/core";
import { TechIconsModule, TechIconsRegistry, techIconMemorySolid } from "ngx-tech-icons";

@Component({
  selector: "app-a",
  standalone: true,
  imports: [TechIconsModule],
  template: `
    <tech-icon name="memory_solid"></tech-icon>
  `
})
export class AComponent {
  constructor(private techIconsRegistry: TechIconsRegistry) {
    this.techIconsRegistry.registerIcons([techIconMemorySolid])
  }
}