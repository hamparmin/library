// main array
let myLibrary=[];

// constructor and auxilliary function
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.info=`${title} by ${author}, written in ${year}`;
    this.read = false;
}

function addBook(){
    let title = window.prompt("What's the book's title?");
    let author = window.prompt("Who wrote the book?");
    let year= window.prompt("When was the book written?");
    let aBook= new Book(title,author,year);
    myLibrary.push(aBook);
}

// render function
const body=document.querySelector(".display");
const table=document.querySelector(".booktable");
const tbody=document.createElement("tbody");
const thead=document.createElement("thead");
thead.innerHTML="<tr><th>Title</th><th>Author</th><th>Year</th><th>READ</th></tr>";

function render(library){
    let books="";
    library.forEach(function(book){
        let entry="<tr>";
        entry+=`<td> ${book.title} </td>`;
        entry+=`<td> ${book.author} </td>`;
        entry+=`<td> ${book.year} </td>`;
        entry+=`<td> ${book.read} </td>`;
        // entry+=`<td> <button type="submit" class="read">READ</button></td>`;
        entry+="</tr>"
        books+=entry;
    });
    tbody.innerHTML=books;
    table.appendChild(thead);
    table.appendChild(tbody);
}

//button and display
const button=document.querySelector("button");
button.addEventListener('click', function(){
    addBook();
    render(myLibrary);
})
// let readButtons=Array.from(document.querySelectorAll(".read"));
// readButtons.forEach(function(btn){
//     btn.addEventListener(function(){

//     })
// })