import { Component } from '@angular/core';

@Component({
  selector: 'app-item-output-container',
  templateUrl: './item-output-container.component.html',
  styleUrls: ['./item-output-container.component.scss']
})
export class ItemOutputContainerComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItemToContainer(newItem: string) {
    this.items.push(newItem);
  }
}
