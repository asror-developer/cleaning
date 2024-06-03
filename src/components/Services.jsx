import ServiceImage from '../assets/Images/services1.svg'
import ServiceImage2 from '../assets/Images/services2.svg'
import ServiceImage3 from '../assets/Images/services3.svg'
function Services() {
    return (
        <div className='services'>
            <div className='container'>
                <div className='services-container'>
                    <div className='services-box'>
                        <p className='services-text'>Our Services</p>
                        <button className='services-button'>Explore services</button>
                    </div>
                    <div className='services-list'>
                        <ul className='services-item'>
                            <li className='services-name'>
                                <img src={ServiceImage} alt="rasim" width={240} height={210} />
                                <h2 className='services-bold'>House cleaning</h2>
                                <p className='services-bold1'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                            </li>
                            <li className='services-name'>
                                <img src={ServiceImage2} alt="rasim" width={240} height={210} />
                                <h2 className='services-bold'>Office cleaning</h2>
                                <p className='services-bold1'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                            </li>
                            <li className='services-name'>
                                <img src={ServiceImage3} alt="rasim" width={240} height={210} />
                                <h2 className='services-bold'>Industrial cleaning</h2>
                                <p className='services-bold1'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services