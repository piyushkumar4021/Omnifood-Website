//////////////////////////////////////////////////////////
// Update Copyright Date
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

//////////////////////////////////////////////////////////
// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////////////
// Sticky navigation

///////////////// Not Working as Expected ///////////////

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////

// const el = document.querySelectorAll("a");
// console.log(el);

// console.log("Hello World!");

// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = "Piyush Kumar";
//   h1.style.backgroundColor = "tomato";
//   h1.style.padding = "3rem";
// });

// const temp2 = document.querySelector(".main-nav");
// const temp = document.querySelector(".close");
// temp.addEventListener("click", function () {
//   temp2.style.opacity = "0";
//   temp2.style.visibility = "hidden";
// });

// console.log(temp2);
