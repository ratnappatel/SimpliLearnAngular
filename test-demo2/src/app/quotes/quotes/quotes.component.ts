import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { QuoteModel } from '../QutoesModel';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quoteList: QuoteModel[] = [];
  public fetchedList: QuoteModel[] = [];
  public quoteText:string="Your thoughts goes here";
  constructor(private service:QuoteService) { }

  ngOnInit(): void {
    this.quoteList=this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data:any) => {
      this.fetchedList=data;
      });
  }
  createNewQuote(){
    this.service.addNewQuote(this.quoteText);
    this.quoteText="";
  }
  removeQuote(index:number){
    this.service.removeQuote(index);
  }
}
