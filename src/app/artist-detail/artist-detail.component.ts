import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../models/artist';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

}
