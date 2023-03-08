let affichage = document.querySelector('.affichage');
let minuscule = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let majiscule = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numero = [1,2,3,4,5,6,7,8,9,0];
let cara =["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];
let gen = document.querySelector('.generer');
let input = document.querySelectorAll('input');
console.dir(input);
gen.disabled=true;

function disabled(){
    input.forEach((item)=>{
        item.addEventListener('change',()=>{
            gen.disabled=false;
        })
    })
}

gen.addEventListener('click',generer);


function generer(){

    let tab_f = [].concat(
    maj.checked ? majiscule : [], 
    min.checked ? minuscule : [],
    nbr.checked ? numero : [],
    carac.checked ? cara : []);

     let taille_password = parseInt(document.getElementById('taille_p').value);
     let mot_de_passe = '';

     if(taille_password<15 || taille_password>20){
        alert("le nombre doit etre compris entre 15 et 20");
     }


else{

    for(i =0;i<taille_password;i++){
        mot_de_passe+= tab_f[Math.floor(Math.random() * tab_f.length)]
    }

    if(mot_de_passe.length==taille_password){
        affichage.value=mot_de_passe;
    }
    else{
        alert("vous devez choisir au moins un caractere")
    }
}
}


disabled();






