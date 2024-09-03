import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.scss']
})
export class CommonBannerComponent {

  @Input() title: string = '';
  @Input() content: string = '';

}
