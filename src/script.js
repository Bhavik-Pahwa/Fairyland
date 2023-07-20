function unhide(){
    let form = document.querySelector("form");
    if (form.style.display === "block") {
        form.style.display = "none";
      } else {
        form.style.display = "block";
}}

function sub(){
    let form = document.querySelector("form");
    form.innerHTML="<h3>Mail Sent<h3>"
    setTimeout(()=>{
        form.style.display = "none"
    }, 2000)
}

function swap(){
    let store = document.querySelector(".container");
    let checkout = document.querySelector(".checkout");

    store.style.display = "none";
    checkout.style.display = "flex";
}

function clear(){
    let checkout = document.querySelector(".checkout");
    checkout.style.display = "none"
}