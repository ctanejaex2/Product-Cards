import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagefilterComponent } from './imagefilter.component';

describe('ImagefilterComponent', () => {
  let component: ImagefilterComponent;
  let fixture: ComponentFixture<ImagefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
