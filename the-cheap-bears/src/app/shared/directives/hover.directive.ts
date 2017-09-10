import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = 'black';
    }
}
