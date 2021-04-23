'use strict';

import Home from './views/pages/Home/index.js';
import About from './views/pages/About/index.js';
import Projects from './views/pages/Projects/index.js';
import Resume from './views/pages/Resume/index.js';
import Error404 from './views/pages/Error404/index.js';

import Navbar from './views/components/Navbar/index.js';
import Footer from './views/components/Footer/index.js';

const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementsByTagName('header')[0];
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementsByTagName('footer')[0];

  // Render the Header and footer of the page
  header.innerHTML = await Navbar.render();
  const content_data =
    (await About.render()) +
    (await Projects.render()) +
    (await Resume.render());
  content.innerHTML = content_data;
  footer.innerHTML = await Bottombar.render();
  await Navbar.after_render();
  await Bottombar.after_render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
