import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UtilityFunctions } from 'src/utilities/utility';

@Directive({
  selector: '[appRandomBgColor]'
})
export class RandomBgColorDirective implements OnInit {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2
    ) { 
      
    }

    ngOnInit(): void {
      this.setRandomBgColor();
    }

    setRandomBgColor(){
      let color = UtilityFunctions.getRandomBgColor();
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        color
      )
    }


}
