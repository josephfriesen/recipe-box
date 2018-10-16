import { Ingredient } from './recipe.model';
import { Recipe } from './recipe.model';

export const RECIPES: Recipe[] = [
  new Recipe(
    'Beer Can Chicken',
    1,
    'Entree',
    [
      {name: 'chicken with all the guts teared out', amount: '5 lb'},
      {name: 'aluminum can of beer, half full', amount: '1'},
      {name: 'onion powder', amount: '1 tsp'},
      {name: 'garlic powder', amount: '1 tsp'},
      {name: 'salt', amount: '1/2 tsp'},
      {name: 'pepper', amount: '1/2 tsp'},
      {name: 'spray oil', amount: ''}
    ],
    [
      'Preheat the oven to 400F. Line a small roasting pan with foil (shiny side down). Pour all the seasonings into the beer can and stick it into the big butt opening of the chicken. Then sit the chicken upright, like he was in a chair, onto the roasting pan, using the beer can as his base. Spray his skin all over with the oil (this will make it crispy). Throw salt and pepper all over his skin and then stick him in the oven for like a hour and a half. The fluid and seasonings in the beer can will steam all up through the bird and flavor it, as well as keep it real moist',

      'Make sure that a meat thermometer stuck into the deepest part of the breast and deepest part of the thigh registers at least 160-170F. Juices should be clear and not pink. Let sit 10 minutes.'
    ],
    '\"Recipes For a Lady or a Man\", Chris Onstad'
  ),

  new Recipe(
    'Vibrant Chicken with a spicy tomato sauce (Tari Waali Murghi)',
    2,
    'Entree',
    [
      new Ingredient('ginger paste', '1/4 cup', true),
      new Ingredient('garlic paste', '2 tbsp', true),
      new Ingredient('whole chicken, skin removed, cut into 8 pieces', '1'),
      new Ingredient('canola oil', '2 tbsp'),
      new Ingredient('tomato sauce', '1 (14.5oz) can'),
      new Ingredient('fried onion paste', '1/2 cup', true),
      new Ingredient('coriander seeds, ground', '1 tbsp'),
      new Ingredient('sweet paprika', '2 tsp'),
      new Ingredient('kosher salt', '1 1/2 tsp'),
      new Ingredient('cumin seeds, ground', '1 tsp'),
      new Ingredient('ground turmeric', '1/2 tsp'),
      new Ingredient('cayenne pepper', '1/2 tsp'),
      new Ingredient('cilantro, finely chopped', '2 tbsp')
    ],
    [
      'Combine the ginger and garlic pastes in a medium-size bowl, and mix well. Add the chicken pieces and smear them all over with the paste.',

      'Heat the oil in a large skillet over medium-high heat. Add the chicken pieces, meat side down in a single layer, and cook until they are lightly browned, about 3 minutes. Turn the pieces over and cook on the other side until lightly browned, about 3 minutes. Transfer the chicken to a plate.',

      'Add the tomato sauce, onion paste, coriander, paprika, salt, cumin, turmeric, and cayenne to the skillet. The sauce will immediately start to bubble and boil. Reduce the heat to medium-low, cover the skillet, and simmer, stirring occasionally, until a thin layer of oil separates from the sauce, forming a spice-colored film on the surface, 20 to 25 minutes.',

      'Return the chicken pieces to the skillet and coat them with the sauce. Cook, covered, turning the chicken occasionally, until the meat in th ethickest parts is no longer pink inside and the juices run clear, 20 to 25 minutes.',

      'Serve the chicken with its vermilion-red sauce, sprinkled with the cilantro.'
    ],
    '\"660 Curries\", Raghavan Iyer'
  ),

  new Recipe(
    'Slow-Cooker Black Bean Soup',
    3,
    'Side dish',
    [
      new Ingredient('onion, chopped', '1'),
      new Ingredient('vegetable oil', '1 tbsp'),
      new Ingredient('garlic cloves, minced', '3'),
      new Ingredient('chili powder', '2 tsp'),
      new Ingredient('chicken broth', '1 1/2 cups'),
      new Ingredient('water', '1 cup'),
      new Ingredient('dried black beans, picked over and rinsed', '3/4 cup'),
      new Ingredient('bacon', '3 strips'),
      new Ingredient('celery rib, cut into 1/2-inch pieces', '1'),
      new Ingredient('carrot, peeled and cut into 1/2-inch pieces', '1'),
      new Ingredient('cilantro, finely chopped', '1 tbsp'),
      new Ingredient('salt and pepper', '')
    ],
    [
      'Lightly spray inside of slow cooker with vegetable oil spray. Microwave onion, oil, garlic, and chili powder in bowl, stirring occasionally, until onion is softened, about 5 minutes; transfer to prepared slow cooker. Stir in broth, water, beans, bacon, celery, carrot, 1/2 tsp salt, and 1/2 tsp pepper. Cover and cook until beans are tender, 6 to 7 hours on low or 4 to 5 hours on high.',

      'Discard bacon. Transfer 1/2 cup of bean mixture to bowl and mash with potato masher until mostly smooth. Stir mashed bean mixture into soup and let sit until heated through, about 5 minutes. Adjust soup consistency with extra broth as needed. Stir in cilantro and season with salt and pepper to taste. Serve.'
    ],
    '\"The Complete Cooking For Two Cookbook\", America\'s Test Kitchen'
  )
];
