const users =[
    {
        Profil:'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1600',
        Nom:'Sall',
        Prenom:'Fatou',
        Tel :'705675546',
        Email:'Fatou@gmail.com',
        Solde:16510,
        transaction:[
            {
                id:8,
                Date:"10-01-2023",
                Sens:1,
                Montant:12000
            },
            {
                id:9,
                Date:"10-01-2023",
                Sens:-1,
                Montant:15000
            },
        ],
    },
    {
        Profil:'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        Nom:'Niang',
        Prenom:'Sidy',
        Tel :'771234567',
        Email:'sidy@gmail.com',
        Solde:23000,
        transaction:[
            {
                id:10,
                Date:"10-01-2022",
                Sens:1,
                Montant:12000
            },
            {
                id:11,
                Date:"10-01-2022",
                Sens:-1,
                Montant:15000
            },
            {
                id:12,
                Date:"10-01-2022",
                Sens:-1,
                Montant:10000
            },
            {
                id:13,
                Date:"10-01-2022",
                Sens:1,
                Montant:17000
            },
            {
                id:14,
                Date:"10-01-2022",
                Sens:-1,
                Montant:12000
            },
            {
                id:15,
                Date:"10-01-2022",
                Sens:1,
                Montant:19000
            },

        ],
    },
    {
        Profil:'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        Nom:'Ba',
        Prenom:'Kadiata',
        Tel :'758905478',
        Email:'kadia@gmail.com',
        Solde:31700,
        transaction:[
            {
                id:1,
                Date:"10-01-2022",
                Sens:1,
                Montant:12000
            },
            {
                id:2,
                Date:"10-01-2022",
                Sens:-1,
                Montant:15000
            },
            {
                id:3,
                Date:"10-01-2022",
                Sens:-1,
                Montant:10000
            },
            {
                id:4,
                Date:"10-01-2022",
                Sens:1,
                Montant:17000
            },
        ],
    },
    {
        Profil:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
        Nom:'Diop',
        Prenom:'Oumar',
        Tel :'772246189',
        Email:'sidy@gmail.com',
        Solde:4500,
        transaction:[
            {
                id:5,
                Date:"10-01-2022",
                Sens:1,
                Montant:12000
            },
            {
                id:6,
                Date:"10-01-2022",
                Sens:-1,
                Montant:15000
            },
            {
                id:7,
                Date:"10-01-2022",
                Sens:-1,
                Montant:10000
            },
        ],
    }
]




const suivant = document.querySelector('.next');
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const profil = document.querySelector('.photo img');
const tbody = document.querySelector('tbody');
const nb_transaction = document.querySelector('code');
const form = document.querySelector('.form');
const ajout = document.getElementById('btnDetail');
const montant_ajout = document.getElementById('mnt');
const trans = document.getElementById('trans')
const btn_enreg = document.querySelector('.form button');
const info  = document.querySelector('.info ');
const sender = document.getElementById('numero')
const genererNum = document.querySelector('.genererNum');

const solde = document.createElement('div');
solde.className="solde";
info.appendChild(solde);

solde.innerHTML=`
                <h3>solde actuelle: <span>...</span> Fcfa</h3>
`
solde.style.textAlign='center',
solde.style.background='white',
solde.style.color='black'
const montant_solde = document.querySelector('.solde h3 span');

const new_users_nom = document.getElementById("Nom");
const new_users_prenom = document.getElementById("Prenom");
const new_users_email = document.getElementById('Email');
const new_users_tel = document.getElementById('telephone'); 
const new_users_photo = document.getElementById('photo')
const new_user_ajout = document.getElementById('ajouter_users');
const modal = document.querySelector('.modal_Ajout')
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('close');

openModal.addEventListener('click',()=>{
    modal.style.display="flex"
})

closeModal.addEventListener('click',()=>{
    modal.style.display="none"
})


let new_users={}
const pattern=/^[0-9]+$/

new_user_ajout.addEventListener('click',()=>{
new_users={
    Profil:new_users_photo.value,
    Nom:new_users_nom.value,
    Prenom:new_users_prenom.value,
    Tel :new_users_tel.value,
    Email:new_users_email.value,
    Solde:0,
    transaction:[]
}

if(confirmUsers(users,new_users)==false){
    notif("numero ou email deja utiliser");
}
else if(new_users.Profil=='' || new_users.Nom =='' || new_users.Prenom=='' || new_users.Tel=='' || new_users.Email==''){
    notif('vous devez remplir tous le formulaire')
}

else if(validateEmail(new_users.Email)==false){
        notif('mail invalide')
}


else if(new_users.Tel.length != 9){
    notif('ce nemero ne peux pas etre accepter');
}
else if(isValide()==false){
    notif('numero invalide');
}
else if(pattern.test(new_users.Tel) == false){
    notif('le numero contient des caracteres');
}
else{
    users.push(new_users);
    modal.style.display="none"
}
})


