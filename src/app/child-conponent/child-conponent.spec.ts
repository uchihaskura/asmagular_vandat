import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildConponent } from './child-conponent';

describe('ChildConponent', () => {
  let component: ChildConponent;
  let fixture: ComponentFixture<ChildConponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildConponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildConponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
