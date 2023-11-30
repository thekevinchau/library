let library = [
    new Book('Harry Potter deathly hallows', 'JK Rowling', 321, 'read'),
    new Book('Harry Potter: Order of the Phoenix', 'JK Rowling', 321, 'read'),
    new Book('Harry Potter', 'JK Rowling', 321, 'unread'),

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
        

        //Display title
        let title = document.createElement('span');
        title.style.backgroundColor = "#699f8f";
        title.style.height = "40px";
        title.style.textAlign = "center";
        title.style.fontWeight = "bold";
        title.textContent = Book.title;
        div.appendChild(title);

        //Display author
        let author = document.createElement('div');
        author.textContent = `Author: ${Book.author}`;
        div.appendChild(author);


        //Display page count
        let pages = document.createElement('div');
        pages.textContent = `Pages: ${Book.page}`;
        div.appendChild(pages);



        //Display check box to decide read or not
        let checkBox = document.createElement('input');
        let label = document.createElement('label');
        label.textContent = "Have you read it?"
        checkBox.type = "checkbox"
        checkBox.style.marginLeft = ".5rem";
        let checkBoxDiv = document.createElement('div');
        checkBoxDiv.appendChild(label);
        checkBoxDiv.appendChild(checkBox);
        div.appendChild(checkBoxDiv);


        let read = document.createElement('div');
        Book.read === "read" ? read.style.backgroundColor = "#259725" : read.style.backgroundColor = "orange";
        read.textContent = `Status: ${Book.read}`;
        read.className = "read-div"
        div.appendChild(read);


        lib.appendChild(div);
    })
}

let bookCount = document.querySelector('#book-count')
bookCount.textContent = library.length;

displayBooks(library);