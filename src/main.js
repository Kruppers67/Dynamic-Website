/**Friendly Note: Hi, Lyla here. Please be aware, the notes included are for
 * legitimacy of my involvement in the creation of this app. There are a lot, 
 * but I believe it is necessary for my own learning, as well as to show case
 * my interpretation of my own code, as well as others.
 * 
 * As this is one of my first professional portfolio projects, I will
 * not include as many comments in the following projects unless for learning
 * purposes.
 */


/**IMPORTS */
import './style.css';
import mainbackground from './assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg';

/**Variable declaration for function export(see end of page LINE 100) */
let mainbox, contentbox, boximg, navbar, pagetitle, profilebox;


/**DOM wrapper for loading DOM content. */
document.addEventListener('DOMContentLoaded', () => {
  mainbox = document.getElementById('mainbox');
  if (!mainbox) {
    console.error('mainbox element not found');
    return;
  }


  /**Footer Content */
  const footer = document.getElementById('footer');
  footer.classList.add('footpage');

  const email = document.createElement('p');
  email.textContent = 'Email: LylaTheDev@yahoo.com';
  email.classList.add('email');
  footer.appendChild(email);

  const phonenum = document.createElement('p');
  phonenum.textContent = 'Phone #: xxx-xxx-xxxx';
  phonenum.classList.add('phonenum');
  footer.appendChild(phonenum);

  const gitlabel = document.createElement('p');
  gitlabel.textContent = 'GitHub:';
  gitlabel.classList.add('gitlabel');
  footer.appendChild(gitlabel);

  const gitlink = document.createElement('a');
  gitlink.href = 'https://github.com/Kruppers67';
  gitlink.textContent = 'Kruppers67 - Github';
  gitlink.classList.add('gitlink');
  footer.appendChild(gitlink);

  const linklabel = document.createElement('p');
  linklabel.textContent = 'LinkedIn:';
  linklabel.classList.add('linklabel');
  footer.appendChild(linklabel);

  const linkedlink = document.createElement('a');
  linkedlink.href = 'https://www.linkedin.com/in/lyla-roberts-124bb4260/';
  linkedlink.textContent = 'Lyla Roberts - LinkedIn';
  linkedlink.classList.add('linkedlink');
  footer.appendChild(linkedlink);
  
  /**End of footer content */

  /**Append image container to 'mainbox' */

  boximg = document.createElement('img');
  boximg.src = mainbackground;
  boximg.alt = 'Black and white background image.';
  boximg.classList.add('boximg');
  mainbox.appendChild(boximg);

  /**End of image container appending */

  /**Element creation for contentbox, navbar(buttons and dropdown), and pagetitle*/

  contentbox = document.createElement('div');
  contentbox.classList.add('contentbox');
  mainbox.appendChild(contentbox);

  navbar = document.createElement('div');
  navbar.classList.add('navbar');
  mainbox.appendChild(navbar);

  pagetitle = document.createElement('h1');
  pagetitle.textContent = 'Painters Anonymous';
  pagetitle.classList.add('title');
  mainbox.appendChild(pagetitle);

  /**End of Element creation. */

  /**Profile creation logic */

  profilebox = document.createElement('div');
  profilebox.classList.add('profile');
  mainbox.appendChild(profilebox);

  /**End Of profile creation logic. */

  /**Nav Button Arrays, line 79 is the directory buttons, while
   * line 80 is for each drop down button.*/

  const navBtns = ['Home', 'Store', 'About', 'Contact'];
  const dropdownData = {
    Home: ['News', 'Highlights', 'Events'],
    Store: ['Abstract', 'Realism', 'Romanticism'],
    About: ['History', 'Famous Artists', 'Museums'],
    Contact: ['Contact Us', 'Careers', 'Partners'],
  };

  /**Nav Button array ending. */

  /**Button Logic */

  navBtns.forEach((tab, index) => {  /**Identifiers for each tab from navBtns array. */
    const btn = document.createElement('button');
    btn.textContent = tab;
    btn.classList.add('navbtn');
    btn.id = `btn-${index}`; /**To give unique ID's to btns: btn-0='Home', btn-1, etc. */
    navbar.appendChild(btn);

    const routeMap = {
    Home: '/home',
    Store: '/store',
    About: '/about',
    Contact: '/contact'
    };

    btn.addEventListener('click', () => {
      const route = routeMap[tab];
      if (route) {
        window.location.href = route; // ⬅️ Redirects to EJS route
      }
    });

    const dropbox = document.createElement('div'); /**For the dropdowns */
    dropbox.classList.add('dropbox');

    const buttonNames = dropdownData[tab] || []; /**Iterates through array. With fallback if no data is present. */
    buttonNames.forEach(name => {  /**As it iterates through the array, it will apply the following to each. */
      const dropbtn = document.createElement('button'); /**For each array item, create a button. */
      dropbtn.textContent = name; /**Then give it some text/labels. */
      dropbtn.classList.add('dropbtns'); /**Add class. */
      dropbox.appendChild(dropbtn);
    });

    btn.appendChild(dropbox);

    /**End button logic */

    /**Event listeners */

    btn.addEventListener('mouseenter', () => {
      btn.style.borderRadius = '10px 10px 0 0';
      dropbox.classList.add('show');   /**Helpful for animations! */
    });

    btn.addEventListener('mouseleave', () => {
      dropbox.classList.remove('show');
      btn.style.borderRadius = '10px';
    });

    dropbox.addEventListener('mouseleave', () => {
      dropbox.classList.remove('show');
    });
  });
});

/**End all button logic for navbar! */

/**EXPORTS */

export function setupMainLayout() {
  const mainbox = document.getElementById('mainbox');
  if (!mainbox) return null;

  return {
    mainbox,
    contentbox,
    boximg,
    navbar,
    pagetitle,
    profilebox,
  };
}