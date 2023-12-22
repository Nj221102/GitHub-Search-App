function search() {
    const searchInput = document.getElementById('input');
    const UserList = document.getElementById('UserList');
    const searchTerm = searchInput.value;
    
    UserList.innerHTML = '';
    if (searchTerm.trim() !== '') {
        const API_URL = 'https://api.github.com/search/users?';



        fetch(`${API_URL}q=${searchTerm}`)
            .then(items => items.json())
            .then(data => {

                if (data.items && data.items.length > 0) {
                    data.items.forEach(user => {
                        const userDIV = document.createElement('div');
                        userDIV.className = 'user-DIV';
                        userDIV.innerHTML = `<img src="${user.avatar_url}"><br><a href="${user.html_url}">${user.login}</a> <hr>`;
                        UserList.appendChild(userDIV);
                    });
                } else {

                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = 'No user found for the given name.';
                    UserList.appendChild(errorMessage);
                }
            })
            .catch(error => console.error('Error :', error));
    }
}