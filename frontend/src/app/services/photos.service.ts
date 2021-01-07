import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// interfaces
import { Photo } from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { 
    
  }

  getPhotos() {
    return this.http.get('http://localhost:3000/api/photos/');
  }

  getPhoto(id:number) {
    this.http.get(`http://localhost:3000/api/photos/${id}`)
      .subscribe( resp=> {
        console.log(resp);
      })
  }

  savePhoto( photo:Photo ) {
    this.http.post('http://localhost:3000/api/photos', photo);
  }

  deletePhoto(id:number) {
    this.http.delete(`http://localhost:3000/api/photos/${id}`);
  }

  updatePhoto(id:number, newData:Photo) {
    this.http.put(`http://localhost:3000/api/photos/`, newData);
  }
}
