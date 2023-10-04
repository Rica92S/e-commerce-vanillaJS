document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Dom Loaded");

const bar= document.getElementById('bar');
const nav =document.getElementById('navbar');
const close=document.getElementById('close')

bar.addEventListener("click", ()=>{
console.log("bar clikked")
nav.classList.add("active")
}
)

close.addEventListener("click", ()=>{
    nav.classList.remove("active")
})





















    
})