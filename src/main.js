import './style.css';
import mainbackground from './assets/pngtree-abstract-blurred-gradient-background-in-bright-rainbow-colors-colorful-rainbow-gradient-image_15684346.jpg';

// Declare variables at top level so they can be exported
let mainbox, contentbox, boximg, navbar, pagetitle, profilebox;

document.addEventListener('DOMContentLoaded', () => {
  mainbox = document.getElementById('mainbox');
  if (!mainbox) {
    console.error('mainbox element not found');
    return;
  }

  boximg = document.createElement('img');
  boximg.src = mainbackground;
  boximg.alt = 'Black and white background image.';
  boximg.classList.add('boximg');
  mainbox.appendChild(boximg);

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

  profilebox = document.createElement('div');
  profilebox.classList.add('profile');
  mainbox.appendChild(profilebox);

  const navBtns = ['Home', 'Store', 'About', 'Contact'];
  const dropdownData = {
    Home: ['News', 'Highlights', 'Events'],
    Store: ['Abstract', 'Realism', 'Romanticism'],
    About: ['History', 'Famous Artists', 'Museums'],
    Contact: ['Contact Us', 'Careers', 'Partners'],
  };

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
});

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