import { Injectable } from '@angular/core';
import { QuoteModel } from './QutoesModel';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  public quoteList: QuoteModel[]=[];

  private daysOfWeeks=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

  constructor() { }

  addNewQuote(quote:string){
    const date=new Date();
    const dayOfWeek=this.daysOfWeeks[date.getDate()];
    const day=date.getDay();
    const year=date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote,`${dayOfWeek} ${day} ${year}`)
    );
  }

  getQuote()
  {
    return this.quoteList;
  }
  removeQuote(index:number){
   this.quoteList.splice(index,1);
  }
  fetchQuotesFromServer(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([new QuoteModel("We all love Unit Testing","Mon 25,2021")]);
      },2000);

    });
  }
}
