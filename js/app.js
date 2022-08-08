console.log("Welcome to My Library");

function Book(bookName, authorName, bookType) {
    this.name = bookName;
    this.author = authorName;
    this.type = bookType;
}

function Display(){

}

Display.prototype.add = function(book){
    console.log("Adding to the UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
      <td>${Book.name}</td>
      <td>${Book.author}</td>
      <td>@${Book.type}</td>
    </tr>
    `
    tableBody.innerHTML += uiString;
    
}

Display.prototype.clear = function(){
    let libraryForm= document.getElementById("libraryForm");
    libraryForm.reset();
}



let libraryForm = document.getElementById("libraryForm");
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
    display.add(book);
    display.clear();


    e.preventDefault();
}