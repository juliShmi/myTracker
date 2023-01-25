import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemButtonsComponent } from './book-item-buttons.component';

describe('BookItemButtonsComponent', () => {
  let component: BookItemButtonsComponent;
  let fixture: ComponentFixture<BookItemButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItemButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