var numero =0
var sens;
var montant;

var newTran={}
var index_user;


if (navigator.onLine) {
    loadPage(); 
}
window.addEventListener('online',()=>{
    loadPage();
});



suivant.addEventListener('click',()=>{
 loadPage();

})


ajout.addEventListener('click',()=>{ 
   show();
})



btn_enreg.addEventListener('click',()=>{
    var jour =new Date().getDate();
    var mois = new Date().getMonth();
    var annee =new Date().getFullYear();
    
    if (trans.value=="r") {
        sens = "-1"
    }
    else if(trans.value=="d"){
        sens = "1"
    }
    



   if(no_envoie()==false){
    return false
   }
   else if(sender.value === users[index_user].Tel){
    notif("on peut pas envoyer de numero sur ce numero actuellement");
    return false;
}
  
   else{
    montant = montant_ajout.value;
    numero = numero + 1
    newTran = {
        id:numero,
        Date:`${jour}-${mois+1}-${annee}`,
        Sens:sens,
        Montant:montant
    };
    
    if(trans.value=="r"){
        users[index_user].Solde -= newTran.Montant;
        montant_solde.innerText=users[index_user].Solde ;
    }
   if(trans.value=="d" && sender.value.length==0){
        users[index_user].Solde += (+newTran.Montant);
        montant_solde.innerText=users[index_user].Solde ;
    }
    if(trans.value=="d" && sender.value.length!=0){
        users[index_user].Solde -= (+newTran.Montant)
        montant_solde.innerText=users[index_user].Solde ;
        newTran.Sens='2';
    }
    
    if(trans.value=="d" && sender.value.length!=0){
    for (let i = 0; i < users.length; i++) {
        if(users[i].Tel ==sender.value){
             users[i].Solde += (+newTran.Montant);
             users[i].transaction.push(newTran);
        }
         
     }
    }
    users[index_user].transaction.push(newTran);
    nb_transaction.innerText = users[index_user].transaction.length;
   }

    tbody.innerHTML=''
    affichage_trans(users[index_user].transaction);
    sender.value='';
    montant_ajout.value=''

})

document.body.addEventListener('click',()=>{
    genererNum.style.display="none";
})

sender.addEventListener('input',()=>{
    let taille = sender.value.length;
    genererNum.innerHTML='';
    if(sender.value.length > 2){
        genererNum.style.display="block";
        let search= users.filter(function(user){
            let userR=user.Tel.substr(0,taille)
                 if(sender.value == userR){
                     return true;
                 }
        })
        for (let i = 0; i < search.length; i++){
           const r = document.createElement('p');
           r.innerHTML=`${search[i].Prenom}: <span>${search[i].Tel}</span>`
           genererNum.appendChild(r)
        }

        const p_num = document.querySelectorAll('.genererNum p span')
        
        p_num.forEach(element => {
            element.addEventListener('click',()=>{
                sender.value=element.innerText;
                genererNum.style.display="none";
            })
        });
    }
    else{
        genererNum.style.display="none";
    } 
})



const searchUsers = document.querySelector('.searchUsers');
const search = document.getElementById('search');


search.addEventListener('click',()=>{
    for (let i = 0; i < users.length; i++) {
        if (searchUsers.value === users[i].Tel) {
           affichage_user(users[i]);
        }
        
    }
})


const loading = document.querySelector('.loading');
window.addEventListener('offline',()=>{
loading.style.display="flex"
})

window.addEventListener('online',()=>{
    loading.style.display="none"
})

const suggestions = document.querySelector('.suggestions');

searchUsers.addEventListener('input',()=>{
    suggestions.style.display='block';
    if (searchUsers.value=='') {
        suggestions.style.display='none';
    }
    suggestions.innerHTML=''
   let recherche = users.filter(function(user){
    if (user.Tel.includes(searchUsers.value)) {
        return true
    }
   })
   for (let i = 0; i < recherche.length; i++) {
    const suggestion = document.createElement('p');
    suggestion .innerHTML = `${recherche[i].Prenom}: <span>${recherche[i].Tel}</span>`
    suggestions.appendChild(suggestion)
   }

   const p = document.querySelectorAll('.suggestions p span');
   p.forEach(element => {
    element.addEventListener('click',()=>{
        searchUsers.value=element.innerText;
        suggestions.style.display='none';
    })
   });
})



















 