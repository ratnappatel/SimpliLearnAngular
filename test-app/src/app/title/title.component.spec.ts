import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('Testing Title Component Existency',()=>{
  let cmp:TitleComponent;
  let titleCmp:ComponentFixture<TitleComponent>;

  beforeEach(async(()=>{
      TestBed.configureTestingModule({
        declarations: [TitleComponent]
      }).compileComponents();
    }));

    beforeEach(()=>{
      titleCmp=TestBed.createComponent(TitleComponent);
      cmp=titleCmp.componentInstance;
      titleCmp.detectChanges();
    });

    it('should create',()=>{
      titleCmp=TestBed.createComponent(TitleComponent);
      
      expect(titleCmp).toBeTruthy();
    });

    it('should render h4 tag',()=>{
      titleCmp=TestBed.createComponent(TitleComponent);
      cmp=titleCmp.componentInstance;
      titleCmp.detectChanges();
      const compile=titleCmp.debugElement.nativeElement;
      expect(compile.querySelector('h4')).toBeTruthy();

    });

    it('should render msg in p tag',()=>{
      titleCmp=TestBed.createComponent(TitleComponent);
      titleCmp.detectChanges(); // detectChanges are written for String - interpolation
      const compiled=titleCmp.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('Enter a new Title');
    });
}
);
