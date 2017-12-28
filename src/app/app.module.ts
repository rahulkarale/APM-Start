import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { Example } from "./app.example";
import { WelcomeComponent } from "./home/welcome.component";
import {RouterModule} from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    Example,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent },
      {path:'products/:id',
        canActivate:[ProductGuardService],
        component:ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'example',component:Example},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}
      ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
