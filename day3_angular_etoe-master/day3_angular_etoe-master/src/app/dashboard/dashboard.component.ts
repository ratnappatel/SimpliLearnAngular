import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { AuthenticationService } from '../services/authentication.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage: string = "";

  notes: Array<Note> = [];

  note : Note = new Note();

  constructor(private activeRoute: ActivatedRoute
    ){}

  validate(event){
    console.log(event);
    if(event.target.value.length < 6){
      // this.textColor = "red"
      this.errorMessage = 'Title should be of minimum 6 characters long';
    }
    else{
      this.errorMessage=''
      // this.textColor = "lightgreen"
    }
  }
loggedInName: string = '';
loggedInTime: string = '';

background: string;

  ngOnInit(){

    this.activeRoute.params.subscribe(
      param=>{
        this.loggedInName = param['userid']
      }
    )

    this.activeRoute.queryParams.subscribe(
      param=>{
        this.loggedInTime = param['loginTime']
      }
    )

  }

  

  // deleteNote(noteId: Number){
  //   this.noteService.deleteNote(noteId)
  //   .subscribe(
  //     response=>{
  //       console.log('record deleted')
  //       let noteIndex = this.notes.indexOf(this.note);
  //       this.notes.splice(noteIndex,1)
  //     }
  //   ),
  //   error=>{
  //     if(error.status===404)
  //     console.log('Resource Not Found')
  //   else if(error.status===403)
  //     console.log('Access Denied')
  //   else if(error.status===401)
  //     console.log('Unauthorized')
  //   else
  //     console.log('Unable to Process the Request Now, please try again later');
  //   }
  // }
}
