let total = 0;
document.getElementById("addItem").addEventListener("click", () => {
  const name = document.getElementById("itemName").value;
  const price = Number(document.getElementById("price").value);
  const list = document.getElementById("list");

  let items = document.createElement("li");
  items.innerHTML = `${name} - &#8377;${price}`;
  list.appendChild(items);

  total += price;
  document.getElementById("totalPrice").innerHTML = total;
});
