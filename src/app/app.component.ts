import { Component } from '@angular/core';
import { Ingredient, Recipe } from './models/recipe.model';
import { RECIPES } from './models/recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Recipe Box';
  recipes = RECIPES;
  names = this.getNames();
  categories = this.getCat();
  selectedType: string;
  selectedRecipe: Recipe;

  getNames() {
    let out = [];
    this.recipes.forEach((recipe) => {
      out.push(recipe.name);
    })
    return out;
  };

  getCat() {
    let out = [];
    this.recipes.forEach((recipe) => {
      let flag: boolean = true;
      out.forEach((elt) => {
        if (elt == recipe.type) {
          flag = false;
        }
      })
      if (flag) {
        out.push(recipe.type);
      }
    })
    return out;
  }

  log(str) {
    console.log(str);
  }
}
