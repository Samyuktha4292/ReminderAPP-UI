import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http'; 

//import 'rxjs/add/operator/toPromise';
import { baseUrl } from './app.constants';

@Injectable()
export class CommonService {

  baseUrl = baseUrl;

  constructor(private http: Http) {
    console.log('baseUrl', baseUrl);
  }

  getLoginFromController(data) {
    console.log("user name and password is " + data.username + data.password);
    return this.http.post(this.baseUrl + '/login', data).toPromise();
    // return this.http.post( this.baseUrl + '/login',data,
    // {
    //         headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    //       }

    // );
  }
  addEventToCtrl(data) {
    console.log("Reached the add event common service handler");

    console.log("details of event is" + data.eventName + data.eventDate + data.eventTime);
    return this.http.post(this.baseUrl + '/addEvent', data).toPromise();

  }

  googleEventAdding(data) {
    console.log("Reached the common service handler");

    console.log("details of event is" + data.summary + data.eventstartdate + data.eventEndDate);
    return this.http.post(this.baseUrl + '/addEventGoogleCalener', data).toPromise();

  }

  viewEvent(){
     console.log("Reached the view event common service handler");
      return this.http.get(this.baseUrl + '/viewEvent').toPromise();
     
  }
  updateEvent(eventObject){
    console.log("Reached the update event common service handler"+eventObject);

    return this.http.post(this.baseUrl + '/updateEvent', eventObject).toPromise();
  }
  

}
