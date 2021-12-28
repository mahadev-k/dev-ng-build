import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appRipple]'
})
export class RippleDirective {
    // if you'd like set these in JS instead of CSS:
    @Input() bgColor = 'var(--bg-color)';
    @Input() rippleColor = 'var(--ripple-color)';

    @HostListener('mousemove', ['$event'])
    createRipple(event: MouseEvent) {
        const elem = event.target as HTMLElement;
        const rect = elem.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / elem.clientWidth) * 100;
        const y = ((event.clientY - rect.top) / elem.clientHeight) * 100;

        elem.style.background = `radial-gradient(circle closest-corner at ${x}% ${y}%,
      ${this.rippleColor}, ${this.bgColor})`;
    }

    @HostListener('mouseleave', ['$event'])
    removeRipple(event: MouseEvent) {
        const elem = event.target as HTMLElement;
        elem.style.removeProperty('background');
    }
}