const Enseign=[
    {id:1,nom:"aly",modules:[1,2,3]},
    {id:2,nom:"wane",modules:[4,2]},
    {id:3,nom:"fall",modules:[3]},
    {id:4,nom:"mbaye",modules:[2,3]}
]

const modules=[

    {id:1,nom:"algo"},
    {id:2,nom:"jascript"},
    {id:3,nom:"php"},
    {id:4,nom:"python"}
]

const salles=[

    {id:1,nom:"101"},
    {id:2,nom:"102"},
    {id:3,nom:"103"},
    {id:4,nom:"lc"}
]

const classes =[
    {id:1,nom:"dev"},
    {id:2,nom:"data"},
    {id:3,nom:"ref"},
    {id:4,nom:"hack"}
]

const heures=[
    {id:1,nom:8},
    {id:2,nom:9},
    {id:3,nom:10},
    {id:4,nom:11},
    {id:5,nom:12},
    {id:6,nom:13},
    {id:7,nom:14},
    {id:8,nom:15},
    {id:9,nom:16},
    {id:10,nom:17},
]

const dur=[
    {id:1,nom:2},
    {id:2,nom:3},
    {id:3,nom:4},
]


const plannings =[
//     {
//          n:"aly",
//          M:"javascript",
//          s:"101",
//          d:13,
//          f:16,
//          j:"lundi"
//     },
//     {
//         n:"wane",
//         M:"php",
//         s:"101",
//         d:8,
//         f:13,
//         j:"mercredi"
//    },
]


const boxs = document.querySelectorAll('.box');
const select = document.getElementById('select');
const ajout = document.querySelector('.ajout');
const confirme = document.querySelector('.submit');
const annuler = document.querySelector('.Annuler');
const cal = document.querySelectorAll('.cal');
const jours = document.querySelectorAll('.jour');
const Module = document.getElementById('Modules')
const Enseignant = document.getElementById('enseign');
const salle = document.getElementById('Salle');
const debut = document.getElementById('debut');
const fin = document.getElementById('fin');
const cours = document.querySelectorAll('.cours')



var nom ;
var Modul;
var sal;
var h_debut ;

var duree;
var jour;

var objet ={   
}

var mo=[];




for (let i = 0; i < boxs.length; i++){
    boxs[i].addEventListener('click',()=>{
        if(boxs[i].id=='modules'){
            chargerSelect(modules,select,'Selectionner un modules');
        }
        if(boxs[i].id=='Enseign'){
            chargerSelect(Enseign,select,'Selectionner un Enseign');
        }
        if(boxs[i].id=='classes'){
            chargerSelect(classes,select,'Selectionner un classes');
        }
        if(boxs[i].id=='salles'){
            chargerSelect(salles,select,'Selectionner un salles');
        }
    })
    
}



for (let i = 0; i < jours.length; i++) {
   jours[i].addEventListener('click',()=>{
    ajout.style.display="block";
    jour = cal[i].id;
   })  
}



annuler.addEventListener('click',()=>{
    ajout.style.display="none";
})




chargerSelect(Enseign,Enseignant);

selectProf()

chargerSelect(salles,salle);
chargerSelect(heures,debut)
chargerSelect(dur,fin)





confirme.addEventListener('click',()=>{
     nom = Enseignant.value;
     Modul = Module.value;
     sal = salle.value;
     h_debut = debut.value;
     duree = fin.value;
     console.log(duree);
     console.log(h_debut);
     j=jour;

        objet ={
            n:nom,
            M:Modul,
            s:sal,
            d:h_debut,
            f:duree,
            j:jour,
        }

        const day= rechercher(plannings,objet);
        if(day){
            alert('il existe deja!!')
        }
        if(objet.d==14 && objet.f==4 || objet.d==15 && objet.f==3 || objet.d==16 && objet.f==2 || objet.d==17){
          alert("impossible les cours s'arretent a 17h");
        }
        if(objet.n==="Selectionner" || objet.M==="Selectionner" || objet.s==="Selectionner" || objet.f==="Selectionner"){
            alert('vous devez remplir les select')
        }
        else{
            plannings.push(objet);
            ajout.style.display="none";
            ajout_planning();
        }


      
  
})








