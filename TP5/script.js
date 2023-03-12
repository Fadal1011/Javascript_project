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
        b:"1997",
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
]


const question = document.getElementById('question');
const answerls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const suivant = document.getElementById('next');

let quizz_actuel=0;
let score = 0;

chargementQuizz()

function chargementQuizz(){
    removeChoix();
    
    question.innerText = quizz[quizz_actuel].Question;
    a_text.innerText = quizz[quizz_actuel].a;
    b_text.innerText = quizz[quizz_actuel].b;
    c_text.innerText = quizz[quizz_actuel].c;
    d_text.innerText = quizz[quizz_actuel].d;
}


function removeChoix(){
    answerls.forEach(answerl => answerl.checked =false);
}

function getSelected(){
    let answer;
    answerls.forEach(answerl=>{
        if(answerl.checked){
           answer = answerl.id
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
            console.log(score);
        }
    }
})








































/********************************************************* */

// let flex2 = document.createElement('div');
// flex2.className="flex";
// form.appendChild(flex2);

// let input2 = document.createElement('input');
// input2.type = "radio"
// input2.name="question"
// flex2.appendChild(input2);

// let label2 = document.createElement('label');
// label2.textContent=quizz[0].b;
// flex2.appendChild(label2);


