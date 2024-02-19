let r = document.getElementById("R")
let g = document.getElementById("G")
let b = document.getElementById("B")
let h = document.getElementById("h")
r.addEventListener("click" , () => {
    h.style.color = `rgb(${r.value}, ${g.value}, ${b.value})`
})
g.addEventListener("click" , () => {
    h.style.color = `rgb(${r.value}, ${g.value}, ${b.value})`
})
b.addEventListener("click" , () => {
    h.style.color = `rgb(${r.value}, ${g.value}, ${b.value})`
})