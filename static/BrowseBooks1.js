// Fetch the books JSON file
fetch('/static/books.json')
  .then(response => response.json())
  .then(data => {
    const booksContainer = document.getElementById('books-container');

    // Iterate over each category
    data.categories.forEach(category => {
      // Create a category section
      let categorySection = `<h2>${category.name}</h2><div class="category-container">`;

      // Iterate over each book in the category
      category.books.forEach(book => {
        categorySection += `
          <div class="book-card">
            <img src="${book.image}" alt="${book.title} Cover" class="book-image">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-price">${book.price}</p>
            <p class="book-description">${book.description}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        `;
      });

      // Close the category section
      categorySection += `</div>`;
      booksContainer.innerHTML += categorySection;
    });
  })
  .catch(error => console.error('Error loading books:', error));



  //js to fetch JSON
  // Fetching the books from JSON

  
fetch('books.json')
.then(response => response.json())
.then(books => {
    const bookListing = document.getElementById('book-listing');
    
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <p>${book.summary}</p>
            <button class="add-to-cart" data-title="${book.title}" data-price="${book.price}">Add to Cart</button>
        `;

        bookListing.appendChild(bookDiv);
    });

    // Add event listeners for the "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            addToCart(title, price);
        });
    });
})
.catch(error => console.error('Error fetching the books:', error));


    // Cart functionality
const cart = [];

function addToCart(title, price) {
  cart.push({ title, price });
  alert(`${title} has been added to your cart!`);
  console.log(cart); // Display cart items in the console for debugging
}