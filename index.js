
var buttonArr = document.querySelectorAll(".drum");

for(var i =0; i<buttonArr.length; i++){
    buttonArr[i].addEventListener("click",function() {
      var buttonname = this.id;
      makeSound(buttonname);
      AnimationEffect(buttonname);
   });
}

   document.addEventListener("keydown", function(event){
     makeSound(event.key);
     AnimationEffect(event.key);
   });


function makeSound(key){
     switch (key) {
       case "cow":
         var audio = new Audio("sounds/cow.mp3");
         audio.play();
         break;
       case "horse":
          var audio = new Audio("sounds/horse.mp3");
          audio.play();
          break;
      case "cat":
          var audio = new Audio("sounds/cat.mp3");
          audio.play();
          break;
     case "ele":
          var audio = new Audio("sounds/Elephant.mp3");
          audio.play();
          break;
    case "snake":
          var audio = new Audio("sounds/snake.mp3");
          audio.play();
          break;
    case "goat":
          var audio = new Audio("sounds/goat.mp3");
          audio.play();
          break;
    case "wolf":
          var audio = new Audio("sounds/wolf.mp3");
          audio.play();
          break;
    case "dog":
          var audio = new Audio("sounds/dog.mp3");
          audio.play();
          break;
    case "cow":
          var audio = new Audio("sounds/crow.mp3");
          audio.play();
          break;  
    case "lion":
          var audio = new Audio("sounds/lion.mp3");
          audio.play();
          break;        
    case "peacock":
         var audio = new Audio("sounds/peacock.mp3");
         audio.play();
         break; 
    case "duck":
          var audio = new Audio("sounds/duck.mp3");
          audio.play();
          break; 
    case "owl":
          var audio = new Audio("sounds/owl.mp3");
          audio.play();
          break; 
    case "eagle":
            var audio = new Audio("sounds/Eagle.mp3");
            audio.play();
            break; 
     default:
         console.log(buttonname);
     }
}

function AnimationEffect(curr){
   var ac = document.querySelector("."+curr);
  ac.classList.add("pressed");
  setTimeout(function(){
    ac.classList.remove("pressed");
  }, 100);
}
