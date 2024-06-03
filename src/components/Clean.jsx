
import frame from '../assets/Images/Frame1.svg'
import rasim from '../assets/Images/kukcha.svg'
import imagee from '../assets/Images/image2.svg'
function Clean() {
    return (

        <div className="clean">
            <div className="container">
                <div className="clean-container">
                    <div className="clean-box">
                        <span className="clean-link">Articles & resources</span>
                        <div className="clean-wrap">
                            <button className="clean-button">Get a free quote</button>
                            <button className="clean-button1">Browse articles</button>
                            </div>
                        </div>
                        <ul className='clean-list'>
                            <li className='clean-item'>
                                <img src={frame} alt="rasim" width={580} height={366} />
                                <div className='clean-bold'>
                                    <h3 className='clean-title'>8 best vacuum cleaners to clean any mess for your home in 2022</h3>
                                    <p className='clean-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                                    <div className='clean-about'>
                                       <strong className='clean-strong'>Jan 28, 2022</strong>
                                       <img src={rasim} alt="" width={50} height={50} />
                                    </div>
                                </div>
                            </li>
                            <li className='clean-item'>
                                <img src={imagee} alt="rasim" width={570} height={366} />
                                <div className='clean-bold'>
                                    <h3 className='clean-title'>8 best vacuum cleaners to clean any mess for your home in 2022</h3>
                                    <p className='clean-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                                    <div className='clean-about'>
                                       <strong className='clean-strong'>Jan 28, 2022</strong>
                                       <img src={rasim} alt="" width={50} height={50} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    

                </div>
            </div>
        </div>
    )
}
export default Clean