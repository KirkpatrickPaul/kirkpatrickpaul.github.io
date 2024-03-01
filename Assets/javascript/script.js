// Makes navbar respond when at the top or not
function scrollFunc() {
  const navbar = document.getElementById("header");
  const body = document.body;
  const aboutNav = document.getElementById("about-nav");
  const portfolioNav = document.getElementById("portfolio-nav");
  // const resumeNav = document.getElementById('resume-nav');
  const contactNav = document.getElementById("contact-nav");

  if (
    document.body.scrollTop > 5 ||
    document.documentElement.scrollTop > 5 ||
    body.scrollTop > 5
  ) {
    navbar.style.height = "55px";
    navbar.style.padding = "0px";
    aboutNav.style.marginLeft = "calc(100% - 4 * (155px - 11px))";
    aboutNav.className = "nav-item-scroll";
    portfolioNav.className = "nav-item-scroll";
    // resumeNav.className = 'nav-item-scroll';
    contactNav.className = "nav-item-scroll";
  } else {
    navbar.style.height = "175px";
    navbar.style.padding = "0";
    aboutNav.style.marginLeft = "calc(50% - 2 * (170px + 20px))";
    aboutNav.className = "nav-item-top";
    portfolioNav.className = "nav-item-top";
    // resumeNav.className = 'nav-item-top';
    contactNav.className = "nav-item-top";
  }
}

// taken from http://www.komante.com/articles/smooth_background_image_scrolling
function smoothBackgroundScroll(imgsrc) {
  function loadImageHeight(url, width = 0) {
    let img = new Image();
    img.src = url;
    if (width) {
      img.width = width;
    }
    return img.height;
  }

  let dh, wh, ih, st, posy, backh, backw;
  if (!this._smoothBackgroundScroll) {
    const bcksize = document.body.style.backgroundSize;
    const bmatch = /(\w+)\s*(\w+)/.exec(bcksize);
    if (!bmatch || bmatch.length < 3) {
      backh = loadImageHeight(imgsrc);
    } else {
      backh = parseInt(bmatch[2]);
      if (isNaN(backh)) {
        backw = parseInt(bmatch[1]);
        backh = loadImageHeight(imgsrc, parseInt(backw));
      }
    }
    this._smoothBackgroundScroll = {
      dh: Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ),
      wh: window.innerHeight,
      ih: Math.max(backh, 1519),
    };
  }
  dh = this._smoothBackgroundScroll.dh;
  wh = this._smoothBackgroundScroll.wh;
  ih = this._smoothBackgroundScroll.ih;
  st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  posy = ((dh - ih) * st) / (dh - wh);
  document.body.style.backgroundPosition = "center " + posy + "px";
}
preload = new Image();
preload.src = "Assets/images/background_image_W1920.jpg";

window.addEventListener("load", (_) => {
  preload = new Image();
  preload.src = "Assets/images/background_image_W1920.jpg";
  let timer;
  window.addEventListener("scroll", function () {
    if (!timer) {
      timer = window.setTimeout(function () {
        scrollFunc();
        smoothBackgroundScroll("Assets/images/background_image_W1920.jpg");
        window.clearTimeout(timer);
        timer = null;
      }, 15);
    }
  });
});
