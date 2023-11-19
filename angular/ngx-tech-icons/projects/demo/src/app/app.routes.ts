import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "a", loadComponent: () => import("./a/a.component").then(m => m.AComponent) },
  { path: "b", loadComponent: () => import("./b/b.component").then(m => m.BComponent) },
];
