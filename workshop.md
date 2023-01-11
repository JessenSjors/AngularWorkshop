# Workshop

--- 

## @Component
- Decorator (Design pattern)
- Koppelt metadata aan een class - in dit geval om een compoennt te definieren. Voorbeeld van de metadat zijn *lifecycle methods* zoals `OnInit`

## Pipes
- Pipes kun je gebruiken om data te converteren of formatteren naar bijvoorbeeld string, valuta's, datum
- Custom pipes kun je ook maken (bv. conversie van platte tekst naar HTML of voor vertalingen)

## @Input
![Input](https://angular.io/generated/images/guide/inputs-outputs/input.svg)
- Enigszins vergelijkbaar met `serializeField` van Unity
- Maakt het mogelijk om van 'buitenaf' de *component* informatie als input mee te geven
- Op deze wijze kan vanuit een parent component data doorgestuurd worden naar een child component (een component kan namelijk niet data onttrekken uit een andere component)