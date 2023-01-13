import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //   constructor(private el: ElementRef) {
  //     this.el.nativeElement.style.backgroundColor = 'yellow';
  //  }

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    console.log(this.el.nativeElement + ' is highlighted');
    this.el.nativeElement.style.backgroundColor = color;
  }
}
