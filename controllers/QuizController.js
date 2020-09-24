const Quizes = require("../models/Quizes");

module.exports = {
    doGetQuiz:function(req,response,next){
        Quizes.getQuiz(response);
        }
    };
