alert("I am Linked")

//  Even Listners
const toggelBtn = document.getElementById("Btn-toggel")

toggelBtn.addEventListener("click", () => {
    console.log("hi i am there")


const bodyRef = document.querySelector("body")

if (bodyRef.style.backgroundColor == "black") {
    // user want to get light mode
    bodyRef.style.backgroundColor ="white"
    bodyRef.style.color = "black"
} else {
    //user want to get dark mode
    bodyRef.style.backgroundColor ="black"
    bodyRef.style.color = "white"
}
})

const paraRef=document.querySelector("#para")

paraRef.addEventListener("mouseout", () => {
    alert("i am inside para a thief came")
})

const form = document.querySelector("#user form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("submitted")
})
