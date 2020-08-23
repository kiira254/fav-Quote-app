import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Qoute(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', 'admin', new Date(2020, 8, 23)),
    new Qoute(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', 'admin', new Date(2020, 3, 23)),
    new Qoute(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', 'admin', new Date(2020, 8, 23)),
    new Qoute(3, 'Winston Churchills', 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 'admin', new Date(2020, 8, 23)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
