const prev=document.querySelector("#prev");
const next=document.querySelector('#next');
function addButton(){
const btnContainer=document.querySelector(".btnContainer");
const imgs=document.querySelectorAll(".img");
for(let i=0;i<imgs.length;i++){
    let btn=document.createElement("button");
    btn.textContent=i;
    btn.addEventListener("click",()=>{
        let j=0;
    for(;j<imgs.length;j++)
        if(imgs[j].classList.contains('hidden'))
            continue;
        else
        break;
    imgs[j].classList.toggle('hidden');
    imgs[i].classList.toggle('hidden');
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
    let i=0;
    for(;i<imgs.length;i++)
        if(imgs[i].classList.contains('hidden'))
            continue;
        else
        break;
    if(i==1)
    prev.disabled=true;
imgs[i].classList.toggle('hidden');
     imgs[i-1].classList.toggle('hidden');   
})
next.addEventListener("click",()=>{
    prev.disabled=false;
    const imgs=document.querySelectorAll(".img");
    let i=0;
    for(;i<imgs.length;i++)
        if(imgs[i].classList.contains('hidden'))
            continue;
        else
        break;
    if(i==imgs.length-2)
    next.disabled=true;
imgs[i].classList.toggle('hidden');
     imgs[i+1].classList.toggle('hidden');   
})
addButton();