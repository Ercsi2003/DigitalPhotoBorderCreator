import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'



document.addEventListener("DOMContentLoaded", () => {
  const pictureForm = document.getElementById("pictureForm");
  const url = document.getElementById("pictureInput");
  const pWidth = document.getElementById("pictureWidthInput");
  const bWidth = document.getElementById("borderWidthInput");
  const bcolor = document.getElementById("borderColorInput");
  const generateButton = document.getElementById("generatePictureButton");
  const output = document.getElementById("output");
  const lightanddarkButton = document.getElementById("blackwhiteButton");


  pictureForm.addEventListener("submit", (event) => {
    event.preventDefault();

    output.src = url.value;
    output.width = pWidth.value;
    output.style.borderWidth = bWidth.value + "px";
    output.style.borderStyle = "solid";
    output.style.borderColor = bcolor.value;
    

  });

  lightanddarkButton.addEventListener("click", () => {

    if (lightanddarkButton.textContent == "Dark mode") 
      {
        document.body.style.backgroundColor = "Black";
        document.body.style.color = "white";
        lightanddarkButton.textContent = "Light mode";
        lightanddarkButton.style.backgroundColor = "white";
        lightanddarkButton.style.color = "black";
      }

    else
      {
        document.body.style.backgroundColor = "White";
        document.body.style.color = "black";
        lightanddarkButton.textContent = "Dark mode";
        lightanddarkButton.style.backgroundColor = "black";
        lightanddarkButton.style.color = "white";
      }

  });
});