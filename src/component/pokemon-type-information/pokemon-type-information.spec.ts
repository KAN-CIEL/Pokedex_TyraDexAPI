import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeInformation } from './pokemon-type-information';

describe('PokemonTypeInformation', () => {
  let component: PokemonTypeInformation;
  let fixture: ComponentFixture<PokemonTypeInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTypeInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
