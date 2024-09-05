import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  // Import slick-carousel theme


const Events = () => {
  const [expanded, setExpanded] = useState({});
  const [collapsing, setCollapsing] = useState({});

  const eventRefs = useRef([]); // Array to store refs for each event card
  const [visible, setVisible] = useState(new Set()); // Track which cards are visible
  const [currentSlide, setCurrentSlide] = useState({}); // Track current slide for each event

  // Initialize currentSlide state with the first slide (0) for each event
  useEffect(() => {
    const initialSlideState = {};
    events.forEach((_, index) => {
      initialSlideState[index] = 0; // Set the first slide as active for each event
    });
    setCurrentSlide(initialSlideState);
  }, []); // Empty dependency array to run this effect only once on mount

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible((prevVisible) => new Set(prevVisible).add(entry.target));
        } else {
          setVisible((prevVisible) => {
            const newVisible = new Set(prevVisible);
            newVisible.delete(entry.target);
            return newVisible;
          });
        }
      });
    }, observerOptions);

    // Observe all event cards
    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup observer
      if (eventRefs.current) {
        eventRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const toggleExpand = (index) => {
    if (expanded[index]) {
      setCollapsing((prevState) => ({
        ...prevState,
        [index]: true,
      }));
  

      setTimeout(() => {
        const element = eventRefs.current[index];
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 0); 
  
      setTimeout(() => {
        setExpanded((prevState) => ({
          ...prevState,
          [index]: false,
        }));
        setCollapsing((prevState) => ({
          ...prevState,
          [index]: false,
        }));
      }, 1000); 
    } else {

      setCollapsing((prevState) => ({
        ...prevState,
        [index]: true,
      }));
  
      setTimeout(() => {
        setExpanded((prevState) => ({
          ...prevState,
          [index]: true,
        }));
        setCollapsing((prevState) => ({
          ...prevState,
          [index]: false,
        }));
      }, 500); 

      setTimeout(() => {
        const element = eventRefs.current[index];
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
        }
      }, 600); 
    }
  };
  const events = [
    {
      title: 'Music',
      description:
        `Music events are often the heartbeat of a college fest, drawing large crowds and enthusiastic participants. These events can range from solo performances to band battles and include different genres like classical, rock, pop, jazz, and more.

Common Sub-events:

Solo Singing Competitions: A platform for individual performers to showcase their vocal skills. Participants can perform in various genres—Western or Indian classical, contemporary, or regional folk.
Battle of Bands: Rock bands or acoustic groups compete against each other in an electrifying battle to win the title of the best college band. The performances are usually high-energy, with the audience cheering along.
Instrumental Performances: Musicians with expertise in instruments like the guitar, tabla, sitar, piano, or drums can perform solo or in ensembles.
DJ Night or EDM Concert: An evening event where a DJ spins tracks, getting everyone on the dance floor, creating a nightclub-like experience.`,
      images: [
        'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      title: 'Dance',
      description:
        `Dance events are the most dynamic and vibrant part of any college fest, bringing together individuals and teams for high-energy performances across a variety of styles.

Common Sub-events:

Solo Dance Competitions: A stage for individual dancers to showcase their talent in styles like classical, hip-hop, contemporary, or even freestyle.
Group Dance Competitions: Teams of dancers perform synchronized routines, often with a theme or story behind their performance. The competition is usually intense, with complex choreography and creative formations.
Flash Mobs: A spontaneous, unannounced dance performance in a public area of the college, surprising onlookers and quickly gathering a crowd.
Street Dance Battles: Often featuring breakdancers, this is a high-energy event where participants "battle" against one another, showing off their moves and agility.`,
      images: [
        'https://images.pexels.com/photos/27972781/pexels-photo-27972781/free-photo-of-a-man-is-on-his-feet-in-the-air-at-a-concert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/27570912/pexels-photo-27570912/free-photo-of-a-man-in-a-hat-is-playing-music-at-a-party.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/28201137/pexels-photo-28201137/free-photo-of-people-holding-up-their-cell-phones-at-a-concert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      title: 'Fashion',
      description:
        `Fashion shows during college fests are glamorous events that let students flaunt their style and creativity on the ramp. These shows are not just about beauty; they also focus on themes, innovation, and presentation.

Common Sub-events:

Theme-based Fashion Show: Participants design costumes around a specific theme, such as sustainability, retro fashion, or futuristic styles. It's a blend of creativity and fashion.
Ethnic Wear Show: This event focuses on traditional attire, where students can display their culture and heritage through fashion.
Costume Design Competition: Aspiring designers present their original creations on the ramp, which are often judged on creativity, fit, and style.`,
      images: [
        'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      title: 'Theatre',
      description:
        `Theatre events are a great platform for budding actors, directors, and playwrights to showcase their skills. These events bring out creativity and collaboration and are usually followed by intense applause and discussions.

Common Sub-events:

Street Plays (Nukkad Natak): Performed in open spaces like streets or courtyards, these short plays often address social issues like gender inequality, corruption, or environmental concerns.
Stage Plays: Full-length productions are performed in an auditorium, covering genres such as drama, comedy, and tragedy. These are more formal, scripted performances with sets and costumes.
Improv Theatre: A fun and challenging event where participants are required to perform impromptu, often based on audience suggestions.
Mono-acts: Solo performances where one actor portrays multiple characters or a singular character in an intense, often emotionally charged script.`,
      images: [
        'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1581906/pexels-photo-1581906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3836671/pexels-photo-3836671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      title: 'Fine Arts',
      description:
        `Fine arts events attract those who are artistically inclined, offering a range of competitions that involve painting, drawing, and other forms of creative expression.

Common Sub-events:

Live Painting/Sketching Competitions: Artists are given a theme or concept and a limited time to create a piece of artwork live on stage or in an open space.
Graffiti or Mural Competitions: Teams or individuals create large-scale artworks on walls or other surfaces around the college, often depicting themes of social relevance or abstract ideas.
Sculpture or Clay Modeling: This event allows students to showcase their sculpting skills, creating detailed 3D models.
Rangoli Competition: A traditional Indian art form where participants create intricate designs on the ground using colored powders or flowers.`,
      images: [
        'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/11049654/pexels-photo-11049654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/9736889/pexels-photo-9736889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      title: 'Literary',
      description:
        `Literary events are for those who have a passion for language, creativity, and critical thinking. These events often involve competitions centered on writing, debating, and oration.

Common Sub-events:

Debates: Teams or individuals present arguments on a given topic, often divided into ‘for’ and ‘against’. The debates are typically judged on logic, presentation, and rebuttals.
Creative Writing Competitions: Participants are given prompts or themes and a set time to write stories, essays, or poetry.
Quiz Competitions: A battle of knowledge where teams answer questions related to general knowledge, current events, or a specialized subject.
Elocution/Spoken Word: Participants perform prepared or impromptu speeches or spoken-word poetry on various topics, judged on clarity, delivery, and content.`,
      images: [
        'https://images.pexels.com/photos/15653088/pexels-photo-15653088/free-photo-of-a-book-stand-with-books-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/27134578/pexels-photo-27134578/free-photo-of-view-of-a-bookcase-in-a-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/20527023/pexels-photo-20527023/free-photo-of-portrait-of-a-young-woman-with-mexico-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
  ];

  const sliderSettings = (index) => ({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    beforeChange: (oldIndex, newIndex) => handleSlideChange(index, newIndex),
    afterChange: (newIndex) => handleSlideChange(index, newIndex),
  });

  const handleSlideChange = (eventIndex, slideIndex) => {
    setCurrentSlide((prevState) => ({
      ...prevState,
      [eventIndex]: slideIndex,
    }));
  };

  const renderCustomDots = (eventIndex, totalSlides) => {
    return (
      <div className="custom-dots">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <span
            key={slideIndex}
            className={`dot ${currentSlide[eventIndex] === slideIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="events">
      <h1>About Events</h1>
      <p className="about-events-text">
        Welcome to our annual events page! Here, you'll find information on our upcoming events,
        ranging from conferences to hackathons. Each event offers a unique opportunity to connect
        with industry leaders, learn from experts, and showcase your talents. Explore the events
        below and register to secure your spot!
      </p>
      
      <div className="event-cards">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            className={`event-card ${expanded[index] ? 'expanded' : ''} ${collapsing[index] ? 'collapsing' : ''} ${
              visible.has(eventRefs.current[index]) ? 'fade-in' : ''
            }`} 
          >
            <h2>{event.title}</h2>
            <Slider {...sliderSettings(index)}>
              {event.images.map((image, i) => (
                <div key={i}>
                  <img src={image} alt={`Slide ${i}`} className="event-image" />
                </div>
              ))}
            </Slider>
            {renderCustomDots(index, event.images.length)} 
            <div className="event-content">
              <p>{event.description}</p>
              <p
                className="read-more"
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? 'Read Less' : 'Read More'}
              </p>
              <Link to="/registration">
                <button className="register">Register Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
