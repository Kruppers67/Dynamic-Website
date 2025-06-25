import { setupMainLayout } from './main.js';

document.addEventListener('DOMContentLoaded', () => { /**Ensuring all of the DOM content gets loaded. */
  const storeContent = setupMainLayout(); /**Creating a variable that we take from setUpMainLayout()'s objectd. */

  if (storeContent && storeContent.contentbox) { /**This is new to me(had help), but is a safeguard for preventing my function from returning "undefined". */
    const { contentbox } = storeContent; /**'Appending' homeContent to my contentbox object from main.js in order to append newchild. */

    const storebox = document.createElement('div');/**Child creation(cue baby makin music)... */
    storebox.classList.add('storebox'); /**Adds a class(been there done that)... */
    contentbox.appendChild(storebox);/**And finally appends the child. */

    const storeTitle = document.createElement('h1');
    storeTitle.textContent = 'Store Page';
    storeTitle.classList.add('stitle');
    storebox.appendChild(storeTitle);

    const storeImg = document.createElement('div');
    storeImg.classList.add('simage');
    storebox.appendChild(storeImg);

    const storelorem = document.createElement('div');
    storelorem.classList.add('storelorem');
    storebox.appendChild(storelorem);

    const sloremheader = document.createElement('h2');
    sloremheader.classList.add('sloremtitle');
    sloremheader.textContent = 'Our Product!';
    storelorem.appendChild(sloremheader);

    const slorem = document.createElement('p');
    slorem.classList.add('slorem');
    slorem.textContent = 'Thank you for checking out my page, this is the store page! Try clicking another tab button!';
    storelorem.appendChild(slorem);

  } else {
    console.error('contentbox not available from setupMainLayout'); /**So if the content does not get appended to said child, it will return this error. */
  }
});