import phone from '../assets/Images/tel.svg'
import hero from '../assets/Images/imagehero.svg'

function Hero() {
    return(
        <main>
        <section className='site-hero'>
          <div className='hero'>
            <div className='container'>
              <div className='hero-container'>
                <div className='hero-box'>
                  <h1 className='hero-title'>Quality cleaning for your home</h1>
                  <p className='hero-text'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                  <div className='hero-wrapper'>
                    <button className='hero-btn'>Get a free quote</button>
                    <img src={phone} alt="phone" width={72} height={72} />
                    <div className='hero-stel'>
                      <h1 className='hero-title-name'>Call us now</h1>
                      <p className='hero-text-name'>(414) 567 - 2109</p>
                    </div>
                  </div>
                </div>
                <img src={hero} alt="image" width={710} height={680} />
              </div>

            </div>
          </div>
        </section>
      </main>
    )
}
export default Hero