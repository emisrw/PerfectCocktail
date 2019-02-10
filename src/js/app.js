
// Instanciate the Classes
const ui = new UI();
// Create event listeners
function eventListeners() {


 const searchForm = document.querySelector('#search-form');
 if(searchForm) {
    searchForm.addEventListener('submit', getCocktails);
 }
}

eventListeners();

function getCocktails(e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    if(searchTerm === '') {
        ui.printMessage('Please add something into the form','danger');
    } else {

    }

}