import { Component } from '@angular/core';
import {Artist} from './models/artist';
import {ArtistService} from './services/artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artistDirectory';
  name = 'Marwane';
  artists: Artist[];

  constructor(private artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }

  onClick(e) {
    this.name = e.target.innerHTML;
  }

  addArtist(value) {
    if (value !== '') {
      this.artists.push({
        name: value,
        shortname: '',
        reknown: 'Hard Knocks',
        bio: ''
      });
    }
  }

}


