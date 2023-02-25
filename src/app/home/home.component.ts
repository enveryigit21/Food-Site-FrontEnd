import { ActivatedRoute } from '@angular/router';
import { Food } from './../shared/models/food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods : Food[] = [];

  constructor(private service : FoodService , private route  : ActivatedRoute ){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.service.getAllFoodsBySearchTerm(params['searchTerm'])

          else if (params['tag']) {
            this.foods = this.service.getAllFoodsByTag(params['tag'])
          }

          else
          this.foods = this.service.getAll();
        })
   }
  }



