import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressBooksComponent } from './in-progress-books.component';

describe('InProgressBooksComponent', () => {
  let component: InProgressBooksComponent;
  let fixture: ComponentFixture<InProgressBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
