fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
.then(response=>response.json())
.then(data=>
    {
        let {results}=data
        console.log(results[0]);
    })
.catch(error => console.log(error));

