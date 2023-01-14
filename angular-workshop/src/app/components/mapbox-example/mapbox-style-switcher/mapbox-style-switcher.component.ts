import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface MapStyle
{
  name: string;
  key: string;
}

@Component({
  selector: 'app-mapbox-style-switcher',
  templateUrl: './mapbox-style-switcher.component.html',
  styleUrls: ['./mapbox-style-switcher.component.scss']
})
export class MapboxStyleSwitcherComponent implements OnInit{
  @Output() updateMapStyleEvent = new EventEmitter<string>();

  selectedStyle!: MapStyle;

  styles: MapStyle[] = [
    {name: 'Basic', key: 'basic'},
    {name: 'Streets', key: 'streets'},
    {name: 'Bright', key: 'bright'},
    {name: 'Dark', key: 'dark'},
    {name: 'Satellite', key: 'satellite'}
  ];

  ngOnInit(): void {
    this.selectedStyle = this.styles[3];
  }

  public changeStyle(style: MapStyle) {
    this.selectedStyle = style;
    this.updateMapStyleEvent.emit(`mapbox://styles/mapbox/${style.key}-v9`);
  }
}
