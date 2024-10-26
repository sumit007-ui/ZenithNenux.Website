// Fetching the books from JSON
fetch('books.json')
    .then(response => response.json())
    .then(books => {
        console.log(books); // Log the fetched data
        if (Array.isArray(books)) {
            const bookListing = document.getElementById('book-listing');

            function displayBooks(filteredBooks) {
                bookListing.innerHTML = ''; // Clear existing books
                filteredBooks.forEach(book => {
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
            }

            // Display all books initially
            displayBooks(books);

            // Add event listener for the search button
            document.getElementById('search-button').addEventListener('click', () => {
                const searchTerm = document.getElementById('search-input').value.toLowerCase();
                const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
                displayBooks(filteredBooks);
            })
