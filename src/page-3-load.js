import { header } from './header.js'

export function pageThreeLoad() {
  //this is the function that will create all the divs and elements with the different classes and ids, but you will use separate CSS to style them

  header();

  var content = document.getElementById("content");

  var card = document.createElement("div");
  card.classList.add("card");
  content.appendChild(card);

  var h1 = document.createElement("h1");
  h1.innerHTML = "Contact us";
  card.appendChild(h1);

  var div = document.createElement("div");
  card.appendChild(div);

  var h2 = document.createElement("h2");
  h2.innerHTML = "Iron";
  div.appendChild(h2);

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "No contacts only iron"
  div.appendChild(paragraph);
}
