function ready(callback) {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function toggleClass(node, className) {
  node.classList.toggle(className);
}

ready(() => {});
