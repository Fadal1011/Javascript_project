
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
            // else if(tab[i].Sens=='0'){
            //     td_sens.innerText ="recois";
            // }
            else if(tab[i].Sens=='2'){
                td_sens.innerText ="transferer";
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




    function confirmUsers(tab,new_user){
        for (let i = 0; i < tab.length; i++){
            if(tab[i].Tel===new_user.Tel || tab[i].Email === new_user.Email){
                return false;
            }
            
        }
        return true
    }


    function isValide(){
        if(new_users.Tel.substr(0,2) === "77" || new_users.Tel.substr(0,2) == "76" || new_users.Tel.substr(0,2) == "75" || new_users.Tel.substr(0,2) == "70"){
            return true
        }
        return false;
    }


    function notif(message){
        const notication_message = document.querySelector('.notification h1');
        const notication= document.querySelector('.notification');
        notication.style.display="block";
        notication_message.innerText=message;
    
        setTimeout(()=>{
            notication.style.display="none";
        },3000)
    }
    

    function validateEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    function no_envoie(){
        if((+montant_ajout.value) > users[index_user].Solde && trans.value==="r"){
            notif("votre solde n'est pas suffisant")
            return false;
        }
       
        else if(trans.value ==='d' && sender.value!=''){
            if(sende(sender.value) == false){
                notif("ce numero ne figure pas sur la liste des clients")
                return false;
            }
        }
        else if(sender.value === users[index_user].Tel){
            notif("on peut pas envoyer de numero sur ce numero actuellement");
            return false;
        }
    
       else if((+montant_ajout.value) < 500){
            notif('le montant de depot ou de retrait doit etre superieur a 500 fcfa')
            return false;
        }
    
        return true;
    }
    