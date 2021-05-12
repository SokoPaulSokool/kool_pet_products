import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavigationComponent],
        imports: [
          NoopAnimationsModule,
          LayoutModule,
          MatButtonModule,
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatToolbarModule,
          RouterTestingModule.withRoutes([]),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-sidenav component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const sideNav = compiled.querySelector('mat-sidenav');
    expect(sideNav).toBeTruthy();
  });

  it('should have five images and four menu items', () => {
    fixture.detectChanges();
    const images = fixture.debugElement.queryAll(By.css('img'));
    const menuItemOptions = fixture.debugElement.queryAll(By.css('.menu-item'));
    expect(images.length).toEqual(5);
    expect(menuItemOptions.length).toEqual(4);
  });

  it('should have "Klanten" in toolbar', () => {
    fixture.detectChanges();
    const toolBar = fixture.debugElement.query(By.css('mat-toolbar'));
    const title = toolBar.query(By.css('.profile-name'));
    expect(title.nativeElement.textContent).toEqual('Klanten');
  });

  it('should call navigation function when "Items" is clicked', () => {
    let comp = fixture.componentInstance;
    spyOn(comp, 'navigate');
    const menuItemOptions = fixture.debugElement.queryAll(By.css('.menu-item'));
    menuItemOptions[menuItemOptions.length - 1].nativeElement.click();
    expect(comp.navigate).toHaveBeenCalled();
    expect(comp.navigate).toHaveBeenCalledWith('catalogue');
  });

  it('should call router.navigate function when "Items" is clicked', () => {
    let router = fixture.componentInstance.router;
    spyOn(router, 'navigate');
    const menuItemOptions = fixture.debugElement.queryAll(By.css('.menu-item'));
    menuItemOptions[menuItemOptions.length - 1].nativeElement.click();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['catalogue']);
  });
});
