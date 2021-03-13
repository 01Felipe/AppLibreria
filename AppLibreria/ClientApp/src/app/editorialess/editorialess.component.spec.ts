import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialessComponent } from './editorialess.component';

describe('EditorialessComponent', () => {
  let component: EditorialessComponent;
  let fixture: ComponentFixture<EditorialessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
