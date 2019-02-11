class UI {
   
    displayDrinksWithIngredients(drinks) {
        
        const resultsWrapper = document.querySelector('.results-wrapper');
        resultsWrapper.style.display = 'block';
        const resultsDiv = document.querySelector('#results');
        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                    <div class="col-md-6">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                        +
                        </button>
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">

                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <p class="card-text font-weight-bold">Instructions: </p>
                            <p class="card-text">
                                    ${drink.strInstructions}
                            </p>
                            <p class="card-text">
                                <ul class="list-group">
                                        <li class="list-group-item alert alert-danger">Ingredients</li>
                                        ${this.displayIngredients(drink)}
                                </ul>
                            </p>
                            <p class="card-text font-weight-bold">Extra Information:</p>
                            <p class="card-text">
                                <span class="badge badge-pill badge-success">
                                        ${drink.strAlcoholic}
                                </span>
                                <span class="badge badge-pill badge-warning">
                                        Category: ${drink.strCategory}
                                </span>
                            </p>
                        </div>
                    </div>
            </div>
            `;
        });

    }
   
    displayIngredients(drink) {
        let ingredients = [];
        for(let i =1; i< 16; i++) {
            const ingredientMeasure = {};
            if( drink[`strIngredient${i}`] !== '') {
                ingredientMeasure.ingredient = drink[`strIngredient${i}`]; 
                ingredientMeasure.measure = drink[`strMeasure${i}`]; 
                ingredients.push(ingredientMeasure); 
                
            }

        }

        let ingredientsTemplate = '';
        ingredients.forEach( ingredient => {
            ingredientsTemplate += `
            <li class="list-group-item">${ingredient.ingredient} - ${ingredient.measure}</li>
            `
        } );
        return ingredientsTemplate
        
    }
    // Displays custom message\
    printMessage(message, className) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="alert alert-${className} alert-dismissible fade show" role="alert">
        ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `;
        const reference = document.querySelector('.jumbotron h1');
        const parentNode = reference.parentElement;
        parentNode.insertBefore(div, reference);
        setTimeout(()=> {
            document.querySelector('.alert').remove();
        },3000)
    }

}