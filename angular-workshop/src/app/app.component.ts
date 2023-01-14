import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Visuals Angular Workshop';

  public items: MenuItem[] = [
    {label: 'Hero tutorial', routerLink: ['/heroes'] },
    {label: 'Dashboard', routerLink: ['/dashboard'] },
    {label: 'Output example', routerLink: ['/item-output'] },
    {label: 'Mapbox', routerLink: ['/mapbox'] },
    {label: 'Robot', routerLink: ['/three-js'] },
    {label: 'Cube', routerLink: ['/cube-three-js'] },
  ];
}
