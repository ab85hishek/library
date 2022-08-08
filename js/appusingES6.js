console.log("using ES6 classes");

// created Book class
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}

// created Display class and added methods like add, clear, validate and show.
class Display {
    add(book) {
        let tableBody = document.getElementById("tableBody");
        let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
       </tr>
        `
        tableBody.innerHTML += uiString;
    }


    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book){
        if(book.name.length < 3 || book.author.length < 3){
            return false;
        }else{
            return true;
        }
    }

    show(type,displayMessage){
        let message = document.getElementById("message");
        let boldMessage;
        if(type==='success'){
            boldMessage = "Hurray!";
        }else{
            boldMessage = "Failed!";
        }
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldMessage}</strong> ${displayMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
        `

        setTimeout(function(){
            message.innerHTML="";
        },3000);
    }
}

// Grab the form element
let libraryForm = document.getElementById("libraryForm");
// added event listner on form element
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("submitted");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
 

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Book successfully added.')
        console.log("Added");
    }else{
        display.show('danger','Book cannot be added.')

    }


    e.preventDefault();
}