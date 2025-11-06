const prev=document.querySelector("#prev");
const next=document.querySelector('#next');
let currentVisible=3;
function addButton(){
const btnContainer=document.querySelector(".btnContainer");
const imgs=document.querySelectorAll(".img");
for(let i=0;i<imgs.length;i++){
    let btn=document.createElement("button");
    btn.textContent=i;
    btn.addEventListener("click",()=>{
    imgs[currentVisible].classList.toggle('hidden');
    imgs[i].classList.toggle('hidden');
    currentVisible=i;
    if(i==0)
    {
        next.disabled=false;
        prev.disabled=true;
    }
    if(i==imgs.length-1){
        next.disabled=true;
        prev.disabled=false;
    }
    })
    btnContainer.appendChild(btn);
}
}
prev.addEventListener("click",()=>{
    
    next.disabled=false;
    const imgs=document.querySelectorAll(".img");
    if(currentVisible==1)
    prev.disabled=true;
imgs[currentVisible].classList.toggle('hidden');
     imgs[currentVisible-1].classList.toggle('hidden');   
     currentVisible=currentVisible-1;
})
next.addEventListener("click",()=>{
    prev.disabled=false;
    const imgs=document.querySelectorAll(".img");
    let i=0;
    
    if(currentVisible==imgs.length-2)
    next.disabled=true;
imgs[currentVisible].classList.toggle('hidden');
     imgs[currentVisible+1].classList.toggle('hidden');  
     currentVisible=currentVisible+1; 
})
addButton();