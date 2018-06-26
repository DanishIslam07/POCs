import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
      imports: [
         BrowserModule,
         HttpClientModule
      ],
      declarations: [
         AppComponent
      ],
      entryComponents: [
         AppComponent
      ],
      providers: []
})

export class AppModule {
     constructor(private injector: Injector) {}

     public ngDoBootstrap() {
         if(!customElements.get("my-app"))
         {

            const AppElement = createCustomElement(AppComponent, {injector : this.injector});
            customElements.define("my-app", AppElement);
         }
     }
}