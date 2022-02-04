/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeDefault = () => {
   var theme = document.querySelector("body");
   theme.className = "default"


};

const makeOcean = () => {
   var theme = document.querySelector("body");
   theme.className = "ocean"
};
const makeDesert = () => {
   var theme = document.querySelector("body");
   theme.className = "desert"
};
const makehc = () => {
   var theme = document.querySelector("body");
   theme.className = "high-contrast"
};


document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#high-contrast").addEventListener('click', makehc);

