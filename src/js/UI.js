class UI {
    // Displays custom message
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