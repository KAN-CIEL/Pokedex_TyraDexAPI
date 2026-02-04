import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatistiques } from './pokemon-statistiques';

describe('PokemonStatistiques', () => {
  let component: PokemonStatistiques;
  let fixture: ComponentFixture<PokemonStatistiques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatistiques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatistiques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
