
import { Quote } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    service=new QuoteService();

  });

  it('should create a new quote in array', () => {
    const quoteText="This is my first quote";
    service.addNewQuote(quoteText);
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  });
  it("should remove a created quote from the array of quotes",()=>{
    service.addNewQuote("This is my first quote");
    service.removeQuote(0);
    expect(service.quoteList.length).toBeLessThan(1);
  });
});
