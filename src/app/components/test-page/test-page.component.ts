import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
  public name:string='Prosenjit'
  favoriteSeason: string='';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
