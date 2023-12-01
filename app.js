let i = 0

function id() {
  i++
  return i
}

console.log(id())
console.log(id())
console.log(id())
console.log(id())

const h1 = document.querySelector(".heading-primary")

h1.addEventListener("click", function () {
  const myName = "Andrii Prokhor"
  h1.textContent = myName
  h1.style.backgroundColor = "red"
})

const yearEl = document.querySelector(".year")
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

const btnNavEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open")
})

const allLinks = document.querySelectorAll("a:link")
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const href = link.getAttribute("href")

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: "smooth" })
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open")
  })
})

// Sticky nav
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(
  function (e) {
    const ent = e[0]
    console.log(ent)

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky")
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky")
    }
  },
  {
    root: null,
    treshold: 0,
    rootMargin: "-80px",
  }
)
obs.observe(sectionHeroEl)

const newFeature = function () {
  console.log("Welcome to the application!")
}
