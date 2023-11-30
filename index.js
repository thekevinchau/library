let library = [
    new Book ('hello', 'hello', 123, true),
    new Book ('bye', 'bye', 90, true)
]


function Book (title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function createTitle(Book){
    let cardHeader = document.createElement('h3');
    cardHeader.textContent = Book.title;

    return cardHeader;
}

function createAuthor(Book){
    let cardAuthor = document.createElement('div');
    cardAuthor.textContent = "Author:" + Book.author;

    return cardAuthor;
}

function createPages(Book){
    let cardPages = document.createElement('div');
    cardPages.textContent = "Pages: " + Book.pages;

    return cardPages;
}




function addBook(array){
    let lib = document.querySelector('.library');
    lib.innerHTML = "";

    array.forEach(Book => {
        let bookCard = document.createElement('div');

        bookCard.appendChild(createTitle(Book))
        bookCard.appendChild(createAuthor(Book))
        bookCard.appendChild(createPages(Book))

        lib.appendChild(bookCard);

    })
}

let bookAdder = document.querySelector('.add-book');
let dialog = document.querySelector('#book-modal')

bookAdder.addEventListener('click', () => {
    dialog.showModal();
})

let submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    inputHandler();
})

let closeBtn = document.querySelector('#modal-close');
closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
})

let readStatus = document.querySelector('#modal-read')
readStatus.addEventListener('click', () => {
    if (readStatus.className === "modal-read-button"){
        readStatus.className = "modal-unread-button";
    }
    else if (readStatus.className === "modal-unread-button"){
        readStatus.className = "modal-read-button";
    }

})


function inputHandler(){
    let titleInput = document.querySelector('#title-input').value;
    let authorInput = document.querySelector('#author-input').value;
    let pageInput = document.querySelector('#number-input').value;
    let read = document.querySelector('#read-check');

    if (titleInput === ""){
        alert("Please input a title!")
    }
    else if (authorInput === ""){
        alert("Please input an author!")
    }
    else if (pageInput === ""){
        alert("Please input the book's page count!")
    }
    else{

    let newBook = new Book(titleInput, authorInput, pageInput, read)
    library.push(newBook);
    dialog.close();
    addBook(library);

    let inputs = document.querySelector('form');
    inputs.reset();
    }
}

addBook(library);




