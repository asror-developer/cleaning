import Logo from '../assets/Images/logo.svg'


function Header() {
    return(
        <header className='site-header'>
        <div className='container'>
          <div className='header'>
            <div className='header-wrapper'>
              <a href="/">
                <img src={Logo} alt="Site logo" width={178} height={42} />
              </a>
              <ul className='list'>
                <li className='item'>
                  <a className='item-link' href="#">Home</a>
                </li>
                <li className='item'>
                  <a className='item-link' href="#">About</a>
                </li>
                <li className='item'>
                  <a className='item-link' href="#">Services</a>
                </li>
                <li className='item'>
                  <a className='item-link' href="#">Articles</a>
                </li>
                <li className='item'>
                  <a className='item-link' href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className='header-wrap-btn'>
              <a className='item-link' href="#">Cart (0)</a>
              <button className='btn-link'>Get a free quote</button>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header
