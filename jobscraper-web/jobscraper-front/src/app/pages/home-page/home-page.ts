import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search-component/search-component";

@Component({
  selector: 'app-home-page',
  imports: [SearchComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
