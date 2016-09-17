import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutesModule} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {FlugModule} from "./flug/flug.module";
import { CityPipe} from './pipes/city.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        FlugModule,
        AppRoutesModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent
        
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { 
}