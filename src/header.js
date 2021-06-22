import Whey from './whey.png';

export function header() {
  var content = document.getElementById("content");

  var header = document.createElement("header");
  content.appendChild(header);

  var whey = document.createElement('div');
  whey.classList.add('whey');
  header.appendChild(whey);

  var button = document.createElement("button");
  button.innerHTML = "Home";
  whey.appendChild(button);

  var image = document.createElement("img");
  image.src = Whey;
  whey.appendChild(image);

  var button = document.createElement("button");
  button.innerHTML = "Menu";
  header.appendChild(button);

  var button = document.createElement("button");
  button.innerHTML = "Contact";
  header.appendChild(button);
}
