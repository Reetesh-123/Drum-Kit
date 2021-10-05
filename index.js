var selectbutton=document.querySelectorAll(".drum");
function keys(ch)
{
    switch (ch)
        {
            case 'w': var audio=new Audio("sounds/crash.mp3"); 
                        audio.play();
                        break;
            case 'a': var audio=new Audio("sounds/kick-bass.mp3"); 
                        audio.play();
                        break;
            case 's': var audio=new Audio("sounds/snare.mp3"); 
                        audio.play();
                        break;
            case 'd': var audio=new Audio("sounds/tom-1.mp3"); 
                        audio.play();
                        break;
            case 'j': var audio=new Audio("sounds/tom-2.mp3"); 
                        audio.play();
                        break;
            case 'k': var audio=new Audio("sounds/tom-3.mp3"); 
                        audio.play();
                        break;
            case 'l': var audio=new Audio("sounds/tom-4.mp3"); 
                        audio.play();
                        break;
        }
}
function animation(ch){
    let elem=document.querySelector("."+ch);
    elem.classList.add("pressed");
    setTimeout(() => {
        elem.classList.remove("pressed");
    }, 200);

}
for(let i=0;i<selectbutton.length;i++)
{
    selectbutton[i].addEventListener("click",function(){
        let ch=this.innerHTML;
        keys(ch);
        animation(ch);
    });
}
document.addEventListener("keypress",function(event){
    let ch=event.key;
    keys(ch);
    animation(ch);
});