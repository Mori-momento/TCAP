import { useState } from 'react';

const ContactForm = () => {
  const [professionalBody, setProfessionalBody] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Professional Body:', professionalBody);
    console.log('Event Name:', eventName);
    console.log('Event Date:', eventDate);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-200 p-10 rounded-md shadow-lg">
        <label className="text-lg font-bold mb-3">Professional Body:</label>
        <select
          value={professionalBody}
          onChange={(e) => setProfessionalBody(e.target.value)}
          className="px-4 py-2 w-64 rounded-md shadow-lg mb-5"
        >
          <option value="">-- Select a Professional Body --</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <label className="text-lg font-bold mb-3">Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="px-4 py-2 w-64 rounded-md shadow-lg mb-5"
        />
        <label className="text-lg font-bold mb-3">Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="px-4 py-2 w-64 rounded-md shadow-lg mb-5"
        />
        <label className="text-lg font-bold mb-3">Event Time:</label>
        <input
          type="time"
          value={eventStartTime}
          onChange={(e) => setEventStartTime(e.target.value)}
          className="px-4 py-2 w-64 rounded-md shadow-lg mb-5"
        />
        <input
          type="time"
          value={eventEndTime}
          onChange={(e) => setEventEndTime(e.target.value)}
          className="px-4 py-2 w-64 rounded-md shadow-lg mb-5"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
