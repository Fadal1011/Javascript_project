// function Add_component(){

// }
let body = document.body;

let newContainer = document.createElement('div');
newContainer.className='container';
body.appendChild(newContainer);

let newBox = document.createElement('div');
newBox.className='box';

let button_delete=document.createElement('button');
button_delete.className='fa-solid fa-trash';

Add_component =()=>{

    let newBox = document.createElement('div');
    newBox.className='box';
    newContainer.appendChild(newBox);

    let header = document.createElement('div');
    header.className='header';
    newBox.appendChild(header);

    let button_edit = document.createElement('button');
    button_edit.className='fa-regular fa-pen-to-square';
    header.appendChild(button_edit);

    let button_delete=document.createElement('button');
    button_delete.className='fa-solid fa-trash';
    header.appendChild(button_delete);

    button_delete.onclick =()=>{
        newContainer.removeChild(newBox);
    }

    let form= document.createElement('form');
    newBox.appendChild(form);

    let textarea= document.createElement('textarea');
    form.appendChild(textarea);

    button_edit.onclick=()=>{
        if(textarea.readOnly==false){
            textarea.readOnly=true;
            textarea.style.background="rgb(145, 145, 145)";
        }
        else{
            textarea.readOnly=false;
            textarea.style.background="white";
        }
    }
}
