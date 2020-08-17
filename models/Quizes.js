const API_KEY="https://opentdb.com/api.php?amount=10&type=multiple";
const fetch = require('node-fetch');
// const Quiz=require("../public/javascripts/quiz");
// const finalResponse = {
//                 category : [],
//                 type : [],
//                 difficulty : [], 
//                 question : [],
//                 correct_answer : [],
//                 incorrect_answers : []
//                         };

module.exports={
    getQuiz:function(res){
      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {
            res.send(json.results);
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
