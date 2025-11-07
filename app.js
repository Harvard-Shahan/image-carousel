class imageCarouselAnimation{
    #prev=null;
    #next=null;
    #imgs=null;
    #currentVisible=null;
    constructor(){
        this.#prev=document.querySelector("#prev");
        this.#next=document.querySelector("#next");
        this.#imgs=document.querySelectorAll(".img");
        this.#currentVisible=this.getCurrentVisible();
        this.setupButtons();
        this.addButton();
    }
    setupButtons(){
        this.#prev.addEventListener("click",()=>{
    this.#next.disabled=false;
    if(this.#currentVisible<=1)
    this.#prev.disabled=true;
this.#imgs[this.#currentVisible].classList.toggle('hidden');
     this.#imgs[this.#currentVisible-1].classList.toggle('hidden');   
     this.#currentVisible=max(this.#currentVisible-1,0);
})
this.#next.addEventListener("click",()=>{
    this.#prev.disabled=false;
    if(this.#currentVisible>=this.#imgs.length-2)
    this.#next.disabled=true;
this.#imgs[this.#currentVisible].classList.toggle('hidden');
     this.#imgs[this.#currentVisible+1].classList.toggle('hidden');  
     this.#currentVisible=min(this.#currentVisible+1,this.#imgs.length-1); 
})
    }
    getCurrentVisible(){
        for(let i=0;i<this.#imgs.length;i++)
            if(this.#imgs[i].classList.contains('hidden'))
                continue;
            else{
                if(i==0)
                    this.#prev.disabled=true;
                if(i==this.#imgs.length-1)
                    this.#next.disabled=true;
                return i;
            }
        this.#imgs[0].classList.toggle('hidden');
        return 0;
    }
    addButton(){
const btnContainer=document.querySelector(".btnContainer");
for(let i=0;i<this.#imgs.length;i++){
    let btn=document.createElement("button");
    btn.textContent=i;
    btn.addEventListener("click",()=>{
    this.#imgs[this.#currentVisible].classList.toggle('hidden');
    this.#imgs[i].classList.toggle('hidden');
    this.#currentVisible=i;
    if(i==0)
    {
        this.#next.disabled=false;
        this.#prev.disabled=true;
    }
    else if(i==this.#imgs.length-1){
        this.#next.disabled=true;
        this.#prev.disabled=false;
    }
    else{
       this.#next.disabled=false;
        this.#prev.disabled=false; 
    }
    })
    btnContainer.appendChild(btn);
}
}
}
const carousel=new imageCarouselAnimation();
