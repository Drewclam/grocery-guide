import database from '@react-native-firebase/database';

const RECIPES_REF = 'recipes';

export const seedDatabase = () => {
  deleteAllRecipes();
  addRecipe('Big Papi Spaghetti');
  addRecipe('Hainanese Chicken');
  getAllRecipes().then((values) => {
    updateRecipeIngredients(values[0].id, [
      'Zuchini',
      'Swedish Meatball',
      'Red/Orange/Yellow Pepper',
      'Parmesean Cheese',
      'Tomato',
    ]);
  });
};

export const addRecipe = (name) => database().ref(RECIPES_REF).push().update({ name });
export const updateRecipeIngredients = (recipeId, ingredients) => {
  database()
    .ref(`${RECIPES_REF}/${recipeId}`)
    .update({ ingredients: ingredients.map((ingredient) => ingredient.toLowerCase()) });
};
export const getAllRecipes = () =>
  database()
    .ref(RECIPES_REF)
    .once('value')
    .then((snapshot) => snapshot.val()) //unwrap response
    .then((response) =>
      Object.keys(response).map((key) => {
        return { ...response[key], id: key };
      }),
    );
export const deleteAllRecipes = () => database().ref(RECIPES_REF).remove();
