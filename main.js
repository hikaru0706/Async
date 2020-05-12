

const API_KEY="https://opentdb.com/api.php?amount=10&type=multiple";

// this variable shows the number of click,by referring to this variable,Question will be updated.
let clicked;
// this variable shows the number of correct answers, in result page,this variable will be used.
let correct;
// this is from API,question will be stored,this variable is used only in this scope,hense it is declared this position.
let globalJson;

document.getElementById("btn").addEventListener("click",function(e){

  if(e.target && e.target.className=="start"){
    clicked=0;
    correct=0;
  
      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {
        globalJson = json;
        display(json,0);
        console.log(globalJson.results);
      });
  
    document.getElementById("header").innerText = "Is fetching...";
    document.getElementById("content").innerText = "Just a moment please";
    document.querySelector(".start").style.display = "none";
    }
    
  else if(e.target && e.target.className=="choice"){

          correct += e.target.innerText===globalJson.results[clicked].correct_answer ? 1:0;
          
          clicked++;

          if (clicked==globalJson.results.length){
            showresult(correct);
          }else{
          display(globalJson,clicked);
          }
    }
    
  else if(e.target && e.target.className=="retry"){
          window.location.reload();

          // document.getElementById("header").innerText ="Welcome";
          // document.getElementById("content").innerText ="Press the following button";
          // document.querySelector('#btn').innerHTML = "<button class='start'>start</button>";
  }
});


function display(json,clicked){
      
      const choiceArr = [json.results[clicked].correct_answer].concat(json.results[clicked].incorrect_answers);
      
      const shuffleArray=shuffle(choiceArr);
  
      document.getElementById("header").innerText = "Question"+Number(clicked+1);
      document.getElementById("category").innerText = "[category] : "+json.results[clicked].category;
      document.getElementById("difficulty").innerText = "[difficulty] : "+json.results[clicked].difficulty;
      document.getElementById("content").innerText = json.results[clicked].question;
      
      let choiceHtml = "";
      
      for (let i=0;i<shuffleArray.length; i++){
      
        choiceHtml += `<button class='choice'>`+shuffleArray[i]+`</button><br>`;
      }
      document.querySelector('#btn').innerHTML = choiceHtml;
}



function showresult(correct){

      document.getElementById("header").innerText = "Number of correct answers is " + correct ;
      document.getElementById("category").style.display = "none";
      document.getElementById("difficulty").style.display = "none";
      document.getElementById("content").innerText = "Challenge again";
      document.querySelector('#btn').innerHTML = "<button class='retry'>retry</button>";
}




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
