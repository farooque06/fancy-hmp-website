import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
   cloudImages:string[]=['../../../assets/images/clouds/cloud1.png','../../../assets/images/clouds/cloud2.png','../../../assets/images/clouds/cloud3.png','../../../assets/images/clouds/cloud4.png','../../../assets/images/clouds/cloud5.png'];
  textContent: string = "Clothes";
  showNewText: number = 0;
  texts: string[] = [ "Clothes", "Bags", "Shoes", "Accessories"];

   ngOnInit(): void {
    setInterval(() => {
      this.toggleTextContent();
    }, 3000);
  }

  toggleTextContent() {
    this.showNewText = (this.showNewText + 1) % this.texts.length;
    this.textContent = this.texts[this.showNewText];
  }
}
