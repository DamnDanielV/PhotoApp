import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent implements OnInit {

  newPhoto:Photo = {
    id: 0,
    title: "",
    image: "",
    description:"",
    created_at: new Date(),
    id_user: 1,
  };
  edit:boolean = false;
  params: any;

  constructor( private photosService:PhotosService,
               private router:Router,
               private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params;
    if (this.params.id) {
      this.photosService.getPhoto(this.params.id).subscribe( (res) => {
        console.log(res);
        this.newPhoto = res;
        this.edit = true;
      })
    }
  }

  addPhoto() {
    delete this.newPhoto.id;
    delete this.newPhoto.created_at;
    this.photosService.savePhoto(this.newPhoto).subscribe( (resp) => {
      console.log(resp);
      this.router.navigate([''])
    })
  }

  editPhoto() {
    delete this.newPhoto.created_at;

    this.photosService.updatePhoto(this.params.id, this.newPhoto).subscribe( (resp) => {
      console.log(resp);
      this.router.navigate(['']);
    })
  }
}
