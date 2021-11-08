//Language -- start

var fr = document.getElementsByClassName("fr");
var eng = document.getElementsByClassName("eng");

var frBtn = document.getElementById("fr-phone-btn");
var engBtn = document.getElementById("eng-phone-btn");

function frLang() {
  for (var i = 0; i < fr.length; i++) {
    fr[i].style.display = "block";
    eng[i].style.display = "none";
  }
}

function engLang() {
  for (var i = 0; i < eng.length; i++) {
    eng[i].style.display = "block";
    fr[i].style.display = "none";
  }
}

function engLangPhone() {
  for (var i = 0; i < eng.length; i++) {
    eng[i].style.display = "block";
    fr[i].style.display = "none";
  }
  engBtn.style.animationName = "flip";
  frBtn.style.animationName = "none";
}

function frLangPhone() {
  for (var i = 0; i < eng.length; i++) {
    eng[i].style.display = "none";
    fr[i].style.display = "block";
  }
  engBtn.style.animationName = "none";
  frBtn.style.animationName = "flip";
}

//Language -- end

// Rolling dice -- start

const winner = document.querySelectorAll(".rolling-dice-title")[0];
const btn = document.querySelectorAll(".rolling-dice-btn")[0];
const dice = document.querySelectorAll(".dice");

btn.addEventListener("click", (evt) => {
  const randomOne = Math.floor(Math.random() * 6) + 1;
  const randomTwo = Math.floor(Math.random() * 6) + 1;
  dice[0].src = `./images/dice${randomOne}.png
    `;
  dice[1].src = `./images/dice${randomTwo}.png
    `;

  if (randomOne === randomTwo) {
    winner.innerHTML = `
        It's a Draw, Try again !
        `;
  } else if (randomOne < randomTwo) {
    winner.innerHTML = `
        Player Two is the winner ! Congrats !
        `;
  } else {
    winner.innerHTML = `
        Player One is the winner ! Congrats !
        `;
  }
});

// Rolling dice -- end

var block = document.getElementsByClassName("block");
var hobby = document.getElementById("hobbyblock");
var skill = document.getElementById("skillblock");
var cinema = document.getElementById("cinema");
var music = document.getElementById("music");
var sports = document.getElementById("sports");
var travel = document.getElementById("travel");
var liverpool = document.getElementById("liverpool");
var foot = document.getElementById("foot");
var basket = document.getElementById("basket");
var tennis = document.getElementById("tennis");
var blockH = document.getElementsByClassName("blockH");

var blockXp = document.getElementsByClassName("xp-block");
var blockXpInit = document.getElementsByClassName("xp-init-block");
var lobby = document.getElementById("xp-lobby");
var web = document.getElementById("webblock");
var retail = document.getElementById("retailblock");
var catering = document.getElementById("cateringblock");
var others = document.getElementById("othersblock");

var blockS = document.getElementsByClassName("blockS");
var university = document.getElementById("university-content");
var self = document.getElementById("self-content");
var educBlock = document.getElementsByClassName("educ-block");

var body = document.body;
var btnDl = document.getElementsByClassName("btn-dl");
var nav = document.getElementsByClassName("nav");
var navPhone = document.getElementsByClassName("nav-phone");
var star = document.getElementsByClassName("star");
var sun = document.getElementsByClassName("sun-btn");
var moon = document.getElementsByClassName("moon-btn");

var option = document.getElementById("phone-option-content");
var dayBtn = document.getElementById("phone-day-btn");
var nightBtn = document.getElementById("phone-night-btn");

const input = document.getElementsByTagName("input");
const form = document.getElementsByTagName("form");
//day mode -- start

function openNight() {
  body.classList.remove("day-mode");
  body.classList.add("night-mode");
  body.style.color = "white";
  nav[0].style.backgroundColor = "#BCD2DA";
  navPhone[0].style.backgroundColor = "#BCD2DA";
  for (i = 0; i < star.length; i++) {
    star[i].style.display = "flex";
  }
  for (j = 0; j < input.length; j++) {
    input[j].style.backgroundColor = "black";
    input[j].style.color = "white";
  }
  sun[0].style.display = "none";
  moon[0].style.display = "flex";
}

function openNightPhone() {
  body.classList.remove("day-mode");
  body.classList.add("night-mode");
  body.style.color = "white";
  nav[0].style.backgroundColor = "#BCD2DA";
  navPhone[0].style.backgroundColor = "#BCD2DA";
  for (i = 0; i < star.length; i++) {
    star[i].style.display = "flex";
  }
  for (j = 0; j < input.length; j++) {
    input[j].style.backgroundColor = "black";
    input[j].style.color = "white";
  }
  dayBtn.style.animationName = "none";
  nightBtn.style.animationName = "rotateplanet";
}

function openDay() {
  body.classList.remove("night-mode");
  body.classList.add("day-mode");
  body.style.color = "black";
  nav[0].style.backgroundColor = "#c58324";
  navPhone[0].style.backgroundColor = "#c58324";
  for (i = 0; i < star.length; i++) {
    star[i].style.display = "none";
  }
  for (j = 0; j < input.length; j++) {
    input[j].style.backgroundColor = "white";
    input[j].style.color = "black";
  }
  sun[0].style.display = "flex";
  moon[0].style.display = "none";
}

