import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  msg; updateMsg;
  eventName;
  eventDate;
  eventTime;
  eventJSONList;
  eventId;
  updatedEventName;
  updatedEventDate;
  updatedEventTime;
  public isCollapsed = false;

  /*
Google Calander variables start
  */

  eventsummary;
  eventenddate;
  eventstartdate;
  msgupdateEvent
  msgCalanderEvent;

  /*
Google Calander variables end
  */

  constructor(private commonService: CommonService,
    private router: Router) { }

  ngOnInit() {
  }

  createEvent() {
    this.msg = null;
    if (this.eventName && this.eventDate &&
      this.eventTime) {
      console.log("reached the event TS");
      this.commonService.addEventToCtrl({
        eventName: this.eventName,
        eventDate: this.eventDate,
        eventTime: this.eventTime
      })
        .then(response => {

          console.log("reached from the controller of add event");
          this.msg = "Event Added Sucessfully!"
          this.clearevent();
          //this.router.navigate(['crud']);
          //console.log("navigation to crud");
        })
        .catch(exception => {
          if (exception.status == 423) {
            this.msg = 'Add Event unsucessfull!';
          } else if (exception.status == 403) {
            this.msg = 'Add Event unsucessfull!';
          } else {
            this.msg = 'Server Error';
          }
          console.log("login exception is.......", exception);
        });
    }



  }
  clearevent() {
    this.eventDate = "";
    this.eventName = "";
    this.eventTime = "";
  }
  viewEvents() {
    this.commonService.viewEvent()
      .then(response => {

        console.log("reached from the controller of view event");
        this.eventJSONList = response.json();
        console.log(this.eventJSONList)
      })
      .catch(exception => {
        if (exception.status == 423) {
          this.msg = 'view Event unsucessfull!';
        } else if (exception.status == 403) {
          this.msg = 'view Event unsucessfull!';
        } else {
          this.msg = 'Server Error';
        }
        console.log("login exception is.......", exception);
      });

  }
 updateEvent(eachrow) {
    console.log("row details clicked" + eachrow);
    var eventObject = JSON.stringify(eachrow);
    console.log("row details in JSON format after stringify is"+eventObject);
    console.log("row details passed is in update event()"+eachrow);
    this.commonService.updateEvent(eachrow)
    .then(response => {
          console.log("reached from the controller of update event");
          this.updateMsg = "Update Event Sucessfully!"
          this.clearevent();
          //this.router.navigate(['crud']);
          //console.log("navigation to crud");
        })
        .catch(exception => {
          if (exception.status == 423) {
            this.updateMsg = 'update Event unsucessfull!';
          } else if (exception.status == 403) {
            this.updateMsg = 'update Event unsucessfull!';
          } else {
            this.updateMsg = 'Server Error';
          }
          console.log("update Event Exception.......", exception);
        });
  }

  googleCreateEvent() {
    this.msgCalanderEvent = null;
    if (this.eventsummary && this.eventstartdate &&
      this.eventenddate) {
      console.log("reached the event TS");

      this.commonService.googleEventAdding({
        eventsummary: this.eventsummary,
        eventstartdate: this.eventstartdate,
        eventenddate: this.eventenddate
      })
        .then(response => {

          console.log("reached from the controller of add event");
          this.msgCalanderEvent = "Event Added Sucessfully!"
          this.clearevent();
          //this.router.navigate(['crud']);
          //console.log("navigation to crud");
        })
        .catch(exception => {
          if (exception.status == 423) {
            this.msgCalanderEvent = 'Add Event unsucessfull!';
          } else if (exception.status == 403) {
            this.msgCalanderEvent = 'Add Event unsucessfull!';
          } else {
            this.msgCalanderEvent = 'Server Error';
          }
          console.log("Adding to calendar failed, exception is.......", exception);
        });
    }
  }
 logout(){
    this.router.navigate(['login']);
  }

}

