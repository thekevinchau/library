let library = [
    new Book('Harry Potter', 'JK Rowling', 381, true),
    new Book('The Hunger Games', 'Suzanne Collins', 472, false)
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
    let index = 0;
    array.forEach(Book => {
        let div = document.createElement('div');
        div.id = index;
        

        //Display title
        let title = document.createElement('span');
        title.style.backgroundColor = "#699f8f";
        title.style.height = "40px";
        title.style.textAlign = "center";
        title.style.fontWeight = "bold";
        title.textContent = Book.title;


        let button = document.createElement('button');
        button.textContent = "X"
        button.style.backgroundColor = "inherit";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.addEventListener('click', ()=>{
            lib.removeChild(div);
            array.splice(Book.title, 1)
            div.id--;
            console.log(array)
            console.log(div.id);
        })

        title.appendChild(button)

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

        let checkBoxArea = document.createElement('div');
        let label = document.createElement('label');
        label.textContent = "Read Status:"
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.style.display = "inline-block"
        label.style.marginRight = ".5rem"


        if (Book.read === true){
            checkBox.checked = true;
        }
        else if (Book.read === false){
            checkBox.checked = false;
        }

        
        checkBoxArea.appendChild(label);
        checkBoxArea.appendChild(checkBox);

        div.appendChild(checkBoxArea);

        //Div that displays whether it's read or not
        let read = document.createElement('div');
        read.className = "read-div"
        div.appendChild(read);


        lib.appendChild(div);
        index++;
        console.log(array);
    })
}
let addBook = document.querySelector('.add-book')


//all modal related selectors
let modal = document.querySelector('#book-modal');
let closeButton = document.querySelector('#modal-close')

addBook.addEventListener('click', () => modal.showModal())
closeButton.addEventListener('click', () => modal.close())

//Button to add a book
let submitBtn = document.querySelector('#submit-btn')
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let authorInp = document.querySelector('#title-input').value;
    let pageInp = document.querySelector('#author-input').value;
    let numberInp = document.querySelector('#number-input').value;
    let readStatus = document.querySelector('#read-check');

    let isRead;

    if (readStatus.checked){
        isRead = true;
    }
    else if (!readStatus.checked){
        isRead = false;
    }


    let newBook = new Book (authorInp, pageInp, numberInp, isRead);
    library.push(newBook);
    modal.close();
    displayBooks(library);

    let inputs = document.querySelector('form');
    inputs.reset();

    
})
displayBooks(library);