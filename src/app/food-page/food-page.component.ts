import { FoodService } from './../services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food! : Food ;

  constructor(private route : ActivatedRoute, private service : FoodService){
    route.params.subscribe((params) => {
      if(params['id']) {
     this.food = this.service.getFoodById(params['id'])
      }
    })
  }




  ngOnInit(): void {

  }



}
