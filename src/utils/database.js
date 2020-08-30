import database from '@react-native-firebase/database';

const RECIPES_REF = 'recipes';

// export const init = () => {
//   database().ref(RECIPES_REF).remove();

//   database().ref(RECIPES_REF).push({});
// };

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
