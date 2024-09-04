import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo_text from '../../assets/resurrection-text.webp';

function Landing() {
    return (
        <section id='home'>
            <div className='home-text'>
                <h1>RESURRECTION 2k24</h1>
                <Link to="/registration">
                    <button>
                        Register Now
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
