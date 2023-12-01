import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>Cenomat</h3>
          <img src="/bank.png" alt="Bank" width="50px" height="50px" />
          <p>Stworzone przez <b>Wioletta Koczor</b></p>
          <p>Katowice, 40-000 Polska</p>
          <p className="email-id">koczorwioletta@gmail.com</p>
        </div>
        <div className="col">
          <h3>O Convertiser API</h3>
          <p>Zintegruj Convertiser API, aby zasilać swoją witrynę porównywania cen.</p>
          <p>Skontaktuj się z Convertiser w celu możliwości współpracy:</p>
          <p className="convertiser">Convertiser sp. z o.o.</p>
        </div>
        <div className="col">
          <h3><img src="/img/link.png" alt="Send" width="25px" height="25px" />Linki</h3>
          <ul>
            <li><a href="https://convertiser.com/pl">Strona główna</a></li>
            <li><a href="https://docs.convertiser.com/">Convertiser API</a></li>
            <li><a href="https://wkoczor.pl/">Moja Strona Portfolio</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Wprowadź swój adres e-mail" required />
            <button type="submit">
              <img src="/img/send.png" alt="Send" width="13px" height="13px" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

