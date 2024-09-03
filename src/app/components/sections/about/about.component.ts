import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  panels = [
    {
      title: 'Our Story',
      content:
        'Founded on the belief that fashion can be both stylish and sustainable, [Your Brand Name] began with a commitment to using hemp—a versatile, eco-friendly material—as the foundation of our products. Today, we offer a range of hemp-based items that blend modern design with durability, embodying our dedication to environmental responsibility.',
    },
    {
      title: 'Our Mission',
      content:
        'Our mission is to lead in sustainable fashion by offering high-quality, eco-conscious products. We aim to inspire mindful choices, ensuring that style and sustainability go hand in hand.',
    },
    {
      title: 'Our Vision',
      content:
        'We envision a world where sustainable fashion is the norm. Our goal is to create a global community of conscious consumers who prioritize quality, style, and environmental responsibility.',
    },
    {
      title: 'Sustainability',
      content:
        "Sustainability is central to our brand. Hemp, our primary material, grows quickly with minimal resources, helping us create products that are kind to the planet. By choosing [Your Brand Name], you're supporting a healthier, more sustainable world."
    }
  ];

}
