// fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")


const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const form = document.getElementById('form');
const search = document.getElementById('search');
let i =1;
const APIURL =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=`;
const loading =document.querySelector('.chargement');



const container = document.querySelector('.container');

setTimeout(() => {
    chargement();
},5000);

getMovie(APIURL+i+1);
window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement

    if(scrollTop + clientHeight == scrollHeight){
         setTimeout(() => {
            getMovie(APIURL + i++);
         },2000);
    }
})



async function getMovie(url){
   await fetch(url)
    .then(async res =>await res.json())
    .then(data=>{
        affiche_film(data.results)
    })
}


function affiche_film(data){
    data.forEach(movie=>{const {title,poster_path,vote_average,overview}=movie
        const cart = document.createElement('div');
        cart.className="cart"

        cart.innerHTML=`
        <div class="cart">
        <div class="image">
            <img src="${IMGPATH+poster_path}" alt="${title}" onerror="this.src='no_image.png'">
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
        console.log(SEARCHAPI+mot)
    }
    if(mot.length==0){
        getMovie(APIURL);
    }
})


function load(){
    const loading = document.createElement('div');
    loading.className="loading";
    container.appendChild(loading);
}

        window.onload=function(){
            
        }

        function chargement(){
            document.body.style.overflowY="visible"
            loading.style.opacity="0"
            setTimeout(() => {
                 loading.style.display="none"
            }, 1000);
        }

        




