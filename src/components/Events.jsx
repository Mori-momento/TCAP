import eventImage from '../assets/react.svg';

const events = [
  {
    name: 'Event 1',
    date: '2023-05-15',
    time: '10:00 AM',
    image: eventImage,
    link: 'https://example.com/event1',
  },
  {
    name: 'Event 2',
    date: '2023-06-20',
    time: '2:00 PM',
    image: eventImage,
    link: 'https://example.com/event2',
  },
  {
    name: 'Event 3',
    date: '2023-07-25',
    time: '5:00 PM',
    image: eventImage,
    link: 'https://example.com/event3',
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg mb-6">
      <img className="w-full h-56 object-cover" src={event.image} alt={event.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.name}</div>
        <p className="text-gray-700 text-base">{event.date} at {event.time}</p>
      </div>
      <div className="px-6 py-4">
        <p>
            Lorem ipsum
        </p>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
