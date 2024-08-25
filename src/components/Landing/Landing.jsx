import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/Resurrection.png';
import logo_text from '../../assets/resurrection-text.png';

function Landing() {
    return (
        <section id='home'>
            <div className='home-text'>
                <img src={logo_text} alt="Resurrection Text" />
                <Link to="/events"> {/* Use Link instead of a tag */}
                    <button>
                        Explore Events
                    </button>
                </Link>
            </div>
            <div className='home-img'>
                <img src="https://ressurection-fest2024.vercel.app/static/media/bollywood.daba8fb1388c46f07239.png" alt="Resurrection" />
            </div>
        </section>
    );
}

export default Landing;
