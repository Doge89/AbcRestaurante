import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespNavbarComponent } from './resp-navbar.component';

describe('RespNavbarComponent', () => {
  let component: RespNavbarComponent;
  let fixture: ComponentFixture<RespNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
