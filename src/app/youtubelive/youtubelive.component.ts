import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'corp-video-player',
  templateUrl:'./youtubelive.component.html',
  styleUrls: ['./youtubelive.component.scss'
  ]
})

export class YoutubeliveComponent implements OnInit {
  private apiLoaded = false;
  playerVars = {
    cc_lang_pref: 'en',
  };
  @Input() videoId: string = '3e8ntIdjAeo';

  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
