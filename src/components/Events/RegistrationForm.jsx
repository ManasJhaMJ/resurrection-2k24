import React, { useState } from 'react';

const eventOptions = {
  music: ['Indian', 'Classical', 'Western', 'Rap Wars', 'Beatbox', 'Battle Of Bands', 'Dj Wars'],
  dance: ['Classical', 'Contemporary', 'Hip Hop', 'Lyrical', 'Folk', 'Tap dance'],
  fashion: ['Fashion Walk', 'Hairstyling', 'Self Makeup', 'High Glam Makeup', 'Fantasy Makeup', 'Cosplay'],
  theatre: ['Monologue', 'Stage Play', 'Street Play'],
  'fine-arts': ['Culinary Arts', 'Canvas painting', 'Graffiti', 'Mehndi Art', 'Photography', 'Face Painting'],
  literary: ['Storytelling', 'Standup Comedy', 'Poetry', 'Shayari']
};

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    college: '',
    eventCategory: '',
    eventName: '',
    participationType: '',
    numberOfMembers: 3,  // Default number of members for a group
    members: [{ name: '', contact: '' }],  // Default for solo
    additionalEvents: []
  });
  const [errors, setErrors] = useState({});  // To store validation errors

  const handleNextStep = () => {
    const validationErrors = validateStep(step);
    if (Object.keys(validationErrors).length === 0) {
      // Before moving to the next step, ensure that the user's details are part of `members`
      if (step === 1) {
        setFormData((prev) => ({
          ...prev,
          members: [{ name: formData.name, contact: formData.contact }, ...formData.members.slice(1)]
        }));
      }
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.contact) newErrors.contact = 'Contact is required';
      if (!formData.college) newErrors.college = 'College Name is required';
    } else if (currentStep === 2) {
      if (!formData.eventCategory) newErrors.eventCategory = 'Event Category is required';
      if (!formData.eventName) newErrors.eventName = 'Event Name is required';
      if (!formData.participationType) newErrors.participationType = 'Participation Type is required';

      if (formData.participationType === 'duet' && formData.members.length < 2) {
        newErrors.members = 'Member 2 details are required for Duet';
      }

      if (formData.participationType === 'duet' && formData.members[1]) {
        if (!formData.members[1].name) newErrors.member2Name = 'Member 2 Name is required';
        if (!formData.members[1].contact) newErrors.member2Contact = 'Member 2 Contact is required';
      }

      if (formData.participationType === 'group') {
        formData.members.slice(1).forEach((member, index) => {
          if (!member.name) newErrors[`memberName${index + 2}`] = `Member ${index + 2} Name is required`;
          if (!member.contact) newErrors[`memberContact${index + 2}`] = `Member ${index + 2} Contact is required`;
        });
      }
    }
    return newErrors;
  };

  // Handle dynamic event selection based on the category
  const handleEventCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      eventCategory: value,
      eventName: ''  // Reset the event name when category changes
    }));
  };

  // Handle participation type selection
  const handleParticipationTypeChange = (e) => {
    const { value } = e.target;
    let members = [{ name: formData.name, contact: formData.contact }]; // Include the user as a default member
    if (value === 'duet') {
      members = [...members, { name: '', contact: '' }];  // Duet has 2 members
    }
    if (value === 'group') {
      const numberOfMembers = Math.max(3, formData.numberOfMembers); // Ensure minimum 3 for group
      members = Array.from({ length: numberOfMembers }, () => ({ name: '', contact: '' }));
      members[0] = { name: formData.name, contact: formData.contact };  // Ensure the first member is the user
    }

    setFormData((prev) => ({
      ...prev,
      participationType: value,
      members  // Set the number of member fields based on participation type
    }));
  };

  // Handle number of members for group
  const handleNumberOfMembersChange = (e) => {
    const { value } = e.target;
    const numberOfMembers = Math.max(3, parseInt(value, 10)); // Ensure minimum 3 for group

    const updatedMembers = Array.from({ length: numberOfMembers }, (_, i) => 
      formData.members[i] || { name: '', contact: '' } // Keep existing members if present
    );
    updatedMembers[0] = { name: formData.name, contact: formData.contact };  // Ensure the first member is the user

    setFormData((prev) => ({
      ...prev,
      numberOfMembers: numberOfMembers,
      members: updatedMembers
    }));
  };

  // Handle change in member details
  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = formData.members.map((member, i) =>
      i === index ? { ...member, [name]: value } : member
    );
    setFormData((prev) => ({
      ...prev,
      members: updatedMembers
    }));
  };

  const addEvent = () => {
    setFormData((prev) => ({
      ...prev,
      additionalEvents: [
        ...prev.additionalEvents, 
        {
          eventCategory: prev.eventCategory,
          eventName: prev.eventName,
          participationType: prev.participationType,
          members: prev.members
        }
      ],
      // Reset the event-specific fields for adding another event
      eventCategory: '',
      eventName: '',
      participationType: '',
      members: [{ name: formData.name, contact: formData.contact }]
    }));
    setStep(2); // Go back to step 2 to add another event
  };

  const finalizeRegistration = () => {
    const allEvents = [
      ...formData.additionalEvents,
      {
        eventCategory: formData.eventCategory,
        eventName: formData.eventName,
        participationType: formData.participationType,
        members: formData.members
      }
    ];

    // Simulate a response from localhost
    alert(`Thank you for registering! ${JSON.stringify(allEvents)}`);
    
    // After user clicks "OK" on the alert, redirect to home page
    window.location.href = '/';  // Redirects to home page (assuming '/' is your home route)
  };

  return (
    <section id="registration">
      <h1 className="form-heading">Event Registration</h1>
      <div className="registration-form-container">
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Personal Details</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            {errors.contact && <p className="error-text">{errors.contact}</p>}
            
            <label htmlFor="college">College Name:</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
            {errors.college && <p className="error-text">{errors.college}</p>}
            
            <button className="next-btn" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Event Selection</h2>
            <label htmlFor="eventCategory">Event Category:</label>
            <select
              id="eventCategory"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleEventCategoryChange}
              required
            >
              <option value="">Select Category</option>
              {Object.keys(eventOptions).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
            {errors.eventCategory && <p className="error-text">{errors.eventCategory}</p>}

            <label htmlFor="eventName">Event Name:</label>
            <select
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            >
              <option value="">Select Event</option>
              {formData.eventCategory && eventOptions[formData.eventCategory].map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </select>
            {errors.eventName && <p className="error-text">{errors.eventName}</p>}

            <label>Participation Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="participationType"
                  value="solo"
                  checked={formData.participationType === 'solo'}
                  onChange={handleParticipationTypeChange}
                />
                Solo
              </label>
              <label>
                <input
                  type="radio"
                  name="participationType"
                  value="duet"
                  checked={formData.participationType === 'duet'}
                  onChange={handleParticipationTypeChange}
                />
                Duet
              </label>
              <label>
                <input
                  type="radio"
                  name="participationType"
                  value="group"
                  checked={formData.participationType === 'group'}
                  onChange={handleParticipationTypeChange}
                />
                Group
              </label>
            </div>
            {errors.participationType && <p className="error-text">{errors.participationType}</p>}

            {/* If Group is selected, ask for the number of members */}
            {formData.participationType === 'group' && (
              <div>
                <label htmlFor="numberOfMembers">Number of Members (Minimum 3):</label>
                <input
                  type="number"
                  id="numberOfMembers"
                  name="numberOfMembers"
                  value={formData.numberOfMembers}
                  min="3"
                  onChange={handleNumberOfMembersChange}
                  required
                />
              </div>
            )}

            {(formData.participationType === 'duet' || formData.participationType === 'group') && (
              <div>
                <h3>Member Details:</h3>
                {formData.members.slice(1).map((member, index) => (
                  <div key={index}>
                    <label htmlFor={`memberName${index + 2}`}>Member {index + 2} Name:</label>
                    <input
                      type="text"
                      id={`memberName${index + 2}`}
                      name="name"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index + 1, e)}
                      required
                    />
                    {errors[`memberName${index + 2}`] && <p className="error-text">{errors[`memberName${index + 2}`]}</p>}

                    <label htmlFor={`memberContact${index + 2}`}>Member {index + 2} Contact:</label>
                    <input
                      type="text"
                      id={`memberContact${index + 2}`}
                      name="contact"
                      value={member.contact}
                      onChange={(e) => handleMemberChange(index + 1, e)}
                      required
                    />
                    {errors[`memberContact${index + 2}`] && <p className="error-text">{errors[`memberContact${index + 2}`]}</p>}
                  </div>
                ))}
              </div>
            )}

            <button className="prev-btn" onClick={handlePrevStep}>
              Previous
            </button>
            <button className="next-btn" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Confirm and Add More Events</h2>
            <button className="next-btn" onClick={addEvent}>
              Add Another Event
            </button>
            <button className="next-btn" onClick={finalizeRegistration}>
              Finalize Registration
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationPage;
