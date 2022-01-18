import backpackObjectArray from "./data.js";

const backpackList = backpackObjectArray.map((backpack)=>{
    let article = document.createElement("article");
    article.classList.add("backpack");
    article.setAttribute("id",backpack.id);
    article.innerHTML=`<figure class="backpack__image">
    <img src=${backpack.image} alt="" />
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
  })
  return article;
});
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});

