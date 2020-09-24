const API_KEY="https://opentdb.com/api.php?amount=2&type=multiple";
const fetch = require('node-fetch');
const Quiz=require("../public/javascripts/quiz");

const ResponseAnswers=[];

module.exports={
    getQuiz:function(res){
      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {const quiz = new Quiz(json);
          for (var i = 1; i <= quiz.getNumOfQuiz(); i++) {
            ResponseAnswers.push(quiz.getAnswers(i));
      }
         console.log(quiz._quizzes[0]);
            res.send({
              quiz,
              Answers:ResponseAnswers
            });
        });
    }
};

// json.results.forEach(function({category,type,difficulty,question,correct_answer,incorrect_answers}){
//         finalResponse.category.push(category);
//         finalResponse.type.push(type);
//         finalResponse.difficulty.push(difficulty);
//         finalResponse.question.push(question);
//         finalResponse.correct_answer.push(correct_answer);
//         finalResponse.incorrect_answers.push(incorrect_answers);
//     });
