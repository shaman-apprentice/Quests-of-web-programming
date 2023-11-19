import { Injectable } from "@angular/core";
import { TechIcon, TechIconName } from "../icons-dist";

@Injectable({ providedIn: "root" })
export class TechIconsRegistry {
  private registry = new Map<TechIconName, string>();

  constructor() {
    console.log("hi from TechIconsRegistry constructor")
  }

  registerIcons(icons: TechIcon[]) {
    icons.forEach((icon: TechIcon) => this.registry.set(icon.name, icon.data));
  }

  getIcon(iconName: TechIconName) {
    if (!this.registry.has(iconName)) {
      console.warn(`icon "${iconName}" wasn't registered!`);
    }

    return this.registry.get(iconName);
  }
}