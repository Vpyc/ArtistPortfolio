import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorArtComponent } from './interior-art.component';

describe('InteriorArtComponent', () => {
  let component: InteriorArtComponent;
  let fixture: ComponentFixture<InteriorArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
