"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_2 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_headerComponent_1 = require('./header/app.headerComponent');
var app_navComponent_1 = require('./nav/app.navComponent');
var app_contentComponent_1 = require('./content/app.contentComponent');
var app_footerComponent_1 = require('./footer/app.footerComponent');
var app_aboutComponent_1 = require('./about/app.aboutComponent');
var app_contactComponent_1 = require('./contact/app.contactComponent');
var app_newsComponent_1 = require('./news/app.newsComponent');
var app_logInComponent_1 = require('./login/app.logInComponent');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: app_contentComponent_1.contentComponent
                    },
                    {
                        path: 'about',
                        component: app_aboutComponent_1.aboutComponent
                    },
                    {
                        path: 'contact',
                        component: app_contactComponent_1.contactComponent
                    },
                    {
                        path: 'news',
                        component: app_newsComponent_1.newsComponent
                    },
                    {
                        path: 'login',
                        component: app_logInComponent_1.logInComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent,
                app_newsComponent_1.newsComponent,
                app_headerComponent_1.headerComponent,
                app_navComponent_1.navComponent,
                app_contentComponent_1.contentComponent,
                app_footerComponent_1.footerComponent,
                app_aboutComponent_1.aboutComponent,
                app_contactComponent_1.contactComponent,
                app_logInComponent_1.logInComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map