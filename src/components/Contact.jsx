import telefon from '../assets/Images/tel.svg'
function Contact() {
    return (

        <div className="contact">
            <div className="container">
                <div className='contact-bulean'>
                <div className='contact-play'>
                    <div className="contact-container">
                        <div className="contact-box">
                            <div className="contact-wrap">
                                <h3 className="contact-title">Contact Us</h3>
                                <p className="contact-text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                                <div className="contact-tel">
                                    <img src={telefon} alt="rasim" width={72} height={72} />
                                    <div className='contact-stel'>
                                        <h4 className='contact-strong'>Call us now</h4>
                                        <span className='contact-span'>(414) 567 - 2109</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='contact-name'>
                            <hr className='contact-hr' />
                            <p className='contact-bold'>Not convinced yet?</p>
                            <span className='contact-matn'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</span>
                            <div className='contact-btn'>
                                <button className='contact-button'>Browse our packages</button>
                            </div>
                        </div>

                    </div>
                    <div className='contact-item'>
                        <ul className='contact-main'>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Full name</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Phone number</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className='contact-main'>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Address</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Email</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className='contact-main'>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Requested service</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Day of service</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input' type="text" required />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className='contact-main'>
                            <li className='contact-about'>
                                <div className='contact-x'>
                                    <h1 className='contact-phone'>Add a note</h1>
                                    <div className='contact-omega'>
                                        <input className='contact-input1' type="text" required />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className='contact-submit'>
                        <button className='contact-ples'>Submit message</button>
                    </div>
                    </div>
                 
                </div>
                </div>
            </div>
        </div>
    )
}
export default Contact