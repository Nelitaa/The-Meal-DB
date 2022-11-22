// start import
import './style.css';

const footer = require('./modules/footer.js');
// start import

// start all required elements
const last = document.querySelector('footer .last');
// end all required elements

// start footer UI
const footerUI = (items) => {
  items.forEach(() => {
    last.innerHTML = `
    <div class="">${items[0]}</div>
    <div class="">${items[1]}</div>
          <div class="">${items[2]}</div>
    `;
  });
};
footerUI(footer);
// end UI footer UI
