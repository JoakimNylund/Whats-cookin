import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
