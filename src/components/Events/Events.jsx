import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
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
      title: 'Event 1: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere. Nunc aliquet nulla at risus vehicula sollicitudin. Aliquam turpis erat, ullamcorper dictum augue vel, interdum lacinia nunc. Suspendisse sit amet leo ex. Mauris et purus et sapien convallis scelerisque id sed odio. Nulla porttitor dapibus nunc. Nullam vulputate accumsan erat euismod congue. Aenean sed enim in massa sagittis luctus in vitae ante. Phasellus hendrerit erat velit, ut maximus magna porta at.Sed leo dui, porttitor sit amet mollis eget, suscipit sed lectus. Curabitur fringilla velit et lectus posuere commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis velit id justo laoreet vehicula. Integer a turpis ac eros tempor viverra vitae non libero. Sed a velit ac urna pulvinar efficitur. Maecenas semper lacinia eros, nec pulvinar lectus tristique eu. Fusce scelerisque nunc eget lacus viverra, eget pulvinar velit tristique. Aenean dapibus, augue ac pulvinar egestas, sem nunc fermentum velit, non vulputate justo tortor ut enim. Ut sit amet maximus libero, ut mollis lacus. Proin pellentesque massa risus, quis lacinia ante cursus ut. Proin porttitor finibus tempus. Praesent leo justo, mollis in condimentum id, fermentum nec velit. Sed ligula mi, rutrum sed convallis id, rutrum at elit. In venenatis facilisis nunc a consectetur. Donec quis nunc elit. Aliquam feugiat est in sodales laoreet. Donec fermentum ligula nec metus laoreet pulvinar. Integer et augue ac metus interdum ultrices at ut augue. Mauris id facilisis urna, a euismod mi. Morbi id metus leo. Nunc magna metus, tincidunt non turpis eu, rutrum placerat lacus. Aenean vestibulum eu sem at congue. Quisque suscipit enim nec libero dignissim, a varius metus suscipit. Nulla eu augue mi. Etiam eget blandit felis. Phasellus sit amet dolor at risus accumsan ornare. Vestibulum id nibh vel velit luctus cursus sed sit amet nunc. Mauris gravida mauris sed risus consequat, id consequat leo pellentesque. Praesent sed justo ex.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+1+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+1+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+1+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
    },
    {
      title: 'Event 2: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere. Nunc aliquet nulla at risus vehicula sollicitudin. Aliquam turpis erat, ullamcorper dictum augue vel, interdum lacinia nunc. Suspendisse sit amet leo ex. Mauris et purus et sapien convallis scelerisque id sed odio. Nulla porttitor dapibus nunc. Nullam vulputate accumsan erat euismod congue. Aenean sed enim in massa sagittis luctus in vitae ante. Phasellus hendrerit erat velit, ut maximus magna porta at.Sed leo dui, porttitor sit amet mollis eget, suscipit sed lectus. Curabitur fringilla velit et lectus posuere commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis velit id justo laoreet vehicula. Integer a turpis ac eros tempor viverra vitae non libero. Sed a velit ac urna pulvinar efficitur. Maecenas semper lacinia eros, nec pulvinar lectus tristique eu. Fusce scelerisque nunc eget lacus viverra, eget pulvinar velit tristique. Aenean dapibus, augue ac pulvinar egestas, sem nunc fermentum velit, non vulputate justo tortor ut enim. Ut sit amet maximus libero, ut mollis lacus. Proin pellentesque massa risus, quis lacinia ante cursus ut. Proin porttitor finibus tempus. Praesent leo justo, mollis in condimentum id, fermentum nec velit. Sed ligula mi, rutrum sed convallis id, rutrum at elit. In venenatis facilisis nunc a consectetur. Donec quis nunc elit. Aliquam feugiat est in sodales laoreet. Donec fermentum ligula nec metus laoreet pulvinar. Integer et augue ac metus interdum ultrices at ut augue. Mauris id facilisis urna, a euismod mi. Morbi id metus leo. Nunc magna metus, tincidunt non turpis eu, rutrum placerat lacus. Aenean vestibulum eu sem at congue. Quisque suscipit enim nec libero dignissim, a varius metus suscipit. Nulla eu augue mi. Etiam eget blandit felis. Phasellus sit amet dolor at risus accumsan ornare. Vestibulum id nibh vel velit luctus cursus sed sit amet nunc. Mauris gravida mauris sed risus consequat, id consequat leo pellentesque. Praesent sed justo ex.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+2+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+2+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+2+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
    },
    {
      title: 'Event 3: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+3+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+3+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+3+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
    },
    {
      title: 'Event 4: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere. Nunc aliquet nulla at risus vehicula sollicitudin. Aliquam turpis erat, ullamcorper dictum augue vel, interdum lacinia nunc. Suspendisse sit amet leo ex. Mauris et purus et sapien convallis scelerisque id sed odio. Nulla porttitor dapibus nunc. Nullam vulputate accumsan erat euismod congue. Aenean sed enim in massa sagittis luctus in vitae ante. Phasellus hendrerit erat velit, ut maximus magna porta at.Sed leo dui, porttitor sit amet mollis eget, suscipit sed lectus. Curabitur fringilla velit et lectus posuere commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis velit id justo laoreet vehicula. Integer a turpis ac eros tempor viverra vitae non libero. Sed a velit ac urna pulvinar efficitur. Maecenas semper lacinia eros, nec pulvinar lectus tristique eu. Fusce scelerisque nunc eget lacus viverra, eget pulvinar velit tristique. Aenean dapibus, augue ac pulvinar egestas, sem nunc fermentum velit, non vulputate justo tortor ut enim. Ut sit amet maximus libero, ut mollis lacus. Proin pellentesque massa risus, quis lacinia ante cursus ut. Proin porttitor finibus tempus. Praesent leo justo, mollis in condimentum id, fermentum nec velit. Sed ligula mi, rutrum sed convallis id, rutrum at elit. In venenatis facilisis nunc a consectetur. Donec quis nunc elit. Aliquam feugiat est in sodales laoreet. Donec fermentum ligula nec metus laoreet pulvinar. Integer et augue ac metus interdum ultrices at ut augue. Mauris id facilisis urna, a euismod mi. Morbi id metus leo. Nunc magna metus, tincidunt non turpis eu, rutrum placerat lacus. Aenean vestibulum eu sem at congue. Quisque suscipit enim nec libero dignissim, a varius metus suscipit. Nulla eu augue mi. Etiam eget blandit felis. Phasellus sit amet dolor at risus accumsan ornare. Vestibulum id nibh vel velit luctus cursus sed sit amet nunc. Mauris gravida mauris sed risus consequat, id consequat leo pellentesque. Praesent sed justo ex.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+4+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+4+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+4+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
    },
    {
      title: 'Event 5: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere. Nunc aliquet nulla at risus vehicula sollicitudin. Aliquam turpis erat, ullamcorper dictum augue vel, interdum lacinia nunc. Suspendisse sit amet leo ex. Mauris et purus et sapien convallis scelerisque id sed odio. Nulla porttitor dapibus nunc. Nullam vulputate accumsan erat euismod congue. Aenean sed enim in massa sagittis luctus in vitae ante. Phasellus hendrerit erat velit, ut maximus magna porta at.Sed leo dui, porttitor sit amet mollis eget, suscipit sed lectus. Curabitur fringilla velit et lectus posuere commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis velit id justo laoreet vehicula. Integer a turpis ac eros tempor viverra vitae non libero. Sed a velit ac urna pulvinar efficitur. Maecenas semper lacinia eros, nec pulvinar lectus tristique eu. Fusce scelerisque nunc eget lacus viverra, eget pulvinar velit tristique. Aenean dapibus, augue ac pulvinar egestas, sem nunc fermentum velit, non vulputate justo tortor ut enim. Ut sit amet maximus libero, ut mollis lacus. Proin pellentesque massa risus, quis lacinia ante cursus ut. Proin porttitor finibus tempus. Praesent leo justo, mollis in condimentum id, fermentum nec velit. Sed ligula mi, rutrum sed convallis id, rutrum at elit. In venenatis facilisis nunc a consectetur. Donec quis nunc elit. Aliquam feugiat est in sodales laoreet. Donec fermentum ligula nec metus laoreet pulvinar. Integer et augue ac metus interdum ultrices at ut augue. Mauris id facilisis urna, a euismod mi. Morbi id metus leo. Nunc magna metus, tincidunt non turpis eu, rutrum placerat lacus. Aenean vestibulum eu sem at congue. Quisque suscipit enim nec libero dignissim, a varius metus suscipit. Nulla eu augue mi. Etiam eget blandit felis. Phasellus sit amet dolor at risus accumsan ornare. Vestibulum id nibh vel velit luctus cursus sed sit amet nunc. Mauris gravida mauris sed risus consequat, id consequat leo pellentesque. Praesent sed justo ex.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+5+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+5+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+5+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
    },
    {
      title: 'Event 6: Annual Tech Conference',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum magna vel cursus lacinia. Nam dictum sem sed pellentesque commodo. Fusce lacinia, metus ut rhoncus convallis, odio massa consectetur est, vel aliquam orci quam dictum est. Donec efficitur turpis imperdiet, porttitor nulla euismod, varius sem.Suspendisse sed arcu vitae mauris tincidunt elementum. Morbi molestie in justo sit amet porta. Nulla vulputate vitae dolor et lobortis. Nam eu lacinia mi, sit amet venenatis erat. Donec quis tortor at metus bibendum tempor a non neque. Nam id arcu a elit placerat imperdiet. Praesent egestas tempor mauris at elementum. Donec varius eros risus, eget commodo magna rutrum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vestibulum pulvinar. Pellentesque non blandit nisi, laoreet semper nulla. Nulla laoreet varius odio, sed pharetra ipsum. Sed vel enim velit. Vestibulum semper neque at velit bibendum, ac commodo lectus sagittis. Proin ligula neque, placerat mattis massa sed, fringilla hendrerit sapien. Praesent lobortis bibendum ipsum, quis feugiat sapien porta eu.In justo augue, porttitor quis mattis ut, malesuada et erat. Nullam dapibus nec urna eu consectetur. Duis venenatis nisl ut dapibus aliquam. Cras tempus porta ligula, at lobortis tortor blandit quis. Fusce quis libero eu lorem euismod posuere. Nunc aliquet nulla at risus vehicula sollicitudin. Aliquam turpis erat, ullamcorper dictum augue vel, interdum lacinia nunc. Suspendisse sit amet leo ex. Mauris et purus et sapien convallis scelerisque id sed odio. Nulla porttitor dapibus nunc. Nullam vulputate accumsan erat euismod congue. Aenean sed enim in massa sagittis luctus in vitae ante. Phasellus hendrerit erat velit, ut maximus magna porta at.Sed leo dui, porttitor sit amet mollis eget, suscipit sed lectus. Curabitur fringilla velit et lectus posuere commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis velit id justo laoreet vehicula. Integer a turpis ac eros tempor viverra vitae non libero. Sed a velit ac urna pulvinar efficitur. Maecenas semper lacinia eros, nec pulvinar lectus tristique eu. Fusce scelerisque nunc eget lacus viverra, eget pulvinar velit tristique. Aenean dapibus, augue ac pulvinar egestas, sem nunc fermentum velit, non vulputate justo tortor ut enim. Ut sit amet maximus libero, ut mollis lacus. Proin pellentesque massa risus, quis lacinia ante cursus ut. Proin porttitor finibus tempus. Praesent leo justo, mollis in condimentum id, fermentum nec velit. Sed ligula mi, rutrum sed convallis id, rutrum at elit. In venenatis facilisis nunc a consectetur. Donec quis nunc elit. Aliquam feugiat est in sodales laoreet. Donec fermentum ligula nec metus laoreet pulvinar. Integer et augue ac metus interdum ultrices at ut augue. Mauris id facilisis urna, a euismod mi. Morbi id metus leo. Nunc magna metus, tincidunt non turpis eu, rutrum placerat lacus. Aenean vestibulum eu sem at congue. Quisque suscipit enim nec libero dignissim, a varius metus suscipit. Nulla eu augue mi. Etiam eget blandit felis. Phasellus sit amet dolor at risus accumsan ornare. Vestibulum id nibh vel velit luctus cursus sed sit amet nunc. Mauris gravida mauris sed risus consequat, id consequat leo pellentesque. Praesent sed justo ex.",
      images: [
        'https://via.placeholder.com/600x300.png?text=Event+6+Image+1',
        'https://via.placeholder.com/600x300.png?text=Event+6+Image+2',
        'https://via.placeholder.com/600x300.png?text=Event+6+Image+3',
      ],
      registerLink: 'https://forms.gle/your-form-link',
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
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
                <button className="register">Register Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
