
const jours = document.getElementById('jours')
const heures = document.getElementById('heures')
const minute = document.getElementById('minutes')
const secon = document.getElementById('secondes')



function rebours(){
const date_now = new Date().getTime();
const date_count = new Date('January 1,2024').getTime()

const date_interval = date_count -date_now 

const day = Math.floor(date_interval / (1000 * 60 * 60 * 24));
const hours = Math.floor((date_interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((date_interval % (1000 * 60 * 60)) / (1000 * 60));
const secondes = Math.floor((date_interval % (1000 * 60)) /1000)





jours.innerText = day;
heures.innerText = hours;
minute.innerText=minutes
secon.innerText = secondes
}

const le_rebours = setInterval(()=>{
    rebours();
},1000)


