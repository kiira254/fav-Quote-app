import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Qoute;
  @Output() isComplete = new EventEmitter<boolean>();//transmits to the delete trigger from parent component on delete function

  // 
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quote[index].name}`)//alert

      if (toDelete) { this.quote[index].name}//removes quote
    }
  }

  ngOnInit() {
  }

}
