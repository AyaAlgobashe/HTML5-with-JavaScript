let startButton=document.getElementsByTagName("button")[0];
let stopButton=document.getElementsByTagName("button")[1];
let box=document.querySelector("p")


startButton.onclick=function(){
    console.log("aya")
    box.classList.add("box-trans")
    box.classList.add("box-trans:hover")

}
stopButton.onclick=function(){
    console.log("aya")
    box.classList.add("stopBox")

}