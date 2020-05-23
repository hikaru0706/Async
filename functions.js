// const hidePreparation = ()=>{
//     const preparationElem = document.getElementById('preparation');
//     preparationElem.style.display ='none';
// };

// const hideQuiz = ()=>{
//     const quizElem = document.getElementById("quiz");
//     quizElem.style.display='none';
// };

const hideCategory= ()=>{
    const categoryElem = document.getElementById("category");
    categoryElem.style.display='none';
};

const hideDifficulty =()=>{
    const difficultyElem =document.getElementById("difficulty");
    difficultyElem.style.display='none';
};

const refreshContent = ()=>{
    const contentElem =document.getElementById("content");
    contentElem.innerHTML="If you want to challenge again,please click following button";    
};

const setRestartButton = ()=>{
    const buttonElem=document.getElementById("button");
    
    const restartElem = document.createElement('p');
    const restartBtn = document.createElement('button');
    restartBtn.innerHTML="restart";
    
};
// const hideResult =()=>{
//     const resultElem = document.getElementById('result');
//     resultElem.style.display = 'none';
// };

// const displayPreparation = ()=>{
//     const preparationElem = document.getElementById('preparation');
//     preparationElem.style.display= '';
//     //hide other element
//     hideQuiz();
//     hideResult();
// };

const displayQuiz = (quizInstance,quizNum)=>{
    //display quiz
    // const quizElem = document.getElementById('quiz');
    // quizElem.style.display = '';

    // hidePreparation();
    // hideResult();

    const titleElem = document.getElementById('title');
    const categoryElem= document.getElementById('category');
    const difficultyElem= document.getElementById('difficulty');
    const questionElem = document.getElementById('content');
    const answersElem = document.getElementById('answers');
    
    //set title
    titleElem.innerHTML = "Problem"+quizNum;
    //set category
    categoryElem.innerHTML="Junre :"+quizInstance.getCategory(quizNum);
    //set difficulty
    difficultyElem.innerHTML="Difficulty :"+quizInstance.getDifficulty(quizNum);
    //set quiz
    questionElem.innerHTML=quizInstance.getQuestion(quizNum);
    //set answers
    answersElem.textContent = '';
    const answers = quizInstance.getAnswers(quizNum);
    answers.forEach(answer=>{
        const answerElem = document.createElement('p');
        
        const answerBtn = document.createElement('button');
        answerBtn.innerHTML = answer;
        answerBtn.addEventListener('click',()=>{
            quizInstance.countCorrectAnswersNum(quizNum,answer);
            
            const numOfQuiz = quizInstance.getNumOfQuiz();
            if(quizNum === numOfQuiz){
                displayResult(quizInstance.getCorrectAnswersNum());
            }
            else {
                displayQuiz(quizInstance,quizNum+1);
            }
        });
        answerElem.appendChild(answerBtn);
        answersElem.appendChild(answerElem);
    });
};

//display result
const displayResult = correctAnswersNum =>{

 //show result page
  hideCategory();
  hideDifficulty();
  refreshContent();
  
  //show result page
  const correctAnswersNumElem = document.getElementById('title');
  correctAnswersNumElem.innerHTML = "The number of correct answer is "+correctAnswersNum;
  
  const answersElem = document.getElementById("answers");
  const restartElem = document.createElement("p");
  const restartBtn = document.createElement("button");
  
  //remove all the choices
      while (answersElem.firstChild) {
        answersElem.removeChild(answersElem.lastChild);
      }
  //create restart button
  restartBtn.innerHTML="restart";
  restartBtn.setAttribute('onclick',"location.href = './index.html'");
  
  restartElem.appendChild(restartBtn);
  answersElem.appendChild(restartElem);
  
};
