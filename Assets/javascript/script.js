function scrollFunc() {
  const navbar = document.getElementById('header');
  const body = document.body;
  const aboutNav = document.getElementById('about-nav');
  const portfolioNav = document.getElementById('portfolio-nav');
  const resumeNav = document.getElementById('resume-nav');
  const contactNav = document.getElementById('contact-nav');
  if (
    document.body.scrollTop > 5 ||
    document.documentElement.scrollTop > 5 ||
    body.scrollTop > 5
  ) {
    navbar.style.height = '65px';
    navbar.style.padding = '0px';
    aboutNav.style.marginLeft = 'calc(100% - 4 * (150px - 12px))';
    aboutNav.className = 'nav-item-scroll';
    portfolioNav.className = 'nav-item-scroll';
    resumeNav.className = 'nav-item-scroll';
    contactNav.className = 'nav-item-scroll';
  } else {
    navbar.style.height = '120px';
    navbar.style.padding = '0';
    aboutNav.style.marginLeft = 'calc(50% - 2 * (150px + 20px))';
    aboutNav.className = 'nav-item-top';
    portfolioNav.className = 'nav-item-top';
    resumeNav.className = 'nav-item-top';
    contactNav.className = 'nav-item-top';
  }
}

document.onscroll = function () {
  scrollFunc();
};
