import logo from '../../assets/Resurrection.webp'
import logo_text from '../../assets/resurrection-text.webp'

import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";


function Footer() {
    return (
        <section id='footer'>
            <div className='footer-logos'>
                <img className='footer-logo' src={logo} alt="" />
                <img className='footer-logo-text' src={logo_text} alt="" />
            </div>
            <div className='footer-quote'>
                <p>&quot; The best way to find yourself is to lose yourself in the service of others. &quot;</p>
            </div>
            <div className="socials">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <LuFacebook size={30} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <LuTwitter size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <LuInstagram size={30} />
                </a>
            </div>
        </section>
    )
}

export default Footer