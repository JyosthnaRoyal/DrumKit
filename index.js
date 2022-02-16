var numberofDrums = document.querySelectorAll(".drum").length; //caluculate number of drums

//call makeMusic and buttonAnmimation when a key is clicked with mouse
for (var i = 0; i < numberofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var keyStroke = this.innerHTML;
        makeMusic(keyStroke);
        buttonAnimation(keyStroke);
    });

}

//call makeMusic and buttonAnmimation when a key is pressed through keyboard
document.addEventListener("keypress", function(event) {
    makeMusic(event.key);
    buttonAnimation(event.key);

});

function makeMusic(keyStroke) {

    switch (keyStroke) {
        case 'a':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'b':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'c':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'e':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'f':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'g':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        default:
            alert("Wrong key is pressed!");

    }
}

//function to generate animation when a key  is clicked with mouse or a key is pressed through keyboard
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed"); //adding class pressed //adding HTML elements in Javascript
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}