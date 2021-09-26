import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeheaderComponent } from './recipeheader.component';

describe('RecipeheaderComponent', () => {
  let component: RecipeheaderComponent;
  let fixture: ComponentFixture<RecipeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
