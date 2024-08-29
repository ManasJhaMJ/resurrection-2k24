import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import allahabadBank from '../../assets/sponsorsWebp/allahabad-bank.webp'
import BNatural from '../../assets/sponsorsWebp/bnatural.webp'
import Canvas from '../../assets/sponsorsWebp/Canvas.webp'
import CodingNinja from '../../assets/sponsorsWebp/CodingNinjas.webp'
import CokeStudio from '../../assets/sponsorsWebp/cokestudio.webp'
import comio from '../../assets/sponsorsWebp/comio.webp'
import cornitos from '../../assets/sponsorsWebp/cornitos.webp'
import dominos from '../../assets/sponsorsWebp/dominos.webp'
import indianOil from '../../assets/sponsorsWebp/indianOil.webp'
import instamojo from '../../assets/sponsorsWebp/instamojo.webp'
import kuppies from '../../assets/sponsorsWebp/kuppies.webp'
import lakme from '../../assets/sponsorsWebp/lakme.webp'
import mard from '../../assets/sponsorsWebp/mard.webp'
import mjPrints from '../../assets/sponsorsWebp/mjPrints.webp'
import paytm from '../../assets/sponsorsWebp/paytm.webp'
import poetsCollective from '../../assets/sponsorsWebp/poetsCollective.webp'
import rabbitMerch from '../../assets/sponsorsWebp/rabbitMerch.webp'
import radioMR from '../../assets/sponsorsWebp/radioMR.webp'
import sarvodaya from '../../assets/sponsorsWebp/sarvodaya.webp'
import spyker from '../../assets/sponsorsWebp/spyker.webp'
import swatimod from '../../assets/sponsorsWebp/swatimod.webp'
import tata from '../../assets/sponsorsWebp/tata.webp'
import toyota from '../../assets/sponsorsWebp/toyota.webp'
import ttak from '../../assets/sponsorsWebp/ttak.webp'
import UM from '../../assets/sponsorsWebp/UM.webp'
import volkswagen from '../../assets/sponsorsWebp/volkswagen.webp'
import Yipee from '../../assets/sponsorsWebp/yipee.webp'

function Sponsor() {
  return (
    <>
        <Navbar />
        <div className='mt-9'>
            <h1 className='text-center text-7xl text-[#dcca87] font-bold'> SPONSORS</h1>
            <h2 className='text-center mt-6 text-4xl font-bold'> PREVIOUS</h2>

            <div className='mx-auto flex flex-wrap'>
                <img src={allahabadBank} className='w-1/3 lg:w-1/4'/>
                <img src={BNatural} className='w-1/3 lg:w-1/4'/>
                <img src={Canvas} className='w-1/3 lg:w-1/4'/>
                <div className='w-1/3 lg:w-1/4 flex justify-center items-center'>
                <img src={CodingNinja} className='object-cover lg:mr-10'/>
                </div>
                <img src={CokeStudio} className='w-1/3 lg:w-1/4'/>
                <img src={comio} className='w-1/3 lg:w-1/4'/>
                <img src={cornitos} className='w-1/3 lg:w-1/4'/>
                <img src={dominos} className='w-1/3 lg:w-1/4'/>
                <div className='w-1/3 lg:w-1/4 overflow-hidden flex justify-center items-center'>
                <img src={indianOil} className='w-40 h-35'/>
                </div>
                <img src={instamojo} className='w-1/3 lg:w-1/4'/>
                <img src={kuppies} className='w-1/3 lg:w-1/4'/>
                <img src={lakme} className='w-1/3 lg:w-1/4'/>
                <img src={mard} className='w-1/3 lg:w-1/4'/>
                <img src={mjPrints} className='w-1/3 lg:w-1/4'/>
                <img src={paytm} className='w-1/3 lg:w-1/4'/>
                <img src={poetsCollective} className='w-1/3 lg:w-1/4'/>
                <img src={rabbitMerch} className='w-1/3 lg:w-1/4'/>
                <img src={radioMR} className='w-1/3 lg:w-1/4'/>
                <img src={sarvodaya} className='w-1/3 lg:w-1/4'/>
                <div className='w-1/3 lg:w-1/4 overflow-hidden flex justify-center items-center'>
                <img src={spyker} className='w-45 h-40 lg:mr-10'/>
                </div>
                <img src={swatimod} className='w-1/3 lg:w-1/4'/>
                <img src={tata} className='w-1/3 lg:w-1/4'/>
                <img src={toyota} className='w-1/3 lg:w-1/4'/>
                <img src={ttak} className='w-1/3 lg:w-1/4'/>
                <img src={UM} className='w-1/3 lg:w-1/4'/>
                <img src={volkswagen} className='w-1/3 lg:w-1/4'/>
                <div className='w-1/3 lg:w-1/4 overflow-hidden flex justify-center items-center'>
                <img src={Yipee} className='w-50 h-40'/>
                </div>

            </div>
        </div>
        <Footer />
    </>
  )
}

export default Sponsor