const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    play = body.querySelector(".play-switch"),
    modeText = body.querySelector(".mode-text"),
    switchB = document.getElementById("switch-play");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

play.addEventListener("click" , () =>{
    console.log("HOLLAAA")
    if(switchB.classList.contains("switch-off")){
        modeText.innerText = "Stop";
        switchB.classList.replace("switch-off","switch-on");
    }else{
        modeText.innerText = "Start";
        switchB.classList.replace("switch-on", "switch-off");
    }
});