

(()=>{

      
      const url = "/quiz-data";
      
      fetch(url)
       .then(response=>response.json())
      .then(response => displayQuiz(response,1))

})();
      
      






