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
    cardAuthor.textContent = "Author: " + Book.author;

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
        let title = createTitle(Book);
        bookCard.appendChild(title);
        bookCard.appendChild(createAuthor(Book))
        bookCard.appendChild(createPages(Book))

        let readButton = document.createElement('div');
        let deleteButton = document.createElement('div');
        deleteButton.textContent = "Remove"
        deleteButton.className = "delete-btn"

        deleteButton.addEventListener('click', () => {
            lib.removeChild(bookCard)
            array.pop();
            console.log(array);
        }
        )

        if (Book.readStatus === true){
            readButton.className = "modal-read-button"
            readButton.textContent = "Read";
        }
        else if (Book.readStatus === false){
            readButton.className = "modal-unread-button";
            readButton.textContent = "Unread";
        }
        readButton.addEventListener('click', () => {
            if(readButton.className === "modal-read-button"){
                readButton.className = "modal-unread-button"
                readButton.textContent = "Unread"
                Book.readStatus = false;
                console.log(Book.readStatus)
            }
            else if (readButton.className === "modal-unread-button"){
                readButton.className = "modal-read-button";
                readButton.textContent = "Read"
                Book.readStatus = true;
            }
        })
        bookCard.appendChild(readButton);
        bookCard.appendChild(deleteButton)

        lib.appendChild(bookCard);

    })
}

function removeFromLibrary(array, title){
    for (let i = 0; i < array.length; i++){
        if (Book.title === title){
            array.splice(i, 1);
        }
    }
    return array;
}

function inputHandler(){
    let titleInput = document.querySelector('#title-input').value;
    let authorInput = document.querySelector('#author-input').value;
    let pageInput = document.querySelector('#number-input').value;
    let read = document.querySelector('#read-check');


    let readStatus = document.querySelector('#modal-read')
    let isRead;

    if (readStatus.className === "modal-read-button"){
        isRead = true;
    }
    else if (readStatus.className ==="modal-unread-button"){
        isRead=false;
    }

    if (titleInput === "" && authorInput === "" && pageInput === ""){
        alert("Please input all book details!")
    }

    else if (titleInput === ""){
        alert("Please input a title!")
    }
    else if (authorInput === ""){
        alert("Please input an author!")
    }
    else if (pageInput === ""){
        alert("Please input the book's page count!")
    }
    else{

    let newBook = new Book(titleInput, authorInput, pageInput, isRead)
    library.push(newBook);
    dialog.close();
    addBook(library);

    let inputs = document.querySelector('form');
    inputs.reset();
    }
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
    changeStatus(readStatus);

})
function changeStatus(button){
    if (button.className === "modal-read-button"){
        button.className = "modal-unread-button";
        button.textContent = "Unread";
        Book.readStatus = false;
    }
    else if (readStatus.className === "modal-unread-button"){
        button.className = "modal-read-button";
        button.textContent = "Read";
        Book.readStatus = true;
    }
}

addBook(library);




