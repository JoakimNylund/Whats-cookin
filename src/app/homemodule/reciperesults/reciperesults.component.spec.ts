import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciperesultsComponent } from './reciperesults.component';

describe('ReciperesultsComponent', () => {
  let component: ReciperesultsComponent;
  let fixture: ComponentFixture<ReciperesultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciperesultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciperesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
