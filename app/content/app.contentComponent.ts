import { Component } from '@angular/core';


@Component({
  // selector: 'content',
  templateUrl: `./app/content/content.html`,
})
export class contentComponent  { 
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
