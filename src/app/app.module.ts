import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { CourService } from './services/cour.service';

import { LoginComponent } from './components/login/login.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { CourComponent } from './components/cour/cour.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourDetailComponent } from './components/cour-detail/cour-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    CourComponent,
    CourDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // FlashMessagesModule,
    NgxPaginationModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService, CourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
