import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    
                    <h3>Cenomat</h3>
                    <img src="/bank.png" alt="Bank" width="50px" height="50px" />
                    <p>Created by <b>Wioletta Koczor</b></p>
                    <p>Katowice, 40-000 Poland</p>
                    <p className="email-id">koczorwioletta@gmail.com</p>
                </div>
                <div className="col">
                    <h3>About Convertiser API</h3>
                    <p>Integrate Convertiser API to power your price comparison website.</p>
                    <p>Contact Convertiser for partnership opportunities:</p>
                    <p class="convertiser">Convertiser sp. z o.o.</p>
                </div>
                <div className="col">
                    <h3><img src="/img/link.png" alt="Send" width="25px" height="25px" />Links</h3>
                    <ul>
                        <li><a href="https://convertiser.com/pl">Home</a></li>
                        <li><a href="https://docs.convertiser.com/">Convertiser API</a></li>
                        <li><a href="https://wkoczor.pl/">Moja Strona Portfolio</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email address" required />
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


/* <p>&copy; 2023 <b>Cenomat</b>.<img src="/bank.png" alt="Bank" width='30px' height='30px'/>
  All rights reserved.</p> */