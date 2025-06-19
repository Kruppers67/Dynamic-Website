import { mainbox } from "./header";

export { contentbox };


const contentbox = document.createElement('div');
contentbox.classList.add('contentbox');
mainbox.appendChild(contentbox);

const homeBtn = document.getElementById(btn-0);

homeBtn.addEventListener('click', () => {
    const homepage = document.createElement('div');
    homepage.classList.add('home');
    contentbox.appendChild(homepage);
});
