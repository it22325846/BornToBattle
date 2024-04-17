import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter event title:");

    if (title) {
      const start = selectInfo.startStr;
      const end = selectInfo.endStr;

      const newEvent = {
        title: title,
        start: start,
        end: end,
        allDay: selectInfo.allDay,
      };

      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      const filteredEvents = events.filter((event) => event !== clickInfo.event);
      setEvents(filteredEvents);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        height="80vh"
        selectable={true}
        select={handleDateSelect}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventClick={handleEventClick} // Assign the eventClick handler
      />
    </div>
  );
}

export default Calendar;
