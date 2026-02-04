import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResistancesComp } from './pokemon-resistances';

describe('PokemonResistances', () => {
  let component: PokemonResistancesComp;
  let fixture: ComponentFixture<PokemonResistancesComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonResistancesComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonResistancesComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
