let paraText1=document.querySelector("#text1");
let paraText2=document.querySelector("#text2");
console.log(paraText1.innerText);
console.log(paraText2.innerText);

let accessContainer=document.querySelector(".scale");

accessContainer.addEventListener("mouseover", ()=>{
    for(let i=0; i<361;i++){
    
        setTimeout(() => {
            paraText1.innerText=i + " +";
          }, i*6);
          
    }

});
accessContainer.addEventListener("mouseover", ()=>{
    for(let i=0; i<2001;i++){
    
        setTimeout(() => {
            paraText2.innerText=i + " +";
          }, i*1);
          
    }

});