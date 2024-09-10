import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from '../link-list/link-list.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, QuoteListComponent, LinkListComponent, BioComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Bill Gates';
  showSection: 'quotes' | 'bio' | 'links' | 'all' | 'none' = 'all';
  showModal: boolean = true;

  backgrounds = [
    { fileName: 'background.jpeg' },
    { fileName: 'abstract.jpg' },
    { fileName: 'microsoft-logo.jpeg' }
  ];

  showQuotes() { this.showSection = 'quotes'; }
  showBio() { this.showSection = 'bio'; }
  showLinks() { this.showSection = 'links'; }
  showAll() { this.showSection = 'all'; }
  hideAll() { this.showSection = 'none'; }

  isSectionVisible(section: 'quotes' | 'bio' | 'links'): boolean {
    return this.showSection === 'all' || this.showSection === section;
  }

  setBackground(imageName: string) {
    document.body.style.backgroundImage = `url(${imageName})`;
    this.showModal = false;
  }

  // For Quotes Template:

  isHoveredPlus = false;
  isHoveredCheck = false;
  
  showInputs = false;

  toggleInputs() {
    this.showInputs = !this.showInputs;
  }

  @ViewChild(QuoteListComponent) quoteListComponent!: QuoteListComponent; 

  newQuote = '';

  addQuote() {
    if (this.newQuote) {
      this.quoteListComponent.addNewQuote(this.newQuote); 
      console.log(this.newQuote);
      this.newQuote = '';
    }
  }


  // For Links Template:

  @ViewChild(LinkListComponent) linkListComponent!: LinkListComponent;

  newLinkIcon = 'fa-brands fa-wikipedia-w fa-xl';
  newLinkTitle = '';
  newLinkUrl = '';

  addLink() {
    if (this.newLinkUrl && this.newLinkTitle) {
      const newLink = { icon: this.newLinkIcon, url: this.newLinkUrl, title: this.newLinkTitle };
      this.linkListComponent.addNewLink(newLink);
      console.log(newLink);
      this.newLinkTitle = '';
      this.newLinkUrl = '';
    }
  }  

  isHovered = false;
}
