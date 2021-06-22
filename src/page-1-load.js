import { header } from './header.js'

export function pageOneLoad() {
  //this is the function that will create all the divs and elements with the different classes and ids, but you will use separate CSS to style them
  console.log("hi 1"); //this is a test to see if the code got imported

  header();

  var content = document.getElementById("content");

  var card = document.createElement("div");
  card.classList.add("card");
  content.appendChild(card);

  var h1 = document.createElement("h1");
  h1.innerHTML = "Iron's Breakfast Bar";
  card.appendChild(h1);

  var div = document.createElement("div");
  card.appendChild(div);

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Lift and eat iron for the promotional price of FREE.99$"
  div.appendChild(paragraph);

  var h2 = document.createElement("h2");
  h2.innerHTML = "-The Rock";
  div.appendChild(h2);

  var div = document.createElement("div");
  card.appendChild(div);

  var h2 = document.createElement("h2");
  h2.innerHTML = "Hours";
  div.appendChild(h2);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Sunday: 8am - 8pm";
  div.appendChild(childDiv);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Monday: 6am - 6pm";
  div.appendChild(childDiv);
  
  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Tuesday: 6am - 6pm";
  div.appendChild(childDiv);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Wednesday: 6am - 6pm";
  div.appendChild(childDiv);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Thursday: 6am - 10pm";
  div.appendChild(childDiv);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Friday: 6am - 10pm";
  div.appendChild(childDiv);

  var childDiv = document.createElement("div");
  childDiv.innerHTML = "Saturday: 8am - 10pm";
  div.appendChild(childDiv);

  var div = document.createElement("div");
  card.appendChild(div);

  var h2 = document.createElement("h2");
  h2.innerHTML = "Location";
  div.appendChild(h2);

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Not your couch"
  div.appendChild(paragraph);
}
