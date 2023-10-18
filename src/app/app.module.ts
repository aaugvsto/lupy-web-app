import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { CardComponent } from './shared/components/card/card.component';
import { ForgetPasswordFormComponent } from './shared/components/forget-password-form/forget-password-form.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    DashboardComponent,
    SideBarComponent,
    LoginPageComponent,
    LoadingComponent,
    CardComponent,
    NavbarComponent,
    ForgetPasswordFormComponent,
    LoginFormComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
