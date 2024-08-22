import React from 'react'
import ThemeImg from "../../assets/theme.png"

function Theme() {
    return (
        <section className='flex'>

        <div className='w-1/2 flex justify-center items-center'>
            <img src={ThemeImg}></img>
        </div>

        <div className='w-1/2'> 
            <h1  className='text-center font-bold text-7xl my-6 text-[#dcca87]'>THEME</h1>

            <p className='my-6 text-lg'>
            Let's embark on the most dramatic voyage in Bollywood films.<br></br>
Go back in time to see how cinema shaped from the 1990s to the 2020s.<br></br>
Our essence is to use the our Bollywood music, culture, fashion and attitude have been passed over generations through our bollywood icons.Let's go through the various stages and endeavor to resurrect some of them.


            </p>

            <p className='text-lg'>Let's go through the various stages and endeavor to resurrect some of them.</p>
        </div>

        </section>
    )
}

export default Theme