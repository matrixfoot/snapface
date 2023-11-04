import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title: any;
  description !: string;
  createdDate: Date=new Date();
  snaps !: number;
  imageUrl!: string;
  buttonText: string='';
// ...
  ngOnInit(): void {
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis tout petit !';
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.buttonText = "Ajouter une photo";
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
