let image = document.getElementById("play");
let musica = document.getElementById("musica");


const container = document.querySelector(".container");
let progress = document.getElementById("progress");
let progressed_bar = document.getElementById("progressed_bar")

function retroceder() {

    musica.currentTime -= 10;

}

function avancar() {

    musica.currentTime += 10;

}




function play() {

    if (musica.paused) {
        musica.play();
        image.src = "assets/pausa.png"
        container.classList.add("play");
    }

    else {
        musica.pause();
    image.src = "assets/botao-play.png"
    container.classList.remove("play");
    }


}

musica.ontimeupdate = function(e) {
    progress.style.width = Math.floor(musica.currentTime * 100 / musica.duration)+"%" 
}

progressed_bar.onclick = function(e){

// console.log((e.offsetX * 100 /progressed_bar.offsetWidth) * musica.duration);

musica.currentTime = ((e.offsetX /progressed_bar.offsetWidth) * musica.duration);
}


