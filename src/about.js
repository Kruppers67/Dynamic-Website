import { setupMainLayout } from './main.js';

document.addEventListener('DOMContentLoaded', () => { /**Ensuring all of the DOM content gets loaded. */
  const aboutContent = setupMainLayout(); /**Creating a variable that we take from setUpMainLayout()'s objectd. */

  if (aboutContent && aboutContent.contentbox) { /**This is new to me(had help), but is a safeguard for preventing my function from returning "undefined". */
    const { contentbox } = aboutContent; /**'Appending' homeContent to my contentbox object from main.js in order to append newchild. */

    const aboutbox = document.createElement('div');/**Child creation(cue baby makin music)... */
    aboutbox.classList.add('aboutbox'); /**Adds a class(been there done that)... */
    contentbox.appendChild(aboutbox);/**And finally appends the child. */

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Page';
    aboutTitle.classList.add('atitle');
    aboutbox.appendChild(aboutTitle);

    const aboutImg = document.createElement('div');
    aboutImg.classList.add('aimage');
    aboutbox.appendChild(aboutImg);

    const aboutlorem = document.createElement('div');
    aboutlorem.classList.add('aboutlorem');
    aboutbox.appendChild(aboutlorem);

    const aloremheader = document.createElement('h2');
    aloremheader.classList.add('aloremtitle');
    aloremheader.textContent = 'About Us!';
    aboutlorem.appendChild(aloremheader);

    const alorem = document.createElement('p');
    alorem.classList.add('alorem');
    alorem.textContent = 'Thank you for checking out my page, this is the about page! Try clicking another tab button!';
    aboutlorem.appendChild(alorem);

  } else {
    console.error('contentbox not available from setupMainLayout'); /**So if the content does not get appended to said child, it will return this error. */
  }
});