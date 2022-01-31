import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Testing Using Default Library'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Testing Using Default Library');
  });

  it('should render title in a h1 tag', () => {
    // we are creating AppComponent Explicitly to use for comparison
    const appComponent = TestBed.createComponent(AppComponent);
    appComponent.detectChanges();
    const compiled = appComponent.debugElement.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to Testing Using Default Library');
  });


});
