const select=[
    ['Enseignants','Aly','Wane','Mbaye','Fall'],
    ['Salles','101','102','103','104','201','incub'],
    ['Classes','L2 GLRS A','L2 GLRS B','L2 ETSE','L1 A','IAGE B','L2 CDSD '],
    ['Modules','ALGO','PHP','PYTHON','LC','JAVASCRIPT','JAVA'],
    [" ",8+"h",9+"h",10+"h",11+"h",12+"h",13+"h",14+"h",15+"h",16+"h"],
]

const jours = document.querySelectorAll('.jour')
const cours = document.querySelectorAll('.cours')
console.log(cours);
const boxs = document.querySelectorAll('.box');
const input_select = document.getElementById('select');

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

for (let i = 0; i < jours.length; i++){
    
    jours[i].addEventListener('click',()=>{
        ajout.style.display="block"
        confirmer.addEventListener('click',()=>{
          
            
        })
    })

}

annuler.addEventListener('click',()=>{
    ajout.style.display="none"
})










