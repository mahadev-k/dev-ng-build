import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UtilityFunctions } from 'src/utilities/utility';

@Directive({
  selector: '[appRandomBgColor]'
})
export class RandomBgColorDirective implements OnInit {

  @Input() bgColor!:string;
  
  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2
    ) { 
      
    }

    ngOnInit(): void {
      this.setRandomBgColor();
    }

    setRandomBgColor(){
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.bgColor
      )
    }


}
