// console.log("this is the indexes6 file of the ");
// class book {
//     constructor(author, name, type) {
//         this.author = author;
//         this.name = name;
//         this.type = type;

//     }}
// class Display {
//     add(booook)//make the function for add  display
//     {
//         console.log("this is for runnig");
//        let tablebody = document.getElementById('tablebody');
//         let uistring = `<tr>
//             <td>${booook.name}</td>
//             <td>${booook.author}</td>
//             <td>${booook.type}</td>
//            </tr>`;
//         tablebody.innerHTML += uistring;
//     }
//     clear() {

//         let libraryForm = document.getElementById("libraryForm");
//         libraryForm.reset();
//     }
//     validate(booook) {

//         if (booook.name.length < 2 || booook.author.length < 2) {
//             return false
//         }
//         else {
//             return true;
//         }
//     }
//     show(type, dmessage) {

//         let message = document.getElementById('message');
//         message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//            <strong>message</strong> ${dmessage}
//            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//          </div>`;
//         setTimeout(function () {
//             message.innerHTML = ''
//         }, 2000);
//     }

// }
// let libraryForm = document.getElementById("libraryForm");
// libraryForm.addEventListener('submit', libraryFormsubmit);
// function libraryFormsubmit(i) {
//     i.preventDefault();//this function allows to prevent the default 
//     console.log("welcome to your");
//     // document.getElementById("libraryForm").innerHTML = Date();
//     let name = document.getElementById("bookName").value;
//     let author = document.getElementById("bookauthor").value;
//     let type;

//     let mechnical = document.getElementById("mechnical");
//     let programming = document.getElementById("programming");
//     let electrical = document.getElementById("electrical");
//     if (mechnical.checked) {
//         type = mechnical.value;
//     }
//     else if (programming.checked) {
//         type = programming.value;
//     }
//     else if (electrical.checked) {
//         type = electrical.value;
//     }
//     let booook = new book(name, author, type);

//     console.log(booook);
//     let display = new Display();
//     if (display.validate(booook)) {
//         display.add(booook);
//         display.clear();
//         display.show('success', "your book is show")
//     }
//     else {
//         display.show('danger', "your book is not available please put the best book");
//     }

// }

console.log('This is ES6 version of Project 2');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

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

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
