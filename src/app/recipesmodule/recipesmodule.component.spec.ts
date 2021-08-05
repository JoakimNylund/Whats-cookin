import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesmoduleComponent } from './recipesmodule.component';

describe('RecipesmoduleComponent', () => {
  let component: RecipesmoduleComponent;
  let fixture: ComponentFixture<RecipesmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
