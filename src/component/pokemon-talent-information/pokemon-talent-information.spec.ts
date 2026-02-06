import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTalentInformation } from './pokemon-talent-information';

describe('PokemonTalentInformation', () => {
  let component: PokemonTalentInformation;
  let fixture: ComponentFixture<PokemonTalentInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTalentInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTalentInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
