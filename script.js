import Backpack from "./book.js";
import backpackObjectArray from "./data.js";

const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  ""
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

const article = document.querySelector("article");
let List = document.createElement("ul");

const Items = backpackObjectArray.map((item)=>{
    const content = `${item.name}
    <li>${item.volume}</li>
    <li>${item.color}</li>
    <li>${item.backpackAge()}</li>
    <li>${item.pocketNum}</li>
    <li>${item.strapLength.left}</li>
    <li>${item.strapLength.right}</li>
    <li>${item.lidOpen ? "open" : "closed"}</li>`;
    let list = document.createElement("li");
    list.innerHTML=content;
    return list;
});

Items.forEach((item)=>{
    List.append(item);
});
article.append(List);