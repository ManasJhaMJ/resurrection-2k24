import React from 'react'
import event1 from '../../assets/Events/1.png'
import event2 from '../../assets/Events/2.png'
import event3 from '../../assets/Events/3.png'
import event4 from '../../assets/Events/4.png'
import event5 from '../../assets/Events/5.png'
import event6 from '../../assets/Events/6.png'

function Events() {
    return (
        <section id='events'>
            <h1>Our Events</h1>
            <div className='event-container'>
                <img src={event1} alt="events" />
                <img src={event2} alt="events" />
                <img src={event3} alt="events" />
                <img src={event4} alt="events" />
                <img src={event5} alt="events" />
                <img src={event6} alt="events" />
            </div>
            <button>
                Explore Events
            </button>
        </section>
    )
}

export default Events