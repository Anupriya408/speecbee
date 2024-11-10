let scrollContainer = document.querySelector(".gallery")
let backButton = document.getElementById("backButton")
let nextButton = document.getElementById("nextButton")

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "auto";
})

nextButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1200;
})

backButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += -1200;
})


const square = document.getElementById("square");
  const openSquare= document.querySelectorAll(".openSquare");
  const closeSquareBtn = document.getElementById("closeSquareBtn");

  
  openSquare.forEach((button) => {
    button.addEventListener("click", () => {

      const imageSrc = button.querySelector("img").src;
      const nameText = button.querySelector("h2").innerText;
      const titleText = button.querySelector("h4").innerText;
      const companyText = button.querySelector("p").innerText;

      // Set square content dynamically
      document.getElementById("squareImage").src = imageSrc;
      document.getElementById("squareName").innerText = nameText;
      document.getElementById("squareTitle").innerText = titleText;
      document.getElementById("squareCompany").innerText = companyText;

      square.style.display = "block";
     
    });
  });

  

  closeSquareBtn.addEventListener("click", () => {
    square.style.display = "none";
  });


