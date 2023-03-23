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

    {id:1,nom:"101",effectif:30},
    {id:2,nom:"102",effectif:20},
    {id:3,nom:"103",effectif:12},
    {id:4,nom:"lc",effectif:15}
]

const classes =[
    {id:1,nom:"dev",effectif:30},
    {id:2,nom:"data",effectif:15},
    {id:3,nom:"ref",effectif:20},
    {id:4,nom:"hack",effectif:10}
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


const plannings =[]


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
const classe = document.getElementById('classe');
const debut = document.getElementById('debut');
const fin = document.getElementById('fin');
const cours = document.querySelectorAll('.cours');
const titleCours = document.querySelector('.header .title span');

select.addEventListener('input',()=>{
    titleCours.textContent = select.value;
})

var nom ;
var Modul;
var sal;
var h_debut;
var duree;
var jour;
var objet ={}
var mo=[];


select.addEventListener

for (let i = 0; i < boxs.length; i++){
    boxs[i].addEventListener('click',()=>{
        if(boxs[i].id=='modules'){
            chargerSelect(modules,select,'Selectionner un modules');
            identifiant = boxs[i].id;
            document.querySelector('.box4').style.display="none"
            document.querySelector('.box1,.box2').style.display="flex"
            document.querySelector('.box3').style.display="flex"
            console.log(identifiant)
        }
        if(boxs[i].id=='Enseign'){
            identifiant = boxs[i].id;
            chargerSelect(Enseign,select,'Selectionner un Enseign');
            document.querySelector('.box1').style.display="none"
            document.querySelector('.box2,.box3').style.display="flex"
            document.querySelector('.box4').style.display="flex"
            console.log(identifiant)
        }
        if(boxs[i].id=='classes'){
            identifiant = boxs[i].id;
            chargerSelect(classes,select,'Selectionner un classes');
            document.querySelector('.box3').style.display="none"
            document.querySelector('.box1').style.display="flex"
            document.querySelector('.box2').style.display="flex"
            document.querySelector('.box4').style.display="flex"
            console.log(identifiant)
        }
        if(boxs[i].id=='salles'){
            identifiant = boxs[i].id;
            chargerSelect(salles,select,'Selectionner un salles');
            document.querySelector('.box2').style.display="none"
            document.querySelector('.box1').style.display="flex"
            document.querySelector('.box3').style.display="flex"
            document.querySelector('.box4').style.display="flex"
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

chargerSelect(classes,classe);
chargerSelect(salles,salle);
chargerSelect(heures,debut)
chargerSelect(dur,fin)





confirme.addEventListener('click',()=>{
     nom = Enseignant.value;
     Modul = Module.value;

     if (document.querySelector('.box2').style.display === "none"){
        sal = select.value;
     } 
     else {
        sal = salle.value;
     }

     if (document.querySelector('.box3').style.display === "none") {
        classeValue = select.value
     } else {
        classeValue = classe.value;
     }
     

     h_debut = (+debut.value);
     duree = (+fin.value);
     j=jour;

     var inst = h_debut + duree;

        objet ={
            n:nom,
            M:Modul,
            s:sal,
            d:h_debut,
            c:classeValue,
            f:duree,
            j:jour,
            fini:inst
        }
     console.log(objet);

        const day= rechercher(plannings,objet);
        if(day){
            alert('il existe deja!!')
        }
        else if(objet.d==14 && objet.f==4 || objet.d==15 && objet.f==3 || objet.d==16 && objet.f==2 || objet.d==17){
          alert("impossible les cours s'arretent a 17h");
        }
        else if(objet.n==="Selectionner" || objet.M==="Selectionner" || objet.s==="Selectionner" || objet.f==="Selectionner"){
            alert('vous devez remplir les select')
        }

        else if(inter()== false){
            alert("false");
        }
       
        else{
            plannings.push(objet);
            ajout.style.display="none";
            ajout_planning();
        }

})













