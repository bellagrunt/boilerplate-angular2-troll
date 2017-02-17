import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveState } from 'responsive-directives-angular2';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './home/app.homeComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';
import { newsComponent } from './news/app.newsComponent';
import { logInComponent } from './login/app.logInComponent';






@NgModule({
  imports:      [ BrowserModule,
                  CommonModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      component: homeComponent
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
                    },
                    {
                      path: 'login',
                      component: logInComponent
                    }    
                  ])

                ],
  declarations: [ AppComponent,
                  newsComponent,
                  headerComponent, 
                  navComponent,
                  homeComponent,
                  footerComponent,
                  aboutComponent,
                  contactComponent,
                  logInComponent
                  
                ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
