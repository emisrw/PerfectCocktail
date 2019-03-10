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
    async getCategories() {
      const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
      const categories = await apiResponse.json();
      return { categories }
    }
    async getDrinksByCategory( category ) {
      const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const cocktails = await apiResponse.json();
      return { cocktails }
    }

    async getDrinksByAlcohol( alcohol ) {
      const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcohol}`);
      const cocktails = await apiResponse.json();
      return { cocktails }
    }

    
}