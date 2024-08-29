import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Events() {
  return (
    <section id="events">
      <h1>About Events</h1>
      <p className="about-events-text">
        Welcome to our annual events page! Here, you'll find information on our upcoming events,
        ranging from conferences to hackathons. Each event offers a unique opportunity to connect
        with industry leaders, learn from experts, and showcase your talents. Explore the events
        below and register to secure your spot!
      </p>
      <Link to="/events">
        <button style={{ marginTop: '30px', padding: '10px 20px', backgroundColor: '#f5efdb', color: '#000', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Explore Events
        </button>
      </Link>
    </section>
  );
}

export default Events;
