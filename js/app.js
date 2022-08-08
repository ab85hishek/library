console.log("using prototypes");

// Book constructor
function Book(bookName, authorName, bookType) {
    this.name = bookName;
    this.author = authorName;
    this.type = bookType;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to the UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>
    `
    tableBody.innerHTML += uiString;

}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 4) {
        return false;
    } else {
        return true;
    }
}

Display.prototype.show = function (type,displayMessage){
let message = document.getElementById("message");
message.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>Message!</strong> ${displayMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
`
setTimeout(function(){
    message.innerHTML = "";
},5000)

}

// Grab the form element
let libraryForm = document.getElementById("libraryForm");
// added event listner on form element
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Form submitted");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    if (programming.checked) {
        type = programming.value;
    }
    if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added.')
    }
    else {
        display.show('danger','Sorry, You cannot add this book.')
        
    }


    e.preventDefault();
}