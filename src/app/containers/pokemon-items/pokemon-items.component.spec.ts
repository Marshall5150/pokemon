import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemsComponent } from './pokemon-items.component';

describe('PokemonItemsComponent', () => {
  let component: PokemonItemsComponent;
  let fixture: ComponentFixture<PokemonItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
