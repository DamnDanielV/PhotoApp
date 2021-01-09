import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  photos: any;

  constructor( private photoService:PhotosService,
               private activatedRoute:ActivatedRoute,
               ) { }

  ngOnInit(): void {
    const { term }= this.activatedRoute.snapshot.params;
    console.log (term);
    this.photoService.searchPhoto(term).subscribe( resp => {
      this.photos = resp;
      console.log(resp);
    })

  }

}
