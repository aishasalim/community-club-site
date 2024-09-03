import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from './Modal'; 

const Events = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const calendarRef = useRef(null); // Reference to the calendar

  const slideUpEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const [events, setEvents] = useState([
    {
      title: 'CRLC General Meeting',
      start: '2024-09-03T17:30:00',
      end: '2024-09-03T20:30:00',
      description:
        'We meet on the first Tuesday of the month at 5:30 pm for Happy Hour/dinner at Adriatic Cafe, 27240 Katy Fwy, Katy. The meeting begins at 6:30 pm.',
      address: 'Adriatic Cafe, 27240 Katy Fwy, Katy, TX 77494', // Added address field
    },
    {
      title: 'CRLC General Meeting',
      start: '2024-09-05T17:30:00',
      end: '2024-09-05T20:30:00',
      description:
        'We meet on the first Tuesday of the month at 5:30 pm for Happy Hour/dinner at Adriatic Cafe, 27240 Katy Fwy, Katy. The meeting begins at 6:30 pm.',
      address: 'Adriatic Cafe, 27240 Katy Fwy, Katy, TX 77494', // Added address field
    },
    {
      title: 'CRLC General Meeting',
      start: '2024-10-03T17:30:00',
      end: '2024-10-03T20:30:00',
      description:
        'We meet on the first Tuesday of the month at 5:30 pm for Happy Hour/dinner at Adriatic Cafe, 27240 Katy Fwy, Katy. The meeting begins at 6:30 pm.',
      address: 'Adriatic Cafe, 27240 Katy Fwy, Katy, TX 77494', // Added address field
    },
  ]);

  const [calendarView, setCalendarView] = useState('dayGridMonth');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null); // State for managing the selected event

  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);

  const handleViewChange = (view) => {
    setCalendarView(view);
    setDropdownOpen(false);
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view); // Change view using FullCalendar API
    }
  };

  const handleDateNav = (action) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (action === 'prev') calendarApi.prev();
      if (action === 'next') calendarApi.next();
      if (action === 'today') calendarApi.today();
    }
  };

  const handleEventClick = (info) => {
    const startTime = new Date(info.event.start).toLocaleString();
    const endTime = new Date(info.event.end).toLocaleString();
    setSelectedEvent({
      title: info.event.title,
      time: `${startTime} - ${endTime}`, // Format the time range
      address: info.event.extendedProps.address, // Pass the address for the modal
      description: info.event.extendedProps.description,
    });
  };

  const handleCloseModal = () => setSelectedEvent(null);


  return (
    <motion.section
      id="events"
      className="pt-[5em] lg:pt-[10em]"
      initial="hidden"
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      variants={slideUpEffect}
    >
      {/* Title */}
      <h2 className="text-xl lg:text-2xl font-bold text-center mb-6">Upcoming Events</h2>

      {/* Custom Toolbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Dropdown for view selection */}
          <div className="relative">
            <button
              className="flex items-center bg-white border border-gray-300 px-3 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={handleDropdownClick}
            >
              <Calendar className="mr-2" />
              {calendarView === 'listMonth' ? 'List' : 'Month'}
              <ChevronDown className="ml-2" />
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleViewChange('listMonth')}
                  >
                    List
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleViewChange('dayGridMonth')}
                  >
                    Month
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-700" onClick={() => handleDateNav('prev')}><ChevronLeft /></button>
          <button className="text-sm font-medium text-gray-700" onClick={() => handleDateNav('today')}>Today</button>
          <button className="text-sm font-medium text-gray-700" onClick={() => handleDateNav('next')}><ChevronRight /></button>
        </div>
      </div>

      {/* FullCalendar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
          initialView={calendarView}
          headerToolbar={false}
          events={events}
          eventClick={handleEventClick} // Show modal on event click
          height="auto" // Dynamic height
          contentHeight="auto" // Dynamic content height
          fixedWeekCount={false} // Ensures calendar doesn't fix to 6 weeks
          selectable={true}
          editable={true}
        />
      </div>

      {/* Modal for Event Details */}
      <Modal
        show={!!selectedEvent}
        onClose={handleCloseModal}
        title={selectedEvent?.title}
        time={selectedEvent?.time}
        address={selectedEvent?.address}
        description={selectedEvent?.description}
      />
    </motion.section>
  );
};

export default Events;
