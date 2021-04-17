//Maneging clicks 

$(".drum").on("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
})


//maneging keypress

$(".drum").on("keydown",function(){
    var buttonInnerHTML=this.key;
    makeSound(buttonInnerHTML);
})


// Animation to button on any event
function animation(){}


function makeSound(key){

    switch (key) {
        case "w":   var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    console.log("Audio played");
                    break;

        case "a":   var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    console.log("Audio played");
                    break;

        case "s":   var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    console.log("Audio played");
                    break;

        case "d":   var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    console.log("Audio played");
                    break;

        case "j":   var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    console.log("Audio played");
                    break;

        case "w":   var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    console.log("Audio played");
                    break;

        case "w":   var kick = new Audio('sounds/kick.mp3');
                    kick.play();
                    console.log("Audio played");
                    break;
    
        default:    console.log("default click");
                    break;
    }
}