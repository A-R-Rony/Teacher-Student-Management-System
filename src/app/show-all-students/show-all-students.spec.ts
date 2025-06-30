import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllStudents } from './show-all-students';

describe('ShowAllStudents', () => {
  let component: ShowAllStudents;
  let fixture: ComponentFixture<ShowAllStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
