import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Images!';
  image1 = 'https://cdn.theatlantic.com/thumbor/3DxDswJXD6STK1_PHD53NQzvJAI=/1200x800/media/img/photo/2018/11/photos-companionable-capybaras/c01_890874902-1/original.jpg';
  image2 = 'https://www.awsfzoo.com/media/Potato-1140x580.png';
  image3 = 'https://cdn.mos.cms.futurecdn.net/g8PyY6xAhcndpQLLSkdPf-1200-80.jpg';

  constructor() { }

  ngOnInit() {
  }

}