# GitHub User Search App

This web application allows users to search for GitHub users using the GitHub API. The search results are dynamically displayed on the web page, showing user information such as avatar, username, and a link to their GitHub profile.

## Getting Started

To get started with this app, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Open the `index.html` file in your preferred web browser.

3. Enter a GitHub username in the search input field and press Enter.

## How It Works

The app is built using HTML, CSS, and JavaScript. The main function responsible for fetching and displaying GitHub user information is the `search` function in the `script.js` file.

```javascript
// Include the relevant HTML and CSS elements in your index.html file.

// Add the script.js file to your HTML file.

function search() {
    // Get the necessary DOM elements.
    const searchInput = document.getElementById('input');
    const UserList = document.getElementById('UserList');
    const searchTerm = searchInput.value;

    // Clear the previous search results.
    UserList.innerHTML = '';

    // Check if the search term is not empty.
    if (searchTerm.trim() !== '') {
        const API_URL = 'https://api.github.com/search/users?';

        // Fetch data from the GitHub API.
        fetch(`${API_URL}q=${searchTerm}`)
            .then(items => items.json())
            .then(data => {
                // Process the API response and display results.
                if (data.items && data.items.length > 0) {
                    data.items.forEach(user => {
                        const userDIV = document.createElement('div');
                        userDIV.className = 'user-DIV';
                        userDIV.innerHTML = `<img src="${user.avatar_url}"><br><a href="${user.html_url}">${user.login}</a> <hr>`;
                        UserList.appendChild(userDIV);
                    });
                } else {
                    // Display an error message if no users are found.
                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = 'No user found for the given name.';
                    UserList.appendChild(errorMessage);
                }
            })
            .catch(error => console.error('Error :', error));
    }
}
