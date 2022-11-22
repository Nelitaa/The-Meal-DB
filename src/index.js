// start import
import "./style.css";
const footer = require("./modules/footer.js");
// start import

// start all required elements
const parfoot = document.querySelector(".footer__container__parfoot");
// end all required elements

// start footer UI
const footerUI = (items) => {
  items.forEach(() => {
    parfoot.innerHTML = `
    <div class="footer__container__parfoot__foot">
            <h2>${items[0]}</h2>
            <p>${items[1]}</p>
            <h3>${items[2]}</h3>
            <p>${items[3]}</p>
          </div>
          <div class="footer__container__parfoot__foot">
            <h3>${items[4]}</h3>
            <ul>
              <li><a href="">${items[5]}</a></li>
              <li><a href="">${items[6]}</a></li>
              <li><a href="">${items[7]}</a></li>
              <li><a href="">${items[8]}</a></li>
              <li><a href="">${items[9]}</a></li>
            </ul>
          </div>
          <div class="footer__container__parfoot__foot">
            <h3>${items[10]}</h3>
            <ul>
              <li><a href="">${items[11]}</a></li>
              <li><a href="">${items[12]}</a></li>
              <li><a href="">${items[13]}</a></li>
              <li><a href="">${items[14]}</a></li>
              <li><a href="">${items[15]}</a></li>
            </ul>
          </div>
          <div class="footer__container__parfoot__foot">
            <h3>${items[16]}</h3>
            <ul>
              <li><a href="">${items[17]}</a></li>
              <li><a href="">${items[18]}</a></li>
              <li><a href="">${items[19]}</a></li>
             <div class="formcontrol">
              <input type="email" name="email" placeholder="Email">
             </div>
            </ul>
          </div>
    `;
  });
};
footerUI(footer);
// end UI footer UI
