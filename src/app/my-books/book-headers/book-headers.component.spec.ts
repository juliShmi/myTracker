import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeadersComponent } from './book-headers.component';

describe('BookHeadersComponent', () => {
  let component: BookHeadersComponent;
  let fixture: ComponentFixture<BookHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
