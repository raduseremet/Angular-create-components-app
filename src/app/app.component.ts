import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      username: '@nature',
      imageUrl: 'assets/tree.jpeg',
      content: "This is some dommy text for testing purposes"
    },
    {
      title: 'Biking',
      username: '@biking',
      imageUrl: 'assets/biking.jpeg',
      content: "This is some dommy text for testing purposes about biking"
    },
    {
      title: 'Snow Mountain',
      username: '@mountain',
      imageUrl: 'assets/mountain.jpeg',
      content: "This is some dommy text for testing purposes about mountain"

    },
    {
      title: 'Biking',
      username: '@biking',
      imageUrl: 'assets/biking.jpeg',
      content: "This is some dommy text for testing purposes about biking"
    }
  ]
}