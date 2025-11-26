//get elements by id

const list = document.getElementById("main-heading");
console.log(list);

// get elements by class

const itemsInList = document.getElementsByClassName("list-items");
console.log(itemsInList);

//get elements by tagname

const itemsBytag = document.getElementsByTagName("li");
console.log(itemsBytag);

//querySelector and querySelectorALl

const body = document.querySelector("div");

console.log(body);

const singleLI = document.querySelector(".list");
console.log(singleLI);
