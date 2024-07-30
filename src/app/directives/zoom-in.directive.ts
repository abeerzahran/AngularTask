import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]',
  standalone: true
})
export class ZoomInDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.transform = 'scale(1.2)';
    this.elementRef.nativeElement.style.transition = 'transform 0.3s ease-in-out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.transform = 'scale(1)';
    this.elementRef.nativeElement.style.transition = 'transform 0.3s ease-in-out';
  }

}
