const btn = document.getElementsByClassName("btn");
const seats = document.getElementById("seat");
const totalPrice = document.getElementById("price");

let seatsbooked = 0;

function book(btn) {
  if (btn.style.backgroundColor === "green") {
    btn.style.backgroundColor = "";
    btn.style.color = "black";
    seatsbooked--;
  } else {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    seatsbooked++;
  }
  seats.innerHTML = seatsbooked;
  totalPrice.innerHTML = seatsbooked * 150;
}
