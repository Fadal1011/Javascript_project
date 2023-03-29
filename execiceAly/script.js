const users =[
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



var numero =16
var sens;
var montant;

var newTran={}
var index_user;


suivant.addEventListener('click',()=>{
 let user = users[Math.floor(Math.random() * users.length)];
 lastname.innerText = user.Nom;
 firstname.innerText =user.Prenom;
 phone.innerText = user.Tel;
 email.innerText = user.Email;
 profil.src = `${user.Profil}`;
 nb_transaction.innerText = user.transaction.length;

 index_user = users.indexOf(user)


 tbody.innerHTML='';


affichage_trans(user.transaction);
})


ajout.addEventListener('click',()=>{
    form.style.zIndex="-999999999999999999999999999"
    form.style.transition=".3s linear"
    form.classList.toggle('show')
})



btn_enreg.addEventListener('click',()=>{
    var date = "10-12_2022"
    if (trans.value=="r") {
        sens = "-1"
    }
    else if(trans.value=="d"){
        sens = "1"
    }

    if((+montant_ajout.value) < 500){
        alert('le montant de depot ou de retrait doit etre superieur a 500 fcfa')
    }
    else if((+montant_ajout.value) > users[index_user].Solde && trans.value==="r"){
        alert("votre solde n'est pas suffisant")
    }
   else{
    montant = montant_ajout.value;
    newTran = {
        id:16,
        Date:date,
        Sens:sens,
        Montant:montant
    };
    users[index_user].transaction.push(newTran);
    // users[index_user].Solde -= newTran.Montant;
    // console.log("solde actuel:"+users[index_user].Solde)
   }

   
   
    tbody.innerHTML=''
    affichage_trans(users[index_user].transaction);
})


function affichage_trans(tab){
    for (let i = 0; i < tab.length; i++) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const td_number = document.createElement('td');
        const td_Date = document.createElement('td');
        const td_sens = document.createElement('td');
        const td_montant = document.createElement('td');
        
        td_number.innerText = tab[i].id;
        td_Date.innerText = tab[i].Date;
        td_sens.innerText =tab[i].Sens;
        td_montant.innerText = tab[i].Montant;
    
        tr.appendChild(td_number);
        tr.appendChild(td_Date);
        tr.appendChild(td_sens);
        tr.appendChild(td_montant);
    
     }
}




