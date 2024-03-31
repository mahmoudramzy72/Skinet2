import { BasketService } from './basket/basket.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet';
  
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    const baskeId = localStorage.getItem('basket_id');
    if (baskeId) {
      this.basketService.getBasket(baskeId).subscribe(() => {
        console.log('intialised basket');
      }, error => {
        console.log(error);
      });
    }
  }
}


