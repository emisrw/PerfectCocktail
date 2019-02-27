
// Instanciate the Classes
const ui = new UI(),
    cocktail = new CocktailAPI();
// Create event listeners
function eventListeners() {


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
}