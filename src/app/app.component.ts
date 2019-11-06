import { Component } from '@angular/core';
import {Artist} from './models/artist';
import {ArtistService} from './services/artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artists: Artist[];
  currentArtist: Artist;
  query: string;

  constructor(private artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }

  showArtist(artist: Artist) {
    this.currentArtist = artist;
  }

}


