class CocktailAPI {

    async getDrinksByName(name) {
     const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

     const cocktails = await apiResponse.json();
     return { cocktails }
    }
    async getDrinksByIngredient(indegrient) {
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${indegrient}`);
        const cocktails = await apiResponse.json();
        return { cocktails }
       }
    async getSingleRecipe(id) {
      const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const recipe = await apiResponse.json();
      return { recipe }
    }
}