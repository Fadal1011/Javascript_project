const quizz = [
    
    {
        Question:"Quel est le meilleur langage de programmation en 2022",
        a:"Java",
        b:"Python",
        c:"C",
        d:"Javascript",
        reponse:"a"
    },

    {
        Question:"En quelle annee est cree le langage de programmation javascript",
        a:"2019",
        b:"1996",
        c:"1970",
        d:"2002",
        reponse:"b"
    },

    {
        Question: "Un feu rouge clignotant signifie qu'un conducteur doit faire quoi ?",
        a: "stop",
        b: "accélérer",
        c: "procéder avec prudence",
        d: "klaxonner",
        reponse: "a"
    },

    {
        Question:"À quoi servent les directives de préprocesseur, vous savez, ces lignes qui commencent par  #include  ?",
        a:"Elles demandent d'inclure des fichiers au projet, c'est-à-dire d'ajouter des fichiers pour la compilation.",
        b:"Elles représentent des fonctions et rassemblent plusieurs commandes demandées à l'ordinateur.",
        c:"Elles permettent d'allouer la mémoire nécessaire pour le programme lors de la compilation.",
        d:"Elles permettent d'inclure le compilateur dans le projet afin de créer un exécutable.",
        reponse: "a"
    },
    {
        Question:"En JavaScript, un object est déclaré comme une liste de paires clé/valeur entre…",
        a:"{}  accolades.",
        b:"[]  crochets.",
        c:"()  parenthèses.",
        d:"aucune des réponses ci-dessus.",
        reponse:"a"
    },

]


const question = document.getElementById('question');
const inputs = document.querySelectorAll('input')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const suivant = document.getElementById('next');
const rejouer = document.getElementById('reload');
const notif = document.querySelector('.notification');
const notif_text = document.querySelector('.notification h2');
const btn_button = document.querySelector('.btn button')

let quizz_actuel=0;
let score = 0;

chargementQuizz();


function chargementQuizz(){
    removeChoix();
    
    question.innerText = quizz[quizz_actuel].Question;
    a_text.innerText = quizz[quizz_actuel].a;
    b_text.innerText = quizz[quizz_actuel].b;
    c_text.innerText = quizz[quizz_actuel].c;
    d_text.innerText = quizz[quizz_actuel].d;
}


function removeChoix(){
    inputs.forEach(input => input.checked =false);
}

function getSelected(){
    let answer;
    inputs.forEach(input=>{
        if(input.checked){
           answer = input.id
        }
    })
    return answer;
}


suivant.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if(answer===quizz[quizz_actuel].reponse){
            score++;
        }
        quizz_actuel++;

        if(quizz_actuel < quizz.length){
            chargementQuizz();
        }
        else{
            resultat(score,quizz.length);
            rejouer.addEventListener('click',()=>{
                location.reload();
            });
        }
    }
})


function resultat(score,nbr_question){
notif.style.display="flex";
notif_text.textContent=`votre score est de ${score} / ${nbr_question}`;
}












































