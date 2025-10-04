import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-search-component',
  imports: [NgIcon],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
  viewProviders: [provideIcons({
    featherSearch
  })]
})
export class SearchComponent {

}
