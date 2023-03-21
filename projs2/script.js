const select=[
    ['Enseignants','Aly','Wane','Mbaye','Fall'],
    ['Salles','101','102','103','104','201','incub'],
    ['Classes','L2 GLRS A','L2 GLRS B','L2 ETSE','L1 A','IAGE B','L2 CDSD '],
    ['Modules','ALGO','PHP','PYTHON','LC','JAVASCRIPT','JAVA'],
    [" ",8,9,10,11,12,13,14,15,16],
]

const tabObjet =[
    {
         n:"aly",
         M:"javascript",
         s:"101",
         d:8,
         f:11,
         j:"vendredi"
    },

    {
        n:"Wane",
       M:"PHP",
       s:"103",
       d:10,
        f:15,
        j:"mardi"
    },

    {
        n:"Mbaye",
       M:"java",
       s:"incub",
       d:12,
        f:14,
        j:"jeudi"
  },

  {
    n:"FALL",
   M:"python",
   s:"105",
   d:12,
    f:14,
    j:"lundi"
},

{
    n:"Aly",
   M:"Ruby",
   s:"incub",
   d:16,
    f:17,
    j:"samedi"
},
]

const color = ["red","blue","green","orange","purple","pink","yellow","brown","gray","black","#FFA500","#008000","#800080","#FFC0CB","#00FFFF","#0000FF","#FF00FF","#00FF00","#FF0000","#000000"];

const jours = document.querySelectorAll('.jour')
const cours = document.querySelectorAll('.cours')

const boxs = document.querySelectorAll('.box');
const input_select = document.getElementById('select');

const cal=document.querySelectorAll('.cal')

const Modules = document.getElementById('Modules');
selects(3,Modules)

const Salles = document.getElementById('Salle');
selects(1,Salles)

const Enseign = document.getElementById('Enseign');
selects(0,Enseign)

const H_debut = document.getElementById('H_debut');
selects(4,H_debut)

const H_fin = document.getElementById('H_fin')
selects(4,H_fin)

const ajout = document.querySelector('.ajout')
const annuler = document.querySelector('.Annuler');
const confirmer = document.querySelector('.submit');

for(let i =0;i<boxs.length;i++){
    boxs[i].addEventListener('click',()=>{
        input_select.innerHTML='';
        c = color[Math.floor(Math.random() * color.length)];
        boxs[i].style.background=`${c}`;
        for(let j=0;j<select[i].length;j++){
           const option = document.createElement('option');
           option.value = select[i][j];
           option.textContent=select[i][j];
           input_select.appendChild(option);
        }
    })
}

function selects(index,element){
    for(let i = 1;i<select[index].length;i++){
        const option = document.createElement('option');
        option.value = select[index][i];
        option.textContent = select[index][i];
    
        element.appendChild(option);
    }
}
ajout_planning()
    var nom ;
    var Modul;
    var sal;
    var h_debut ;
    var h_fin ;
    var jour;
    var objet ={   
    }


for (let i = 0; i < jours.length; i++) {
    jours[i].addEventListener('click',()=>{
        ajout.style.display="block";
        jour = cal[i].id;
    })
    
}

confirmer.addEventListener('click',()=>{
     nom = Enseign.value;
     Modul = Modules.value;
     sal = Salles.value;
     if(h_debut > h_fin || h_debut == h_fin){
        alert('erreur')
     }

     else{
        h_debut = H_debut.value;
        h_fin = H_fin.value;
    }

   objet ={
       n:nom,
       M:Modul,
       s:sal,
       d:h_debut,
       f:h_fin,
       j:jour,
   }
   tabObjet.push(objet);
   console.log(tabObjet);
   ajout.style.display="none";

ajout_planning();
  
})

annuler.addEventListener('click',()=>{
    ajout.style.display="none"
})







function ajout_planning(){
    for (let i = 0; i < cal.length; i++){
        for (let j = 0; j < tabObjet.length; j++) {
            if(tabObjet[j].j === cal[i].id){
                const plan=document.createElement('div');
                plan.className="plan";
                plan.innerHTML=`
                            <div class="nom">${tabObjet[j].n}</div>
                            <div class="mod">${tabObjet[j].M}</div>
                            <div class="sal">${tabObjet[j].s}</div>
                `
                cours[i].appendChild(plan);
                var interval = tabObjet[j].f - tabObjet[j].d;
                plan.style.width=`${interval * 6}rem`
                c = color[Math.floor(Math.random() * color.length)];
                plan.style.background=`${c}`;
                if(tabObjet[j].d==8){
                    plan.style.left=`0rem`
                }
                if(tabObjet[j].d==9){
                    plan.style.left=`6rem`
                }
                if(tabObjet[j].d==10){
                    plan.style.left=`12rem`
                }
                if(tabObjet[j].d==11){
                    plan.style.left=`18rem`
                }
                if(tabObjet[j].d==12){
                    plan.style.left=`24rem`
                }
                if(tabObjet[j].d==13){
                    plan.style.left=`30rem`
                }
                if(tabObjet[j].d==14){
                    plan.style.left=`36rem`
                }
                if(tabObjet[j].d==15){
                    plan.style.left=`42rem`
                }
                if(tabObjet[j].d==16){
                    plan.style.left=`48rem`
                }
                if(tabObjet[j].d==17){
                    plan.style.left=`54rem`
                }
            }
            
        }
        
    }
}




    











