import about1 from '../assets/Images/about1.svg'
import about2 from '../assets/Images/about2.svg'
import about3 from '../assets/Images/about3.svg'
function About() {
    return(
        <div className='about'>
        <div className='container'>
          <div className='about-container'>
            <div className='about-box'>
              <h1 className='about-title'>About Us</h1>
              <p className='about-text'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <ul className='about-list'>
              <li className='about-item'>
                <img src={about1} alt="rasim" width={240} height={240} />
                <h1 className='about-name'>1. Schedule online</h1>
                <p className='about-name1'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
              </li>
              <li className='about-item'>
                <img src={about2} alt="rasim" width={240} height={240} />
                <h1 className='about-name'>2. Pay online easily</h1>
                <p className='about-name1'>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
              </li>
              <li className='about-item'>
                <img src={about3} alt="rasim" width={240} height={240} />
                <h1 className='about-name'>3. Get your house cleaned</h1>
                <p className='about-name1'>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
              </li>
            </ul>
            <div className='about-button'>
              <button className='about-btn'>Get a free quote</button>
              <span className='about-btn1'>Explore services</span>
            </div>
          </div>
        </div>
      </div> 
    )
}
export default About