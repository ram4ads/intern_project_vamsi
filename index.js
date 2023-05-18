let homeEl = document.getElementById("home");
let loginEl = document.getElementById("login"); 
let rootEl = document.getElementById("root");
let someEl = document.getElementById("something");

let num = 0
let num1 = 0

someEl.addEventListener("click", function() {
  num += 1
  alert(`you have clicked ${num} times`)
})

homeEl.addEventListener("click" , function(){
  num1 += 1
  alert(`you have clicked ${num1} times`)
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

