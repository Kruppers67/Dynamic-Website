
import './style.css';

export { mainbox, navbar, navBtns, };
import { boximg } from './assets';

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
});


/**End of button/navbar logic */
