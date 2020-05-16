

const API_KEY="https://opentdb.com/api.php?amount=10&type=multiple";

// this variable shows the number of click,by referring to this variable,Question will be updated.
let clicked = 0;
// this variable shows the number of correct answers, in result page,this variable will be used.
let correct = 0;
// this is from API,question will be stored,this variable is used only in this scope,hense it is declared this position.
let globalJson;

document.querySelector(".start").addEventListener("click",function(e){

      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {
        globalJson = json;
        display(json,0);
        // console.log(globalJson.results);
      });
      
    // set asynchronous procedures in following 
    document.getElementById("header").innerText = "Is fetching...";
    document.getElementById("content").innerText = "Just a moment please";
    document.querySelector(".start").style.display = "none";

});


function display(json,clicked){

      
      const choiceArr = [json.results[clicked].correct_answer].concat(json.results[clicked].incorrect_answers);
      
      const shuffleArray=shuffle(choiceArr);
  
      document.getElementById("header").innerText = "Question"+Number(clicked+1);
      document.getElementById("category").innerText = "[category] : "+json.results[clicked].category;
      document.getElementById("difficulty").innerText = "[difficulty] : "+json.results[clicked].difficulty;
      document.getElementById("content").innerText = json.results[clicked].question;
      
      let btn = document.getElementById("btn");
      
      console.log("clicked",clicked);

      while (btn.firstChild) {
        btn.removeChild(btn.lastChild);
      }

      for (let i=0;i<shuffleArray.length; i++){
    
        let button = document.createElement("button");
        let br = document.createElement("br");
        
        
        button.textContent=shuffleArray[i];
        button.id="choice";
        btn.appendChild(button);
        btn.appendChild(br);
      
      
        button.addEventListener("click",function(e){
           console.log("#");
           console.log("clicked",clicked);
           correct += e.target.innerText===globalJson.results[clicked].correct_answer ? 1:0;        
           clicked++;
           
           console.log("clicked",clicked);
           
          if (clicked==globalJson.results.length){
            showresult(correct);
          }else{
          display(globalJson,clicked);
          }           
           
        });
          
      }
}

function showresult(correct){

      document.getElementById("header").innerText = "Number of correct answers is " + correct ;
      document.getElementById("category").style.display = "none";
      document.getElementById("difficulty").style.display = "none";
      document.getElementById("content").innerText = "Challenge again";

      let btn = document.getElementById("btn");
      let button = document.createElement("button");
      button.textContent = 'retry';
      button.id = 'retry';
      
      console.log(btn.parentNode);
      
      btn.parentNode.replaceChild(button,btn);
      
      document.getElementById("retry").addEventListener("click",function(){
          window.location.reload();
      });
  
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex --;
    
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
