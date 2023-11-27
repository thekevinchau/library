let library = [
    new Book('Harry Potter', 'JK Rowling', 321, 'read')
];

function Book (title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

//we want to find a way to display books currently in array.

function displayBooks(array){
    let lib = document.querySelector('.library');
    lib.innerHTML = '';


    array.forEach(Book => {
        let div = document.createElement('div');
        

        let title = document.createElement('h3');
        title.textContent = Book.title;
        div.appendChild(title);

        let author = document.createElement('p');
        author.textContent = Book.author;
        div.appendChild(author);


        lib.appendChild(div);
    })
}

displayBooks(library);