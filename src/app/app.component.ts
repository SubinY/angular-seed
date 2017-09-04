import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Dynamic Component Loader';

  ngOnInit() {
    const ep = new EventProxy()
    $('#h1').on('click', () => {
      ep.emit('init');
    });
  }

  ngAfterViewInit() {
    const ep = new EventProxy();
    ep.bind('init', () => {
      // console.log('EventProxy serve');
    });
  }

}
