import backpackObjectArray from "./data.js";

const lidToggle = function (){
  let backpackOject = backpackObjectArray.find(({id})=>id === this.parentElement.id);
  backpackOject.lidOpen == true
  ? backpackOject.lidOpen = false
  : backpackOject.lidOpen = true;

  this.innerText == "Open Lid"
  ? this.innText = "Close Lid"
  : this.innerText = "Open Lid";

  let status = this.parentElement.querySelector(".backpack__lid span");
  status.innerText = "closed"
  ?(status.innerText="open")
  :(status.innerText="closed");
}

const backpackList = backpackObjectArray.map((backpack)=>{
    let article = document.createElement("article");
    article.classList.add("backpack");
    article.setAttribute("id",backpack.id);
    article.innerHTML=`<figure class="backpack__image">
    <img src=${backpack.image} alt="" width = "500" height = "600"/>
  </figure>
  <h1 class="backpack__name">${backpack.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      backpack.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      backpack.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      backpack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      backpack.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      backpack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      backpack.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>
  <button class="lid-toggle">Open lid</button>`;
  const button = article.querySelector(".lid-toggle")
  const status = article.querySelector(".backpack__lid span")

  button.addEventListener("click", (event) => {
    console.log(event)
    status.innerText === "open" ? status.innerText = "closed" : status.innerText = "open"
    //button.innerText === "Close Lid" ? button.innerText = "Open Lid" : button.innerHTML="Close Lid"
  })
  return article;
});
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});

