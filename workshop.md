# Angular workshop

- [Angular workshop](#angular-workshop)
  - [Angular](#angular)
  - [Installation](#installation)
  - [@Component](#component)
  - [Pipes](#pipes)
  - [@Input](#input)
  - [@Output](#output)
  - [Observables](#observables)
  - [Directives](#directives)
    - [Directive Types](#directive-types)
  - [Mapbox \& ngx-mapbox](#mapbox--ngx-mapbox)
  - [ThreeJS \& NG3](#threejs--ng3)
  - [Modules](#modules)
  - [PrimeNg \& Component libraries](#primeng--component-libraries)

## Angular

[Angular](https://angular.io/docs) is een application-design framework en development platform voor het ontwikkelen van efficiënte en complexe single-page applicaties.

**Traditionele website**
![Traditioneel](https://br-cms.bloomreach.com/site/binaries/content/gallery/br_traditional_1.gif)

**Single-page applicatie (SPA)**
![SPA](https://br-cms.bloomreach.com/site/binaries/content/gallery/br_singlepage_application_1.gif)

## Installation

1. Open terminal
2. Run `npm install -g @angular/cli`
3. Check of je **Angular versie 15** globaal installed hebt met `ng v`
4. Open een folder waar je de Angular applicatie wil installeren
5. Run `ng new angular-workshop`
6. Gebruik **SCSS** als stylesheet en gebruik **Router**

## @Component

- Decorator (Design pattern)
- Vergelijkbaar met een attribute in Unity: zie de component decorator een beetje als een *monobehaviour attribute*
- Koppelt metadata aan een class - in dit geval om een compoennt te definieren. Voorbeeld van de metadata zijn *lifecycle methods* zoals `OnInit`

## Pipes

![Pipe](angular-workshop/src/assets/images/pipe.png)

- **Pipes** kun je inzetten om data te converteren of formatteren naar bijvoorbeeld string, valuta's, datum en andere datatypes
- Je kunt ook [custom pipes](https://angular.io/guide/pipes-custom-data-trans) maken zoals een conversie van platte tekst naar HTML, of voor vertalingen

## @Input

![Input](https://angular.io/generated/images/guide/inputs-outputs/input.svg)

- Enigszins vergelijkbaar met `serializeField` van Unity
- Maakt het mogelijk om van 'buitenaf' de *component* informatie als input mee te geven
- Op deze wijze kan vanuit een parent component data doorgestuurd worden naar een child component (een component kan namelijk niet data onttrekken uit een andere component)

![Input-data-transfer](https://angular.io/generated/images/guide/inputs-outputs/input-diagram-target-source.svg)

## @Output

![Output](https://angular.io/generated/images/guide/inputs-outputs/output.svg)

- [Output](https://angular.io/guide/inputs-outputs) kan gebruikt worden om data van een *child* naar een *parent* te sturen
- Manier om content te updaten in de parent zonder een *service* of iets dergelijks te hoeven gebruiken
- Kan opgesteld worden met behulp van `@Output` en `EventEmitter`

Voorbeeld van zowel *Input* als *Output* data flow tussen *Child* en een *Parent*
![output-input-dataflow](https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg)

## Observables

[RxJS](https://rxjs.dev/guide/overview) is een library voor het samenstellen van asynchrone en event-based programma's door het gebruik van *observable sequences*. RxJS biedt een core type, de **Observable**, satellite types (Observer, Schedulers, Subjects) en operators geïnspireerd door `Array` methods (`map`, `filter`, `reduce`, `every`, etc) die *asynchronous events* afhandelen als *collections*.

- Vergelijkbaar met *observer pattern*
- Je kunt je subscriben aan de observable; wanneer de observable data (bv. in de backend) wijzigt, dan zal dit ook automatisch in de front-end updaten
- Voorbeeld: je front-end weergeeft data uit een database. De database date update uiteraard regelmatig en deze changes moeten dan automatisch zichtbaar zijn in je front-end.

> Laat OPK zien met Firebase database m.b.t. de *documents* hoe dit automatisch update

## Directives

Angular directives worden gebruikt om de kracht van HTML uit te breiden door het een nieuwe syntax te geven. Het creëert DOM-elementen, verandert hun structuur of hun gedrag.

### [Directive Types](https://medium.com/@tanvishah1409/beginner-in-angular-types-of-angular-directives-f5171e6bfdce)

![Directives](https://miro.medium.com/max/640/1*2EJVQKbLNmncFX2L0lLKyw.webp)

- **Component**: directive met een template
- **Structure directives**: veranderen layout van elements; `*ngIf` en `*ngFor` zijn voorbeelden hiervan
- **Attribute directive**:
  - Generieke functionaliteit die je aan een HTML component toe kan voegen
  - Vergelijkbaar met bijvoorbeeld `IPointerEnterHandler` uit Unity
  - Zou je kunnen gebruiken voor iets als een generieke *highlighter* of *dropzone* functionaliteit dat gekoppeld kan worden aan HTML components

## Mapbox & ngx-mapbox

![Mapbox](https://miro.medium.com/max/1200/0*wPnlK6YeSQqnhKlS.png)

- Met [Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/) kun je geografische kaarten toevoegen aan een web app
- Op deze map kan data geprojecteerd worden in de vorm van *layers*. Deze layers kunnen vanalles bevatten: 3D modellen, markers (points of interest), icons, GIS data, heatmaps en meer
- **ngx-mapbox** biedt de mogelijkheid om templates op te bouwen met behulp van *directives* op de 'Angular manier'

## ThreeJS & NG3

![threejs-workings](https://miro.medium.com/max/640/1*-3GSmN2TNp58ForQJDe0eQ.webp)

- [ThreeJS](https://threejs.org/) is een WebGL library die gebruikt kan worden voor het ontwikkelen van 3D scenes in het web
- Run in terminal: `npm install threejs --save` en daarna `npm install @types/three --save`
- **ThreeJS** kan ook in samenwerking met Mapbox gebruikt worden om bijvoorbeeld 3D modellen op een map te renderen of markers met daarin panorama afbeeldingen toe te voegen (zoals in de **[Omgevings Plankaart](https://producten.movares-visuals.nl/3D_Webportaal)**)
- Een 'Vanilla ThreeJs implementatie' in Angular kan echter al snel veel overhead veroorzaken in je *components*
- **NG3** is alternatief; werkt vergelijkbaar met hoe je templates op basis van *directives* uitwerkt in Angular
- [NG3 Sandbox Examples](https://angular-three.netlify.app/examples/home)
- NG3 kun je [installen](https://angular-three.netlify.app/docs/getting-started/installation) door de volgende commands te runnen in je terminal:
  - `npm install --save-dev @angular-three/schematics`
  - `npm install @angular-three/core three@~0.142`
  - `npm install --save-dev @types/three@~0.142`

## Modules

## PrimeNg & Component libraries

- Bevat [componenten](https://www.primefaces.org/primeng/button) met dezelfde look & feel
- Biedt kant-en-klare componenten aan met een specifieke data input opties, functionaliteit en styling die je eraan kan binden
- Customizable naar een bepaald thema (bv. volgens een stijlgids)
- Waarborgt uniformiteit, herkenbaarheid en consistentie in het design richting je gebruikers — verbetert in het algemeen de usability van de website volgens UX richtlijnen
- Extra informatie over hoe PrimeNg ingezet kan worden in onze web app is te vinden op onze [styleguide pagina](https://styleguide.movares.net)
  