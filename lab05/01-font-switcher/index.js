const makeBigger = () => {
   var bigH1 = document.querySelector("h1");
   var h1Style = getComputedStyle(bigH1);
   var bigFont = h1Style.getPropertyValue('font-size');
   var newBig = parseFloat(bigFont);
   var font = (newBig+15) + "px";
   bigH1.style.setProperty("font-size",font);

   bigH1 = document.querySelector(".content");
   h1Style = getComputedStyle(bigH1);
   bigFont = h1Style.getPropertyValue('font-size');
   newBig = parseFloat(bigFont);
   font = (newBig+15) + "px";
   bigH1.style.setProperty("font-size",font);


};

const makeSmaller = () => {
   var smallH1 = document.querySelector("h1");
   var h1Style = getComputedStyle(smallH1);
   var smallFont = h1Style.getPropertyValue('font-size');
   var newSmall = parseFloat(smallFont);
   var font = (newSmall-15) + "px";
   smallH1.style.setProperty("font-size",font);

   smallH1 = document.querySelector(".content");
   h1Style = getComputedStyle(smallH1);
   smallFont = h1Style.getPropertyValue('font-size');
   newSmall = parseFloat(smallFont);
   font = (newSmall-15) + "px";
   smallH1.style.setProperty("font-size",font);
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

