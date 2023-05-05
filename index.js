let homeEl = document.getElementById("home");
let loginEl = document.getElementById("login"); 
let rootEl = document.getElementById("root");

homeEl.addEventListener("click" , function(){
      rootEl.textContent = "";
      let h1El = document.createElement("h1");
      h1El.textContent = "Welcome to Home Page";
      rootEl.appendChild(h1El);
})

loginEl.addEventListener("click" , function() {
    rootEl.textContent = "" ;
    let h1El = document.createElement("h1");
      h1El.textContent = "You have Sucessfully Login";
      rootEl.appendChild(h1El);
    let pEl = document.createElement("button");
    pEl.textContent = "Continue to home";
    pEl.id = "home1"
    pEl.addEventListener("click" , function() {
        rootEl.textContent = "";
      let h1El = document.createElement("h1");
      h1El.textContent = "Welcome to Home Page";
      rootEl.appendChild(h1El);
    })
    rootEl.appendChild(pEl);
})

