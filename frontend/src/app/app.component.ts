import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ){}
  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
    // event on web
    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      console.error('this is error keyboardEvent'+event);
      
    }
  
    @HostListener('document:click', ['$event'])
    handleMouseEvent(event: MouseEvent) {
      console.error('this is error mouseEvent'+event);
    }
  
    @HostListener('document:scroll', ['$event'])
    handleUIEvent(event: UIEvent) {
      console.error('this is error UIEvent'+event);
    }
}
