axios.get('https://api.github.com/users/thiagogmta')
    .then(function(response) {
        var foto = document.createElement('img');
        foto.setAttribute('src', response.data.avatar_url);
        document.querySelector('body').appendChild(foto);
        
        response.data.avatar_url;
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });