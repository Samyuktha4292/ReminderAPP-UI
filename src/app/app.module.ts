 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CrudComponent } from './crud/crud.component';
import {CommonService} from './common.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpdateEventComponent } from './update-event/update-event.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'crud', component: CrudComponent }, 
  { path: 'update-event', component:UpdateEventComponent},
  { path: '**', component: LoginComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CrudComponent,
    ForgotpasswordComponent,
    UpdateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }), 
    FormsModule,
    HttpModule,
  ],
  providers: [CommonService,],      
  bootstrap: [AppComponent]
})
export class AppModule { }
