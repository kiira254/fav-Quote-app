import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  
  newQuote = new Qoute(0, "", "", "", new Date());//format as defined by class property

  @Output() addQuote = new EventEmitter<Qoute>();//event emitter to listen and send out new quotes on quote parent component

  submitQuote() {
    this.addQuote.emit(this.newQuote);//this triggers addition of the new quote
  }

  ngOnInit() {
  }

}
