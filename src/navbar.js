
import './style.css';

export { mainbox, navbar };

/**I know comments are meant to be short and sweet for
 * change logs as well as any updates, but to aid in my own
 * learning,  the first few projects will have comments.
 */

/** DOM logic for creating dynamic buttons.*/
const mainbox = document.getElementById('mainbox');

const navbar = document.createElement('div');
navbar.classList.add('navbar');
mainbox.appendChild(navbar);



/**End of button logic */
