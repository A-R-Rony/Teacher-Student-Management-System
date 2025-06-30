import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentdetails } from './studentdetails';

describe('Studentdetails', () => {
  let component: Studentdetails;
  let fixture: ComponentFixture<Studentdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
