import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {

  quotes = [
    '«Patience is a key element of success»',
    '«If you think your teacher is tough, wait till you get a boss»',
    '«Life is not fair — get used to it!»',
    '«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»',
    '«Be nice to nerds. Chances are you’ll end up working for one»'
  ];

  addNewQuote(newQuote: string) {
    this.quotes.push(newQuote);
    console.log(this.quotes);
  }
}
