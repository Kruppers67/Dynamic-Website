/**This is my homepage(first dynamic setup using js and EJS!)
 * Down below is the logic to create the layout for the homepage.
 */

import { setupMainLayout } from './main.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => { /**Ensuring all of the DOM content gets loaded. */
  const homeContent = setupMainLayout(); /**Creating a variable that we take from setUpMainLayout()'s objectd. */

  if (homeContent && homeContent.contentbox) { /**This is new to me(had help), but is a safeguard for preventing my function from returning "undefined". */
    const { contentbox } = homeContent; /**'Appending' homeContent to my contentbox object from main.js in order to append newchild. */

    const homebox = document.createElement('div');/**Child creation(cue baby makin music)... */
    homebox.classList.add('homebox'); /**Adds a class(been there done that)... */
    contentbox.appendChild(homebox);/**And finally appends the child. */

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Homepage';
    homeTitle.classList.add('htitle');
    homebox.appendChild(homeTitle);

    const homeImg = document.createElement('div');
    homeImg.classList.add('himage');
    homebox.appendChild(homeImg);

    const homelorem = document.createElement('div');
    homelorem.classList.add('hlorem');
    homebox.appendChild(homelorem);

    const loremheader = document.createElement('h2');
    loremheader.classList.add('loremtitle');
    loremheader.textContent = 'Welcome!';
    homelorem.appendChild(loremheader);

    const lorem = document.createElement('p');
    lorem.classList.add('lorem');
    lorem.textContent = 'Thank you for checking out my page, this is the home page! Try clicking another tab button!';
    homelorem.appendChild(lorem);

  } else {
    console.error('contentbox not available from setupMainLayout'); /**So if the content does not get appended to said child, it will return this error. */
  }
});
