var affichage = document.querySelector('.affichage');
const minuscule = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const majiscule = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numero = [1,2,3,4,5,6,7,8,9,0];
const cara =["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];
var gen = document.querySelector('.generer');
var input = document.querySelectorAll('input');
var copy = document.querySelector('.copy');
var box = document.querySelector('.box');
var notif = document.querySelector('.alerts');
var close = document.querySelector('.close');

// var styleSheets =document.styleSheets[0];

// var keyframes = ""


box.addEventListener('mouseover',()=>{
    if(affichage.value == 0)
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
            gen.disabled=false;
        })
    })
}

gen.addEventListener('click',()=>{

    // var tab_f = [].concat(
    //     maj.checked ? majiscule : [], 
    //     min.checked ? minuscule : [],
    //     nbr.checked ? numero : [],
    //     carac.checked ? cara : []);

 function genererpass(){
    var tab_f=[];

    if (maj.checked) {
        tab_f.push(majiscule[Math.floor(Math.random() * majiscule.length)]);
    }
    if (min.checked) {
        tab_f.push(minuscule[Math.floor(Math.random() * minuscule.length)]);
    }
    if (nbr.checked) {
        tab_f.push(numero[Math.floor(Math.random() * numero.length)]);
    }
    if (carac.checked) {
        tab_f.push(cara[Math.floor(Math.random() * cara.length)]);
    }

    return tab_f[Math.floor(Math.random) * tab_f.length];
 }

    
         var taille_password =(document.getElementById('taille_p').value);
         var mot_de_passe = '';
    
         if(taille_password<15 || taille_password>20){
            notification("le nombre de ligne doit etre compris entre 15 et 20");
         }
    
    
    else{
    
        for(i =0;i<taille_password;i++){
            mot_de_passe+= genererpass();
        }

        console.log(mot_de_passe);

        
    
        if(mot_de_passe.length==taille_password){
            affichage.value=mot_de_passe;
        }
        else{
            notification("vous devez cocher au moins une case et remplir la longueur du password");
        }
    }
});
copy.addEventListener('click',()=>{
        affichage.select();
        document.execCommand('copy')
        notification('le password generer est copié avec success')
});


function notification(message){
    // notif.style.top="0"

    notif.style.clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    document.querySelector('.message h1').textContent=message;
}


close.addEventListener('click',()=>{
     notif.style.clipPath="polygon(55% 0, 55% 0, 54% 100%, 54% 100%)";
})

disabled();