function openDayPhone() {
  body.classList.remove("night-mode");
  body.classList.add("day-mode");
  body.style.color = "black";
  nav[0].style.backgroundColor = "#c58324";
  navPhone[0].style.backgroundColor = "#c58324";
  for (i = 0; i < star.length; i++) {
    star[i].style.display = "none";
  }
  for (j = 0; j < input.length; j++) {
    input[j].style.backgroundColor = "white";
    input[j].style.color = "black";
  }
  dayBtn.style.animationName = "rotateplanet";
  nightBtn.style.animationName = "none";
}

// daymode -- end

// close option -- start

function openOption() {
  option.classList.add("dropdown");
  option.classList.remove("dropup");
}

function closeOption() {
  option.classList.add("dropup");
  option.classList.remove("dropdown");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// close option -- end

//Profile buttons -- start

function openCard(a, b) {
  block[a].classList.add("flip-card-0-90");
  block[a].classList.remove("flip-card-90-0");
  setTimeout(function openCardInit() {
    block[a].style.visibility = "hidden";
    blockH[b].classList.add("flip-card-90-0");
    blockH[b].style.visibility = "visible";
    blockH[b].classList.remove("flip-card-0-90");
  }, 1000);
}

function closeCard(a, b) {
  blockH[a].classList.add("flip-card-0-90");
  block[b].classList.remove("flip-card-0-90");
  blockH[a].classList.remove("flip-card-90-0");
  setTimeout(function closeCardInit() {
    block[b].classList.add("flip-card-90-0");
    block[b].style.visibility = "visible";
    blockH[n].style.visibility = "hidden";
  }, 1000);
}

function switchBlock(a, b) {
  blockH[a].classList.add("flip-card-0-90");
  blockH[a].classList.remove("flip-card-90-0");
  setTimeout(function switchBlockInit() {
    blockH[b].classList.remove("flip-card-0-90");
    blockH[a].style.visibility = "hidden";
    blockH[b].classList.add("flip-card-90-0");
    blockH[b].style.visibility = "visible";
  }, 1000);
}

//Profile buttons -- end

//hobby closing -- start

function closeMusic() {
  music.style.display = "none";
  hobby.style.display = "grid";
}

function closeSports() {
  sports.style.display = "none";
  hobby.style.display = "grid";
}

function closeTravel() {
  travel.style.display = "none";
  hobby.style.display = "grid";
}

//hobby closing -- end

//hobby & skill nav -- start

//hobby & skill nav -- end

//sport button -- start

function closeTennis() {
  sports.style.display = "grid";
  tennis.style.display = "none";
}

function closeLiverpool() {
  sports.style.display = "grid";
  liverpool.style.display = "none";
}

function closeFoot() {
  sports.style.display = "grid";
  foot.style.display = "none";
}

function closeBasket() {
  sports.style.display = "grid";
  basket.style.display = "none";
}

//sport button -- end

//italie gallery -- start

function openModalItalie() {
  document.getElementById("myModalItalie").style.display = "grid";
}

function closeModalItalie() {
  document.getElementById("myModalItalie").style.display = "none";
}

var slideIndex = 1;
showSlidesItalie(slideIndex);

function plusSlidesItalie(n) {
  showSlidesItalie((slideIndex += n));
}

function currentSlidetalItaliee(n) {
  showSlidesItalie((slideIndex = n));
}

function showSlidesItalie(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesItalie");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
//italie gallery -- end

//philippines gallery -- start

function openModalPhilippines() {
  document.getElementById("myModalPhilippines").style.display = "grid";
}

function closeModalPhilippines() {
  document.getElementById("myModalPhilippines").style.display = "none";
}
var slideIndex = 1;
showSlidesPhilippines(slideIndex);

function plusSlidesPhilippines(n) {
  showSlidesPhilippines((slideIndex += n));
}

function currentSlidePhilippines(n) {
  showSlidesPhilippines((slideIndex = n));
}

function showSlidesPhilippines(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPhilippines");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//philippines gallery -- end

//modal -- start

function openModalResume() {
  document.getElementById("myModalResume").style.display = "flex";
}

function openModalPlaquette() {
  document.getElementById("myModalPlaquette").style.display = "flex";
}

function closeModalPlaquette() {
  document.getElementById("myModalPlaquette").style.display = "none";
}

function closeModalResume() {
  document.getElementById("myModalResume").style.display = "none";
}

function openModalToeic() {
  document.getElementById("myModalToeic").style.display = "flex";
}

function closeModalToeic() {
  document.getElementById("myModalToeic").style.display = "none";
}
//modal -- end

//skill buttons -- start

function closeCode() {
  document.getElementById("codeblock").style.display = "none";
  document.getElementById("skillblock").style.display = "grid";
}

function closeSoft() {
  document.getElementById("softblock").style.display = "none";
  document.getElementById("skillblock").style.display = "grid";
}

function closePro() {
  document.getElementById("problock").style.display = "none";
  document.getElementById("skillblock").style.display = "grid";
}

//skill buttons -- end

//xp buttons -- start

function openXp(a) {
  blockXpInit[a].classList.add("flip-card-0-90-0");
  blockXpInit[a].classList.remove("flip-card-90-0");
  blockXp[a].classList.remove("flip-card-0-90");
  setTimeout(function openXpInit() {
    blockXp[a].style.visibility = "visible";
    blockXp[a].classList.add("flip-card-90-0");
  }, 1000);
}

function closeXp(a) {
  blockXp[a].classList.add("flip-card-0-90");
  blockXp[a].classList.remove("flip-card-90-0");
  for (i = 0; i < blockXpInit.length; i++) {
    blockXpInit[i].classList.remove("flip-card-0-90-0");
  }
  setTimeout(function closeXpInit() {
    blockXp[a].style.visibility = "hidden";
  }, 1000);
}

function switchBlockXp(a, b) {
  blockXp[a].classList.add("flip-card-0-90");
  blockXp[a].classList.remove("flip-card-90-0");
  blockXp[b].classList.remove("flip-card-0-90");
  setTimeout(function closeXpInit() {
    blockXp[b].style.visibility = "visible";
    blockXp[a].style.visibility = "hidden";
    blockXp[b].classList.add("flip-card-90-0");
  }, 1000);
}

//xp buttons -- end

//school nav -- start

function openSchool(a, b) {
  blockS[a].classList.add("flip-card-0-90");
  blockS[a].classList.remove("flip-card-90-0");
  educBlock[b].classList.remove("flip-card-0-90");
  setTimeout(function openSchoolInit() {
    blockS[a].style.visibility = "hidden";
    educBlock[b].classList.add("flip-card-90-0");
    educBlock[b].style.visibility = "visible";
  }, 1000);
}

function closeSchool(a, b) {
  educBlock[a].classList.add("flip-card-0-90");
  blockS[b].classList.remove("flip-card-0-90");
  educBlock[a].classList.remove("flip-card-90-0");
  setTimeout(function closeSchoolInit() {
    blockS[b].classList.add("flip-card-90-0");
    blockS[b].style.visibility = "visible";
    educBlock[a].style.visibility = "hidden";
  }, 1000);
}

function switchSchool(a, b) {
  educBlock[a].classList.add("flip-card-0-90");
  educBlock[a].classList.remove("flip-card-90-0");
  educBlock[b].classList.remove("flip-card-0-90");
  setTimeout(function switchSchoolInit() {
    educBlock[a].style.visibility = "hidden";
    educBlock[b].classList.add("flip-card-90-0");
    educBlock[b].style.visibility = "visible";
  }, 1000);
}

//school nav -- end

//phone nav button -- start

var slideIndex = 1;
tabSlides(slideIndex);

function slideTab(n) {
  tabSlides((slideIndex += n));
}

function tabSlides(n) {
  var i;
  var tab = document.getElementsByClassName("phone-tab");
  var content = document.getElementsByClassName("phone-content");

  if (n > tab.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = tab.length;
  }

  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
    content[i].style.display = "none";
  }

  tab[slideIndex - 1].style.display = "flex";
  content[slideIndex - 1].style.display = "flex";
}

function closeWebPhone() {
  document.getElementById("webblock").style.display = "none";
  document.getElementById("xp-lobby").style.display = "grid";
}

function closeCateringPhone() {
  document.getElementById("cateringblock").style.display = "none";
  document.getElementById("xp-lobby").style.display = "grid";
}

function closeRetailPhone() {
  document.getElementById("retailblock").style.display = "none";
  document.getElementById("xp-lobby").style.display = "grid";
}

function closeOthersPhone() {
  document.getElementById("othersblock").style.display = "none";
  document.getElementById("xp-lobby").style.display = "grid";
}

//phone nav button -- end

// contact form -- start

function messageBlock() {
  const mail = document.getElementById("mail");
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const mailLabel = document.getElementById("mail-label");
  const nameLabel = document.getElementById("name-label");
  const surnameLabel = document.getElementById("surname-label");

  const arrInput = [mail, name, surname];
  const arrLabel = [mailLabel, nameLabel, surnameLabel];

  if (mail.value === "" || name.value === "" || surname.value === "") {
    alert("Veuillez renseigner tous les champs requis svp (champs rouges)");
    for (i = 0; i < arrInput.length; i++) {
      if (arrInput[i].value === "") {
        arrInput[i].style.border = "solid red";
        arrLabel[i].style.color = "red";
      }
    }
    return false;
  } else {
    document.getElementById("message-block").style.display = "flex";
  }
}

function backForm() {
  document.getElementById("message-block").style.display = "none";
}

// Enable local "abbr" plugin from /myplugins/abbr/ folder.
CKEDITOR.plugins.addExternal("abbr", "/myplugins/abbr/", "plugin.js");

// contact form -- end
