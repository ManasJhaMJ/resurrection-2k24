import React from 'react'
import Resurrection from '../../assets/Resurrection.png'

function About() {
    return (

        <section className='flex'> 

                <div className='w-1/2'>
                    <h1 className='text-center font-bold text-8xl text-[#dcca87]'>About</h1>

                    <p className='text-center text-lg'>
                    The fifth edition of Resurrection will be larger , far-reaching and better in every manner with the galaxy of intellectuals , distinct vision , illuminating ideas and excellency of art since it will be constructed from the ground up with the express purpose of becoming Pan India's largest cultural event.
                    </p>

                </div>

                <div className='flex justify-center items-center w-1/2'>
                <img src={Resurrection} className='h-full w-1/2'></img>
                </div>

        </section>
    )
}

export default About