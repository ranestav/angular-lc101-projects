import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['https://www.youtube.com/', 'https://www.reddit.com/'];

  image1 = 'https://media2.giphy.com/media/yYSSBtDgbbRzq/200.webp?cid=ecf05e47opa9ala67cd4nmwx124vq5wdfhkxl1bzdl08hs1n&rid=200.webp';

  constructor() { }

  ngOnInit() {
  }

}
