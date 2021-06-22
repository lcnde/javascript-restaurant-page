import Whey from './whey.png';
import {pageOneLoad} from './page-1-load.js';
import {pageTwoLoad} from './page-2-load.js';
import {pageThreeLoad} from './page-3-load.js';
 
export function header() {
  var content = document.getElementById("content");

  var header = document.createElement("header");
  content.appendChild(header);

  var whey = document.createElement('div');
  whey.classList.add('whey');
  header.appendChild(whey);

  var button = document.createElement("button");
  button.innerHTML = "Home";
  button.setAttribute("id", "home");
  whey.appendChild(button);

  var image = document.createElement("img");
  image.src = Whey;
  whey.appendChild(image);

  var button = document.createElement("button");
  button.setAttribute("id", "menu");
  button.innerHTML = "Menu";
  header.appendChild(button);

  var button = document.createElement("button");
  button.setAttribute("id", "contact");
  button.innerHTML = "Contact";
  header.appendChild(button);

  //controls buttons behavior
  var home = document.getElementById('home');
  home.addEventListener('click', () => {
    content.innerHTML = "";
    pageOneLoad();
  });

  var menu = document.getElementById('menu');
  menu.addEventListener('click', () => {
    content.innerHTML = "";
    pageTwoLoad();
  });

  var contact = document.getElementById('contact');
  contact.addEventListener('click', () => {
    content.innerHTML = "";
    pageThreeLoad();
  });
}
