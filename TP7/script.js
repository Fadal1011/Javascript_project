// fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")

const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const container = document.querySelector('.container');

const form = document.getElementById('form');
const search = document.getElementById('search');


getMovie(APIURL);

function getMovie(url){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        console.log(data.results)
        affiche_film(data.results)
    })
}


function affiche_film(data){
    data.forEach(movie=>{
        const {title,poster_path,vote_average,overview}=movie
        const cart = document.createElement('div');
        cart.className="cart"

        cart.innerHTML=`
        <div class="cart">
        <div class="image">
            <img src="${IMGPATH+poster_path}" alt="${title}">
        </div>
        <div class="content">
            <div class="title">
                ${title}
            </div>
            <div class="vote">
                <span>${vote_average}</span>
            </div>
        </div>
        <div class="overflow">
            <h2>overflow:</h2>
            <p>
            ${overview}
            </p>
        </div>
    </div>
        ` 

    container.appendChild(cart);
    })
}




form.addEventListener('input',()=>{
    container.innerHTML=""
    const mot=search.value
    console.log(mot);
    if(mot){
        getMovie(SEARCHAPI+mot);
    }
    if(mot.length==0){
        getMovie(APIURL);
    }

    // if(container.innerHTML==""){
    //     console.log('aucun resultat');
    // }
})


























// .then(response=>response.json())
// .then(data=>
//     {
//         let {results}=data
//         console.log(results[0]);
//     })
// .catch(error => console.log(error));

