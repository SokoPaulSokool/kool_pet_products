import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  private subs = new SubSink();
  currentPath=""
  checked=false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router
  ) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    // selectedCustomer
  //  this.router.
  }

  ngAfterViewInit(): void {
    this.subs.sink = this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd)
        )
        .subscribe((event: NavigationEnd|any) => {
          this.currentPath= event.url.split('/')[1];

        });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
