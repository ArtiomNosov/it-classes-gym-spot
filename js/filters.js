const form = document.querySelector('form'); 
const queryInput = document.querySelector('input[name="query"]'); 
const footballRadio = document.getElementById("футбол");
const basketballRadio = document.getElementById("баскетбол");
const volleyballRadio = document.getElementById("волейбол");
const freeRadio = document.getElementById("бесплатный");
const payedRadio = document.getElementById("платный");
const поискButton = document.getElementById("поиск");

let chsport = null; 
let access = null;     


footballRadio.addEventListener("change", () => { chsport = "футбол"; });
basketballRadio.addEventListener("change", () => { chsport = "баскетбол"; });
volleyballRadio.addEventListener("change", () => { chsport = "волейбол"; });
freeRadio.addEventListener("change", () => { access = "бесплатный"; });
payedRadio.addEventListener("change", () => { access = "платный"; });


поискButton.addEventListener("click", () => {
  const query = queryInput.value.toLowerCase(); 
  if (chsport && access) { 
    let targetPage = null; 

    if (query === 'люблино') {
      switch (chsport) {
        case "футбол":
          targetPage = access === "бесплатный" ? "lublinoff.html" : "lublinopf.html";
          break;
        case "баскетбол":
          targetPage = access === "бесплатный" ? "lublinofb.html" : "lublinopb.html";
          break;
        case "волейбол":
          targetPage = access === "бесплатный" ? "lublinofv.html" : "lublinopv.html";
          break;
      }
    } else if (query === 'марьино') {
      switch (chsport) {
        case "футбол":
          targetPage = access === "бесплатный" ? "marinoff.html" : "marinopf.html";
          break;
        case "баскетбол":
          targetPage = access === "бесплатный" ? "marinofb.html" : "marinopb.html";
          break;
        case "волейбол":
          targetPage = access === "бесплатный" ? "marinofv.html" : "marinopv.html";
          break;
      }
    }

    if (targetPage) { 
      window.location.href = targetPage; 
    } else {
      alert("Для выбранного района и спорта нет подходящей страницы!");
    }
  } else {
    alert("Сначала выберите район, спорт и тип доступа!");
  }
});