//MY LOGIC
let mode=document.querySelector("#mode");
let currMode1="light-mode";
let body=document.querySelector("body");

mode.addEventListener("click",() =>{
    if(currMode1 === "light-mode")
    {
            console.log("dark");
            body.setAttribute("class","dark-mode");
            currMode1= "dark-mode";
    }
    else
    {
        console.log("light");
        body.setAttribute("class","light-mode");
        currMode1= "light-mode";
    }
});
/*  
YT LOGIC

let mode=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode1="light-mode";

mode.addEventListener("click",() =>{
    if(currMode1 === "light-mode")
    {
        currMode1= "dark-mode";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        //body.setAttribute("class","dark-mode");
            
    }
    else
    {
        //body.setAttribute("class","light-mode");
        currMode1= "light-mode";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});
*/
