//Price Script
const priceButton = document.getElementById("showPrice");
const priceFrame = document.getElementById("priceFrame");
            
priceButton.addEventListener("click", () => {
if (priceFrame.style.display === "none" || priceFrame.style.display === "") {
    priceFrame.style.display = "block";
} else {
    priceFrame.style.display = "none";
  }
});
            
            
//Phone Script
const phoneButton = document.getElementById("showPhone");
const phoneFrame = document.getElementById("phoneFrame"); // Corrected ID
            
phoneButton.addEventListener("click", () => {
if (phoneFrame.style.display === "none" || phoneFrame.style.display === "") {
    phoneFrame.style.display = "block";
} else {
    phoneFrame.style.display = "none";
  }
});

//Time Script
const timeButton = document.getElementById("showtime");
const timeFrame = document.getElementById("timeFrame"); // Corrected ID
            
timeButton.addEventListener("click", () => {
if (timeFrame.style.display === "none" || timeFrame.style.display === "") {
    timeFrame.style.display = "block";
} else {
    timeFrame.style.display = "none";
    }
});