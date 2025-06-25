import { setupMainLayout } from './main.js';

document.addEventListener('DOMContentLoaded', () => { /**Ensuring all of the DOM content gets loaded. */
  const contactContent = setupMainLayout(); /**Creating a variable that we take from setUpMainLayout()'s objectd. */

  if (contactContent && contactContent.contentbox) { /**This is new to me(had help), but is a safeguard for preventing my function from returning "undefined". */
    const { contentbox } = contactContent; /**'Appending' homeContent to my contentbox object from main.js in order to append newchild. */

    const contactbox = document.createElement('div');/**Child creation(cue baby makin music)... */
    contactbox.classList.add('contactbox'); /**Adds a class(been there done that)... */
    contentbox.appendChild(contactbox);/**And finally appends the child. */

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Page';
    contactTitle.classList.add('ctitle');
    contactbox.appendChild(contactTitle);

    const contactImg = document.createElement('div');
    contactImg.classList.add('cimage');
    contactbox.appendChild(contactImg);

    const contactlorem = document.createElement('div');
    contactlorem.classList.add('contactlorem');
    contactbox.appendChild(contactlorem);

    const cloremheader = document.createElement('h2');
    cloremheader.classList.add('cloremtitle');
    cloremheader.textContent = 'Contact Us!';
    contactlorem.appendChild(cloremheader);

    const clorem = document.createElement('p');
    clorem.classList.add('clorem');
    clorem.textContent = 'Thank you for checking out my page, this is the contact page! Try clicking another tab button!';
    contactlorem.appendChild(clorem);

  } else {
    console.error('contentbox not available from setupMainLayout'); /**So if the content does not get appended to said child, it will return this error. */
  }
});