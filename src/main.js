/**Imports */

import './style.css';
import { mainbox, navbar, navBtns, bodybox } from "./navbar";

const pagetitle = document.createElement('h1');
pagetitle.textContent = 'Paint Store';
pagetitle.classList.add('title');
mainbox.appendChild(pagetitle);

const contentbox = document.createElement('div');
contentbox.classList.add('contentbox');
mainbox.appendChild(contentbox);


