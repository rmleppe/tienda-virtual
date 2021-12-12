import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsZapateriaComponent } from './products-zapateria.component';

describe('ProductsZapateriaComponent', () => {
  let component: ProductsZapateriaComponent;
  let fixture: ComponentFixture<ProductsZapateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsZapateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsZapateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
