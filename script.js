let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");

botaoSom.addEventListener("click", evt=>{
     video.muted= false;
});

botao.addEventListener("click", evt =>{
   modal.style.display= "block";
});

modal.addEventListener("click", evt=>{
    modal.style.display = "none";
})