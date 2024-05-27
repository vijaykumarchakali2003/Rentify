import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSellerComponent } from './items-seller.component';

describe('ItemsSellerComponent', () => {
  let component: ItemsSellerComponent;
  let fixture: ComponentFixture<ItemsSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
