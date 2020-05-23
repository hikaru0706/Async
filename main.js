

(()=>{
      // displayPreparation();
      
      const API_KEY="https://opentdb.com/api.php?amount=10&type=multiple";

      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {
        const quiz = new Quiz(json);
        displayQuiz(quiz,1);
      });
})();
