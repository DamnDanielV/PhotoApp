import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PhotosService } from "../../services/photos.service";

import { Photo } from "../../models/photo.model";


@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.component.html',
  styleUrls: ['./viewphotos.component.css']
})
export class ViewphotosComponent implements OnInit {

  photos: Photo[] = [];
  

  constructor(private photosService:PhotosService, private userService:UsersService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.photosService.getPhotos().subscribe( (resp:any) => {
      this.photos =  resp;
      // console.log(this.photos);
    })
  }

  deletePhoto(id:number) {
    this.photosService.deletePhoto(id).subscribe( (resp) => {
      console.log(resp);
      this.getGames()
    } )
  }
}
