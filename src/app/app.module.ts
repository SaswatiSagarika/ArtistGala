import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RegistrationComponent } from './registration/registration.component';
import {  HttpModule  } from '@angular/http';
import { LoginService } from './login/login.service';
import { Login } from './login/login';
import { RegistrationService } from './registration/registration.service';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { ArtService } from './art/art.service';
import { Art } from './art/art';
import { ArtListComponent } from './art/art-list.component';
import { ArtEditComponent } from './art/art-edit.component';
import { ArtShowComponent } from './art/art-show.component';
import { ArtaddComponent } from './art/art-addnew.component';
import { PasschangeComponent } from './user/user-changepwd.component';
import { FieldErrorDisplayComponent } from './errordisplay/field-error-display.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDetailComponent,
    RegistrationComponent,
    UserEditComponent,
    ArtListComponent,
    ArtEditComponent,
    ArtShowComponent,
    PasschangeComponent,
    ArtaddComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: 'login', component: LoginComponent},
      { path: 'detail', component: UserDetailComponent},
      { path: 'edit/:id', component: ArtEditComponent },
      { path: 'changepwd', component: PasschangeComponent},
  { path: 'view/:id', component: ArtShowComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      
    ]),
    HttpModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [
    LoginService,
    RegistrationService,
    UserService,
    ArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
