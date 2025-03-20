import React, { useState } from 'react';
import TextArea from './textarea/TextArea';
import TextField from './textfield/TextField';
import Button from './button/Button';
import { MapPin } from "lucide-react";
import './Styling.css';
import './button/Button.css';
import './textfield/TextField.css';
import './textarea/TextArea.css';

const EventForm = ({ title, locationLabel, descriptionLabel, backButtonLabel, finishButtonLabel, onBackClick, onFinishClick }) => {
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleEventLocationChange = (event) => {
    setEventLocation(event.target.value);
  };

  return (
    <div className="form-container">
      <h1>{title}</h1>

      <TextField
        label={locationLabel}
        placeholder="Enter event location"
        value={eventLocation}
        onChange={handleEventLocationChange}
        icon={MapPin}
      />

      <TextArea
        label={descriptionLabel}
        placeholder="Enter event description"
        value={eventDescription}
        onChange={handleEventDescriptionChange}
        rows={4} // Set default number of rows
        cols={50} // Set default number of columns
        resize="both" // Enable resizing in both directions
      />

      <div className="button-container">
        <Button label={backButtonLabel} onClick={onBackClick} className="back-button" />
        <Button label={finishButtonLabel} onClick={onFinishClick} className="finish-button" type="submit" />
      </div>
    </div>
  );
};

export default EventForm;
