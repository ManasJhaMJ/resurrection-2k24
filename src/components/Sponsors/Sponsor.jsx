import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import allahabadBank from '../../assets/sponsors/allahabad-bank.png'
import BNatural from '../../assets/sponsors/bnatural.png'
import Canvas from '../../assets/sponsors/Canvas.png'
import CodingNinja from '../../assets/sponsors/CodingNinjas.png'
import CokeStudio from '../../assets/sponsors/cokestudio.png'
import comio from '../../assets/sponsors/comio.png'
import cornitos from '../../assets/sponsors/cornitos.png'
import dominos from '../../assets/sponsors/dominos.png'
import indianOil from '../../assets/sponsors/indianOil.jpg'
import instamojo from '../../assets/sponsors/instamojo.png'
import kuppies from '../../assets/sponsors/kuppies.png'
import lakme from '../../assets/sponsors/lakme.png'
import mard from '../../assets/sponsors/mard.png'
import mjPrints from '../../assets/sponsors/mjPrints.png'
import paytm from '../../assets/sponsors/paytm.png'
import poetsCollective from '../../assets/sponsors/poetsCollective.png'
import rabbitMerch from '../../assets/sponsors/rabbitMerch.png'
import radioMR from '../../assets/sponsors/radioMR.png'
import sarvodaya from '../../assets/sponsors/sarvodaya.png'
import spyker from '../../assets/sponsors/spyker.svg'
import swatimod from '../../assets/sponsors/swatimod.png'
import tata from '../../assets/sponsors/tata.png'
import toyota from '../../assets/sponsors/toyota.png'
import ttak from '../../assets/sponsors/ttak.png'
import UM from '../../assets/sponsors/UM.png'
import volkswagen from '../../assets/sponsors/volkswagen.png'
import Yipee from '../../assets/sponsors/yipee.png'

function Sponsor() {
  return (
    <>
        <Navbar />
        <div className='mt-9'>
            <h1 className='text-center text-7xl text-[#dcca87] font-bold'> SPONSORS</h1>
            <h2 className='text-center mt-6 text-4xl font-bold'> PREVIOUS</h2>

            <div className='mx-auto flex flex-wrap'>
                <img src={allahabadBank} className='w-1/3 rounded'/>
                <img src={BNatural} className='w-1/3 '/>
                <img src={Canvas} className='w-1/3'/>
                <div className='w-1/3 flex justify-center items-center'>
                <img src={CodingNinja} className='object-cover '/>
                </div>
                <img src={CokeStudio} className='w-1/3'/>
                <img src={comio} className='w-1/3'/>
                <img src={cornitos} className='w-1/3'/>
                <img src={dominos} className='w-1/3'/>
                <div className='w-1/3 overflow-hidden flex justify-center items-center'>
                <img src={indianOil} className='w-40 h-35'/>
                </div>
                <img src={instamojo} className='w-1/3'/>
                <img src={kuppies} className='w-1/3'/>
                <img src={lakme} className='w-1/3'/>
                <img src={mard} className='w-1/3'/>
                <img src={mjPrints} className='w-1/3'/>
                <img src={paytm} className='w-1/3'/>
                <img src={poetsCollective} className='w-1/3'/>
                <img src={rabbitMerch} className='w-1/3'/>
                <img src={radioMR} className='w-1/3'/>
                <img src={sarvodaya} className='w-1/3'/>
                <div className='w-1/3 overflow-hidden flex justify-center items-center'>
                <img src={spyker} className='w-45 h-40'/>
                </div>
                <img src={swatimod} className='w-1/3'/>
                <img src={tata} className='w-1/3'/>
                <img src={toyota} className='w-1/3'/>
                <img src={ttak} className='w-1/3'/>
                <img src={UM} className='w-1/3'/>
                <img src={volkswagen} className='w-1/3'/>
                <div className='w-1/3 overflow-hidden flex justify-center items-center'>
                <img src={Yipee} className='w-50 h-40'/>
                </div>

            </div>
        </div>
        <Footer />
    </>
  )
}

export default Sponsor