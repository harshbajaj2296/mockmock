var bg1=document.getElementsByClassName("bg-modal")[0];
setTimeout(function ()
 {
    bg1.style.display= "flex";

}, 5000);
document.getElementsByClassName("close")[0].addEventListener("click",function()
{
bg1.style.display="none";
})