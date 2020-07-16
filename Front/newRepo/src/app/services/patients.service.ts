import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  patientList = [
    {
      img: 'assets/images/avatars/avatar-1.jpg',
      name: 'Patient1',
      relation: 'Friend',
      content: `Filing Contents`,
    },
    {
      img: 'assets/images/avatars/avatar-1.jpg',
      name: 'Patient2',
      relation: 'Friend',
      content: `Filing Content`,
    },
    {
      img: 'assets/images/avatars/avatar-1.jpg',
      name: 'Patient3',
      relation: 'Friend',
      content: `Filing Contents`,
    },
  ];

  stats = [
    {
      title: 'Your Patients',
      amount: '18',
      progress: {
        value: 20,
      },
      color: 'bg-indigo-500',
    },
  ];

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) {}

  getPatientList(): any {
    return this.patientList;
  }
  getStats(): any {
    return this.stats;
  }
}
