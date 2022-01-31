import { Component, Input, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() msg!:string;
  @Output() changeTitleEvent: EventEmitter<string>=new EventEmitter();
  @ViewChild('titleField') titleField! :ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick(newTitle:string)
  {
    if(newTitle){
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value="";
    }
  }

}
