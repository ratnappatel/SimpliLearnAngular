import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from '../product/product.component';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance; 
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'User List Component' as title`, (()=>{
   let  fixture=TestBed.createComponent(UserListComponent);
   let component=fixture.debugElement.componentInstance;
   expect(component.title).toEqual('User List Component');

  }));
});
