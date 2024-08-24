import Navbar from "../src/components/Navbar/Navbar"
import Landing from "../src/components/Landing/Landing"
import About from "../src/components/About/About"
import Events from "../src/components/Events/Events"
import Theme from "../src/components/Theme/Theme"
import Video from "../src/components/Video/Video"
import Gallery from "../src/components/Gallery/Gallery"
import Footer from "../src/components/Footer/Footer"
import ContactUs from "../src/components/ContactUs/ContactUs"

function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Events />
            <Theme />
            <Video />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home