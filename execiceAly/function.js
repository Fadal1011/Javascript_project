function show() {
    form.style.transition=".3s linear"
    form.classList.toggle('show')
 }


    function loadPage(){
        let user = users[Math.floor(Math.random() * users.length)];
        affichage_user(user);
    }


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
            if(tab[i].Sens==1){
                td_sens.innerText ="depot";
            }
            else if(tab[i].Sens==-1){
                td_sens.innerText ="retrait";
            }
            td_montant.innerText = tab[i].Montant;
        
            tr.appendChild(td_number);
            tr.appendChild(td_Date);
            tr.appendChild(td_sens);
            tr.appendChild(td_montant);
    
            if(td_sens.innerText == "depot"){
                td_sens.style.color ="green"
            }
            if(td_sens.innerText == "retrait"){
                td_sens.style.color ="red"
            }
           
        
         }
    }


    function sende(numero){
        for (let i = 0; i < users.length; i++) {
           if (users[i].Tel===numero) {
            console.log(numero.length)
            return true
           }
            
        }
        return false
    }


    function affichage_user(user){
        lastname.innerText = user.Nom;
        firstname.innerText =user.Prenom;
        phone.innerText = user.Tel;
        email.innerText = user.Email;
        montant_solde.innerText=user.Solde;
        profil.src = `${user.Profil}`;
        nb_transaction.innerText = user.transaction.length;

        index_user = users.indexOf(user)
   
        tbody.innerHTML='';
       
       affichage_trans(user.transaction);
    }