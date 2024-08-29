import Resurrection from '../../assets/Resurrection.webp'

function About() {
    return (

        <section id='about' className='flex items-center justify-around my-14'>

            <div className='w-1/2'>
                <h1 className='text-center font-bold text-8xl text-[#dcca87]'>About</h1>

                <p className='text-center text-lg pl-8'>
                    The fifth edition of Resurrection will be larger , far-reaching and better in every manner with the galaxy of intellectuals , distinct vision , illuminating ideas and excellency of art since it will be constructed from the ground up with the express purpose of becoming Pan India's largest cultural event.
                </p>

            </div>

            <div className='flex justify-center items-center h-[500px] w-1/2'>
                <img src={Resurrection} className='sm:h-full h-auto'></img>
            </div>

        </section>
    )
}

export default About