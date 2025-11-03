const prev=document.querySelector("#prev");
const next=document.querySelector('#next');
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