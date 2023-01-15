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

  public content: string = `# Angular workshop
  Deze workshop is toegespitst op het visualiseren van 3D en data in web apps. Dit vanwege onze eigen werkzaamheden, maar ook met het oog op onze toekomstige samenwerking met het data team.

  ---

  **Inhoudstabel**

  - [Angular workshop](#angular-workshop)
    - [Angular](#angular)
    - [NPM en node packages](#npm-en-node-packages)
    - [Angular installation](#angular-installation)
    - [@Component](#component)
    - [Modules](#modules)
    - [Pipes](#pipes)
    - [@Input](#input)
    - [@Output](#output)
    - [Services](#services)
    - [Directives](#directives)
      - [Directive Types](#directive-types)
    - [Angular fundamentale concepten](#angular-fundamentale-concepten)
    - [Observables](#observables)
    - [Mapbox \& ngx-mapbox](#mapbox--ngx-mapbox)
    - [ThreeJS \& NG3](#threejs--ng3)
    - [PrimeNg (component library)](#primeng-component-library)
    - [Nawoord](#nawoord)
      - [Pluspunten](#pluspunten)
      - [Minpunten](#minpunten)
    - [Vervolg](#vervolg)

  ## Angular

  [Angular](https://angular.io/docs) is een application-design framework en development platform voor het ontwikkelen van efficiënte en complexe single-page applicaties.

  **Traditionele website**
  ![Traditioneel](https://br-cms.bloomreach.com/site/binaries/content/gallery/br_traditional_1.gif)

  **Single-page applicatie (SPA)**
  ![SPA](https://br-cms.bloomreach.com/site/binaries/content/gallery/br_singlepage_application_1.gif)

  ## NPM en node packages

  - Node package manager (NPM) is een manager waarmee je de node packages in je applicatie kunt beheren. Vergelijkbaar met Unity's package manager of Nuget package manager
  - Installeer [Node.js](https://nodejs.org/en/) om node packages te kunnen installeren via NPM commands in de terminal
  - Packages en diens versies worden bijgehouden in *package.json* (vergelijkbaar met Unity's manifest.json), hier kun je ook wijzigingen aan toe brengen
  - Je installeert een nieuwe node package via terminal m.b.v. <code>npm install [package-naam]</code>, deze package wordt dan geïnstalleerd in de *node_modules* folder
  `
}
