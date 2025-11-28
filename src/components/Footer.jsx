import standardAuditingLogo from '../assets/standard_auditing_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__column">
          <div className="site-footer__logo-wrapper">
            <img 
              src={standardAuditingLogo} 
              alt="Standard Auditing Logo" 
              className="site-footer__logo-image"
            />
          </div>
          <address className="site-footer__address body-opensans">
            Office No 112, NBQ Building, Bank Street, Dubai, United Arab Emirates
          </address>
          <a href="mailto:info@standardauditors.com" className="site-footer__email body-opensans">
            info@standardauditors.com
          </a>
          <div className="site-footer__social">
            <a href="#" className="site-footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
            <a href="#" className="site-footer__social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.92931 4.55318 2.50188 4.80824 2.16129 5.15941C1.8207 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.16156 0.991236 9.93062 1 11.7C0.991236 13.4694 1.14521 15.2384 1.46 16.98C1.57879 17.4546 1.8207 17.8894 2.16129 18.2406C2.50188 18.5918 2.92931 18.8468 3.4 18.98C5.12 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.98C21.0707 18.8468 21.4981 18.5918 21.8387 18.2406C22.1793 17.8894 22.4212 17.4546 22.54 16.98C22.8548 15.2384 23.0088 13.4694 23 11.7C23.0088 9.93062 22.8548 8.16156 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M9.75 15.02L15.5 11.7L9.75 8.38V15.02Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Services</h3>
          <ul className="site-footer__links">
            <li><a href="#" className="body-opensans">Tax Advisory</a></li>
            <li><a href="#" className="body-opensans">Corporate Tax</a></li>
            <li><a href="#" className="body-opensans">Auditing</a></li>
            <li><a href="#" className="body-opensans">Accounting & Bookkeeping</a></li>
            <li><a href="#" className="body-opensans">VAT</a></li>
            <li><a href="#" className="body-opensans">Company Formation</a></li>
          </ul>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Support</h3>
          <ul className="site-footer__links">
            <li><a href="#" className="body-opensans">Help center</a></li>
            <li><a href="#" className="body-opensans">Ticket Support</a></li>
            <li><a href="#" className="body-opensans">FAQ</a></li>
            <li><a href="#" className="body-opensans">Contact</a></li>
          </ul>
        </div>
        <div className="site-footer__column">
          <h3 className="site-footer__column-title h5-montserrat">Company</h3>
          <ul className="site-footer__links">
            <li><Link to="/about" className="body-opensans">About us</Link></li>
            <li><a href="#" className="body-opensans">Leadership</a></li>
            <li><a href="#" className="body-opensans">Careers</a></li>
            <li><a href="#" className="body-opensans">News & articles</a></li>
            <li><a href="#" className="body-opensans">Legal Notices</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__divider"></div>
      <div className="site-footer__bottom">
        <p className="site-footer__copyright small-body-opensans">
          Copyright © 2025 Standard Auditors, All rights reserved.
        </p>
        <div className="site-footer__legal">
          <a href="#" className="small-body-opensans">Terms of use</a>
          <a href="#" className="small-body-opensans">Cookies policy</a>
          <a href="#" className="small-body-opensans">Privacy policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

