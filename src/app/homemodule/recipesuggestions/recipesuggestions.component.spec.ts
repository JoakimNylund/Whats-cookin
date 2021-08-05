import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesuggestionsComponent } from './recipesuggestions.component';

describe('RecipesuggestionsComponent', () => {
  let component: RecipesuggestionsComponent;
  let fixture: ComponentFixture<RecipesuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
