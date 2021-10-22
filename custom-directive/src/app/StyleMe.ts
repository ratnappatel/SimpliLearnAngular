import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[styleMe]'
})

export class StyleMe{
    constructor(private e:ElementRef){}
    @Input() defaultColor!:string; // default color of element 
    @Input('styleMe') color!:string; // color to be applied as new style

    @HostListener('mouseenter') onMouseEnter(){
        this.styleIt(this.color || this.defaultColor || 'blue');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.styleIt("");
    }
    private styleIt(color: string){
        this.e.nativeElement.style.backgroundColor=color;
    }


}

// <button [styleMe]>I will get different style.</p>