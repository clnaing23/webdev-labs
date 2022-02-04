/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexia = () => {
  var theme = document.querySelector("body");
  makeBigger()
  theme.className = "dyslexia-mode"
};

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

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexia);