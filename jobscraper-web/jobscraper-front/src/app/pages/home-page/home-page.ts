import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search-component/search-component';

@Component({
  selector: 'app-home-page',
  imports: [SearchComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  hourToday = new Date();

  jobFounds = [
    {
      id: 1,
      title: 'JobFound 01',
      companion: 'company 01',
      type: 'full-time',
      occupation: 'java & spring boot',
      description: 'loremispum',
    },
    {
      id: 2,
      title: 'JobFound 02',
      companion: 'company 02',
      type: 'part-time',
      occupation: 'python & django',
      description: 'loremispum',
    },
    {
      id: 3,
      title: 'JobFound 03',
      companion: 'company 03',
      type: 'contract',
      occupation: 'javascript & react',
      description: 'loremispum',
    },
    {
      id: 4,
      title: 'JobFound 04',
      companion: 'company 04',
      type: 'internship',
      occupation: 'c# & .net',
      description: 'loremispum',
    },
    {
      id: 5,
      title: 'JobFound 05',
      companion: 'company 05',
      type: 'remote',
      occupation: 'php & laravel',
      description: 'loremispum',
    },
    {
      id: 6,
      title: 'JobFound 06',
      companion: 'company 06',
      type: 'full-time',
      occupation: 'ruby & rails',
      description: 'loremispum',
    },
    {
      id: 7,
      title: 'JobFound 07',
      companion: 'company 07',
      type: 'part-time',
      occupation: 'go & gin',
      description: 'loremispum',
    },
    {
      id: 8,
      title: 'JobFound 08',
      companion: 'company 08',
      type: 'contract',
      occupation: 'typescript & angular',
      description: 'loremispum',
    },
    {
      id: 9,
      title: 'JobFound 09',
      companion: 'company 09',
      type: 'internship',
      occupation: 'swift & ios',
      description: 'loremispum',
    },
    {
      id: 10,
      title: 'JobFound 10',
      companion: 'company 10',
      type: 'remote',
      occupation: 'kotlin & android',
      description: 'loremispum',
    },
  ];
}
