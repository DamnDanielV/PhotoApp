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
    return this.http.get(`http://localhost:3000/api/photos/${id}`);
  }

  savePhoto( photo:Photo ) {
    return this.http.post('http://localhost:3000/api/photos', photo);
  }

  deletePhoto(id:number) {
    return this.http.delete(`http://localhost:3000/api/photos/${id}`);
  }

  updatePhoto(id:number, newData:Photo) {
    return this.http.put(`http://localhost:3000/api/photos/${id}`, newData);
  }

  searchPhoto( title:string ) {
    return this.http.get(`http://localhost:3000/api/photos/search/${title}`);
  }
}
