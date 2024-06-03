import kubkcha from '../assets/Images/kubkcha.svg'
import footerlogo from '../assets/Images/logo.svg'


function Footer() {
    return (
        <div className="Footer">
          <div className='container'>
            <div className='footer-container'>
                <div className='footer-box'>
                    <ul className='footer-list'>
                        <li className='footer-item'>
                            <h4 className='footer-title'>Quality cleaning for your home</h4>
                            <p className='footer-text'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                            <div className='footer-img'>
                            <img src={kubkcha} alt="rasim" width={36} height={36} />
                            <img src={kubkcha} alt="rasim" width={36} height={36} />
                            <img src={kubkcha} alt="rasim" width={36} height={36} />
                            <img src={kubkcha} alt="rasim" width={36} height={36} />
                            <img src={kubkcha} alt="rasim" width={36} height={36} />
                            </div>
                        </li>
                    </ul>
                    <ul className='footer-name'>
                        <li className='footer-stel'>
                            <h4 className='footer-bold'>Contact us</h4>
                            <p className='footer-bold1'>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                            <p className='footer-bold1'>(414) 567 - 2109</p>
                            <p className='footer-bold1'>contact@cleaning.com</p>
                        </li>
                    </ul>
                    <ul className='footer-main'>
                        <li className='footer-menu'>
                            <h4 className='footer-bold'>Hours</h4>
                            <p className='footer-bold'>Monday to Friday</p>
                            <h4 className='footer-bold1'>6:00 AM - 9:00 PM</h4>
                            <p className='footer-bold'>Saturday & Sunday</p>
                            <p className='footer-bold1'>8:00 AM - 8:00 PM</p>
                        </li>
                    </ul>
                    <ul className='footer-about about-main'>
                        <li className='footer-section'>
                            <h4 className='footer-bold'>Get a free estimate</h4>
                            <a className='footer-bold2' href="">(414) 567 - 2109</a>
                            <p className='footer-bold1'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                            <div className='footer-button'>
                        <button className='footer-btn'>Request a free quote</button>
                    </div>
                        </li>
                    </ul>
                   
                </div>
                <hr className='footer-hr' />
                <div className='footer-notkoin'>
                    <img src={footerlogo} alt="rasm" width={178}  height={42}/>
                    <div className='footer-Bobur'>
                        <p className='footer-tailnd'>Copyright © Cleaning X | Designed by</p>
                        <a className='footer-href' href="">BRIX Templates</a>
                        <p className='footer-tailnd'>- Powered by</p>
                        <a className='footer-href' href="">Webflow</a>
                        <a className='footer-href' href="">Licenses</a>
                    </div>
                </div>
            </div>
          </div>
        </div>

    )
}
export default Footer