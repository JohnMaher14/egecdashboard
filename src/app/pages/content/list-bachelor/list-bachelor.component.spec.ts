import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBachelorComponent } from './list-bachelor.component';

describe('ListBachelorComponent', () => {
  let component: ListBachelorComponent;
  let fixture: ComponentFixture<ListBachelorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBachelorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBachelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
