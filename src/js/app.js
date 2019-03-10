
// Instanciate the Classes
const ui = new UI(),
    cocktail = new CocktailAPI(),
    cocktailDB = new CocktailDB() ;
// Create event listeners
function eventListeners() {

	document.addEventListener('DOMContentLoaded', documentReady);

 const searchForm = document.querySelector('#search-form');
 if(searchForm) {
    searchForm.addEventListener('submit', getCocktails);
 }

 const resultsDiv= document.querySelector('#results');

 if(resultsDiv) {
    resultsDiv.addEventListener('click', resultsDelegation);
 }


}

eventListeners();

function getCocktails(e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    if(searchTerm === '') {
        ui.printMessage('Please add something into the form','danger');
    } else {
        let serverReponse;
        const type = document.querySelector('#type').value;

        switch(type) {
            case 'name':
            serverReponse =  cocktail.getDrinksByName(searchTerm);
            break;
            case 'ingredient':
            serverReponse =  cocktail.getDrinksByIngredient(searchTerm);
            break;
            case 'category':
            serverReponse =  cocktail.getDrinksByCategory(searchTerm);
            break;
            case 'alcohol':
            serverReponse =  cocktail.getDrinksByAlcohol(searchTerm);
            break;
			}
                
            
        ui.clearResults();
        serverReponse.then(cocktails  => {
          
           if(cocktails.cocktails.drinks === null) {
            ui.printMessage('No results, try diffrent term','danger');
           } else {
               if(type === 'name') {
                ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
               }else {
                ui.displayDrinks(cocktails.cocktails.drinks);
               }
           }
        })
    }
}

function resultsDelegation(e) {
	e.preventDefault;
	if(e.target.classList.contains('get-recipe')) {
			cocktail.getSingleRecipe(e.target.dataset.id)
				.then(recipe => {
					ui.displaySingleRecipe(recipe.recipe.drinks[0]);
				});
  }
  if(e.target.classList.contains('favorite-btn')) {
    if(e.target.classList.contains('is-favorite')) {
      e.target.classList.remove('is-favorite');
      e.target.textContent = '+';
      cocktailDB.removeFromDB(e.target.dataset.id);
    }else {
      e.target.classList.add('is-favorite');
      e.target.textContent = '-';
      // Get info
      const cardBody = e.target.parentElement;
      const drinkInfo = {
        id: e.target.dataset.id,
        name: cardBody.querySelector('.card-title').textContent,
        image: cardBody.querySelector('.card-img-top').src
      }
      cocktailDB.saveIntoDB(drinkInfo);

    }
}

}
// 
function documentReady() {

  ui.isFavorite();
  const searchCategory = document.querySelector('.search-category');
  const favoritesTable = document.querySelector('#favorites');

	if(searchCategory) {
		ui.displayCategories();
  }
  if(favoritesTable) {
    const drinks = cocktailDB.getFromDB();
    ui.displayFavorites(drinks);
    favoritesTable.addEventListener('click', (e) => {
      e.preventDefault();
    	if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
          .then(recipe => {
            ui.displaySingleRecipe(recipe.recipe.drinks[0]);
          });
    }

    if(e.target.classList.contains('remove-recipe')) {
      ui.removeFavorites(e.target.parentElement.parentElement);
      cocktailDB.removeFromDB(e.target.dataset.id);
    }

    })
	}
}