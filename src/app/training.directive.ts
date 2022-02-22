import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTraining]'
})
export class TrainingDirective {

  constructor(private element: ElementRef) {
    // const reqStyles: any = {
    //   'background-color': 'red',
    //   'color': 'white',
    //   'font-weight': 'bold'
    // }
    // Object.keys(reqStyles).forEach(newStyle => {
    //   selectedElement.style.setProperty(`${newStyle}`, reqStyles[newStyle]);
    // });
  }
  selectedElement = this.element.nativeElement.style;

  // 
  //Input fonksiyonuyla Html de geçtiğimiz parametreyi alıyoruz.
  //this.element.nativelement ile directive yi verdiğimiz elemente queryselector la seçmişiz gibi ulaşıyoruz. 
  //
  @Input() set backgroundColor(color: string) {
    // this.element.nativeElement.style.backgroundColor = color;
    this.selectedElement.backgroundColor = color;
  }
  @Input() set color(color: string) {
    // this.element.nativeElement.style.color = color;
    this.selectedElement.color = color;
  }
  


}
