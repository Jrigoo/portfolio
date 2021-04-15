// ********** TAB CONTENT ************
const año2019 = document.getElementById("año2019");
const año2020 = document.getElementById("año2020");
const año2021 = document.getElementById("año2021");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");

año2019.addEventListener("click", () => {
  tab2.classList.add("nope");
  tab3.classList.add("nope");
  tab4.classList.add("nope");
  tab1.classList.remove("nope");
});
año2020.addEventListener("click", () => {
  tab4.classList.add("nope");
  tab1.classList.add("nope");
  tab2.classList.remove("nope");
  tab3.classList.remove("nope");
});
año2021.addEventListener("click", () => {
  tab4.classList.remove("nope");
  tab2.classList.add("nope");
  tab3.classList.add("nope");
  tab1.classList.add("nope");
});

// ********** BURGER DISPLAY ************
const burger = document.getElementById("burger");
const links = document.getElementById("links");
const section = document.getElementById("section");
const linksContainer = document.getElementById("links-container");

burger.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar and button ************

const navbar = document.getElementById("nav");
const navHeight = navbar.getBoundingClientRect().height;
const topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const about = document.getElementById("about");
  const experience = document.getElementById("experience");

  /* console.log(scrollHeight); */
  /* NAV BAR PEGADA AL TOP---------------------- */
  if (scrollHeight > navHeight - 10) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  /* HACER QUE NAV BAR DESPAREZCA EN CIERTO PUNTO */
  if (scrollHeight > experience.offsetTop) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "";
  }

  /* BOTON QUE SALE Y LLEVA AL HOME ----------------- */
  if (scrollHeight > about.offsetTop + 100) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }

  /* BOTON PERO QUE CAMBIE DE COLOR ------------------- */
  if (scrollHeight > experience.offsetTop - 100) {
    topBtn.classList.remove("show-on-light");
    topBtn.classList.add("show-on-dark");
  } else {
    topBtn.classList.remove("show-on-dark");
    topBtn.classList.add("show-on-light");
  }
});

/* SCROLL Y NAV BAR ----------------------------- */

const scrollLinks = document.querySelectorAll("#scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    //Esto lo que hace es quitar el hecho de que este #about y se mueva
    event.preventDefault();
    //navegar a un lugar especifico : #about, etc..
    //Lo que nos brinda esto es el href epecifico
    //Lo que hace slice me da el nombre y no es hashtag
    const id = event.currentTarget.getAttribute("href").slice(1);

    //Aca estoy agarrando el id de cada div individual
    const element = document.getElementById(id);
    const fixedNav = navbar.classList.contains("fixed-nav");
    const linksHeight = links.getBoundingClientRect().height;

    if (!fixedNav) {
      //Si no hay fixed: Cuando llega al final o al inicio
      position = element.offsetTop - navHeight - linksHeight;
    } else {
      //Si hay fixed, digamos que estas con el navbar recorriendo la pagina
      position = element.offsetTop - navHeight;
    }

    //Como el navbar desaparece al llegar al final:
    if (element.classList.value === "contact") {
      position = element.offsetTop;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});

/* CONTACT ME BOTTON --------------------------------------- */
const contacMe = document.getElementById("contactMe");
const emailBtn = document.getElementById("emailBtn");

contacMe.addEventListener("click", () => {
  window.open("mailto:pk.juanr@gmail.com");
});
emailBtn.addEventListener("click", () => {
  window.open("mailto:pk.juanr@gmail.com");
});
