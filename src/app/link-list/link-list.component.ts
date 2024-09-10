import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})

export class LinkListComponent {
  links = [
    { icon: 'fa-brands fa-wikipedia-w fa-xl', url: 'https://en.wikipedia.org/wiki/Bill_Gates', title: "Bill Gates on Wikipedia" },
    { icon: 'fa-solid fa-hand-holding-heart fa-xl', url: 'https://www.gatesfoundation.org/', title: "Bill & Melinda Gates Foundation" },
    { icon: 'fa-solid fa-blog fa-xl', url: 'https://www.gatesnotes.com/', title: "Bill Gates Blog" },
    { icon: 'fa-brands fa-square-x-twitter fa-xl', url: 'https://x.com/billgates?mx=2', title: "Bill Gates on Twitter" }
  ];

  addNewLink(newLink: { icon: string, url: string, title: string }) {
    this.links.push(newLink);
    console.log(this.links);
  }
}
