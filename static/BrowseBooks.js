/*

// script.js
const books = [
    { title: "Book One", author: "Author One", description: "Description of Book One" },
    { title: "Book Two", author: "Author Two", description: "Description of Book Two" },
    { title: "Book Three", author: "Author Three", description: "Description of Book Three" },
    // Add more book objects here
];

const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

function displayBooks(filteredBooks) {
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
});

// Initial display of all books
displayBooks(books);

*/

// script.js
/*
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

async function fetchBooks(query) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    return data.docs;
}

function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>${book.first_publish_year ? 'First published in ' + book.first_publish_year : ''}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        const books = await fetchBooks(searchTerm);
        displayBooks(books);
    } else {
        bookList.innerHTML = '';
    }
});

*/

// script.js
/*
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

async function fetchBooks(query) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    return data.docs.filter(book => book.language && book.language.includes('eng'));
}

function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>${book.first_publish_year ? 'First published in ' + book.first_publish_year : ''}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        const books = await fetchBooks(searchTerm);
        displayBooks(books);
    } else {
        bookList.innerHTML = '';
    }
});
*/

// script.js
/*
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

async function fetchBooks(query) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    return data.docs.filter(book => book.language && book.language.includes('eng'));
}

function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const coverImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'default-cover.jpg';
        bookDiv.innerHTML = `
            <img src="${coverImage}" alt="${book.title} cover" class="book-cover">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>${book.first_publish_year ? 'First published in ' + book.first_publish_year : ''}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        const books = await fetchBooks(searchTerm);
        displayBooks(books);
    } else {
        bookList.innerHTML = '';
    }
});
*/

// script.js
/*
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');
const loadingSpinner = document.createElement('div');
loadingSpinner.classList.add('spinner');
document.body.appendChild(loadingSpinner);

async function fetchBooks(query) {
    loadingSpinner.style.display = 'block';
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    loadingSpinner.style.display = 'none';
    return data.docs.filter(book => book.language && book.language.includes('eng'));
}

function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const coverImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'default-cover.jpg';
        bookDiv.innerHTML = `
            <img src="${coverImage}" alt="${book.title} cover" class="book-cover">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>${book.first_publish_year ? 'First published in ' + book.first_publish_year : ''}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        const books = await fetchBooks(searchTerm);
        displayBooks(books);
    } else {
        bookList.innerHTML = '';
    }
});
*/
// script.js

const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');
const loadingSpinner = document.createElement('div');
loadingSpinner.classList.add('spinner');
document.body.appendChild(loadingSpinner);

let currentPage = 1;
let currentQuery = '';
let isLoading = false;

async function fetchBooks(query, page = 1) {
    loadingSpinner.style.display = 'block';
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`);
    const data = await response.json();
    loadingSpinner.style.display = 'none';
    return data.docs.filter(book => book.language && book.language.includes('eng'));
}

function displayBooks(books, append = false) {
    if (!append) bookList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const coverImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'default-cover.jpg';
        bookDiv.innerHTML = `
            <img src="${coverImage}" alt="${book.title} cover" class="book-cover">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>${book.first_publish_year ? 'First published in ' + book.first_publish_year : ''}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

async function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm && searchTerm !== currentQuery) {
        currentQuery = searchTerm;
        currentPage = 1;
        const books = await fetchBooks(searchTerm, currentPage);
        displayBooks(books);
    } else if (!searchTerm) {
        bookList.innerHTML = '';
    }
}

async function loadMoreBooks() {
    if (isLoading || !currentQuery) return;
    isLoading = true;
    currentPage++;
    const books = await fetchBooks(currentQuery, currentPage);
    displayBooks(books, true);
    isLoading = false;
}

searchInput.addEventListener('input', debounce(handleSearch, 300));

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreBooks();
    }
});

// script.js
/*
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');
const bookModal = document.getElementById('bookModal');
const bookDetails = document.getElementById('bookDetails');
const closeModal = document.querySelector('.close');
const loadingSpinner = document.createElement('div');
loadingSpinner.classList.add('spinner');
document.body.appendChild(loadingSpinner);

let currentPage = 1;
let currentQuery = '';
let isLoading = false;
const apiKey = 'YOUR_API_KEY'; // Replace with your Google Books API key

async function fetchBooks(query, startIndex = 0) {
    loadingSpinner.style.display = 'block';
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=10&key=${apiKey}`);
    const data = await response.json();
    loadingSpinner.style.display = 'none';
    return data.items || [];
}

function displayBooks(books, append = false) {
    if (!append) bookList.innerHTML = '';
    books.forEach(book => {
        const bookInfo = book.volumeInfo;
        const coverImage = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'default-cover.jpg';
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${coverImage}" alt="${bookInfo.title} cover" class="book-cover">
            <h2>${bookInfo.title}</h2>
            <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
            <p>${bookInfo.publishedDate ? 'Published in ' + bookInfo.publishedDate : ''}</p>
        `;
        bookDiv.addEventListener('click', () => showBookDetails(bookInfo));
        bookList.appendChild(bookDiv);
    });
}

function showBookDetails(bookInfo) {
    const coverImage = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'default-cover.jpg';
    bookDetails.innerHTML = `
        <img src="${coverImage}" alt="${bookInfo.title} cover" class="book-cover">
        <h2>${bookInfo.title}</h2>
        <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
        <p>${bookInfo.publishedDate ? 'Published in ' + bookInfo.publishedDate : ''}</p>
        <p>${bookInfo.description ? bookInfo.description : 'No description available'}</p>
        <p>${bookInfo.publisher ? 'Publisher: ' + bookInfo.publisher : ''}</p>
        <p>${bookInfo.industryIdentifiers ? 'ISBN: ' + bookInfo.industryIdentifiers.map(id => id.identifier).join(', ') : ''}</p>
    `;
    bookModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    bookModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == bookModal) {
        bookModal.style.display = 'none';
    }
});

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

async function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm && searchTerm !== currentQuery) {
        currentQuery = searchTerm;
        currentPage = 1;
        const books = await fetchBooks(searchTerm);
        displayBooks(books);
    } else if (!searchTerm) {
        bookList.innerHTML = '';
    }
}

async function loadMoreBooks() {
    if (isLoading || !currentQuery) return;
    isLoading = true;
    currentPage++;
    const books = await fetchBooks(currentQuery, currentPage * 10);
    displayBooks(books, true);
    isLoading = false;
}

searchInput.addEventListener('input', debounce(handleSearch, 300));

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreBooks();
    }
});
*/