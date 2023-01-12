# Workshop

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

- *Pipes* kun je inzetten om data te converteren of formatteren naar bijvoorbeeld string, valuta's, datum en andere datatypes
- Je kunt ook custom pipes maken (bv. conversie van platte tekst naar HTML of voor vertalingen)

## @Input

![Input](https://angular.io/generated/images/guide/inputs-outputs/input.svg)

- Enigszins vergelijkbaar met `serializeField` van Unity
- Maakt het mogelijk om van 'buitenaf' de *component* informatie als input mee te geven
- Op deze wijze kan vanuit een parent component data doorgestuurd worden naar een child component (een component kan namelijk niet data onttrekken uit een andere component)

## Observables

- Komt van Rxjs library
- Werkt hetzelfde als observer pattern
- Je kunt je subscriben aan de observable; wanneer de observable data (bv. in de backend) wijzigt, dan zal dit ook automatisch in de front-end updaten
- Laat OPK zien met Firebase database m.b.t. de *documents* hoe dit automatisch update

## Directives

Angular directives worden gebruikt om de kracht van HTML uit te breiden door het een nieuwe syntax te geven. Het creëert DOM-elementen, verandert hun structuur of hun gedrag.

### [Directive Types](https://medium.com/@tanvishah1409/beginner-in-angular-types-of-angular-directives-f5171e6bfdce)

![Directives](https://miro.medium.com/max/640/1*2EJVQKbLNmncFX2L0lLKyw.webp)

- **Component**: directive met een template
- **Structure directives**: veranderen layout van elements; `*ngIf` en `*ngFor` zijn voorbeelden hiervan
- **Attribute directive**:
  - Generieke functionaliteit die je aan een HTML component toe kan voegen
  - Vergelijkbaar met bijvoorbeeld `IPointerEnterHandler` uit Unity
  - Zou je kunnen gebruiken voor iets als een generieke *highlighter* of *dropzone* functionaliteit voor HTML components

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
- NG3 kun je installen door de volgende commands te runnen in je terminal:
  - `npm install --save-dev @angular-three/schematics`
  - `npm install @angular-three/core three@~0.142`
  - `npm install --save-dev @types/three@~0.142`

## Modules

## PrimeNg & Component libraries
