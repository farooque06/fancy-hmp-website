import { Component } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent {
  hempBenefits = [
    {
      title: 'Environmental Benefits',
      content: [
        'No pesticides or herbicides needed.',
        'Preserves topsoil and doesn’t deplete it.'
      ]
    },
    {
      title: 'Superior Fiber Quality',
      content: [
        '10 times stronger than cotton.',
        'Produces 3 times more fiber per acre.'
      ]
    },
    {
      title: 'Efficient Resource Use',
      content: [
        'Requires half the land of cotton.',
        'Uses less water than cotton.'
      ]
    },
    {
      title: 'Versatile Crop',
      content: [
        'Grows almost anywhere in the world.',
        'Can be used for textiles, construction, oils, foods, and medicine.'
      ]
    }
  ];
}
