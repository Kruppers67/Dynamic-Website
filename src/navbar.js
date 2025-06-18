
/**Imports */
import './style.css';
import { boximg } from './assets';

/**Exports */
export { mainbox, navbar, navBtns, };

/**I know comments are meant to be short and sweet for
 * change logs as well as any updates, but to aid in my own
 * learning,  the first few projects will have comments.
 */

/** DOM logic for creating dynamic buttons and the navbar.*/

const mainbox = document.getElementById('mainbox');
mainbox.appendChild(boximg);

const navbar = document.createElement('div');
navbar.classList.add('navbar');
mainbox.appendChild(navbar);

const navBtns = ['Home', 'Store', 'About', 'Contact'];

navBtns.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.textContent = tab;
    btn.classList.add('navbtn');
    navbar.appendChild(btn);
    btn.id = `btn-${index}`;


/**End of button/navbar logic */

/**Dropdown button logic. Buttons will appear on mouseenter.*/
    const dropbox = document.createElement('div');
    dropbox.classList.add('dropbox');
    dropbox.style.display = 'none';

    for(let i = 1; i <= 3; i++) {
        const dropbtn = document.createElement('button');
        dropbtn.textContent = `${tab} Option ${i}`;
        dropbtn.classList.add('dropbtns');
        dropbox.appendChild(dropbtn);
    };

    btn.appendChild(dropbox);


/**Event listeners for buttons */

    btn.addEventListener('mouseenter', () => {
    dropbox.style.display = 'block';
    });

    btn.addEventListener('mouseleave', () => {
    dropbox.style.display = 'none';
    });
    dropbox.addEventListener('mouseleave', () => {
    dropbox.style.display = 'none';
    });
});