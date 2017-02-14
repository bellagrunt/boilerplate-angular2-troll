import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveState } from 'responsive-directives-angular2';
import { CommonModule } from '@angular/common';


import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentComponent } from './content/app.contentComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';
import { newsComponent } from './news/app.newsComponent';



@NgModule({
  imports:      [ BrowserModule,
                  CommonModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      component: contentComponent
                    },
                    {
                      path: 'about',
                      component: aboutComponent
                    },
                    {
                      path: 'contact',
                      component: contactComponent
                    },
                    {
                      path: 'news',
                      component: newsComponent
                    }
                  ])

                ],
  declarations: [ AppComponent,
                  newsComponent,
                  headerComponent, 
                  navComponent,
                  contentComponent,
                  footerComponent,
                  aboutComponent,
                  contactComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
