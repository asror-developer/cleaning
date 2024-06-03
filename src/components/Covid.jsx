import Asror from '../assets/Images/covid-image.png'
import phone from '../assets/Images/tel.svg'
function Covid() {
    return(
    <div className="covid">
        <div className="container">
            <div className="covid-container">
                <div className="covid-box">
                    <img src={Asror} alt="rasim" width={518} height={676} />
                </div>
                <div className='covid-list'>
                    <h2 className='covid-title'>Covid-19 sanitization</h2>
                    <p className='covid-text'>We follow guidelines to keep you safe from the COVID-19 virus</p>
                    <span className='covid-span'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</span>
                    <div className='covid-wrapper'>
                    <button className='covid-button'>Get a free quote</button>
                    <img src={phone} alt="rasim" width={72} height={72} />
                    <div className='covid-stel'>
                        <span className='covid-name'>Call us now</span>
                        <p className='covid-name-text'>(414) 567 - 2109</p>
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    </div>

    )
}
export default Covid