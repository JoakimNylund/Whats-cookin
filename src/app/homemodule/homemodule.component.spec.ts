import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemoduleComponent } from './homemodule.component';

describe('HomemoduleComponent', () => {
  let component: HomemoduleComponent;
  let fixture: ComponentFixture<HomemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
