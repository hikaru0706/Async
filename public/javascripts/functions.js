
console.log("function.js was loaded");

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

let _correctAnswersNum = 0;

const getNumOfQuiz = (quiz)=>{
        return quiz.length;
    };
    
const getCategory = (quiz,index)=>{

        return quiz[index-1].category;
    };
    
const getDifficulty = (quiz,index)=>{
        return quiz[index-1].difficulty;
    };
    
const getQuestion = (quiz,index)=>{
        return quiz[index-1].question;
    };

const getAnswers=(quiz,index)=>{
        const correctAnswer = quiz[index-1].correct_answer;
        const incorrectAnswers = quiz[index-1].incorrect_answers;
        
        const answers = incorrectAnswers.slice();
        answers.push(correctAnswer);
        
        for (let i = answers.length-1; i>0; i--){
            const rand = Math.floor(Math.random()*(i+1));
            [answers[i],answers[rand]]=[answers[rand],answers[i]];
        }
        return answers;
};


const  countCorrectAnswersNum = (quiz,index,selectedAnswer) =>{

        const correctAnswer = quiz[index-1].correct_answer;
        if(selectedAnswer===correctAnswer) _correctAnswersNum++;
    };
    
const getCorrectAnswersNum = ()=>{
        return _correctAnswersNum;
    };


const displayQuiz = (quiz,quizNum)=>{


    const titleElem = document.getElementById('title');
    const categoryElem= document.getElementById('category');
    const difficultyElem= document.getElementById('difficulty');
    const questionElem = document.getElementById('content');
    const answersElem = document.getElementById('answers');
    
    //set title
    titleElem.innerHTML = "Problem"+quizNum;
    //set category

    categoryElem.innerHTML="Junre :"+getCategory(quiz,quizNum);
    //set difficulty
    difficultyElem.innerHTML="Difficulty :"+getDifficulty(quiz,quizNum);
    //set quiz
    questionElem.innerHTML=getQuestion(quiz,quizNum);
    //set answers
    answersElem.textContent = '';
    const answers = getAnswers(quiz,quizNum);
    answers.forEach(answer=>{
        const answerElem = document.createElement('p');
        
        const answerBtn = document.createElement('button');
        answerBtn.innerHTML = answer;
        answerBtn.addEventListener('click',()=>{
            countCorrectAnswersNum(quiz,quizNum,answer);
            
            const numOfQuiz = getNumOfQuiz(quiz);
            if(quizNum === numOfQuiz){
                displayResult(getCorrectAnswersNum());
            }
            else {
                displayQuiz(quiz,quizNum+1);
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
  restartBtn.setAttribute('onclick',"location.href = '/'");
  
  restartElem.appendChild(restartBtn);
  answersElem.appendChild(restartElem);
  
};
