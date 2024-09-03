import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit {
  ngOnInit(): void {
  }
  newArrival = [
    {
      image:'cloth.png',
      title:'Clothes',
      p1:'Our hemp clothing line offers stylish and comfortable options for every occasion.',
      p2:"Choose from a range of shirts, pants, dresses, and more, all made from sustainable hemp fabric.",
    },
    {
      image:'shoes.png',
      title:'Shoes',
      p1:'Our hemp shoes are designed for comfort and durability. They are breathable, lightweight, and eco-friendly.',
      p2:'Available in various styles and sizes for men, women, and children.',
    },
    {
      image:'hempbag.png',
      title:'Bags',
      p1:'Our hemp bags are both practical and stylish. They are designed to be durable and versatile for everyday use.',
      p2:' Explore our collection of backpacks, totes, and handbags.',
    },
    {
      image:'accessories.png',
      title:'Accessories',
      p1:'Complete your look with our eco-friendly hemp accessories.',
      p2:'From hats and scarves to belts and wallets, our accessories are designed to complement your sustainable lifestyle.',
    }
  ]
}
