//Maneging clicks 

$(".drum").on("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
})


//maneging keypress

$("*").on("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
});


// Animation to button on any event
function animation(currentKey){
var currentButton=$("."+currentKey);
currentButton.addClass("pressed");

setTimeout(function(){
    currentButton.removeClass("pressed"); 
},100);

}


function makeSound(key){

    switch (key) {
        case "w":   var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;

        case "a":   var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;

        case "s":   var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;

        case "d":   var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;

        case "j":   var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;

        case "k":   var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;

        case "l":   var kick = new Audio('sounds/kick-bass.mp3');
                    kick-bass.play();
                    break;
    
        default:    console.log("default click");
                    break;
    }
}