const h1 = document.querySelectorAll("h1")
h1.forEach((heading) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animated")
          return
        }
        entry.target.classList.remove("animated")
      })
        
    })
    observer.observe(heading)
    
})

const title = document.querySelectorAll(".creation__title")

// Make header fixed on scroll
const header = document.querySelector("header")
const headerContainer = header.querySelector(".header-container")

const headerIo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerContainer.classList.remove("active")
    } else {
      headerContainer.classList.add("active")
    }
  })
})

headerIo.observe(header)