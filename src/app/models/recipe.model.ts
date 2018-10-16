export class Ingredient {
  name: string;
  amount: string;
  specialty: boolean;

  constructor(name, amount, specialty=false) {
    this.name = name;
    this.amount = amount;
    this.specialty = specialty;
  }
}

export class Recipe {
  name: string;
  id: number;
  type: string;
  ingredients: Ingredient[];
  instructions: string[];
  source: string;

  constructor(name, id, type, ingredients, instructions, source) {
    this.name = name;
    this.id = id;
    this.type = type;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.source = source;
  }
}
