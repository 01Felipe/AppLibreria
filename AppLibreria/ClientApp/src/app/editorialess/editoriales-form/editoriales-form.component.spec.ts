import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesFormComponent } from './editoriales-form.component';

describe('EditorialesFormComponent', () => {
  let component: EditorialesFormComponent;
  let fixture: ComponentFixture<EditorialesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
