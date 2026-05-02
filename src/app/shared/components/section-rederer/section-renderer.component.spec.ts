import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRedererComponent } from './section-rederer.component';

describe('SectionRedererComponent', () => {
  let component: SectionRedererComponent;
  let fixture: ComponentFixture<SectionRedererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionRedererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionRedererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
