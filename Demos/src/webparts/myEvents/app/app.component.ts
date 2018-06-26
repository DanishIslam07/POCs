import { Component, Input } from "@angular/core";

@Component({
   selector: "my-app",
   template: `
         This is Angular Elements SharePoint Framework Web Part.
         <br/>
         Message is : {{message}}
         <br/>
         Site URL is : {{siteUrl}}
       `,
   providers: []
})

export class AppComponent {

   @Input()
   public message: string;

   @Input()
   public siteUrl: string;
}