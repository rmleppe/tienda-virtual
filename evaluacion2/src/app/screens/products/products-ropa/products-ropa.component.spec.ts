import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRopaComponent } from './products-ropa.component';

describe('ProductsRopaComponent', () => {
  let component: ProductsRopaComponent;
  let fixture: ComponentFixture<ProductsRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
