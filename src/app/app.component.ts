import { Component } from '@angular/core';
import { Router,Event, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmhk-angular';
  isFetching! : boolean;
  constructor(private router : Router ){

    //kontrolujem ci resolver natiahol vsetok kontent ak nie zobrazi sa loading spinner
    router.events
    .pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    )
   .subscribe((routerEvent : RouterEvent ) => {
      this.checkRouterEvent(routerEvent);
    })
  }

  private checkRouterEvent( routerEvent : RouterEvent){
    if( routerEvent instanceof NavigationStart ){
      this.isFetching = true;
    }
    if( routerEvent instanceof NavigationEnd ){
      this.isFetching = false;
    }
  }
}
