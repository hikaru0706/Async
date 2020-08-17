

(()=>{

      
      const url = "/quiz-data";
      
      console.log("main.js was loaded");
      
      fetch(url)
       .then(response=>response.json())
      .then(response => displayQuiz(response,1))

})();
      
      






