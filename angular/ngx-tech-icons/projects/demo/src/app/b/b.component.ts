import { Component } from "@angular/core";
import { TechIconsModule, TechIconsRegistry, techIconComputerMouseSolid, techIconMemorySolid, techIconNetworkWiredSolid } from "ngx-tech-icons";

@Component({
  selector: "app-b",
  standalone: true,
  imports: [TechIconsModule],
  template: `
    <tech-icon name="memory_solid"></tech-icon>
    <tech-icon name="computer_mouse_solid"></tech-icon>
    <tech-icon name="network_wired_solid"></tech-icon>
  `
})
export class BComponent {
  constructor(private techIconsRegistry: TechIconsRegistry) {
    this.techIconsRegistry.registerIcons([techIconMemorySolid, techIconComputerMouseSolid, techIconNetworkWiredSolid])
  }
}