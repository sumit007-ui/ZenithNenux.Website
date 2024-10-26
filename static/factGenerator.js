const factBtn= document.querySelector(".fact-btn");
const title=document.querySelector(".title");
const fact=document.querySelector(".fact");
console.log(factBtn);

//array with quotes in object form

const factArray=[
    {
        title:"Book Waste Reduction",
        fact: "1.6 billion books are discarded every year globally, contributing significantly to waste. By encouraging book reuse, Zennith Nexus can help reduce this figure."
    },
    {
        title:" Paper Usage in Education ",
        fact: " It takes 24 trees to produce a single ton of standard office paper, often used in books. Promoting the resale of used books helps to decrease the demand for new paper, reducing deforestation. "
    },
    {
        title:" Digital Market Growth ",
        fact: " The global second-hand market is expected to grow to $64 billion by 2025. Zennith Nexus can tap into this growth, especially in the textbook sector. "
    },
    {
        title:" Cost of Education ",
        fact: " The average student in India spends around INR 10,000 to 25,000 annually on textbooks. Zennith Nexus can help students cut these costs by up to 50% through the resale of used books. "
    },
    {
        title:" E-Waste Comparison ",
        fact: " A study by the United Nations shows that 2 million tons of e-waste from digital devices are produced annually due to unnecessary purchases. Promoting physical book reuse keeps educational material sustainable. "
    },
    {
        title:" CO2 Reduction ",
        fact: " Reusing a single textbook can save 5.3 kg of CO2 emissions that would have otherwise been produced in the manufacturing of a new book. Zennith Nexus can contribute to a significant reduction in carbon footprints by promoting book exchange. "
    },
    {
        title:" Deforestation Prevention ",
        fact: " Around 42% of all global wood harvest is used for paper production. Book reuse directly supports reducing the demand for fresh wood, thereby saving forests. "
    },
    {
        title:"Education Accessibility",
        fact: " In India, 70% of rural students find textbooks unaffordable, forcing them to borrow or do without. Zennith Nexus can make textbooks accessible to underprivileged students at affordable prices. "
    },
    {
        title:" Circular Economy ",
        fact: " Implementing circular models like book reuse in educational systems can reduce resource consumption by 50% and significantly reduce waste in the long term. "
    }
];

//random quote generator
const quoteGenerator=()=>{
    let index;
    index=Math.floor(Math.random()*11);
    return index;

}


factBtn.addEventListener("click", function(){
       // let index=quoteGenerator
       let index;
       index=Math.floor(Math.random()*factArray.length);
       console.log(index);
        title.innerText= factArray[index].title;
        fact.innerText= factArray[index].fact;
});