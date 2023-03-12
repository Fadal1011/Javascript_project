let Affichage = document.querySelector('.affichage');
let majiscule = document.querySelector('#maj');
let minuscule = document.querySelector('#min');
let nombre = document.querySelector('#nbr');
let caractere = document.querySelector('#carac');
let button_generer = document.querySelector('.generer');
let copy = document.querySelector('.copy');
let box = document.querySelector('.box');
let close = document.querySelector('.close');
let input = document.querySelectorAll('input')
let notif = document.querySelector('.alerts')


const lettreMinuscule="abcdefghijklmnopqrstuvwxyz";
const lettreMajiscule="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nbr = "1234567890";
const carac="!@#$%&*_+=";

function CaracMin(){
        return lettreMinuscule[Math.floor(Math.random() * lettreMinuscule.length)];
}

function CaracMaj(){
        return lettreMajiscule[Math.floor(Math.random() * lettreMinuscule.length)];
}

function CaracNbr(){
    return nbr[Math.floor(Math.random() * nbr.length)];
}

function Carac(){
    return carac[Math.floor(Math.random() * nbr.length)];
}


function genererP(){
    const tab = []
    if(majiscule.checked){
        tab.push(CaracMaj());
    }
    if(minuscule.checked){
        tab.push(CaracMin());
    }
    if(nombre.checked){
        tab.push(CaracNbr())
    }
    if(caractere.checked){
        tab.push(Carac());
    }
   return tab[Math.floor(Math.random() * tab.length)];
}


function afficher_mot_de_passe(){
    let taille_password = document.querySelector('#taille_p').value;
    var mot_de_passe="";
    let i=0
    if(taille_password<3 || taille_password >20){
        alert("la longueur du password doit etre compris entre 3 et 20");
    }
    else{
        if(majiscule.checked){
            mot_de_passe+=CaracMaj()
            i++
        }
        if(minuscule.checked){
            mot_de_passe+=CaracMin()
            i++
        }
    
        if(nombre.checked){
            mot_de_passe+=CaracNbr()
            i++
        }
    
        if(caractere.checked){
            mot_de_passe+=Carac()
            i++
        }
    
        if(i>taille_password){
            alert("erreur");
        }
        else{
            for(let i =mot_de_passe.length; i<taille_password;i++){
                var x = genererP();
                mot_de_passe+=x;
            }
    
            if(mot_de_passe.length>taille_password){
                alert("vous devez selectionner au moins une case ");
            }
            else{
                Affichage.value=mot_de_passe;
            }
        }
    }
  

    
   
}

box.addEventListener('mouseover',()=>{
    if(Affichage.value == 0)
    copy.style.display="none";
    else{
        copy.style.display="block";
    }
})

box.addEventListener('mouseout',()=>{
    copy.style.display="none"
})

function disabled(){
    input.forEach((item)=>{
        item.addEventListener('change',()=>{
            button_generer.disabled=false;
        })
    })
}

copy.addEventListener('click',()=>{
    Affichage.select();
    document.execCommand('copy')
    notification('le password generer est copié avec success')
});


function notification(message){
notif.style.clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
document.querySelector('.message h1').textContent=message;
setTimeout(()=>{
    notif.style.clipPath="polygon(55% 0, 55% 0, 54% 100%, 54% 100%)";
},3000)
}



disabled();

button_generer.addEventListener('click',afficher_mot_de_passe)