import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListComponent } from './business-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BusinessListComponent', () => {
  let component: BusinessListComponent;
  let fixture: ComponentFixture<BusinessListComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => { // async for compiling external templates
    TestBed.configureTestingModule({
      declarations: [ BusinessListComponent ] // declare the test component
    })
    .compileComponents(); // compile component html and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListComponent); // our repeatable baseline to debu and run tests
    component = fixture.componentInstance; // instance of our component
    de = fixture.debugElement.query(By.css('.business-list'));
    element = de.nativeElement; // the native element at the root of the component
    fixture.detectChanges(); // triggers a chnage detection cycle for the component
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the title of the application', () => {
    component.title = 'Business Listings';
    expect(element.textContent).toContain(component.title);
  });

  it('should contain a table to display the businesses', () => {
    expect(element.innerHTML).toContain('table');
    expect(element.innerHTML).toContain('thead');
    expect(element.innerHTML).toContain('tbody');
  });
});
