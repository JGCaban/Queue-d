import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from '../../../models/Event';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {

columnNames = ['eventEntityID','eventTitle', 'typeOfEvent', 'information','location', 'startTime', 'price', 'isAssigned', 'isCompleted', 'isPaid', 'isExpired', 'details'];

dataSource: MatTableDataSource<Event>;
token: any;
decodedToken: any;
userId: any;

  constructor(private _eventService: EventsService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe((events: Event[]) => {
      this.dataSource = new MatTableDataSource<Event>(events);
    });
  }

}
