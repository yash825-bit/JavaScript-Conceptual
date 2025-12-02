const container = document.getElementById("productContainer");
const searchBox = document.getElementById("searchBox");

// Fetch all products initially
fetchProducts("https://dummyjson.com/products");

// Generic fetch function
async function fetchProducts(apiUrl) {
  container.innerHTML = "<h3>Loading...</h3>";

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    displayProducts(data.products);
  } catch (err) {
    container.innerHTML = "<h3>Error fetching products!</h3>";
  }
}

// Display product cards
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p class="price">₹ ${p.price}</p>
      <p class="rating">⭐ ${p.rating}</p>
    `;

    container.appendChild(card);
  });
}

// Search Feature
searchBox.addEventListener("input", function () {
  const query = searchBox.value.trim();

  if (query.length === 0) {
    fetchProducts("https://dummyjson.com/products");
  } else {
    fetchProducts(`https://dummyjson.com/products/search?q=${query}`);
  }
});
