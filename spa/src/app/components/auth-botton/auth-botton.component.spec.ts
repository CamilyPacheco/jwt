import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBottonComponent } from './auth-botton.component';

describe('AuthBottonComponent', () => {
  let component: AuthBottonComponent;
  let fixture: ComponentFixture<AuthBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthBottonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
