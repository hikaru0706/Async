var express = require("express");
var router = express.Router();
var quizController = require("../controllers/QuizController");

router.get('/',(req,res)=>{
    res.render("index");
});
router.get('/quiz',(req,res)=>{
    res.render("quiz");
});
router.get('/quiz-data',quizController.doGetQuiz);

module.exports = router;