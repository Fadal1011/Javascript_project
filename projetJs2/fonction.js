function getDataById (id,data)
{

    return data.find((p)=>p.id == id)
}





function chargerSelect (data,select,label='Selectionner'){
    select.innerHTML = '';
    const option = creatingElement('option');
    option.innerHTML = label;
    select.appendChild(option);
    for (let i = 0; i < data.length; i++) {
        const option = creatingElement('option');
         option.innerHTML = data[i].nom;
        select.appendChild(option);  
    }
}



function creatingElement(elName)
{
    return document.createElement(elName);
}




function selectProf2(){
    for (let i = 0; i < modules.length; i++){
    
        Module.addEventListener('input',()=>{
            if(Module.value == modules[i].nom){
                mo.splice(0,mo.length);
                for (let j = 0; j < modules[i].Enseign.length; j++){
                   mo.push(getDataById(modules[i].Enseign[j],Enseign)); 
                }
            }
            chargerSelect(mo,Enseignant)
        })
        
    }
   
}


function selectProf3(){
    for (let i = 0; i < modules.length; i++){
    
        select.addEventListener('input',()=>{
            if(select.value == modules[i].nom){
                mo.splice(0,mo.length);
                for (let j = 0; j < modules[i].Enseign.length; j++){
                   mo.push(getDataById(modules[i].Enseign[j],Enseign)); 
                }
            }
            chargerSelect(mo,Enseignant)
        })
        
    }
   
}

function selectProf4(){
    for (let i = 0; i < Enseign.length; i++){
    
        select.addEventListener('input',()=>{
            if(select.value == Enseign[i].nom){
                mo.splice(0,mo.length);
                for (let j = 0; j < Enseign[i].modules.length; j++){
                   mo.push(getDataById(Enseign[i].modules[j],modules)); 
                }
            }
            chargerSelect(mo,Module)
        })
        
    }
   
}



function selectProf(){
    for (let i = 0; i < Enseign.length; i++){
    
        Enseignant.addEventListener('input',()=>{
            if(Enseignant.value == Enseign[i].nom){
                mo.splice(0,mo.length);
                for (let j = 0; j < Enseign[i].modules.length; j++){
                   mo.push(getDataById(Enseign[i].modules[j],modules)); 
                }
            }
            chargerSelect(mo,Module)
        })
        
    }
   
}


function ajout_planning(){
    for (let i = 0; i < cal.length; i++) {
      for (let j = 0; j < plannings.length; j++) {
        if(plannings[j].j == cal[i].id){
            const plan=document.createElement('div');
            plan.className="plan";
            plan.innerHTML=`
                        <div class="nom">${plannings[j].n}</div>
                        <div class="mod">${plannings[j].M}</div>
                        <div class="sal">${plannings[j].s}</div>
            `
            cours[i].appendChild(plan);
            // var interval = plannings[j].f - plannings[j].d ;
            plan.style.width=`${plannings[j].f * 10}%`
            c = color[Math.floor(Math.random() * color.length)];
                plan.style.background=`${c}`;

            if(plannings[j].d == 8){
                plan.style.left="0%"
            }
            if(plannings[j].d == 9){
                plan.style.left="10%"
            }
            if(plannings[j].d == 10){
                plan.style.left="20%"
            }
            if(plannings[j].d == 11){
                plan.style.left="30%"
            }
            if(plannings[j].d == 12){
                plan.style.left="40%"
            }
            if(plannings[j].d == 13){
                plan.style.left="50%"
            }
            if(plannings[j].d == 14){
                plan.style.left="60%"
            }
            if(plannings[j].d == 15){
                plan.style.left="70%"
            }
            if(plannings[j].d == 16){
                plan.style.left="80%"
            }
        }
      }
        
    }
}

function getDataById (id,data)
{

    return data.find((p)=>p.id == id)
}


function rechercher(plannings,objet){
    return plannings.find(planning => planning.j === objet.j && planning.d == objet.d);
}



function inter(){
    for (let i = 0; i < plannings.length; i++){
        if(plannings[i].fini > objet.d && plannings[i].d < objet.d && plannings[i].j == objet.j || objet.d < plannings[i].d && plannings[i].d < objet.fini){
            return false
        } 
        else{
            return true
        }
    }
}



























// selectProf()




// chargerSelect(Enseign,Enseignant);
// function selectProf(){
//     for (let i = 0; i < Enseign.length; i++){
//         Enseignant.addEventListener('input',()=>{
//             if(Enseignant.value == Enseign[i].nom){
//                 for (let j = 0; j < Enseign[i].modules.length; j++){
//                    console.log(getDataById(Enseign[i].modules[j],modules)); 
//                    mo.push(getDataById(Enseign[i].modules[j],modules)); 
//                 }
//             }
           
//         })
        
//     }
   
// }