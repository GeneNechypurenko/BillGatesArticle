import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {

  @Input() quotes = [
    '«Patience is a key element of success»',
    '«If you think your teacher is tough, wait till you get a boss»',
    '«Life is not fair — get used to it!»',
    '«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»',
    '«Be nice to nerds. Chances are you’ll end up working for one»'
  ];

  newQuote = '';

  addQuote() {
    if (this.newQuote) {
      this.quotes.push(this.newQuote);
      this.newQuote = '';
    }
  }

  isHoveredPlus = false;
  isHoveredCheck = false;
  
  showInputs = false;

  toggleInputs() {
    this.showInputs = !this.showInputs;
  }
}
