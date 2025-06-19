/**Imports */
import './style.css';
import { boximg } from './assets';

/**Exports */
export { mainbox };

/** DOM logic for creating dynamic buttons and the headerbar.*/

/**Header containers DOM creation */
const mainbox = document.getElementById('mainbox');
mainbox.appendChild(boximg);

const navbar = document.createElement('div');
navbar.classList.add('navbar');
mainbox.appendChild(navbar);

const pagetitle = document.createElement('h1');
pagetitle.textContent = 'Painters Anonymous';
pagetitle.classList.add('title');
mainbox.appendChild(pagetitle);

const profilebox = document.createElement('div');
profilebox.classList.add('profile');
mainbox.appendChild(profilebox);


/**Button Names with dropdown data */
const navBtns = ['Home', 'Store', 'About', 'Contact'];
const dropdownData = {
    Home: ['News', 'Highlights', 'Events'],
    Store: ['Abstract', 'Realism', 'Romanticism'],
    About: ['History', 'Famous Artists', 'Museums'],
    Contact: ['Contact Us', 'Careers', 'Partners'],
};

/**Button Logic */
navBtns.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.textContent = tab;
    btn.classList.add('navbtn');
    btn.id = `btn-${index}`;
    navbar.appendChild(btn);

    const dropbox = document.createElement('div');
    dropbox.classList.add('dropbox');

    const buttonNames = dropdownData[tab] || [];

    buttonNames.forEach(name => {
        const dropbtn = document.createElement('button');
        dropbtn.textContent = name;
        dropbtn.classList.add('dropbtns');
        dropbox.appendChild(dropbtn);
    });

    btn.appendChild(dropbox);

    /** Event listeners & for loop iterating over each button
     * to name, and style.*/
    btn.addEventListener('mouseenter', () => {
        btn.style.borderRadius = '10px 10px 0 0';
        dropbox.classList.add('show');
    });

    btn.addEventListener('mouseleave', () => {
        dropbox.classList.remove('show');
        btn.style.borderRadius = '10px';
    });

    dropbox.addEventListener('mouseleave', () => {
        dropbox.classList.remove('show');
    });
});