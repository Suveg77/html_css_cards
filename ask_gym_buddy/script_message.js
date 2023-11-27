const wrapper= document.querySelector(".wrapper");
const question= document.querySelector(".question");
const gif= document.querySelector(".gif");
const yesBtn= document.querySelector(".yes-button");
const noBtn= document.querySelector(".no-button");


yesBtn.addEventListener("click", () =>{
    question.innerHTML= "Let's goo Buddy!!!";
    gif.src=
        "https://media.giphy.com/media/3orieKRjkyDUti23sY/giphy.gif"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });