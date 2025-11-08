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
        this.checkMovement();
    }
    setupButtons(){
        this.#prev.addEventListener("click",()=>{
            if(!this.#prev.disabled){
                this.#imgs[this.#currentVisible].classList.toggle('hidden');
                this.#imgs[this.#currentVisible-1].classList.toggle('hidden');
                this.#currentVisible=(this.#currentVisible-1); 
                this.checkMovement();
            }
            
})
        this.#next.addEventListener("click",()=>{
            if(!this.#next.disabled){
                this.#imgs[this.#currentVisible].classList.toggle('hidden');
                this.#imgs[this.#currentVisible+1].classList.toggle('hidden');
                this.#currentVisible=(this.#currentVisible+1);
                this.checkMovement();
            }
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
    checkMovement(){
        if(this.#currentVisible==0)
            this.#prev.disabled=true;
        else if(this.#currentVisible==this.#imgs.length-1)
            this.#next.disabled=true;
        else
        {
            this.#prev.disabled=false;
            this.#next.disabled=false;
        }
    }
    addButton(){
const btnContainer=document.querySelector(".btnContainer");
for(let i=0;i<this.#imgs.length;i++){
    let btn=document.createElement("button");
    btn.textContent=i+1;
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
// class imageCarouselAnimation {
//     #prev = null;
//     #next = null;
//     #imgs = null;
//     #currentVisible = null;
//     #intervalId = null; // 🕒 store the interval ID
//     #autoSlideDelay = 3000; // 3 seconds (adjust as needed)

//     constructor() {
//         this.#prev = document.querySelector("#prev");
//         this.#next = document.querySelector("#next");
//         this.#imgs = document.querySelectorAll(".img");
//         this.#currentVisible = this.getCurrentVisible();
//         this.setupButtons();
//         this.addButton();
//         this.checkMovement();
//         this.startAutoSlide(); // 🟢 start the auto slider
//     }

//     setupButtons() {
//         this.#prev.addEventListener("click", () => {
//             this.stopAutoSlide(); // ⏸️ pause auto slide on manual action
//             if (!this.#prev.disabled) {
//                 this.#imgs[this.#currentVisible].classList.toggle('hidden');
//                 this.#imgs[this.#currentVisible - 1].classList.toggle('hidden');
//                 this.#currentVisible--;
//                 this.checkMovement();
//             }
//         });

//         this.#next.addEventListener("click", () => {
//             this.stopAutoSlide(); // ⏸️ pause auto slide on manual action
//             if (!this.#next.disabled) {
//                 this.#imgs[this.#currentVisible].classList.toggle('hidden');
//                 this.#imgs[this.#currentVisible + 1].classList.toggle('hidden');
//                 this.#currentVisible++;
//                 this.checkMovement();
//             }
//         });
//     }

//     getCurrentVisible() {
//         for (let i = 0; i < this.#imgs.length; i++) {
//             if (!this.#imgs[i].classList.contains('hidden')) {
//                 if (i == 0) this.#prev.disabled = true;
//                 if (i == this.#imgs.length - 1) this.#next.disabled = true;
//                 return i;
//             }
//         }
//         this.#imgs[0].classList.remove('hidden');
//         return 0;
//     }

//     checkMovement() {
//         if (this.#currentVisible == 0) this.#prev.disabled = true;
//         else if (this.#currentVisible == this.#imgs.length - 1)
//             this.#next.disabled = true;
//         else {
//             this.#prev.disabled = false;
//             this.#next.disabled = false;
//         }
//     }

//     addButton() {
//         const btnContainer = document.querySelector(".btnContainer");
//         for (let i = 0; i < this.#imgs.length; i++) {
//             let btn = document.createElement("button");
//             btn.textContent = i + 1;
//             btn.addEventListener("click", () => {
//                 this.stopAutoSlide(); // ⏸️ pause auto slide when user interacts
//                 this.#imgs[this.#currentVisible].classList.toggle('hidden');
//                 this.#imgs[i].classList.toggle('hidden');
//                 this.#currentVisible = i;
//                 this.checkMovement();
//             });
//             btnContainer.appendChild(btn);
//         }
//     }

//     // 🕒 New auto-slide methods
//     startAutoSlide() {
//         this.#intervalId = setInterval(() => {
//             // if we're at the last image, loop to first
//             if (this.#currentVisible === this.#imgs.length - 1) {
//                 this.#imgs[this.#currentVisible].classList.toggle('hidden');
//                 this.#imgs[0].classList.toggle('hidden');
//                 this.#currentVisible = 0;
//             } else {
//                 this.#imgs[this.#currentVisible].classList.toggle('hidden');
//                 this.#imgs[this.#currentVisible + 1].classList.toggle('hidden');
//                 this.#currentVisible++;
//             }
//             this.checkMovement();
//         }, this.#autoSlideDelay);
//     }

//     stopAutoSlide() {
//         if (this.#intervalId) {
//             clearInterval(this.#intervalId);
//             this.#intervalId = null;
//         }
//     }
// }

// const carousel = new imageCarouselAnimation();
