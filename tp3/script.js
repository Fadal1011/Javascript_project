let succees = document.querySelector('.success');
let danger = document.querySelector('.danger');
let warning = document.querySelector('.warning');
let info = document.querySelector('.info');
let no = document.querySelector('.notification')
let text = "projet4";


function notification(color){
    const notif = document.createElement('div');
    notif.textContent = text;
    if(color==='succees'){
        notif.classList.add('notification_success')
    }
    else if(color==='danger'){
        notif.classList.add('notification_danger')
    }

    else if(color === 'warning'){
        notif.classList.add('notification_warning')
    }
    else if(color === 'info'){
        notif.classList.add('notification_info')
    }

    no.appendChild(notif);
    setTimeout(()=>{
        no.removeChild(notif)
    },2000);
}


succees.addEventListener('click',()=>{
    notification('succees');
})

danger.addEventListener('click',()=>{
    notification('danger');
})

warning.addEventListener('click',()=>{
    notification('warning');
})

info.addEventListener('click',()=>{
    notification('info');
})
